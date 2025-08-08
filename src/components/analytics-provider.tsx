'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import analytics from '@/lib/analytics'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (!analytics) return

    // Track page view on route change
    analytics.trackPageView(pathname)

    // Track page exit when component unmounts or route changes
    return () => {
      analytics.trackPageExit()
    }
  }, [pathname])

  useEffect(() => {
    if (!analytics) return

    // Track page exit when user leaves the site
    const handleBeforeUnload = () => {
      analytics.trackPageExit()
    }

    // Track visibility changes (tab switching)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        analytics.trackPageExit()
      } else if (document.visibilityState === 'visible') {
        analytics.trackPageView(pathname)
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [pathname])

  return <>{children}</>
}