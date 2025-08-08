import {Link} from '@/lib/navigation'
import { ChurchIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <ChurchIcon className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Friends of Nyina wa Jambo</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Promoting the message of Our Lady of Kibeho and the devotion to the Seven Sorrows of Mary.
              Join us in prayer and pilgrimage as we follow the call to conversion and reconciliation.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Friends of Nyina wa Jambo. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/apparitions" className="text-muted-foreground hover:text-foreground">
                  Kibeho Apparitions
                </Link>
              </li>
              <li>
                <Link href="/prayers/seven-sorrows-rosary" className="text-muted-foreground hover:text-foreground">
                  Seven Sorrows Rosary
                </Link>
              </li>
              <li>
                <Link href="/prayers/holy-rosary" className="text-muted-foreground hover:text-foreground">
                  Holy Rosary
                </Link>
              </li>
              <li>
                <Link href="/saints" className="text-muted-foreground hover:text-foreground">
                  Daily Saints
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/newsletter" className="text-muted-foreground hover:text-foreground">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-muted-foreground hover:text-foreground">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}