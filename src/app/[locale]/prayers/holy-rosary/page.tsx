import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpenIcon, HeartIcon, StarIcon, SunIcon, PlusIcon } from 'lucide-react'

export const metadata = {
  title: 'Holy Rosary Guide | Friends of Nyina wa Jambo',
  description: 'Learn to pray the traditional Holy Rosary with complete guide to the Joyful, Sorrowful, Glorious, and Luminous mysteries.',
}

const mysteries = {
  joyful: [
    {
      title: 'The Annunciation',
      meditation: 'The Angel Gabriel announces to Mary that she will bear the Son of God.',
      fruit: 'Humility',
      scripture: 'Luke 1:26-38'
    },
    {
      title: 'The Visitation',
      meditation: 'Mary visits her cousin Elizabeth, who is carrying John the Baptist.',
      fruit: 'Love of Neighbor',
      scripture: 'Luke 1:39-56'
    },
    {
      title: 'The Nativity',
      meditation: 'Jesus is born in Bethlehem and placed in a manger.',
      fruit: 'Poverty of Spirit',
      scripture: 'Luke 2:1-20'
    },
    {
      title: 'The Presentation',
      meditation: 'Mary and Joseph present the infant Jesus in the Temple.',
      fruit: 'Obedience',
      scripture: 'Luke 2:22-38'
    },
    {
      title: 'Finding Jesus in the Temple',
      meditation: 'Mary and Joseph find the twelve-year-old Jesus teaching in the Temple.',
      fruit: 'Joy in Finding Jesus',
      scripture: 'Luke 2:41-52'
    }
  ],
  sorrowful: [
    {
      title: 'The Agony in the Garden',
      meditation: 'Jesus prays in the Garden of Gethsemane before his arrest.',
      fruit: 'Sorrow for Sin',
      scripture: 'Matthew 26:36-46'
    },
    {
      title: 'The Scourging at the Pillar',
      meditation: 'Jesus is brutally whipped by the Roman soldiers.',
      fruit: 'Purity',
      scripture: 'Matthew 27:26'
    },
    {
      title: 'The Crowning with Thorns',
      meditation: 'Jesus is mocked and crowned with a crown of thorns.',
      fruit: 'Courage',
      scripture: 'Matthew 27:27-31'
    },
    {
      title: 'The Carrying of the Cross',
      meditation: 'Jesus carries his cross to Calvary, helped by Simon of Cyrene.',
      fruit: 'Patience',
      scripture: 'Matthew 27:32'
    },
    {
      title: 'The Crucifixion',
      meditation: 'Jesus dies on the cross for our salvation.',
      fruit: 'Perseverance',
      scripture: 'Matthew 27:33-56'
    }
  ],
  glorious: [
    {
      title: 'The Resurrection',
      meditation: 'Jesus rises from the dead on Easter Sunday.',
      fruit: 'Faith',
      scripture: 'Matthew 28:1-10'
    },
    {
      title: 'The Ascension',
      meditation: 'Jesus ascends into heaven forty days after his resurrection.',
      fruit: 'Hope',
      scripture: 'Luke 24:50-53'
    },
    {
      title: 'The Descent of the Holy Spirit',
      meditation: 'The Holy Spirit descends upon Mary and the Apostles at Pentecost.',
      fruit: 'Love of God',
      scripture: 'Acts 2:1-31'
    },
    {
      title: 'The Assumption',
      meditation: 'Mary is taken up, body and soul, into heavenly glory.',
      fruit: 'Grace of a Happy Death',
      scripture: 'Revelation 12:1'
    },
    {
      title: 'The Coronation',
      meditation: 'Mary is crowned as Queen of Heaven and Earth.',
      fruit: 'Trust in Mary\'s Intercession',
      scripture: 'Revelation 12:1'
    }
  ],
  luminous: [
    {
      title: 'The Baptism in the Jordan',
      meditation: 'Jesus is baptized by John and the Father proclaims him his beloved Son.',
      fruit: 'Openness to the Holy Spirit',
      scripture: 'Matthew 3:13-17'
    },
    {
      title: 'The Wedding Feast at Cana',
      meditation: 'Jesus performs his first miracle at Mary\'s request.',
      fruit: 'To Jesus through Mary',
      scripture: 'John 2:1-11'
    },
    {
      title: 'The Proclamation of the Kingdom',
      meditation: 'Jesus proclaims the coming of the Kingdom and calls us to conversion.',
      fruit: 'Repentance and Trust in God',
      scripture: 'Mark 1:15'
    },
    {
      title: 'The Transfiguration',
      meditation: 'Jesus is transfigured before Peter, James, and John on Mount Tabor.',
      fruit: 'Desire for Holiness',
      scripture: 'Matthew 17:1-8'
    },
    {
      title: 'The Institution of the Eucharist',
      meditation: 'Jesus gives us his Body and Blood in the Last Supper.',
      fruit: 'Adoration',
      scripture: 'Matthew 26:26-28'
    }
  ]
}

const rosaryPrayers = {
  signOfCross: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
  apostlesCreed: 'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
  ourFather: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
  hailMary: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
  gloryBe: 'Glory be to the Father, and to the Son, and to the Holy Spirit; as it was in the beginning, is now, and ever shall be, world without end. Amen.'
}

export default function HolyRosaryPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">The Holy Rosary</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The Rosary is a devotion in honor of the Blessed Virgin Mary. It consists of twenty decades of Hail Marys, 
          each decade preceded by an Our Father and followed by a Glory Be.
        </p>
        <Badge variant="secondary" className="text-sm">
          <StarIcon className="h-3 w-3 mr-1" />
          Traditional Catholic Prayer
        </Badge>
      </div>

      {/* How to Pray */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpenIcon className="h-5 w-5" />
            How to Pray the Rosary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Beginning:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Make the Sign of the Cross</li>
                <li>Say the Apostles' Creed</li>
                <li>Say one Our Father</li>
                <li>Say three Hail Marys</li>
                <li>Say one Glory Be</li>
                <li>Announce the first mystery</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For Each Decade:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Say one Our Father</li>
                <li>Say ten Hail Marys while meditating on the mystery</li>
                <li>Say one Glory Be</li>
                <li>Say the Fatima Prayer (optional)</li>
                <li>Announce the next mystery</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Mysteries */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">The Twenty Mysteries of the Rosary</h2>
        
        {/* Joyful Mysteries */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardTitle className="flex items-center gap-2">
              <SunIcon className="h-5 w-5 text-yellow-600" />
              Joyful Mysteries
              <Badge variant="outline">Monday & Saturday</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {mysteries.joyful.map((mystery, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{index + 1}. {mystery.title}</h4>
                    <Badge variant="secondary" className="text-xs">{mystery.scripture}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{mystery.meditation}</p>
                  <p className="text-sm text-yellow-700"><strong>Fruit:</strong> {mystery.fruit}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sorrowful Mysteries */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
            <CardTitle className="flex items-center gap-2">
              <PlusIcon className="h-5 w-5 text-red-600" />
              Sorrowful Mysteries
              <Badge variant="outline">Tuesday & Friday</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {mysteries.sorrowful.map((mystery, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{index + 1}. {mystery.title}</h4>
                    <Badge variant="secondary" className="text-xs">{mystery.scripture}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{mystery.meditation}</p>
                  <p className="text-sm text-red-700"><strong>Fruit:</strong> {mystery.fruit}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Glorious Mysteries */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="flex items-center gap-2">
              <StarIcon className="h-5 w-5 text-blue-600" />
              Glorious Mysteries
              <Badge variant="outline">Wednesday & Sunday</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {mysteries.glorious.map((mystery, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{index + 1}. {mystery.title}</h4>
                    <Badge variant="secondary" className="text-xs">{mystery.scripture}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{mystery.meditation}</p>
                  <p className="text-sm text-blue-700"><strong>Fruit:</strong> {mystery.fruit}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Luminous Mysteries */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
            <CardTitle className="flex items-center gap-2">
              <HeartIcon className="h-5 w-5 text-green-600" />
              Luminous Mysteries
              <Badge variant="outline">Thursday</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {mysteries.luminous.map((mystery, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{index + 1}. {mystery.title}</h4>
                    <Badge variant="secondary" className="text-xs">{mystery.scripture}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{mystery.meditation}</p>
                  <p className="text-sm text-green-700"><strong>Fruit:</strong> {mystery.fruit}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Essential Prayers */}
      <Card>
        <CardHeader>
          <CardTitle>Essential Rosary Prayers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Sign of the Cross</h4>
            <p className="text-muted-foreground italic">{rosaryPrayers.signOfCross}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Our Father</h4>
            <p className="text-muted-foreground italic">{rosaryPrayers.ourFather}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Hail Mary</h4>
            <p className="text-muted-foreground italic">{rosaryPrayers.hailMary}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Glory Be</h4>
            <p className="text-muted-foreground italic">{rosaryPrayers.gloryBe}</p>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="text-center">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Deepen Your Prayer Life</h3>
          <p className="text-muted-foreground mb-6">
            Explore other Marian devotions and spiritual practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/prayers/seven-sorrows-rosary"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Seven Sorrows Rosary
            </a>
            <a 
              href="/apparitions"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent"
            >
              Learn About Kibeho
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}