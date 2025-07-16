import { Bell, Search, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface MobileHeaderProps {
  onNotificationsClick: () => void
  onSearchClick: () => void
}

export function MobileHeader({ onNotificationsClick, onSearchClick }: MobileHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
          <Menu className="w-4 h-4 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-slate-900">DistroChain</h1>
          <p className="text-xs text-slate-500">Mobile Dashboard</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        {/* Search Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onSearchClick}
          className="relative p-2 h-9 w-9"
        >
          <Search className="w-4 h-4 text-slate-600" />
        </Button>

        {/* Notifications Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onNotificationsClick}
          className="relative p-2 h-9 w-9"
        >
          <Bell className="w-4 h-4 text-slate-600" />
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          >
            3
          </Badge>
        </Button>
      </div>
    </header>
  )
}