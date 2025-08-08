import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PlayIcon, ImageIcon, HeadphonesIcon, VideoIcon } from 'lucide-react'

export const metadata = {
  title: 'Media Gallery | Friends of Nyina wa Jambo',
  description: 'Videos, audio recordings, and images from Our Lady of Kibeho apparitions and related content.',
}

const mediaItems = [
  {
    id: 1,
    type: 'video',
    title: 'Our Lady of Kibeho Documentary',
    description: 'A comprehensive documentary about the apparitions at Kibeho and their significance for the Catholic Church.',
    thumbnail: '/api/placeholder/400/300',
    duration: '45:32',
    category: 'Documentary',
    url: 'https://www.youtube.com/watch?v=example1'
  },
  {
    id: 2,
    type: 'audio',
    title: 'Seven Sorrows Rosary - Guided Prayer',
    description: 'A complete guided prayer of the Seven Sorrows Rosary with meditations and reflections.',
    thumbnail: '/api/placeholder/400/300',
    duration: '35:15',
    category: 'Prayer',
    url: 'https://soundcloud.com/example1'
  },
  {
    id: 3,
    type: 'video',
    title: 'Testimony of Alphonsine Mumureke',
    description: 'The first visionary shares her experiences of the apparitions and their impact on her life.',
    thumbnail: '/api/placeholder/400/300',
    duration: '28:45',
    category: 'Testimony',
    url: 'https://www.youtube.com/watch?v=example2'
  },
  {
    id: 4,
    type: 'image',
    title: 'Kibeho Sanctuary Photos',
    description: 'Beautiful images of the Kibeho Sanctuary where Our Lady appeared to the young visionaries.',
    thumbnail: '/api/placeholder/400/300',
    category: 'Photography',
    count: 25
  },
  {
    id: 5,
    type: 'audio',
    title: 'Marian Hymns from Rwanda',
    description: 'Traditional Rwandan hymns dedicated to Our Lady, sung in Kinyarwanda with English translations.',
    thumbnail: '/api/placeholder/400/300',
    duration: '42:18',
    category: 'Music',
    url: 'https://archive.org/example1'
  },
  {
    id: 6,
    type: 'video',
    title: 'Pilgrimage to Kibeho 2023',
    description: 'Highlights from the annual international pilgrimage to Kibeho, featuring prayer services and testimonies.',
    thumbnail: '/api/placeholder/400/300',
    duration: '1:12:30',
    category: 'Pilgrimage',
    url: 'https://www.youtube.com/watch?v=example3'
  }
]

const getMediaIcon = (type: string) => {
  switch (type) {
    case 'video':
      return <VideoIcon className="h-4 w-4" />
    case 'audio':
      return <HeadphonesIcon className="h-4 w-4" />
    case 'image':
      return <ImageIcon className="h-4 w-4" />
    default:
      return <PlayIcon className="h-4 w-4" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'video':
      return 'bg-red-100 text-red-800'
    case 'audio':
      return 'bg-green-100 text-green-800'
    case 'image':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function MediaPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Media Gallery</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore videos, audio recordings, and images related to Our Lady of Kibeho, 
          the apparitions, and the spiritual life of our community.
        </p>
      </div>

      {/* Featured Content */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Featured</Badge>
              <h2 className="text-2xl font-bold mb-4">Our Lady of Kibeho Documentary</h2>
              <p className="text-muted-foreground mb-6">
                This comprehensive documentary explores the apparitions at Kibeho, featuring interviews 
                with the visionaries, historical context, and the Church's investigation process.
              </p>
              <div className="flex gap-4">
                <Button>
                  <PlayIcon className="h-4 w-4 mr-2" />
                  Watch Now
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PlayIcon className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Click to play video</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Media Categories */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <VideoIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Videos</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Documentaries, testimonies, and pilgrimage footage
            </p>
            <Badge variant="secondary">12 videos</Badge>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <HeadphonesIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Audio</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Guided prayers, hymns, and spiritual reflections
            </p>
            <Badge variant="secondary">8 recordings</Badge>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <ImageIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Photos</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Images from Kibeho sanctuary and community events
            </p>
            <Badge variant="secondary">150+ photos</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Media Grid */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Latest Media</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video bg-muted">
                {/* Placeholder for thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {getMediaIcon(item.type)}
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.type === 'image' ? `${item.count} photos` : item.duration}
                    </p>
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <Badge className={getTypeColor(item.type)}>
                    {getMediaIcon(item.type)}
                    <span className="ml-1 capitalize">{item.type}</span>
                  </Badge>
                </div>
                {item.type !== 'image' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50">
                    <Button size="sm" className="rounded-full w-12 h-12">
                      <PlayIcon className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold line-clamp-2">{item.title}</h3>
                    <Badge variant="outline" className="text-xs flex-shrink-0">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upload Section */}
      <Card className="text-center bg-muted/50">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Share Your Media</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have photos or videos from pilgrimages, prayer groups, or community events? 
            We'd love to feature them in our gallery to inspire other devotees of Our Lady of Kibeho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              <ImageIcon className="h-4 w-4 mr-2" />
              Upload Media
            </Button>
            <Button variant="outline">
              Contact Us
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="text-center bg-blue-50 border-blue-200">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter to receive notifications when new media content is added
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/newsletter"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Subscribe to Newsletter
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