import { WifiOff } from 'lucide-react'

export function OfflineIndicator() {
  return (
    <div className="bg-amber-500 text-white px-4 py-2 text-center text-sm font-medium flex items-center justify-center space-x-2">
      <WifiOff className="w-4 h-4" />
      <span>You're offline. Some features may be limited.</span>
    </div>
  )
}