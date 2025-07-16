import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  Truck, 
  AlertTriangle,
  DollarSign
} from 'lucide-react'

const kpiData = [
  {
    title: 'Total Inventory Value',
    value: '$2.4M',
    change: '+12.5%',
    trend: 'up',
    icon: Package,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Active Shipments',
    value: '1,247',
    change: '+8.2%',
    trend: 'up',
    icon: Truck,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Low Stock Items',
    value: '23',
    change: '-15.3%',
    trend: 'down',
    icon: AlertTriangle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    title: 'Monthly Revenue',
    value: '$847K',
    change: '+23.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiData.map((kpi, index) => {
        const Icon = kpi.icon
        const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown
        
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {kpi.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                <Icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">
                  {kpi.value}
                </div>
                <Badge 
                  variant={kpi.trend === 'up' ? 'default' : 'secondary'}
                  className={`flex items-center space-x-1 ${
                    kpi.trend === 'up' 
                      ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                      : 'bg-red-100 text-red-800 hover:bg-red-100'
                  }`}
                >
                  <TrendIcon className="w-3 h-3" />
                  <span className="text-xs">{kpi.change}</span>
                </Badge>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}