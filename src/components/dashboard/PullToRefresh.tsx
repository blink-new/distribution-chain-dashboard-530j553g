import { useState, useRef, ReactNode } from 'react'
import { RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PullToRefreshProps {
  children: ReactNode
  onRefresh: () => Promise<void>
  isRefreshing: boolean
}

export function PullToRefresh({ children, onRefresh, isRefreshing }: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0)
  const [isPulling, setIsPulling] = useState(false)
  const startY = useRef(0)
  const currentY = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const maxPullDistance = 80
  const triggerDistance = 60

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current?.scrollTop === 0) {
      startY.current = e.touches[0].clientY
      setIsPulling(true)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPulling || isRefreshing) return

    currentY.current = e.touches[0].clientY
    const distance = Math.max(0, currentY.current - startY.current)
    
    if (distance > 0 && containerRef.current?.scrollTop === 0) {
      e.preventDefault()
      const pullDistance = Math.min(distance * 0.5, maxPullDistance)
      setPullDistance(pullDistance)
    }
  }

  const handleTouchEnd = async () => {
    if (!isPulling) return

    setIsPulling(false)

    if (pullDistance >= triggerDistance && !isRefreshing) {
      await onRefresh()
    }

    setPullDistance(0)
  }

  const shouldTrigger = pullDistance >= triggerDistance
  const rotationAngle = (pullDistance / maxPullDistance) * 360

  return (
    <div
      ref={containerRef}
      className="relative overflow-y-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pull to Refresh Indicator */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 flex items-center justify-center transition-all duration-200 z-10",
          pullDistance > 0 || isRefreshing ? "opacity-100" : "opacity-0"
        )}
        style={{
          height: `${Math.max(pullDistance, isRefreshing ? 60 : 0)}px`,
          transform: `translateY(-${Math.max(pullDistance, isRefreshing ? 60 : 0) - pullDistance}px)`
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div
            className={cn(
              "p-2 rounded-full transition-all duration-200",
              shouldTrigger || isRefreshing
                ? "bg-primary-100 text-primary-600"
                : "bg-slate-100 text-slate-400"
            )}
          >
            <RefreshCw
              className={cn(
                "w-5 h-5 transition-transform duration-200",
                isRefreshing && "animate-spin"
              )}
              style={{
                transform: !isRefreshing ? `rotate(${rotationAngle}deg)` : undefined
              }}
            />
          </div>
          
          <div className="text-xs font-medium text-slate-600">
            {isRefreshing
              ? "Refreshing..."
              : shouldTrigger
              ? "Release to refresh"
              : "Pull to refresh"
            }
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="transition-transform duration-200"
        style={{
          transform: `translateY(${pullDistance}px)`
        }}
      >
        {children}
      </div>
    </div>
  )
}