import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  Truck, 
  AlertTriangle,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const kpiData = [
  {
    title: 'Inventory Value',
    value: '$2.4M',
    change: '+12.5%',
    trend: 'up',
    icon: Package,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    title: 'Active Shipments',
    value: '1,247',
    change: '+8.2%',
    trend: 'up',
    icon: Truck,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    title: 'Low Stock Items',
    value: '23',
    change: '-15.3%',
    trend: 'down',
    icon: AlertTriangle,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  {
    title: 'Monthly Revenue',
    value: '$847K',
    change: '+23.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  }
]

export function MobileKPICards() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900 px-1">Key Metrics</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon
          const TrendIcon = kpi.trend === 'up' ? ArrowUpRight : ArrowDownRight
          
          return (
            <Card 
              key={index} 
              className={cn(
                "hover:shadow-md transition-all duration-200 border-2",
                kpi.borderColor
              )}
            >
              <CardContent className="p-4">
                {/* Icon and Trend */}
                <div className="flex items-center justify-between mb-3">
                  <div className={cn("p-2 rounded-lg", kpi.bgColor)}>
                    <Icon className={cn("w-4 h-4", kpi.color)} />
                  </div>
                  
                  <Badge 
                    variant="secondary"
                    className={cn(
                      "flex items-center space-x-1 text-xs",
                      kpi.trend === 'up' 
                        ? "bg-green-100 text-green-700 hover:bg-green-100" 
                        : "bg-red-100 text-red-700 hover:bg-red-100"
                    )}
                  >
                    <TrendIcon className="w-3 h-3" />
                    <span>{kpi.change}</span>
                  </Badge>
                </div>
                
                {/* Value */}
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {kpi.value}
                </div>
                
                {/* Title */}
                <div className="text-sm text-slate-600 font-medium">
                  {kpi.title}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}