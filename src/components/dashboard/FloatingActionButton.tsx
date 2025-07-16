import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Plus, 
  Package, 
  Truck, 
  Scan,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'

const fabActions = [
  {
    icon: Package,
    label: 'Add Item',
    color: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    icon: Truck,
    label: 'New Shipment',
    color: 'bg-green-500 hover:bg-green-600',
  },
  {
    icon: Scan,
    label: 'Scan QR Code',
    color: 'bg-purple-500 hover:bg-purple-600',
  },
]

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFab = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-24 right-4 z-40">
      {/* Action Buttons */}
      <div className={cn(
        "flex flex-col space-y-3 mb-3 transition-all duration-300",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        {fabActions.map((action, index) => {
          const Icon = action.icon
          return (
            <div
              key={index}
              className={cn(
                "flex items-center space-x-3 transition-all duration-300",
                isOpen ? "translate-x-0" : "translate-x-12"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Label */}
              <div className="bg-slate-800 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                {action.label}
              </div>
              
              {/* Action Button */}
              <Button
                size="sm"
                className={cn(
                  "w-12 h-12 rounded-full shadow-lg text-white border-0",
                  action.color
                )}
                onClick={() => {
                  // Handle action
                  setIsOpen(false)
                }}
              >
                <Icon className="w-5 h-5" />
              </Button>
            </div>
          )
        })}
      </div>

      {/* Main FAB */}
      <Button
        size="lg"
        className={cn(
          "w-14 h-14 rounded-full shadow-lg bg-primary-600 hover:bg-primary-700 text-white border-0 transition-all duration-300",
          isOpen && "rotate-45"
        )}
        onClick={toggleFab}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Plus className="w-6 h-6" />
        )}
      </Button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}