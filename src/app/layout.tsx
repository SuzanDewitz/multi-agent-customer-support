import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { ThemeProvider } from './components/ThemeProvider'
import ChatWidget from './components/ChatWidget'
import ThemeToggle from './components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multi-Agent Customer Support',
  description: 'AI-powered customer support system with multiple intelligent agents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-secondary`}>
        <ThemeProvider>
          {/* Header */}
          <header className="fixed w-full top-0 bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">Multi-Agent Support</span>
                </Link>

                {/* Navigation */}
                <div className="flex items-center">
                  {/* Navigation Links Container */}
                  <div className="flex items-center space-x-1 mr-8">
                    {/* Home Link */}
                    <div className="px-3 py-2">
                      <a 
                        href="#home" 
                        className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-200"
                      >
                        Home
                      </a>
                    </div>

                    {/* About Link */}
                    <div className="px-3 py-2">
                      <a 
                        href="#about" 
                        className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-200"
                      >
                        About
                      </a>
                    </div>

                    {/* Features Link */}
                    <div className="px-3 py-2">
                      <a 
                        href="#features" 
                        className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-200"
                      >
                        Features
                      </a>
                    </div>

                    {/* Contact Link */}
                    <div className="px-3 py-2">
                      <a 
                        href="#contact" 
                        className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-200"
                      >
                        Contact
                      </a>
                    </div>
                  </div>

                  {/* Sign In Button and Theme Toggle Container */}
                  <div className="flex items-center space-x-4">
                    <Link 
                      href="/signin" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      Sign In
                    </Link>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Spacer for fixed header */}
          <div className="h-16"></div>

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
            <div className="nav-container py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Company */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-6">Company</h3>
                  <ul className="space-y-4">
                    <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                    <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
                    <li><Link href="/features" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Features</Link></li>
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-6">Support</h3>
                  <ul className="space-y-4">
                    <li><Link href="/help" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Help Center</Link></li>
                    <li><Link href="/docs" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Documentation</Link></li>
                    <li><Link href="/status" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">API Status</Link></li>
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-6">Legal</h3>
                  <ul className="space-y-4">
                    <li><Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Terms of Service</Link></li>
                    <li><Link href="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Cookie Policy</Link></li>
                  </ul>
                </div>

                {/* Connect */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-6">Connect</h3>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com/multiagentsupport" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/company/multi-agent-support" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/multi-agent-support" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  &copy; {new Date().getFullYear()} Multi-Agent Support. All rights reserved.
                </p>
              </div>
            </div>
          </footer>

          {/* Chat Widget */}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  )
} 