import {Link} from '@/lib/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HomeIcon, SearchIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-sky-900">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-6xl text-sky-400">404</div>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en">
              <Button className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700">
                <HomeIcon className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Link href="/en/apparitions">
              <Button variant="outline" className="w-full sm:w-auto border-sky-600 text-sky-600 hover:bg-sky-50">
                <SearchIcon className="h-4 w-4 mr-2" />
                Explore Content
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}