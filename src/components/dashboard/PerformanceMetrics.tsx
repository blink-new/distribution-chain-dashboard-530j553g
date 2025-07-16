import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts'

const performanceData = [
  { month: 'Jan', deliveryTime: 2.4, onTimeDelivery: 94, costPerShipment: 45 },
  { month: 'Feb', deliveryTime: 2.2, onTimeDelivery: 96, costPerShipment: 42 },
  { month: 'Mar', deliveryTime: 2.6, onTimeDelivery: 92, costPerShipment: 48 },
  { month: 'Apr', deliveryTime: 2.1, onTimeDelivery: 97, costPerShipment: 41 },
  { month: 'May', deliveryTime: 2.3, onTimeDelivery: 95, costPerShipment: 44 },
  { month: 'Jun', deliveryTime: 2.0, onTimeDelivery: 98, costPerShipment: 39 },
]

const revenueData = [
  { month: 'Jan', revenue: 680000, target: 650000 },
  { month: 'Feb', revenue: 720000, target: 700000 },
  { month: 'Mar', revenue: 650000, target: 680000 },
  { month: 'Apr', revenue: 780000, target: 750000 },
  { month: 'May', revenue: 820000, target: 800000 },
  { month: 'Jun', revenue: 847000, target: 820000 },
]

export function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Delivery Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Delivery Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="deliveryTime" 
                stroke="#2563eb" 
                strokeWidth={3}
                name="Avg Delivery Time (days)"
                dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="onTimeDelivery" 
                stroke="#10b981" 
                strokeWidth={3}
                name="On-Time Delivery (%)"
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue vs Target */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Revenue vs Target</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip 
                formatter={(value) => [`$${(value as number / 1000).toFixed(0)}K`, '']}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Area
                type="monotone"
                dataKey="target"
                stackId="1"
                stroke="#e2e8f0"
                fill="#f1f5f9"
                name="Target"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="2"
                stroke="#2563eb"
                fill="#3b82f6"
                fillOpacity={0.6}
                name="Actual Revenue"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}