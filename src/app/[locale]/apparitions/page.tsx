import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon, MapPinIcon, UserIcon } from 'lucide-react'

export const metadata = {
  title: 'Kibeho Apparitions | Friends of Nyina wa Jambo',
  description: 'Learn about the apparitions of Our Lady of Kibeho to the visionaries between 1981 and 1989 in Rwanda.',
}

export default function ApparitionsPage() {
  const visionaries = [
    {
      name: 'Alphonsine Mumureke',
      dates: 'November 28, 1981 - November 28, 1989',
      age: '16 years old when apparitions began',
      description: 'The first visionary to receive apparitions from Our Lady of Kibeho. She was a student at Kibeho College when the Virgin Mary first appeared to her.',
      keyMessages: [
        'Conversion and repentance',
        'Prayer, especially the Rosary',
        'Suffering accepted with love',
        'Devotion to the Seven Sorrows'
      ]
    },
    {
      name: 'Anathalie Mukamazimpaka',
      dates: 'January 12, 1982 - December 3, 1983',
      age: '17 years old when apparitions began',
      description: 'The second visionary, also a student at Kibeho College. She received important messages about prayer and reconciliation.',
      keyMessages: [
        'Reconciliation between peoples',
        'Importance of prayer groups',
        'Fasting and penance',
        'Love for enemies'
      ]
    },
    {
      name: 'Marie Claire Mukangango',
      dates: 'March 2, 1982 - September 15, 1982',
      age: '21 years old when apparitions began',
      description: 'The third official visionary who received the Seven Sorrows Rosary from Our Lady. She taught this devotion to others.',
      keyMessages: [
        'The Seven Sorrows of Mary',
        'Meditation on Mary\'s sufferings',
        'Compassion for others\' pain',
        'Reparation for sins'
      ]
    }
  ]

  const keyEvents = [
    {
      date: 'November 28, 1981',
      title: 'First Apparition',
      description: 'Our Lady first appears to Alphonsine Mumureke in the school refectory, identifying herself as "Nyina wa Jambo" (Mother of the Word).'
    },
    {
      date: 'January 12, 1982', 
      title: 'Second Visionary',
      description: 'Anathalie Mukamazimpaka begins receiving apparitions, confirming the authenticity of the events.'
    },
    {
      date: 'March 2, 1982',
      title: 'Third Visionary',
      description: 'Marie Claire Mukangango receives her first apparition and is taught the Seven Sorrows Rosary.'
    },
    {
      date: 'August 19, 1982',
      title: 'Vision of Suffering',
      description: 'The visionaries see a terrifying vision of violence and suffering, later understood as a prophetic warning.'
    },
    {
      date: '1994',
      title: 'Prophecy Fulfilled',
      description: 'The Rwandan Genocide occurs, fulfilling the prophetic visions of suffering shown to the visionaries.'
    },
    {
      date: 'June 29, 2001',
      title: 'Official Approval',
      description: 'The Catholic Church officially approves the apparitions of Alphonsine, Anathalie, and Marie Claire.'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">The Apparitions of Kibeho</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Between 1981 and 1989, the Blessed Virgin Mary appeared to young students in Kibeho, Rwanda, 
          bringing messages of conversion, prayer, and reconciliation.
        </p>
        <Badge variant="secondary" className="text-sm">
          Officially Approved by the Catholic Church in 2001
        </Badge>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5" />
            Our Lady of Kibeho
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Our Lady appeared as <strong>"Nyina wa Jambo"</strong> (Mother of the Word), emphasizing her role as 
            the Mother of Jesus Christ, the Word of God. She came with urgent messages for humanity:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>A call to conversion and repentance</li>
            <li>The importance of prayer, especially the Rosary</li>
            <li>The need for reconciliation and peace</li>
            <li>Devotion to her Seven Sorrows</li>
            <li>Warnings about future suffering if humanity did not change</li>
          </ul>
        </CardContent>
      </Card>

      {/* The Visionaries */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">The Three Visionaries</h2>
        <div className="space-y-6">
          {visionaries.map((visionary, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <UserIcon className="h-5 w-5" />
                      {visionary.name}
                    </CardTitle>
                    <p className="text-muted-foreground">{visionary.age}</p>
                  </div>
                  <Badge variant="outline">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    {visionary.dates}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{visionary.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Messages Received:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {visionary.keyMessages.map((message, msgIndex) => (
                      <li key={msgIndex}>{message}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Timeline of Events</h2>
        <div className="space-y-4">
          {keyEvents.map((event, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <Badge variant="secondary">{event.date}</Badge>
                </div>
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Continue Your Journey</h3>
          <p className="text-muted-foreground mb-6">
            Deepen your understanding of Our Lady's message through prayer and devotion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/prayers/seven-sorrows-rosary"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Pray the Seven Sorrows
            </a>
            <a 
              href="/prayers/holy-rosary"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent"
            >
              Pray the Rosary
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}