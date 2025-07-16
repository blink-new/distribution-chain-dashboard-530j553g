import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  BarChart3, 
  User 
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface BottomTabNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: Package,
  },
  {
    id: 'shipments',
    label: 'Shipments',
    icon: Truck,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: User,
  },
]

export function BottomTabNavigation({ activeTab, onTabChange }: BottomTabNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 py-2 z-50">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-all duration-200 min-w-0 flex-1",
                isActive 
                  ? "bg-primary-50 text-primary-600" 
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 mb-1",
                isActive ? "text-primary-600" : "text-slate-500"
              )} />
              <span className={cn(
                "text-xs font-medium truncate",
                isActive ? "text-primary-600" : "text-slate-500"
              )}>
                {tab.label}
              </span>
              
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}