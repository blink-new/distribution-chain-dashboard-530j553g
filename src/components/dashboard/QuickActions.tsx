import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Plus, 
  Scan, 
  MapPin, 
  BarChart3,
  Package,
  Truck,
  AlertTriangle,
  Search
} from 'lucide-react'

const quickActions = [
  {
    icon: Plus,
    label: 'Add Item',
    color: 'text-blue-600 bg-blue-50 hover:bg-blue-100',
  },
  {
    icon: Scan,
    label: 'Scan QR',
    color: 'text-green-600 bg-green-50 hover:bg-green-100',
  },
  {
    icon: MapPin,
    label: 'Track',
    color: 'text-purple-600 bg-purple-50 hover:bg-purple-100',
  },
  {
    icon: BarChart3,
    label: 'Reports',
    color: 'text-orange-600 bg-orange-50 hover:bg-orange-100',
  },
]

const shortcuts = [
  {
    icon: Package,
    label: 'Low Stock Alert',
    count: '23 items',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Truck,
    label: 'Pending Shipments',
    count: '12 orders',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: AlertTriangle,
    label: 'Urgent Issues',
    count: '3 alerts',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
]

export function QuickActions() {
  return (
    <div className="space-y-4">
      {/* Quick Action Buttons */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-3 px-1">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Button
                key={index}
                variant="outline"
                className={`h-16 flex flex-col items-center justify-center space-y-1 ${action.color} border-slate-200 hover:border-slate-300`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{action.label}</span>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Shortcuts */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-3 px-1">Shortcuts</h3>
        <div className="space-y-2">
          {shortcuts.map((shortcut, index) => {
            const Icon = shortcut.icon
            return (
              <Card key={index} className="hover:shadow-sm transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${shortcut.bgColor}`}>
                      <Icon className={`w-4 h-4 ${shortcut.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">
                        {shortcut.label}
                      </div>
                      <div className="text-xs text-slate-500">
                        {shortcut.count}
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="p-2">
                      <Search className="w-4 h-4 text-slate-400" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}