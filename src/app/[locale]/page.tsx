import {Link} from "@/lib/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageOfTheDay } from "@/components/message-of-the-day"
import { HeartIcon, BookOpenIcon, CalendarIcon, UsersIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sky-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Friends of Nyina wa Jambo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Promoting the message of Our Lady of Kibeho and the devotion to the Seven Sorrows of Mary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apparitions">
              <Button size="lg" className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700">
                Learn About Kibeho
              </Button>
            </Link>
            <Link href="/prayers/seven-sorrows-rosary">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-sky-600 text-sky-600 hover:bg-sky-50">
                Seven Sorrows Rosary
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Message of the Day */}
      <section className="container mx-auto px-4">
        <MessageOfTheDay />
      </section>

      {/* Featured Content */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Discover Our Lady of Kibeho</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-sky-100 hover:border-sky-200">
            <Link href="/apparitions">
              <CardHeader>
                <HeartIcon className="h-8 w-8 text-red-500 mb-2" />
                <CardTitle className="text-lg">Apparitions</CardTitle>
                <CardDescription>
                  Learn about the miraculous appearances of Our Lady between 1981-1989
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-sky-100 hover:border-sky-200">
            <Link href="/prayers/seven-sorrows-rosary">
              <CardHeader>
                <BookOpenIcon className="h-8 w-8 text-sky-500 mb-2" />
                <CardTitle className="text-lg">Seven Sorrows</CardTitle>
                <CardDescription>
                  Meditate on the Seven Sorrows Rosary revealed at Kibeho
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-sky-100 hover:border-sky-200">
            <Link href="/saints">
              <CardHeader>
                <CalendarIcon className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-lg">Daily Saints</CardTitle>
                <CardDescription>
                  Discover the saint of the day and their inspiring stories
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-sky-100 hover:border-sky-200">
            <Link href="/events">
              <CardHeader>
                <UsersIcon className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle className="text-lg">Events</CardTitle>
                <CardDescription>
                  Join pilgrimages and prayer groups in Uganda and Rwanda
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-sky-50/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-sky-900">Our Lady of Kibeho</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-left">
                <p className="text-muted-foreground">
                  Between 1981 and 1989, the Blessed Virgin Mary appeared to several young people in Kibeho, Rwanda. 
                  She came as "Nyina wa Jambo" (Mother of the Word) to call humanity to conversion, reconciliation, and prayer.
                </p>
                <p className="text-muted-foreground">
                  Our Lady revealed the devotion to her Seven Sorrows and warned of coming trials while offering 
                  hope through prayer and penance. Her message remains as relevant today as it was then.
                </p>
                <Link href="/apparitions">
                  <Button className="mt-4 bg-sky-600 hover:bg-sky-700">
                    Read the Full Story
                  </Button>
                </Link>
              </div>
              <Card className="border-sky-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-sky-900">Key Messages</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pray the Rosary daily</li>
                    <li>• Practice penance and fasting</li>
                    <li>• Seek reconciliation with others</li>
                    <li>• Meditate on the Seven Sorrows</li>
                    <li>• Convert your hearts to God</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 text-center py-16">
        <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Stay connected with our community and receive spiritual guidance, event updates, and inspiring content
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/newsletter">
            <Button size="lg" className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700">
              Subscribe to Newsletter
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-sky-600 text-sky-600 hover:bg-sky-50">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}