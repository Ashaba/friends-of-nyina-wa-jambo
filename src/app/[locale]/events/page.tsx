'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon, MapPinIcon, UsersIcon, ClockIcon, FilterIcon } from 'lucide-react'

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  country: 'uganda' | 'rwanda' | 'online'
  type: 'pilgrimage' | 'prayer-group' | 'retreat' | 'conference'
  organizer: string
  contact?: string
  isRecurring?: boolean
  maxParticipants?: number
}

const events: Event[] = [
  {
    id: 1,
    title: 'Monthly Seven Sorrows Rosary Group',
    description: 'Join us for our monthly gathering to pray the Seven Sorrows Rosary together and reflect on Our Lady\'s messages from Kibeho. All are welcome to this peaceful time of prayer and fellowship.',
    date: '2024-08-15',
    time: '18:00',
    location: 'St. Mary\'s Church, Kampala',
    country: 'uganda',
    type: 'prayer-group',
    organizer: 'Friends of Nyina wa Jambo Uganda',
    contact: 'uganda@nyinawajambo.org',
    isRecurring: true
  },
  {
    id: 2,
    title: 'Annual Pilgrimage to Kibeho',
    description: 'Experience the sacred grounds where Our Lady appeared. This 5-day pilgrimage includes visits to the apparition site, Mass celebrations, prayer sessions, and meetings with local visionaries.',
    date: '2024-09-28',
    time: '06:00',
    location: 'Kibeho Sanctuary, Rwanda',
    country: 'rwanda',
    type: 'pilgrimage',
    organizer: 'Friends of Nyina wa Jambo International',
    contact: 'pilgrimage@nyinawajambo.org',
    maxParticipants: 50
  },
  {
    id: 3,
    title: 'Online Prayer Marathon',
    description: 'A 24-hour global prayer marathon featuring the Seven Sorrows Rosary, testimonies, and spiritual reflections. Join believers from around the world in this powerful prayer initiative.',
    date: '2024-08-28',
    time: '00:00',
    location: 'Virtual Event',
    country: 'online',
    type: 'prayer-group',
    organizer: 'Friends of Nyina wa Jambo Global',
    contact: 'online@nyinawajambo.org'
  },
  {
    id: 4,
    title: 'Kibeho Messages Retreat',
    description: 'A weekend retreat focusing on the messages of Our Lady of Kibeho, including conferences on conversion, reconciliation, and the Seven Sorrows devotion.',
    date: '2024-09-14',
    time: '09:00',
    location: 'Divine Mercy Center, Kigali',
    country: 'rwanda',
    type: 'retreat',
    organizer: 'Kibeho Apparitions Center',
    maxParticipants: 40
  },
  {
    id: 5,
    title: 'Weekly Rosary Circle',
    description: 'Every Wednesday evening, join us for the traditional Holy Rosary followed by prayers for peace and reconciliation as requested by Our Lady of Kibeho.',
    date: '2024-08-14',
    time: '19:30',
    location: 'Holy Family Parish, Entebbe',
    country: 'uganda',
    type: 'prayer-group',
    organizer: 'Entebbe Prayer Group',
    isRecurring: true
  },
  {
    id: 6,
    title: 'Marian Conference 2024',
    description: 'Annual conference featuring speakers on Marian apparitions, the role of Mary in salvation, and practical living of Our Lady\'s messages. Includes workshops and prayer sessions.',
    date: '2024-10-12',
    time: '08:30',
    location: 'Makerere University Conference Hall',
    country: 'uganda',
    type: 'conference',
    organizer: 'Uganda Catholic University',
    contact: 'events@ucu.ac.ug',
    maxParticipants: 200
  }
]

const countryNames = {
  uganda: 'Uganda',
  rwanda: 'Rwanda',
  online: 'Online'
}

const typeNames = {
  pilgrimage: 'Pilgrimage',
  'prayer-group': 'Prayer Group',
  retreat: 'Retreat',
  conference: 'Conference'
}

const countryColors = {
  uganda: 'bg-green-100 text-green-800',
  rwanda: 'bg-blue-100 text-blue-800',
  online: 'bg-purple-100 text-purple-800'
}

const typeColors = {
  pilgrimage: 'bg-red-100 text-red-800',
  'prayer-group': 'bg-yellow-100 text-yellow-800',
  retreat: 'bg-indigo-100 text-indigo-800',
  conference: 'bg-pink-100 text-pink-800'
}

export default function EventsPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')

  const filteredEvents = events.filter(event => {
    const matchesCountry = selectedCountry === 'all' || event.country === selectedCountry
    const matchesType = selectedType === 'all' || event.type === selectedType
    return matchesCountry && matchesType
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Events</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join our community events, pilgrimages, and prayer groups across Uganda, Rwanda, and online. 
          Come together to honor Our Lady of Kibeho and grow in faith.
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FilterIcon className="h-5 w-5" />
            Filter Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Country/Region</label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Locations</option>
                <option value="uganda">Uganda</option>
                <option value="rwanda">Rwanda</option>
                <option value="online">Online</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Event Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Types</option>
                <option value="pilgrimage">Pilgrimages</option>
                <option value="prayer-group">Prayer Groups</option>
                <option value="retreat">Retreats</option>
                <option value="conference">Conferences</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">
          {filteredEvents.length === events.length 
            ? 'All Events' 
            : `${filteredEvents.length} Event${filteredEvents.length !== 1 ? 's' : ''} Found`}
        </h2>
        
        {filteredEvents.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">No events found matching your filters. Try adjusting your search criteria.</p>
              <Button 
                onClick={() => {
                  setSelectedCountry('all')
                  setSelectedType('all')
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge className={countryColors[event.country]}>
                            <MapPinIcon className="h-3 w-3 mr-1" />
                            {countryNames[event.country]}
                          </Badge>
                          <Badge className={typeColors[event.type]}>
                            {typeNames[event.type]}
                          </Badge>
                          {event.isRecurring && (
                            <Badge variant="outline">Recurring</Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-right space-y-1 flex-shrink-0">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <CalendarIcon className="h-4 w-4" />
                          <span className="font-medium">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <ClockIcon className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">{event.description}</p>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <UsersIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Organized by {event.organizer}</span>
                        </div>
                        {event.maxParticipants && (
                          <div className="text-sm text-muted-foreground">
                            Limited to {event.maxParticipants} participants
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
                        {event.contact && (
                          <Button variant="outline" size="sm">
                            Contact Organizer
                          </Button>
                        )}
                        <Button size="sm">
                          Register Interest
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <Card className="text-center bg-blue-50 border-blue-200">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Organize an Event</h3>
          <p className="text-muted-foreground mb-6">
            Would you like to organize a prayer group, pilgrimage, or retreat in your area? 
            We'd love to help you connect with other devotees of Our Lady of Kibeho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact Us
            </a>
            <a 
              href="/newsletter"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent"
            >
              Subscribe for Updates
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}