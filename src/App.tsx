import { useState, useEffect } from 'react'
import { DashboardPage } from '@/pages/DashboardPage'
import { InventoryPage } from '@/pages/InventoryPage'
import { ShipmentsPage } from '@/pages/ShipmentsPage'
import { AnalyticsPage } from '@/pages/AnalyticsPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { MobileHeader } from '@/components/layout/MobileHeader'
import { BottomTabNavigation } from '@/components/layout/BottomTabNavigation'
import { NotificationSheet } from '@/components/layout/NotificationSheet'
import { SearchSheet } from '@/components/layout/SearchSheet'
import { OfflineIndicator } from '@/components/layout/OfflineIndicator'
import { Toaster } from '@/components/ui/toaster'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />
      case 'inventory':
        return <InventoryPage />
      case 'shipments':
        return <ShipmentsPage />
      case 'analytics':
        return <AnalyticsPage />
      case 'profile':
        return <ProfilePage />
      default:
        return <DashboardPage />
    }
  }

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      {/* Offline Indicator */}
      {!isOnline && <OfflineIndicator />}
      
      {/* Mobile Header */}
      <MobileHeader 
        onNotificationsClick={() => setShowNotifications(true)}
        onSearchClick={() => setShowSearch(true)}
      />
      
      {/* Main Content with Bottom Padding for Tab Navigation */}
      <main className="flex-1 overflow-y-auto pb-20 px-4 pt-4">
        {renderContent()}
      </main>
      
      {/* Bottom Tab Navigation */}
      <BottomTabNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      {/* Notification Sheet */}
      <NotificationSheet 
        open={showNotifications}
        onOpenChange={setShowNotifications}
      />
      
      {/* Search Sheet */}
      <SearchSheet 
        open={showSearch}
        onOpenChange={setShowSearch}
      />
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  )
}

export default App