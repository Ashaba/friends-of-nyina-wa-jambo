'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  SettingsIcon, 
  FileTextIcon, 
  UsersIcon, 
  CalendarIcon, 
  BarChartIcon,
  PlusIcon,
  EditIcon,
  EyeIcon,
  MailIcon
} from 'lucide-react'
import { useRouter } from 'next/navigation'

// Simple authentication check (in production, use proper auth)
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if admin is logged in (simplified check)
    const adminToken = localStorage.getItem('admin_token')
    if (adminToken === 'demo_admin_token') {
      setIsAuthenticated(true)
    } else {
      // In production, redirect to proper login
      const password = prompt('Enter admin password:')
      if (password === 'admin123') { // Demo password
        localStorage.setItem('admin_token', 'demo_admin_token')
        setIsAuthenticated(true)
      } else {
        router.push('/')
      }
    }
    setIsLoading(false)
  }, [router])

  return { isAuthenticated, isLoading }
}

export default function AdminDashboard() {
  const { isAuthenticated, isLoading } = useAuth()

  // Mock data for demonstration
  const stats = {
    totalVisitors: 2847,
    newsletterSubscribers: 342,
    prayerRequests: 89,
    upcomingEvents: 6
  }

  const recentActivity = [
    { id: 1, type: 'newsletter', message: 'New newsletter subscriber from Uganda', time: '2 hours ago' },
    { id: 2, type: 'prayer', message: 'Prayer request submitted', time: '4 hours ago' },
    { id: 3, type: 'event', message: 'New event registration for Kibeho pilgrimage', time: '6 hours ago' },
    { id: 4, type: 'contact', message: 'Contact form submission received', time: '1 day ago' }
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage content and monitor site activity</p>
        </div>
        <Badge className="bg-green-100 text-green-800">
          <SettingsIcon className="h-3 w-3 mr-1" />
          Admin Access
        </Badge>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Visitors</p>
                <p className="text-2xl font-bold">{stats.totalVisitors.toLocaleString()}</p>
              </div>
              <BarChartIcon className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Newsletter Subscribers</p>
                <p className="text-2xl font-bold">{stats.newsletterSubscribers}</p>
              </div>
              <MailIcon className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Prayer Requests</p>
                <p className="text-2xl font-bold">{stats.prayerRequests}</p>
              </div>
              <UsersIcon className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Upcoming Events</p>
                <p className="text-2xl font-bold">{stats.upcomingEvents}</p>
              </div>
              <CalendarIcon className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileTextIcon className="h-5 w-5" />
                  Content Management
                </CardTitle>
                <Button>
                  <PlusIcon className="h-4 w-4 mr-2" />
                  New Content
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Message of the Day</h3>
                    <p className="text-sm text-muted-foreground">Last updated: 2 days ago</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <EyeIcon className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <EditIcon className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Homepage Content</h3>
                    <p className="text-sm text-muted-foreground">Last updated: 1 week ago</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <EyeIcon className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <EditIcon className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Prayer Guides</h3>
                    <p className="text-sm text-muted-foreground">Last updated: 2 weeks ago</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <EyeIcon className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <EditIcon className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{activity.message}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge variant={activity.type === 'prayer' ? 'default' : 'secondary'}>
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Event Management</CardTitle>
                <Button>
                  <PlusIcon className="h-4 w-4 mr-2" />
                  New Event
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Annual Pilgrimage to Kibeho</h3>
                    <p className="text-sm text-muted-foreground">September 28, 2024 • 12 registered</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">View Registrations</Button>
                    <Button size="sm">Edit Event</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Monthly Seven Sorrows Rosary</h3>
                    <p className="text-sm text-muted-foreground">August 15, 2024 • 8 registered</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">View Registrations</Button>
                    <Button size="sm">Edit Event</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="newsletter" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Newsletter Management</CardTitle>
                <Button>
                  <PlusIcon className="h-4 w-4 mr-2" />
                  New Newsletter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Recent Newsletters</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium">August 2024: Feast of Our Lady</h4>
                      <p className="text-sm text-muted-foreground">Sent to 342 subscribers</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium">July 2024: Summer Pilgrimage</h4>
                      <p className="text-sm text-muted-foreground">Sent to 338 subscribers</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Subscriber Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total Subscribers:</span>
                      <span className="font-semibold">342</span>
                    </div>
                    <div className="flex justify-between">
                      <span>This Month:</span>
                      <span className="font-semibold text-green-600">+23</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Unsubscribes:</span>
                      <span className="font-semibold">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy-Friendly Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Top Pages</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>/</span>
                      <span className="font-semibold">1,245 views</span>
                    </div>
                    <div className="flex justify-between">
                      <span>/prayers/seven-sorrows-rosary</span>
                      <span className="font-semibold">432 views</span>
                    </div>
                    <div className="flex justify-between">
                      <span>/apparitions</span>
                      <span className="font-semibold">321 views</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Visitor Locations</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Uganda</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rwanda</span>
                      <span className="font-semibold">32%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Other</span>
                      <span className="font-semibold">23%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}