'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { StarIcon } from 'lucide-react'

interface Message {
  id: number
  title: string
  content: string
  date: string
  source?: string
}

const messages: Message[] = [
  {
    id: 1,
    title: "Call to Prayer",
    content: "My children, pray always, especially the Rosary. Through prayer, you will find peace and conversion of heart. Do not cease to pray for the world, which is in great danger.",
    date: "2024-08-08",
    source: "Our Lady of Kibeho"
  },
  {
    id: 2,
    title: "Message of Reconciliation",
    content: "Reconcile with one another and with God. Love each other, for love is stronger than hatred. Show mercy as God shows mercy to you.",
    date: "2024-08-07",
    source: "Our Lady of Kibeho"
  },
  {
    id: 3,
    title: "The Seven Sorrows",
    content: "Meditate on my Seven Sorrows. Through my sorrows, understand the depth of God's love for humanity and the price of salvation.",
    date: "2024-08-06",
    source: "Our Lady of Kibeho"
  },
  {
    id: 4,
    title: "Prayer for Peace",
    content: "Pray for peace in your hearts, peace in your families, and peace in the world. Peace begins with each one of you.",
    date: "2024-08-05",
    source: "Our Lady of Kibeho"
  },
  {
    id: 5,
    title: "Conversion of Heart",
    content: "Convert your hearts while there is still time. Turn away from sin and embrace the love of my Son. Do not delay in your conversion.",
    date: "2024-08-04",
    source: "Our Lady of Kibeho"
  }
]

export function MessageOfTheDay() {
  const [currentMessage, setCurrentMessage] = useState<Message | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get today's date and find corresponding message
    const today = new Date().toISOString().split('T')[0]
    let message = messages.find(m => m.date === today)
    
    // If no message for today, get the most recent one
    if (!message) {
      message = messages[0]
    }
    
    setCurrentMessage(message)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-full mb-1"></div>
            <div className="h-3 bg-muted rounded w-5/6"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!currentMessage) {
    return null
  }

  return (
    <Card className="w-full bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sky-900">
          <StarIcon className="h-5 w-5 text-yellow-500" />
          Message of the Day
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h3 className="font-semibold text-lg text-sky-800">
            {currentMessage.title}
          </h3>
          <blockquote className="text-muted-foreground italic border-l-4 border-sky-300 pl-4">
            "{currentMessage.content}"
          </blockquote>
          {currentMessage.source && (
            <p className="text-sm text-sky-700 font-medium text-right">
              — {currentMessage.source}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}