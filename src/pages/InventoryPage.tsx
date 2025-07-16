import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Filter, 
  Package, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Plus,
  Scan,
  MoreVertical
} from 'lucide-react'
import { cn } from '@/lib/utils'

const inventoryItems = [
  {
    id: 'SKU-001',
    name: 'Wireless Headphones',
    category: 'Electronics',
    stock: 245,
    minStock: 50,
    status: 'in_stock',
    value: '$12,250',
    trend: 'up',
    change: '+5%',
    location: 'Warehouse A',
  },
  {
    id: 'SKU-002',
    name: 'Running Shoes',
    category: 'Sports',
    stock: 12,
    minStock: 25,
    status: 'low_stock',
    value: '$1,440',
    trend: 'down',
    change: '-15%',
    location: 'Warehouse B',
  },
  {
    id: 'SKU-003',
    name: 'Coffee Maker',
    category: 'Home & Garden',
    stock: 89,
    minStock: 30,
    status: 'in_stock',
    value: '$8,900',
    trend: 'up',
    change: '+8%',
    location: 'Warehouse A',
  },
  {
    id: 'SKU-004',
    name: 'Smartphone Case',
    category: 'Electronics',
    stock: 3,
    minStock: 20,
    status: 'critical',
    value: '$150',
    trend: 'down',
    change: '-25%',
    location: 'Warehouse C',
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'in_stock':
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">In Stock</Badge>
    case 'low_stock':
      return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Low Stock</Badge>
    case 'critical':
      return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Critical</Badge>
    default:
      return <Badge variant="secondary">Unknown</Badge>
  }
}

export function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h1 className="text-xl font-semibold mb-1">Inventory Management</h1>
        <p className="text-blue-100 text-sm">
          Track and manage your stock levels across all locations
        </p>
      </div>

      {/* Search and Actions */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search items or SKU..."
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
            <Scan className="w-4 h-4 mr-2" />
            Scan
          </Button>
          <Button className="flex-1">
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Package className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-600">Total Items</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">1,247</div>
            <div className="text-xs text-green-600 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +5.2%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-slate-600">Low Stock</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">23</div>
            <div className="text-xs text-red-600 flex items-center">
              <TrendingDown className="w-3 h-3 mr-1" />
              +3 items
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory List */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 px-1">Inventory Items</h3>
        
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover:shadow-sm transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-slate-900 truncate">{item.name}</h4>
                    <p className="text-sm text-slate-500">{item.id} • {item.category}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-3">
                    {getStatusBadge(item.status)}
                    <Button variant="ghost" size="sm" className="p-1">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-slate-500 mb-1">Stock Level</div>
                    <div className={cn(
                      "font-semibold",
                      item.stock <= item.minStock ? "text-red-600" : "text-slate-900"
                    )}>
                      {item.stock} units
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-slate-500 mb-1">Value</div>
                    <div className="font-semibold text-slate-900">{item.value}</div>
                  </div>
                  
                  <div>
                    <div className="text-slate-500 mb-1">Trend</div>
                    <div className={cn(
                      "font-semibold flex items-center",
                      item.trend === 'up' ? "text-green-600" : "text-red-600"
                    )}>
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {item.change}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Location: {item.location}</span>
                    <span>Min: {item.minStock} units</span>
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