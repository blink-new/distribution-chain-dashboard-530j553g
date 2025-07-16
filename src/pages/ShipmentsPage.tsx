import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Filter, 
  Truck, 
  MapPin,
  Clock,
  Package,
  Plus,
  MoreVertical,
  Navigation
} from 'lucide-react'
import { cn } from '@/lib/utils'

const shipments = [
  {
    id: 'SHP-001',
    orderId: 'ORD-12345',
    destination: 'New York, NY',
    origin: 'Chicago, IL',
    status: 'in_transit',
    progress: 75,
    estimatedDelivery: '2024-01-20',
    carrier: 'FedEx',
    trackingNumber: '1234567890',
    items: 3,
    value: '$1,250',
  },
  {
    id: 'SHP-002',
    orderId: 'ORD-12346',
    destination: 'Los Angeles, CA',
    origin: 'Dallas, TX',
    status: 'delivered',
    progress: 100,
    estimatedDelivery: '2024-01-18',
    carrier: 'UPS',
    trackingNumber: '0987654321',
    items: 1,
    value: '$450',
  },
  {
    id: 'SHP-003',
    orderId: 'ORD-12347',
    destination: 'Miami, FL',
    origin: 'Atlanta, GA',
    status: 'processing',
    progress: 25,
    estimatedDelivery: '2024-01-22',
    carrier: 'DHL',
    trackingNumber: '5678901234',
    items: 5,
    value: '$2,100',
  },
  {
    id: 'SHP-004',
    orderId: 'ORD-12348',
    destination: 'Seattle, WA',
    origin: 'Phoenix, AZ',
    status: 'delayed',
    progress: 60,
    estimatedDelivery: '2024-01-25',
    carrier: 'FedEx',
    trackingNumber: '3456789012',
    items: 2,
    value: '$780',
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'delivered':
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Delivered</Badge>
    case 'in_transit':
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">In Transit</Badge>
    case 'processing':
      return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Processing</Badge>
    case 'delayed':
      return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Delayed</Badge>
    default:
      return <Badge variant="secondary">Unknown</Badge>
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered':
      return 'bg-green-500'
    case 'in_transit':
      return 'bg-blue-500'
    case 'processing':
      return 'bg-amber-500'
    case 'delayed':
      return 'bg-red-500'
    default:
      return 'bg-slate-500'
  }
}

export function ShipmentsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredShipments = shipments.filter(shipment =>
    shipment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shipment.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shipment.destination.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
        <h1 className="text-xl font-semibold mb-1">Shipment Tracking</h1>
        <p className="text-green-100 text-sm">
          Monitor deliveries and track shipments in real-time
        </p>
      </div>

      {/* Search and Actions */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search shipments or orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="flex-1">
            <Navigation className="w-4 h-4 mr-2" />
            Map View
          </Button>
          <Button className="flex-1">
            <Plus className="w-4 h-4 mr-2" />
            New Shipment
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Truck className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-600">Active</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">89</div>
            <div className="text-xs text-slate-500">shipments</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-slate-600">Delayed</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">12</div>
            <div className="text-xs text-slate-500">shipments</div>
          </CardContent>
        </Card>
      </div>

      {/* Shipments List */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 px-1">Recent Shipments</h3>
        
        <div className="space-y-3">
          {filteredShipments.map((shipment) => (
            <Card key={shipment.id} className="hover:shadow-sm transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-slate-900">{shipment.id}</h4>
                    <p className="text-sm text-slate-500">{shipment.orderId}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-3">
                    {getStatusBadge(shipment.status)}
                    <Button variant="ghost" size="sm" className="p-1">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                    </Button>
                  </div>
                </div>

                {/* Route */}
                <div className="flex items-center space-x-2 mb-3 text-sm">
                  <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-600">{shipment.origin}</span>
                  <span className="text-slate-400">→</span>
                  <span className="text-slate-900 font-medium">{shipment.destination}</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Progress</span>
                    <span>{shipment.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className={cn("h-2 rounded-full transition-all duration-500", getStatusColor(shipment.status))}
                      style={{ width: `${shipment.progress}%` }}
                    />
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-500 mb-1">Carrier</div>
                    <div className="font-medium text-slate-900">{shipment.carrier}</div>
                  </div>
                  
                  <div>
                    <div className="text-slate-500 mb-1">Items</div>
                    <div className="font-medium text-slate-900">{shipment.items} items</div>
                  </div>
                  
                  <div>
                    <div className="text-slate-500 mb-1">Value</div>
                    <div className="font-medium text-slate-900">{shipment.value}</div>
                  </div>
                  
                  <div>
                    <div className="text-slate-500 mb-1">ETA</div>
                    <div className="font-medium text-slate-900">
                      {new Date(shipment.estimatedDelivery).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {/* Tracking Number */}
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Tracking: {shipment.trackingNumber}</span>
                    <Button variant="ghost" size="sm" className="h-auto p-1 text-primary-600">
                      Track
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}