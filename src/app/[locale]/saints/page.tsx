'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarIcon, BookOpenIcon, HeartIcon } from 'lucide-react'

export default function SaintsPage() {
  const [currentSaint, setCurrentSaint] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Sample saints data - in production, this would come from an API
  const saintsData = {
    '2024-08-08': {
      name: 'Saint Dominic de Guzman',
      feast: 'August 8',
      year: '1170 - 1221',
      patronage: 'Astronomers, Dominican Republic, falsely accused people',
      biography: 'Saint Dominic was a Spanish priest and founder of the Dominican Order. He was particularly devoted to the Blessed Virgin Mary and credited her with inspiring him to pray the Rosary as a weapon against heresy. He spent his life preaching the Gospel and combating the Albigensian heresy in southern France. Dominic emphasized learning and preaching, and his order became known for their scholarly achievements and missionary work.',
      quote: 'Preach the Gospel always. When necessary, use words.',
      image: null,
      keyEvents: [
        'Founded the Dominican Order in 1216',
        'Received the Rosary from Our Lady according to tradition',
        'Preached against the Albigensian heresy',
        'Emphasized education and learning in religious life'
      ]
    },
    'default': {
      name: 'Saint Augustine of Hippo',
      feast: 'August 28',
      year: '354 - 430',
      patronage: 'Brewers, printers, theologians',
      biography: 'One of the greatest theologians and philosophers in Christian history. Born in North Africa, Augustine lived a worldly life before his dramatic conversion to Christianity at age 32. He became Bishop of Hippo and wrote influential works including "Confessions" and "The City of God." His theological insights shaped Christian doctrine for centuries.',
      quote: 'You have made us for yourself, O Lord, and our hearts are restless until they rest in you.',
      image: null,
      keyEvents: [
        'Converted to Christianity in 386 AD',
        'Became Bishop of Hippo in 396 AD',
        'Wrote "Confessions" and "The City of God"',
        'Defended Christian doctrine against heresies'
      ]
    }
  }

  useEffect(() => {
    // Simulate API call to get saint of the day
    const today = new Date().toISOString().split('T')[0]
    const saint = saintsData[today] || saintsData.default
    
    setTimeout(() => {
      setCurrentSaint(saint)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-3/4 mx-auto"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Saint of the Day</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the inspiring lives of Catholic saints and learn from their examples of holiness and devotion to God.
        </p>
        <Badge variant="secondary" className="text-sm">
          <CalendarIcon className="h-3 w-3 mr-1" />
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </Badge>
      </div>

      {/* Today's Saint */}
      {currentSaint && (
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 text-center">
            <div className="space-y-2">
              <CardTitle className="text-2xl md:text-3xl">{currentSaint.name}</CardTitle>
              <div className="flex justify-center gap-4 flex-wrap">
                <Badge variant="outline" className="text-sm">
                  <HeartIcon className="h-3 w-3 mr-1" />
                  {currentSaint.feast}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {currentSaint.year}
                </Badge>
              </div>
              {currentSaint.patronage && (
                <p className="text-muted-foreground">
                  <strong>Patron of:</strong> {currentSaint.patronage}
                </p>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            {/* Biography */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <BookOpenIcon className="h-5 w-5" />
                Life and Legacy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {currentSaint.biography}
              </p>
            </div>

            {/* Quote */}
            {currentSaint.quote && (
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-center text-blue-900">
                    "{currentSaint.quote}"
                  </blockquote>
                  <p className="text-right text-sm text-blue-700 mt-2">
                    — {currentSaint.name}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Key Events */}
            {currentSaint.keyEvents && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Events & Achievements</h3>
                <ul className="space-y-2">
                  {currentSaint.keyEvents.map((event, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Prayer */}
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-3">Prayer</h4>
                <p className="italic text-muted-foreground">
                  {currentSaint.name}, pray for us that we may follow your example of holiness 
                  and devotion to God. Help us to live lives of virtue and service to others, 
                  always seeking to do God's will. Amen.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      )}

      {/* Additional Resources */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Explore More Saints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The lives of the saints offer us powerful examples of how to live out our Catholic faith. 
            They show us that holiness is achievable for everyone, regardless of their background or circumstances.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Card className="p-4">
              <h4 className="font-semibold mb-2">African Saints</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Discover the rich tradition of African saints and martyrs.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Explore African Saints
              </Button>
            </Card>
            
            <Card className="p-4">
              <h4 className="font-semibold mb-2">Marian Saints</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Saints who had special devotion to Our Lady.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Explore Marian Saints
              </Button>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="text-center max-w-4xl mx-auto">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Follow the Saints' Example</h3>
          <p className="text-muted-foreground mb-6">
            Let the saints inspire you in your daily prayer life and spiritual journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/prayers/holy-rosary"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Pray the Rosary
            </a>
            <a 
              href="/apparitions"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent"
            >
              Learn About Our Lady
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}