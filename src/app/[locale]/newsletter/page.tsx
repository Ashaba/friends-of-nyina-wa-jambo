'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MailIcon, CheckCircleIcon, AlertCircleIcon, HeartIcon, BookOpenIcon, CalendarIcon } from 'lucide-react'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address')
      setSubscriptionStatus('error')
      return
    }

    setIsSubscribing(true)
    setErrorMessage('')

    try {
      // In production, this would call your newsletter service API
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate successful subscription
      setSubscriptionStatus('success')
      setEmail('')
    } catch (error) {
      setSubscriptionStatus('error')
      setErrorMessage('Failed to subscribe. Please try again later.')
    } finally {
      setIsSubscribing(false)
    }
  }

  const recentNewsletters = [
    {
      title: 'August 2024: Feast of Our Lady of the Assumption',
      date: 'August 15, 2024',
      preview: 'Celebrating the Assumption of Mary and its connection to the Kibeho apparitions...',
      topics: ['Assumption of Mary', 'Prayer intentions', 'Uganda pilgrimage update']
    },
    {
      title: 'July 2024: Summer Pilgrimage Season',
      date: 'July 28, 2024', 
      preview: 'Planning your pilgrimage to Kibeho and preparing spiritually for the journey...',
      topics: ['Kibeho pilgrimage', 'Seven Sorrows devotion', 'Community prayers']
    },
    {
      title: 'June 2024: Sacred Heart Month',
      date: 'June 21, 2024',
      preview: 'Exploring the devotion to the Sacred Heart and its relationship with Our Lady\'s sorrows...',
      topics: ['Sacred Heart', 'First Friday devotions', 'Rwanda updates']
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Newsletter</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay connected with our community and receive spiritual guidance, event updates, 
          and inspiring content from Our Lady of Kibeho.
        </p>
        <Badge variant="secondary" className="text-sm">
          <MailIcon className="h-3 w-3 mr-1" />
          Monthly Newsletter
        </Badge>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Subscription Form */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MailIcon className="h-5 w-5" />
              Subscribe to Our Newsletter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {subscriptionStatus === 'success' ? (
              <div className="text-center space-y-4">
                <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-green-700">Successfully Subscribed!</h3>
                  <p className="text-muted-foreground">
                    Thank you for joining our community. You'll receive your first newsletter soon.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setSubscriptionStatus('idle')}
                  className="w-full"
                >
                  Subscribe Another Email
                </Button>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="font-semibold mb-2">What You'll Receive:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <HeartIcon className="h-4 w-4 text-red-500" />
                      Monthly spiritual reflections and messages
                    </li>
                    <li className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-blue-500" />
                      Upcoming events and pilgrimage opportunities
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpenIcon className="h-4 w-4 text-green-500" />
                      Prayer guides and devotional resources
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  {subscriptionStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircleIcon className="h-4 w-4" />
                      {errorMessage}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubscribing}
                  >
                    {isSubscribing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Subscribing...
                      </>
                    ) : (
                      'Subscribe to Newsletter'
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time. 
                    Read our <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>.
                  </p>
                </form>
              </>
            )}
          </CardContent>
        </Card>

        {/* Recent Newsletters */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Recent Newsletters</h2>
          <div className="space-y-4">
            {recentNewsletters.map((newsletter, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold line-clamp-2">{newsletter.title}</h3>
                      <Badge variant="outline" className="text-xs ml-2 flex-shrink-0">
                        {newsletter.date}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {newsletter.preview}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {newsletter.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Why Subscribe?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <HeartIcon className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Spiritual Growth</h3>
              <p className="text-sm text-muted-foreground">
                Receive monthly reflections inspired by Our Lady of Kibeho's messages to deepen your faith journey.
              </p>
            </div>
            
            <div className="text-center">
              <CalendarIcon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Stay Connected</h3>
              <p className="text-sm text-muted-foreground">
                Get updates on pilgrimages, prayer groups, and community events in Uganda, Rwanda, and beyond.
              </p>
            </div>
            
            <div className="text-center">
              <BookOpenIcon className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Prayer Resources</h3>
              <p className="text-sm text-muted-foreground">
                Access exclusive prayer guides, novenas, and devotional materials for your spiritual practice.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="text-center max-w-4xl mx-auto bg-blue-50 border-blue-200">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
          <p className="text-muted-foreground mb-6">
            Be part of a global community devoted to Our Lady of Kibeho and her message of conversion and peace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact Us
            </a>
            <a 
              href="/events"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent"
            >
              View Events
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}