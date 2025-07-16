import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle 
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Clock,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface NotificationSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const notifications = [
  {
    id: 1,
    type: 'warning',
    title: 'Low Stock Alert',
    message: 'Product SKU-12345 has only 5 units remaining',
    time: '2 min ago',
    unread: true,
  },
  {
    id: 2,
    type: 'success',
    title: 'Shipment Delivered',
    message: 'Order #ORD-789 has been successfully delivered',
    time: '15 min ago',
    unread: true,
  },
  {
    id: 3,
    type: 'info',
    title: 'System Update',
    message: 'Dashboard will be updated tonight at 2 AM EST',
    time: '1 hour ago',
    unread: false,
  },
  {
    id: 4,
    type: 'error',
    title: 'Delivery Delayed',
    message: 'Shipment #SHP-456 is delayed due to weather conditions',
    time: '2 hours ago',
    unread: true,
  },
]

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-amber-500" />
    case 'success':
      return <CheckCircle className="w-5 h-5 text-green-500" />
    case 'error':
      return <X className="w-5 h-5 text-red-500" />
    default:
      return <Info className="w-5 h-5 text-blue-500" />
  }
}

const getNotificationBg = (type: string) => {
  switch (type) {
    case 'warning':
      return 'bg-amber-50 border-amber-200'
    case 'success':
      return 'bg-green-50 border-green-200'
    case 'error':
      return 'bg-red-50 border-red-200'
    default:
      return 'bg-blue-50 border-blue-200'
  }
}

export function NotificationSheet({ open, onOpenChange }: NotificationSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader className="pb-4">
          <SheetTitle className="flex items-center justify-between">
            <span>Notifications</span>
            <Badge variant="secondary" className="ml-2">
              {notifications.filter(n => n.unread).length} new
            </Badge>
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-4">
          {/* Quick Actions */}
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex-1">
              Mark All Read
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Clear All
            </Button>
          </div>

          {/* Notifications List */}
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "p-4 rounded-lg border transition-all duration-200",
                  getNotificationBg(notification.type),
                  notification.unread ? "shadow-sm" : "opacity-75"
                )}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {getNotificationIcon(notification.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium text-slate-900 truncate">
                        {notification.title}
                      </h4>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 ml-2" />
                      )}
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-2">
                      {notification.message}
                    </p>
                    
                    <div className="flex items-center text-xs text-slate-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {notification.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <Button variant="outline" className="w-full mt-4">
            View All Notifications
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}