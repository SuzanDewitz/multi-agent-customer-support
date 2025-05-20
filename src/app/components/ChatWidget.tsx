'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hello! How can I help you today?", isUser: false }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const { theme } = useTheme()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    // Add user message
    setMessages(prev => [...prev, { text: inputMessage, isUser: true }])
    setInputMessage('')

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for your message. Our AI agents are processing your request and will respond shortly.",
        isUser: false
      }])
    }, 1000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className={`w-80 h-96 rounded-lg shadow-xl flex flex-col ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}>
          {/* Chat header */}
          <div className={`p-4 border-b ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          } flex justify-between items-center`}>
            <h3 className="font-semibold">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  message.isUser
                    ? 'bg-blue-600 text-white'
                    : theme === 'dark'
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className={`p-4 border-t ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className={`flex-1 rounded-lg px-4 py-2 ${
                  theme === 'dark'
                    ? 'bg-gray-700 text-white placeholder-gray-400'
                    : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors btn-hover-effect"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}
    </div>
  )
} 