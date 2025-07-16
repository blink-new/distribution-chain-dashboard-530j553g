import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Truck,
  Package,
  ExternalLink
} from 'lucide-react'

const shipmentData = [
  {
    id: 'SH-001',
    destination: 'New York, NY',
    status: 'In Transit',
    progress: 75,
    eta: '2 hours',
    driver: 'Mike Johnson',
    items: 24,
    priority: 'High'
  },
  {
    id: 'SH-002',
    destination: 'Los Angeles, CA',
    status: 'Delivered',
    progress: 100,
    eta: 'Completed',
    driver: 'Sarah Wilson',
    items: 18,
    priority: 'Medium'
  },
  {
    id: 'SH-003',
    destination: 'Chicago, IL',
    status: 'Delayed',
    progress: 45,
    eta: '6 hours',
    driver: 'Tom Brown',
    items: 32,
    priority: 'High'
  },
  {
    id: 'SH-004',
    destination: 'Miami, FL',
    status: 'Preparing',
    progress: 10,
    eta: '12 hours',
    driver: 'Lisa Davis',
    items: 15,
    priority: 'Low'
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Delivered':
      return <CheckCircle className="w-4 h-4 text-green-600" />
    case 'In Transit':
      return <Truck className="w-4 h-4 text-blue-600" />
    case 'Delayed':
      return <AlertCircle className="w-4 h-4 text-red-600" />
    case 'Preparing':
      return <Package className="w-4 h-4 text-orange-600" />
    default:
      return <Clock className="w-4 h-4 text-gray-600" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-800'
    case 'In Transit':
      return 'bg-blue-100 text-blue-800'
    case 'Delayed':
      return 'bg-red-100 text-red-800'
    case 'Preparing':
      return 'bg-orange-100 text-orange-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-800'
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800'
    case 'Low':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function ShipmentTracker() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Active Shipments</CardTitle>
        <Button variant="outline" size="sm">
          <ExternalLink className="w-4 h-4 mr-2" />
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {shipmentData.map((shipment) => (
            <div key={shipment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(shipment.status)}
                  <div>
                    <h4 className="font-medium text-gray-900">{shipment.id}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{shipment.destination}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getPriorityColor(shipment.priority)}>
                    {shipment.priority}
                  </Badge>
                  <Badge className={getStatusColor(shipment.status)}>
                    {shipment.status}
                  </Badge>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{shipment.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      shipment.status === 'Delivered' ? 'bg-green-500' :
                      shipment.status === 'Delayed' ? 'bg-red-500' :
                      'bg-blue-500'
                    }`}
                    style={{ width: `${shipment.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">Driver: <span className="font-medium">{shipment.driver}</span></span>
                  <span className="text-gray-600">Items: <span className="font-medium">{shipment.items}</span></span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Clock className="w-3 h-3" />
                  <span>ETA: {shipment.eta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}