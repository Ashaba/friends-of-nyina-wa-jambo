'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShieldCheckIcon, CookieIcon, EyeIcon, UserIcon, MailIcon } from 'lucide-react'
import analytics from '@/lib/analytics'

export default function PrivacyPage() {
  const [analyticsOptOut, setAnalyticsOptOut] = useState(() => {
    if (typeof window !== 'undefined') {
      return analytics?.isOptedOutFromAnalytics() || false
    }
    return false
  })

  const toggleAnalytics = () => {
    if (analyticsOptOut) {
      analytics?.optIn()
      setAnalyticsOptOut(false)
    } else {
      analytics?.optOut()
      setAnalyticsOptOut(true)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <ShieldCheckIcon className="h-8 w-8 text-green-600" />
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your privacy is sacred to us. We are committed to protecting your personal information 
          and being transparent about how we collect and use data.
        </p>
        <Badge className="bg-green-100 text-green-800">
          <ShieldCheckIcon className="h-3 w-3 mr-1" />
          GDPR Compliant
        </Badge>
      </div>

      {/* Privacy Controls */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CookieIcon className="h-5 w-5" />
            Privacy Controls
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white rounded-md">
            <div>
              <h3 className="font-semibold">Analytics Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Allow anonymous analytics to help us improve our website
              </p>
            </div>
            <Button
              onClick={toggleAnalytics}
              variant={analyticsOptOut ? "outline" : "default"}
              size="sm"
            >
              {analyticsOptOut ? "Disabled" : "Enabled"}
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Changes take effect immediately. Analytics data is completely anonymous and GDPR-compliant.
          </p>
        </CardContent>
      </Card>

      {/* Data We Collect */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <EyeIcon className="h-5 w-5" />
            What Data We Collect
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-green-600">✅ Data We DO Collect</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Newsletter Subscriptions</h4>
                  <p className="text-sm text-muted-foreground">Email addresses for our newsletter (with your consent)</p>
                </div>
                <div>
                  <h4 className="font-medium">Contact Forms</h4>
                  <p className="text-sm text-muted-foreground">Name and email when you contact us (only to respond)</p>
                </div>
                <div>
                  <h4 className="font-medium">Anonymous Analytics</h4>
                  <p className="text-sm text-muted-foreground">Page views, clicks, and basic usage patterns (no personal data)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Prayer Requests</h4>
                  <p className="text-sm text-muted-foreground">Content you share for our prayer teams (with your consent)</p>
                </div>
                <div>
                  <h4 className="font-medium">Technical Data</h4>
                  <p className="text-sm text-muted-foreground">Browser type, device type (for website optimization)</p>
                </div>
                <div>
                  <h4 className="font-medium">Cookies</h4>
                  <p className="text-sm text-muted-foreground">Essential cookies for website functionality and your preferences</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-red-600">❌ Data We DO NOT Collect</h3>
            <div className="grid md:grid-cols-2 gap-2">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Personal identification beyond what you provide</li>
                <li>• Cross-site tracking or behavioral profiling</li>
                <li>• Social media data or third-party information</li>
                <li>• Financial information (we don't sell anything)</li>
              </ul>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Location data (beyond country-level for analytics)</li>
                <li>• Sensitive personal information</li>
                <li>• Data from children under 13</li>
                <li>• Unnecessary cookies or tracking pixels</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How We Use Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            How We Use Your Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Newsletter Communications</h4>
              <p className="text-sm text-muted-foreground">
                Send monthly spiritual content, event updates, and community news to subscribers only.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Prayer Support</h4>
              <p className="text-sm text-muted-foreground">
                Share prayer requests with our prayer teams and include intentions in community prayers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Website Improvement</h4>
              <p className="text-sm text-muted-foreground">
                Use anonymous analytics to understand which content is most helpful and improve user experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Communication</h4>
              <p className="text-sm text-muted-foreground">
                Respond to your inquiries, provide support, and share information about our community.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheckIcon className="h-5 w-5" />
            Data Security & Storage
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">Security Measures</h4>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>All data transmitted over secure HTTPS connections</li>
              <li>Email addresses encrypted and stored securely</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal data by authorized personnel only</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Data Retention</h4>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Newsletter emails: Until you unsubscribe</li>
              <li>Contact form data: 2 years for follow-up purposes</li>
              <li>Analytics data: 2 years, completely anonymous</li>
              <li>Prayer requests: As long as you specify, or 1 year maximum</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Your Rights */}
      <Card>
        <CardHeader>
          <CardTitle>Your Privacy Rights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Access Your Data</h4>
                <p className="text-sm text-muted-foreground">Request a copy of all personal data we have about you</p>
              </div>
              <div>
                <h4 className="font-semibold">Correct Your Data</h4>
                <p className="text-sm text-muted-foreground">Update or correct any inaccurate information</p>
              </div>
              <div>
                <h4 className="font-semibold">Delete Your Data</h4>
                <p className="text-sm text-muted-foreground">Request complete deletion of your personal information</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Data Portability</h4>
                <p className="text-sm text-muted-foreground">Receive your data in a machine-readable format</p>
              </div>
              <div>
                <h4 className="font-semibold">Withdraw Consent</h4>
                <p className="text-sm text-muted-foreground">Unsubscribe from communications at any time</p>
              </div>
              <div>
                <h4 className="font-semibold">Lodge Complaints</h4>
                <p className="text-sm text-muted-foreground">Contact data protection authorities if needed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact for Privacy */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MailIcon className="h-5 w-5" />
            Privacy Questions?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            If you have any questions about this privacy policy, want to exercise your rights, 
            or have privacy concerns, please contact us:
          </p>
          <div className="space-y-2">
            <p><strong>Email:</strong> privacy@nyinawajambo.org</p>
            <p><strong>Subject:</strong> Privacy Policy Inquiry</p>
            <p><strong>Response Time:</strong> Within 30 days as required by GDPR</p>
          </div>
          <Button className="mt-4" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </CardContent>
      </Card>

      {/* Last Updated */}
      <Card className="text-center">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            This privacy policy was last updated on <strong>August 8, 2024</strong>.
            We will notify newsletter subscribers of any material changes.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}