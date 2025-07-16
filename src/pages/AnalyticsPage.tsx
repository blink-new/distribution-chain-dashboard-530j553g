import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Download,
  Filter,
  Target,
  DollarSign,
  Package,
  Truck,
  Users,
  Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'

const performanceMetrics = [
  {
    title: 'Revenue',
    value: '$847K',
    change: '+23.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Orders',
    value: '1,247',
    change: '+8.2%',
    trend: 'up',
    icon: Package,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Deliveries',
    value: '1,156',
    change: '+12.5%',
    trend: 'up',
    icon: Truck,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Customers',
    value: '892',
    change: '-2.3%',
    trend: 'down',
    icon: Users,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
]

const chartData = [
  { name: 'Jan', revenue: 65000, orders: 120, deliveries: 115 },
  { name: 'Feb', revenue: 72000, orders: 135, deliveries: 128 },
  { name: 'Mar', revenue: 68000, orders: 128, deliveries: 122 },
  { name: 'Apr', revenue: 78000, orders: 145, deliveries: 140 },
  { name: 'May', revenue: 85000, orders: 162, deliveries: 158 },
  { name: 'Jun', revenue: 92000, orders: 178, deliveries: 172 },
]

const topProducts = [
  { name: 'Wireless Headphones', sales: 245, revenue: '$12,250', growth: '+15%' },
  { name: 'Running Shoes', sales: 189, revenue: '$9,450', growth: '+8%' },
  { name: 'Coffee Maker', sales: 156, revenue: '$7,800', growth: '+22%' },
  { name: 'Smartphone Case', sales: 134, revenue: '$6,700', growth: '-5%' },
]

const kpiTargets = [
  { name: 'On-time Delivery', current: 94, target: 95, color: 'bg-green-500' },
  { name: 'Order Accuracy', current: 98, target: 99, color: 'bg-blue-500' },
  { name: 'Customer Satisfaction', current: 87, target: 90, color: 'bg-purple-500' },
  { name: 'Cost Efficiency', current: 82, target: 85, color: 'bg-orange-500' },
]

export function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white">
        <h1 className="text-xl font-semibold mb-1">Analytics & Reports</h1>
        <p className="text-purple-100 text-sm">
          Track performance and gain insights into your operations
        </p>
      </div>

      {/* Time Period Selector */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {['7d', '30d', '90d', '1y'].map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod(period)}
              className="text-xs"
            >
              {period}
            </Button>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-1" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-1" />
            Export
          </Button>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 px-1">Key Performance</h3>
        <div className="grid grid-cols-2 gap-3">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon
            const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown
            
            return (
              <Card key={index} className="hover:shadow-sm transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={cn("p-2 rounded-lg", metric.bgColor)}>
                      <Icon className={cn("w-4 h-4", metric.color)} />
                    </div>
                    
                    <Badge 
                      variant="secondary"
                      className={cn(
                        "flex items-center space-x-1 text-xs",
                        metric.trend === 'up' 
                          ? "bg-green-100 text-green-700 hover:bg-green-100" 
                          : "bg-red-100 text-red-700 hover:bg-red-100"
                      )}
                    >
                      <TrendIcon className="w-3 h-3" />
                      <span>{metric.change}</span>
                    </Badge>
                  </div>
                  
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {metric.value}
                  </div>
                  
                  <div className="text-sm text-slate-600 font-medium">
                    {metric.title}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <BarChart3 className="w-5 h-5 mr-2" />
            Revenue Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {chartData.map((data, index) => {
              const maxRevenue = Math.max(...chartData.map(d => d.revenue))
              const percentage = (data.revenue / maxRevenue) * 100
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700 font-medium">{data.name}</span>
                    <span className="text-slate-900 font-semibold">
                      ${(data.revenue / 1000).toFixed(0)}K
                    </span>
                  </div>
                  
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div
                      className="h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* KPI Targets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Target className="w-5 h-5 mr-2" />
            KPI Targets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {kpiTargets.map((kpi, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700 font-medium">{kpi.name}</span>
                  <span className="text-slate-900 font-semibold">
                    {kpi.current}% / {kpi.target}%
                  </span>
                </div>
                
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={cn("h-2 rounded-full transition-all duration-500", kpi.color)}
                      style={{ width: `${kpi.current}%` }}
                    />
                    <div
                      className="absolute top-0 w-0.5 h-2 bg-slate-400"
                      style={{ left: `${kpi.target}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Products */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Package className="w-5 h-5 mr-2" />
            Top Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-slate-900 truncate">{product.name}</h4>
                  <p className="text-sm text-slate-500">{product.sales} sales</p>
                </div>
                
                <div className="text-right ml-3">
                  <div className="font-semibold text-slate-900">{product.revenue}</div>
                  <div className={cn(
                    "text-sm font-medium",
                    product.growth.startsWith('+') ? "text-green-600" : "text-red-600"
                  )}>
                    {product.growth}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}