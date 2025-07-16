import { useState } from 'react'
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle 
} from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Package, 
  Truck, 
  MapPin, 
  Clock,
  TrendingUp
} from 'lucide-react'

interface SearchSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const recentSearches = [
  'Low stock items',
  'Delayed shipments',
  'SKU-12345',
  'Chicago warehouse',
]

const quickActions = [
  {
    icon: Package,
    label: 'Check Inventory',
    description: 'View current stock levels',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: Truck,
    label: 'Track Shipment',
    description: 'Find shipment status',
    color: 'text-green-600 bg-green-50',
  },
  {
    icon: MapPin,
    label: 'Find Location',
    description: 'Search warehouses',
    color: 'text-purple-600 bg-purple-50',
  },
  {
    icon: TrendingUp,
    label: 'View Analytics',
    description: 'Performance metrics',
    color: 'text-orange-600 bg-orange-50',
  },
]

export function SearchSheet({ open, onOpenChange }: SearchSheetProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="top" className="h-full">
        <SheetHeader className="pb-4">
          <SheetTitle>Search Dashboard</SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search inventory, shipments, locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
              autoFocus
            />
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start space-y-2 hover:bg-slate-50"
                  >
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-sm text-slate-900">
                        {action.label}
                      </div>
                      <div className="text-xs text-slate-500">
                        {action.description}
                      </div>
                    </div>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Recent Searches */}
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-3">Recent Searches</h3>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start h-auto p-3 text-left"
                  onClick={() => setSearchQuery(search)}
                >
                  <Clock className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{search}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Popular Searches */}
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-3">Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {['Inventory alerts', 'Delivery status', 'Warehouse capacity', 'Performance metrics'].map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-slate-200"
                  onClick={() => setSearchQuery(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}