'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GlobeIcon, CheckIcon } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' }
]

interface LanguageSwitcherProps {
  currentLocale: string
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname and add new one
    const segments = pathname.split('/').filter(Boolean)
    
    // Remove current locale if it exists
    if (languages.some(lang => lang.code === segments[0])) {
      segments.shift()
    }
    
    // Build new path with new locale
    const newPath = newLocale === 'en' ? `/${segments.join('/')}` : `/${newLocale}/${segments.join('/')}`
    
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <GlobeIcon className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <span className="sm:hidden">{currentLanguage.flag}</span>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-1 z-50 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="p-2">
              <div className="text-xs text-muted-foreground font-medium mb-2 px-2">
                Select Language
              </div>
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => switchLanguage(language.code)}
                  className={`w-full flex items-center gap-3 px-2 py-2 text-sm rounded-sm hover:bg-gray-100 transition-colors ${
                    currentLocale === language.code ? 'bg-blue-50' : ''
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="flex-1 text-left">{language.name}</span>
                  {currentLocale === language.code && (
                    <CheckIcon className="h-4 w-4 text-blue-600" />
                  )}
                </button>
              ))}
            </div>
            
            <div className="border-t p-2">
              <div className="text-xs text-muted-foreground px-2">
                More languages coming soon
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}