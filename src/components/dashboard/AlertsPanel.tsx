import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  AlertTriangle, 
  AlertCircle, 
  Info, 
  CheckCircle,
  X,
  Bell
} from 'lucide-react'

const alertsData = [
  {
    id: 1,
    type: 'critical',
    title: 'Low Stock Alert',
    message: 'iPhone 15 Pro inventory below minimum threshold (5 units remaining)',
    timestamp: '2 minutes ago',
    location: 'Warehouse A'
  },
  {
    id: 2,
    type: 'warning',
    title: 'Shipment Delay',
    message: 'Shipment SH-003 to Chicago delayed due to weather conditions',
    timestamp: '15 minutes ago',
    location: 'Route 66'
  },
  {
    id: 3,
    type: 'info',
    title: 'New Order Received',
    message: 'Large order #ORD-1247 received from Enterprise Client',
    timestamp: '1 hour ago',
    location: 'Order System'
  },
  {
    id: 4,
    type: 'success',
    title: 'Delivery Completed',
    message: 'Shipment SH-002 successfully delivered to Los Angeles',
    timestamp: '2 hours ago',
    location: 'Los Angeles, CA'
  }
]

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'critical':
      return <AlertTriangle className="w-4 h-4 text-red-600" />
    case 'warning':
      return <AlertCircle className="w-4 h-4 text-orange-600" />
    case 'info':
      return <Info className="w-4 h-4 text-blue-600" />
    case 'success':
      return <CheckCircle className="w-4 h-4 text-green-600" />
    default:
      return <Bell className="w-4 h-4 text-gray-600" />
  }
}

const getAlertColor = (type: string) => {
  switch (type) {
    case 'critical':
      return 'border-l-red-500 bg-red-50'
    case 'warning':
      return 'border-l-orange-500 bg-orange-50'
    case 'info':
      return 'border-l-blue-500 bg-blue-50'
    case 'success':
      return 'border-l-green-500 bg-green-50'
    default:
      return 'border-l-gray-500 bg-gray-50'
  }
}

const getBadgeColor = (type: string) => {
  switch (type) {
    case 'critical':
      return 'bg-red-100 text-red-800'
    case 'warning':
      return 'bg-orange-100 text-orange-800'
    case 'info':
      return 'bg-blue-100 text-blue-800'
    case 'success':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function AlertsPanel() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center space-x-2">
          <Bell className="w-5 h-5" />
          <span>Recent Alerts</span>
        </CardTitle>
        <Button variant="outline" size="sm">
          Mark All Read
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alertsData.map((alert) => (
            <div 
              key={alert.id} 
              className={`border-l-4 p-4 rounded-r-lg ${getAlertColor(alert.type)} hover:shadow-sm transition-shadow`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{alert.title}</h4>
                      <Badge className={getBadgeColor(alert.type)}>
                        {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{alert.message}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{alert.location}</span>
                      <span>{alert.timestamp}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="p-1 h-auto">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <Button variant="outline" className="w-full">
            View All Alerts
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}