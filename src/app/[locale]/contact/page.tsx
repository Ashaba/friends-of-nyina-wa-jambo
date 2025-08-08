'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { MailIcon, MapPinIcon, PhoneIcon, CheckCircleIcon, AlertCircleIcon, HeartIcon } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      // In production, this would send to your email service
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'prayer', label: 'Prayer Request' },
    { value: 'pilgrimage', label: 'Pilgrimage Information' },
    { value: 'events', label: 'Events & Groups' },
    { value: 'media', label: 'Media Submission' },
    { value: 'technical', label: 'Technical Support' }
  ]

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We'd love to hear from you. Send us a message, prayer request, or inquiry 
          and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MailIcon className="h-5 w-5" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submitStatus === 'success' ? (
                <div className="text-center space-y-4 py-8">
                  <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-700">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you within 24-48 hours.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setSubmitStatus('idle')}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-2 border rounded-md"
                    >
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Brief subject line"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please share your message, prayer request, or inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircleIcon className="h-4 w-4" />
                      {errorMessage}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <MailIcon className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>.
                    We will only use your information to respond to your inquiry.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MailIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">info@nyinawajambo.org</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Locations</p>
                  <p className="text-sm text-muted-foreground">
                    Uganda: Kampala & Entebbe<br />
                    Rwanda: Kigali & Kibeho
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Mission</p>
                  <p className="text-sm text-muted-foreground">
                    Spreading the message of Our Lady of Kibeho worldwide
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Prayer Requests</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We have a dedicated team that prays for all prayer requests submitted through our contact form. 
                Your intentions will be included in our community prayers.
              </p>
              <Badge className="bg-blue-100 text-blue-800">
                <HeartIcon className="h-3 w-3 mr-1" />
                Prayed for daily
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regional Contacts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">Uganda</h4>
                <p className="text-sm text-muted-foreground">uganda@nyinawajambo.org</p>
              </div>
              
              <div>
                <h4 className="font-medium">Rwanda</h4>
                <p className="text-sm text-muted-foreground">rwanda@nyinawajambo.org</p>
              </div>
              
              <div>
                <h4 className="font-medium">International</h4>
                <p className="text-sm text-muted-foreground">international@nyinawajambo.org</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">How quickly will I receive a response?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We typically respond to all inquiries within 24-48 hours. Prayer requests are prayed for immediately.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Can I request a pilgrimage to Kibeho?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Yes! We organize regular pilgrimages. Contact us for upcoming dates and registration information.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Do you have local prayer groups?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We have active prayer groups in Uganda and Rwanda. Check our events page or contact us to join.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">How can I support your mission?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                You can support us through prayer, participating in events, and helping spread Our Lady's message.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}