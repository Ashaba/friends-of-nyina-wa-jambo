import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HeartIcon, BookOpenIcon, HandHeartIcon } from 'lucide-react'

export const metadata = {
  title: 'Seven Sorrows Rosary | Friends of Nyina wa Jambo',
  description: 'Pray the Seven Sorrows Rosary as revealed by Our Lady of Kibeho. Meditate on the sorrows of the Blessed Virgin Mary.',
}

const sorrows = [
  {
    number: 1,
    title: 'The Prophecy of Simeon',
    scripture: 'Luke 2:34-35',
    meditation: 'When Mary and Joseph presented the infant Jesus in the temple, the holy man Simeon took him in his arms and said to Mary: "Behold, this child is set for the fall and resurrection of many in Israel, and for a sign that shall be contradicted. And thy own soul a sword shall pierce, that, out of many hearts thoughts may be revealed."',
    prayer: 'Most merciful Mother, remind us always about the sorrows of your Son, Jesus. Help us to unite our sorrows with yours and His, and teach us to see in every cross the hope of resurrection. We ask this through Christ our Lord. Amen.'
  },
  {
    number: 2,
    title: 'The Flight into Egypt',
    scripture: 'Matthew 2:13-14',
    meditation: 'When the Magi departed, an angel appeared to Joseph and said: "Arise, and take the child and his mother, and fly into Egypt: and be there until I shall tell thee. For it will come to pass that Herod will seek the child to destroy him." Joseph arose and took the child and his mother by night, and retired into Egypt.',
    prayer: 'Most merciful Mother, you who experienced the pain of being a refugee, help all those who are forced to leave their homeland. Give them strength and hope, and help us to welcome them with open hearts. We ask this through Christ our Lord. Amen.'
  },
  {
    number: 3,
    title: 'The Loss of the Child Jesus in the Temple',
    scripture: 'Luke 2:43-45',
    meditation: 'After the feast of the Passover, they returned toward Galilee. The child Jesus remained in Jerusalem, and his parents knew it not. After three days, they found him in the temple, sitting in the midst of the doctors, hearing them and asking them questions.',
    prayer: 'Most merciful Mother, who sought Jesus with such anguish, help us when we feel that we have lost Jesus through sin. Give us the grace to seek him with perseverance until we find him again. We ask this through Christ our Lord. Amen.'
  },
  {
    number: 4,
    title: 'The Meeting of Jesus and Mary on the Way of the Cross',
    scripture: 'Luke 23:27-28',
    meditation: 'Mary meets her beloved Son as he carries his cross. Their eyes meet, and in that moment, the sword of sorrow pierces her heart anew. She sees him beaten, crowned with thorns, struggling under the weight of our sins.',
    prayer: 'Most merciful Mother, you who accompanied Jesus in his passion, help us to be close to those who suffer. Give us the courage to carry our crosses and to help others carry theirs. We ask this through Christ our Lord. Amen.'
  },
  {
    number: 5,
    title: 'The Crucifixion and Death of Jesus',
    scripture: 'John 19:25-27',
    meditation: 'Mary stands beneath the cross of Jesus with unwavering faith and love. She watches as her Son gives his life for our salvation. From the cross, Jesus entrusts her to John, and John to her, making her the Mother of all humanity.',
    prayer: 'Most merciful Mother, you who stood faithfully at the cross, help us to remain faithful in times of trial and suffering. Teach us to trust in God\'s plan even when we don\'t understand. We ask this through Christ our Lord. Amen.'
  },
  {
    number: 6,
    title: 'The Taking Down of the Body of Jesus from the Cross',
    scripture: 'Matthew 27:57-59',
    meditation: 'Joseph of Arimathea takes the body of Jesus down from the cross and places it in the arms of his sorrowful Mother. Mary holds her lifeless Son, the same child she once held with such joy in Bethlehem.',
    prayer: 'Most merciful Mother, you who held the lifeless body of Jesus, comfort all mothers who have lost their children, and all who mourn the death of their loved ones. Help us to find hope in the midst of grief. We ask this through Christ our Lord. Amen.'
  },
  {
    number: 7,
    title: 'The Burial of Jesus',
    scripture: 'John 19:40-42',
    meditation: 'Mary accompanies her Son to his burial. She watches as the stone is rolled in front of the tomb, and she waits in hope for the resurrection that Jesus promised. Even in her deepest sorrow, she trusts in God\'s plan.',
    prayer: 'Most merciful Mother, you who hoped against hope, help us to never despair but to always trust in God\'s mercy and love. Help us to remember that after every death comes resurrection. We ask this through Christ our Lord. Amen.'
  }
]

export default function SevenSorrowsRosaryPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">The Seven Sorrows Rosary</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This devotion was revealed by Our Lady of Kibeho to Marie Claire Mukangango in 1982. 
          Through meditating on Mary's sorrows, we grow in compassion and unite our sufferings with Christ.
        </p>
        <Badge variant="secondary" className="text-sm">
          <HeartIcon className="h-3 w-3 mr-1" />
          Revealed at Kibeho
        </Badge>
      </div>

      {/* Introduction */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpenIcon className="h-5 w-5" />
            How to Pray the Seven Sorrows Rosary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Before You Begin:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Make the Sign of the Cross</li>
                <li>Say the Act of Contrition</li>
                <li>Say one Our Father, seven Hail Marys, and one Glory Be</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">For Each Sorrow:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Announce the sorrow and read the meditation</li>
                <li>Say one Our Father and seven Hail Marys</li>
                <li>Say the prayer specific to that sorrow</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Seven Sorrows */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">The Seven Sorrows of Our Lady</h2>
        <div className="space-y-8">
          {sorrows.map((sorrow) => (
            <Card key={sorrow.number} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
                <div className="flex items-start justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 text-red-800 rounded-full flex items-center justify-center text-sm font-bold">
                      {sorrow.number}
                    </div>
                    {sorrow.title}
                  </CardTitle>
                  <Badge variant="outline">{sorrow.scripture}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-muted-foreground uppercase tracking-wide text-xs">
                    Meditation
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {sorrow.meditation}
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2 text-muted-foreground uppercase tracking-wide text-xs flex items-center gap-2">
                    <HandHeartIcon className="h-3 w-3" />
                    Prayer
                  </h4>
                  <p className="text-muted-foreground italic leading-relaxed">
                    {sorrow.prayer}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Closing Prayer */}
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle>Closing Prayer</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="italic text-muted-foreground border-l-4 border-purple-300 pl-4">
            "Queen of Martyrs, your heart suffered so much. I beg you, by the merits of the tears you shed in these terrible and sorrowful times, to obtain for me and all the sinners of the world the grace of complete sincerity and repentance. Amen."
          </blockquote>
          <p className="text-right text-sm text-purple-700 font-medium mt-4">
            — Prayer taught by Our Lady of Kibeho
          </p>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="text-center">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Continue Your Prayer Journey</h3>
          <p className="text-muted-foreground mb-6">
            Explore other devotions and deepen your relationship with Our Lady and Jesus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/prayers/holy-rosary"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Pray the Holy Rosary
            </a>
            <a 
              href="/saints"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent"
            >
              Saint of the Day
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}