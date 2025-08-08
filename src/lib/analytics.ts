'use client'

interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
  timestamp: number
  session_id: string
  page_url: string
  referrer: string
  user_agent: string
  language: string
  timezone: string
}

interface PageView {
  page: string
  title: string
  timestamp: number
  session_id: string
  referrer: string
  duration?: number
}

class PrivacyFriendlyAnalytics {
  private sessionId: string
  private pageStartTime: number = Date.now()
  private isOptedOut: boolean = false
  
  constructor() {
    this.sessionId = this.generateSessionId()
    this.checkOptOutStatus()
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private checkOptOutStatus() {
    if (typeof window !== 'undefined') {
      this.isOptedOut = localStorage.getItem('analytics_opt_out') === 'true'
      
      // Check for Do Not Track header
      if (navigator.doNotTrack === '1' || window.doNotTrack === '1') {
        this.isOptedOut = true
      }
    }
  }

  optOut() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('analytics_opt_out', 'true')
      this.isOptedOut = true
    }
  }

  optIn() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('analytics_opt_out')
      this.isOptedOut = false
    }
  }

  isOptedOutFromAnalytics(): boolean {
    return this.isOptedOut
  }

  private shouldTrack(): boolean {
    if (this.isOptedOut) return false
    if (typeof window === 'undefined') return false
    
    // Don't track in development
    if (process.env.NODE_ENV === 'development') return false
    
    // Don't track localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return false
    }

    return true
  }

  trackPageView(page: string, title?: string) {
    if (!this.shouldTrack()) return

    const pageView: PageView = {
      page: this.sanitizePath(page),
      title: title || document.title,
      timestamp: Date.now(),
      session_id: this.sessionId,
      referrer: this.sanitizeReferrer(document.referrer),
    }

    this.sendEvent('page_view', pageView)
    this.pageStartTime = Date.now()
  }

  trackEvent(eventName: string, properties?: Record<string, any>) {
    if (!this.shouldTrack()) return

    const event: AnalyticsEvent = {
      name: eventName,
      properties: this.sanitizeProperties(properties),
      timestamp: Date.now(),
      session_id: this.sessionId,
      page_url: this.sanitizePath(window.location.pathname),
      referrer: this.sanitizeReferrer(document.referrer),
      user_agent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }

    this.sendEvent('custom_event', event)
  }

  trackPageExit() {
    if (!this.shouldTrack()) return

    const duration = Date.now() - this.pageStartTime
    
    const exitEvent: PageView = {
      page: this.sanitizePath(window.location.pathname),
      title: document.title,
      timestamp: Date.now(),
      session_id: this.sessionId,
      referrer: this.sanitizeReferrer(document.referrer),
      duration
    }

    this.sendEvent('page_exit', exitEvent)
  }

  private sanitizePath(path: string): string {
    // Remove query parameters and hashes to avoid collecting sensitive data
    return path.split('?')[0].split('#')[0]
  }

  private sanitizeReferrer(referrer: string): string {
    if (!referrer) return 'direct'
    
    try {
      const url = new URL(referrer)
      // Only keep the domain, remove path and query params
      return url.hostname
    } catch {
      return 'unknown'
    }
  }

  private sanitizeProperties(properties?: Record<string, any>): Record<string, any> | undefined {
    if (!properties) return undefined

    // Remove any potentially sensitive data
    const sanitized: Record<string, any> = {}
    
    Object.entries(properties).forEach(([key, value]) => {
      // Skip sensitive keys
      if (['email', 'phone', 'password', 'token', 'ip'].includes(key.toLowerCase())) {
        return
      }
      
      // Only allow basic types
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        sanitized[key] = value
      }
    })

    return sanitized
  }

  private async sendEvent(type: string, data: any) {
    try {
      // In production, this would send to your analytics endpoint
      // For now, we'll just log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics] ${type}:`, data)
      }

      // Example implementation for production:
      /*
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          data,
          timestamp: Date.now()
        })
      })
      */
    } catch (error) {
      // Fail silently - analytics should never break the user experience
      console.warn('Analytics error:', error)
    }
  }

  // Utility method to track common interactions
  trackButtonClick(buttonName: string, location?: string) {
    this.trackEvent('button_click', {
      button_name: buttonName,
      location: location || 'unknown'
    })
  }

  trackFormSubmission(formName: string, success: boolean) {
    this.trackEvent('form_submission', {
      form_name: formName,
      success
    })
  }

  trackDownload(fileName: string, fileType?: string) {
    this.trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType || 'unknown'
    })
  }

  trackSearch(query: string, results?: number) {
    this.trackEvent('search', {
      query_length: query.length, // Don't store actual query for privacy
      results_count: results
    })
  }

  trackVideoPlay(videoTitle: string, duration?: number) {
    this.trackEvent('video_play', {
      video_title: videoTitle,
      duration
    })
  }
}

// Create a singleton instance
const analytics = typeof window !== 'undefined' ? new PrivacyFriendlyAnalytics() : null

export default analytics

// Hook for React components
export function useAnalytics() {
  return analytics
}