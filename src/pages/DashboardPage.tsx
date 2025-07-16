import { useState } from 'react'
import { MobileKPICards } from '@/components/dashboard/MobileKPICards'
import { SwipeableCharts } from '@/components/dashboard/SwipeableCharts'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { PullToRefresh } from '@/components/dashboard/PullToRefresh'
import { FloatingActionButton } from '@/components/dashboard/FloatingActionButton'

export function DashboardPage() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsRefreshing(false)
  }

  return (
    <PullToRefresh onRefresh={handleRefresh} isRefreshing={isRefreshing}>
      <div className="space-y-6 pb-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white">
          <h1 className="text-xl font-semibold mb-1">Good morning, John!</h1>
          <p className="text-primary-100 text-sm">
            Here's what's happening with your supply chain today
          </p>
          <div className="mt-4 text-xs text-primary-200">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* KPI Cards */}
        <MobileKPICards />

        {/* Quick Actions */}
        <QuickActions />

        {/* Swipeable Charts */}
        <SwipeableCharts />

        {/* Recent Activity */}
        <RecentActivity />

        {/* Floating Action Button */}
        <FloatingActionButton />
      </div>
    </PullToRefresh>
  )
}