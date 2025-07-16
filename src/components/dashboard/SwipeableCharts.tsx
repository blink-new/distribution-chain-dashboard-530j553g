import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart3, 
  TrendingUp, 
  Package, 
  Truck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const chartData = [
  {
    id: 'inventory',
    title: 'Inventory Levels',
    icon: Package,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    data: [
      { name: 'Electronics', value: 85, color: 'bg-blue-500' },
      { name: 'Clothing', value: 92, color: 'bg-green-500' },
      { name: 'Home & Garden', value: 67, color: 'bg-yellow-500' },
      { name: 'Sports', value: 78, color: 'bg-purple-500' },
    ]
  },
  {
    id: 'shipments',
    title: 'Shipment Status',
    icon: Truck,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    data: [
      { name: 'Delivered', value: 156, color: 'bg-green-500' },
      { name: 'In Transit', value: 89, color: 'bg-blue-500' },
      { name: 'Processing', value: 34, color: 'bg-yellow-500' },
      { name: 'Delayed', value: 12, color: 'bg-red-500' },
    ]
  },
  {
    id: 'performance',
    title: 'Performance Metrics',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    data: [
      { name: 'On-time Delivery', value: 94, color: 'bg-green-500' },
      { name: 'Order Accuracy', value: 98, color: 'bg-blue-500' },
      { name: 'Customer Satisfaction', value: 87, color: 'bg-purple-500' },
      { name: 'Cost Efficiency', value: 82, color: 'bg-orange-500' },
    ]
  },
]

export function SwipeableCharts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < chartData.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const nextChart = () => {
    if (currentIndex < chartData.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevChart = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const currentChart = chartData[currentIndex]
  const Icon = currentChart.icon

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-lg font-semibold text-slate-900">Analytics</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevChart}
            disabled={currentIndex === 0}
            className={cn(
              "p-1 rounded-full transition-colors",
              currentIndex === 0 
                ? "text-slate-300 cursor-not-allowed" 
                : "text-slate-600 hover:bg-slate-100"
            )}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex space-x-1">
            {chartData.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-primary-600" : "bg-slate-300"
                )}
              />
            ))}
          </div>
          
          <button
            onClick={nextChart}
            disabled={currentIndex === chartData.length - 1}
            className={cn(
              "p-1 rounded-full transition-colors",
              currentIndex === chartData.length - 1 
                ? "text-slate-300 cursor-not-allowed" 
                : "text-slate-600 hover:bg-slate-100"
            )}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {chartData.map((chart, index) => {
            const ChartIcon = chart.icon
            return (
              <div key={chart.id} className="w-full flex-shrink-0 px-1">
                <Card className="hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between text-base">
                      <div className="flex items-center space-x-2">
                        <div className={cn("p-2 rounded-lg", chart.bgColor)}>
                          <ChartIcon className={cn("w-4 h-4", chart.color)} />
                        </div>
                        <span>{chart.title}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Live
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {chart.data.map((item, itemIndex) => {
                        const maxValue = Math.max(...chart.data.map(d => d.value))
                        const percentage = (item.value / maxValue) * 100
                        
                        return (
                          <div key={itemIndex} className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-700 font-medium">{item.name}</span>
                              <span className="text-slate-900 font-semibold">{item.value}</span>
                            </div>
                            
                            <div className="w-full bg-slate-100 rounded-full h-2">
                              <div
                                className={cn("h-2 rounded-full transition-all duration-500", item.color)}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}