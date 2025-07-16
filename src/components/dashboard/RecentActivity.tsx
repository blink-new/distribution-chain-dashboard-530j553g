import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Package, 
  Truck, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  MoreHorizontal
} from 'lucide-react'
import { cn } from '@/lib/utils'

const activities = [
  {
    id: 1,
    type: 'shipment',
    icon: Truck,
    title: 'Shipment #SHP-789 delivered',
    description: 'Order delivered to Chicago warehouse',
    time: '2 minutes ago',
    status: 'success',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 2,
    type: 'inventory',
    icon: Package,
    title: 'Low stock alert',
    description: 'SKU-12345 has only 5 units remaining',
    time: '15 minutes ago',
    status: 'warning',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    id: 3,
    type: 'shipment',
    icon: AlertTriangle,
    title: 'Delivery delayed',
    description: 'Shipment #SHP-456 delayed due to weather',
    time: '1 hour ago',
    status: 'error',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    id: 4,
    type: 'inventory',
    icon: CheckCircle,
    title: 'Inventory updated',
    description: 'Stock levels synchronized across all warehouses',
    time: '2 hours ago',
    status: 'success',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 5,
    type: 'shipment',
    icon: Truck,
    title: 'New shipment created',
    description: 'Order #ORD-123 ready for dispatch',
    time: '3 hours ago',
    status: 'info',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'success':
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Success</Badge>
    case 'warning':
      return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Warning</Badge>
    case 'error':
      return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Error</Badge>
    default:
      return <Badge variant="secondary">Info</Badge>
  }
}

export function RecentActivity() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
        <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700">
          View All
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-100">
            {activities.map((activity, index) => {
              const Icon = activity.icon
              
              return (
                <div
                  key={activity.id}
                  className="p-4 hover:bg-slate-50 transition-colors duration-150"
                >
                  <div className="flex items-start space-x-3">
                    {/* Icon */}
                    <div className={cn("p-2 rounded-lg flex-shrink-0", activity.bgColor)}>
                      <Icon className={cn("w-4 h-4", activity.color)} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-slate-900 truncate">
                          {activity.title}
                        </h4>
                        <Button variant="ghost" size="sm" className="p-1 h-auto">
                          <MoreHorizontal className="w-4 h-4 text-slate-400" />
                        </Button>
                      </div>
                      
                      <p className="text-sm text-slate-600 mb-2">
                        {activity.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-slate-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {activity.time}
                        </div>
                        
                        {getStatusBadge(activity.status)}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}