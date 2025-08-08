'use client'

import {Link} from '@/lib/navigation'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { ChurchIcon, MenuIcon } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 border-sky-200">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <ChurchIcon className="h-8 w-8 text-sky-600" />
          <span className="font-bold text-xl text-sky-900">Friends of Nyina wa Jambo</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Apparitions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="row-span-3">
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/apparitions"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Kibeho Apparitions
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Learn about Our Lady of Kibeho's appearances between 1981-1989
                      </p>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Prayers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <Link
                    href="/prayers/seven-sorrows-rosary"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Seven Sorrows Rosary</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Devotion revealed during the Kibeho apparitions
                    </p>
                  </Link>
                  <Link
                    href="/prayers/holy-rosary"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Holy Rosary</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Traditional Catholic Rosary prayers
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/saints" className={navigationMenuTriggerStyle()}>
                Saints
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/events" className={navigationMenuTriggerStyle()}>
                Events
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/media" className={navigationMenuTriggerStyle()}>
                Media
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" className={navigationMenuTriggerStyle()}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          <Link href="/newsletter">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Subscribe
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white p-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="py-2 text-sm font-medium">Home</Link>
            <Link href="/apparitions" className="py-2 text-sm font-medium">Apparitions</Link>
            <Link href="/prayers/seven-sorrows-rosary" className="py-2 text-sm">Seven Sorrows Rosary</Link>
            <Link href="/prayers/holy-rosary" className="py-2 text-sm">Holy Rosary</Link>
            <Link href="/saints" className="py-2 text-sm font-medium">Saints</Link>
            <Link href="/events" className="py-2 text-sm font-medium">Events</Link>
            <Link href="/media" className="py-2 text-sm font-medium">Media</Link>
            <Link href="/contact" className="py-2 text-sm font-medium">Contact</Link>
            <Link href="/newsletter" className="py-2 text-sm font-medium">Newsletter</Link>
          </nav>
        </div>
      )}
    </header>
  )
}