'use client'

import { useChat } from 'ai/react'
import { Textarea } from './textarea'
import { Button } from './button'

export default function WineList() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/wine-list',
    initialMessages: [
      {
        id: 'frame1',
        role: 'system',
        content:
          'You are a master sommelier working in a Michelin-starred restaurant'
      },
      {
        id: 'frame2',
        role: 'system',
        content:
          'Pair the following dish with wine. Name a specific wine. Then, describe your pairing in a single sentence.'
      }
    ]
  })

  return (
    <div className="w-full flex-1 grid grid-cols-2 grid-rows-[1fr,auto]">
      <div className="p-4 bg-gray-100 rounded-t-l-sm">
        <h2 className="text-3xl font-medium mb-4">Menu 🍽</h2>
        <ul className="divide-y-2">
          {messages
            .filter(m => m.role === 'user')
            .map((m, index) => (
              <li className="py-4" key={index}>
                {m.content}
              </li>
            ))}
        </ul>
      </div>

      <div className="p-4 bg-slate-200 rounded-t-r-sm">
        <h2 className="text-3xl font-medium mb-4">Wine List 🍷</h2>
        <ul className="divide-y divide-slate-50">
          {messages
            .filter(m => m.role === 'assistant')
            .map((m, index) => (
              <li className="py-4" key={index}>
                {m.content}
              </li>
            ))}
        </ul>
      </div>

      <form
        onSubmit={handleSubmit}
        className="col-span-2 p-4 bg-slate-900 rounded-b-sm"
      >
        <div className="max-w-sm">
          <Textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Add a dish to the menu, e.g. seared scallops on a bed of arugula with a lemon vinaigrette"
          />
          <Button className="mt-4 bg-white text-slate-900" type="submit">
            Pair 🍷
          </Button>
        </div>
      </form>
    </div>
  )
}
