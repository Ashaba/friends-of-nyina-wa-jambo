'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CookieIcon, ShieldCheckIcon, X } from 'lucide-react'
import analytics from '@/lib/analytics'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookie_consent')
    if (!hasConsent && typeof window !== 'undefined') {
      // Show banner after a short delay to avoid flash
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    analytics?.optIn()
    setShowBanner(false)
  }

  const acceptEssentialOnly = () => {
    localStorage.setItem('cookie_consent', 'essential_only')
    analytics?.optOut()
    setShowBanner(false)
  }

  const rejectAll = () => {
    localStorage.setItem('cookie_consent', 'rejected')
    analytics?.optOut()
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto border-2 shadow-lg bg-white">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <CookieIcon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
            
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Privacy & Cookies</h3>
                  <Badge className="bg-green-100 text-green-800">
                    <ShieldCheckIcon className="h-3 w-3 mr-1" />
                    Privacy-First
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  We use privacy-friendly analytics to understand how visitors use our site. 
                  No personal data is collected, and all analytics are anonymous and GDPR-compliant.
                </p>
              </div>

              {showDetails && (
                <div className="bg-muted/30 p-4 rounded-md space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">Essential Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Required for basic website functionality, security, and your privacy preferences. Always enabled.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us understand page visits and user interactions anonymously. No personal data is collected.
                      We do not use Google Analytics or other tracking services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">What we track:</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Page views and time spent on pages</li>
                      <li>Button clicks and form submissions (no content)</li>
                      <li>General location (country level only)</li>
                      <li>Device type and browser (for optimization)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-green-600">What we DO NOT track:</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Personal information or email addresses</li>
                      <li>Cross-site tracking or third-party cookies</li>
                      <li>Individual user identification</li>
                      <li>Sensitive form content or prayers</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptAll} className="flex-1">
                  Accept All
                </Button>
                <Button onClick={acceptEssentialOnly} variant="outline" className="flex-1">
                  Essential Only
                </Button>
                <Button
                  onClick={() => setShowDetails(!showDetails)}
                  variant="ghost"
                  size="sm"
                  className="flex-shrink-0"
                >
                  {showDetails ? 'Less Info' : 'More Info'}
                </Button>
              </div>

              <div className="text-xs text-muted-foreground">
                You can change your preferences anytime in our{' '}
                <a href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </a>
                .
              </div>
            </div>

            <Button
              onClick={rejectAll}
              variant="ghost"
              size="sm"
              className="flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}