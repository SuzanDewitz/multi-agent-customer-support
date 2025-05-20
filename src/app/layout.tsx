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
      <body className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>
        <ThemeProvider>
          {/* Navigation */}
          <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-6 h-6 gradient-bg rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold gradient-text">Multi-Agent Support</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6">
                  <Link href="/" className="nav-link px-3 py-2 text-sm hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
                  <Link href="/about" className="nav-link px-3 py-2 text-sm hover:text-indigo-600 dark:hover:text-indigo-400">About</Link>
                  <Link href="/features" className="nav-link px-3 py-2 text-sm hover:text-indigo-600 dark:hover:text-indigo-400">Features</Link>
                  <Link href="/contact" className="nav-link px-3 py-2 text-sm hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link>
                  <Link href="/login" className="btn-primary text-sm px-4 py-2">
                    Sign In
                  </Link>
                  <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 mt-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {/* Company */}
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
                  <ul className="space-y-3">
                    <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link></li>
                    <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</Link></li>
                    <li><Link href="/features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</Link></li>
                  </ul>
                </div>

                {/* Support */}
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
                  <ul className="space-y-3">
                    <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Help Center</Link></li>
                    <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Documentation</Link></li>
                    <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">API Status</Link></li>
                  </ul>
                </div>

                {/* Legal */}
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
                  <ul className="space-y-3">
                    <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
                  </ul>
                </div>

                {/* Connect */}
                <div className="text-left">
                  <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Connect</h3>
                  <div className="flex items-center space-x-2 max-w-[120px]">
                    <a href="https://x.com/multiagentsupport" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center justify-center w-3.5 h-3.5 min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]">
                      <svg className="w-3.5 h-3.5 min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '14px', height: '14px' }}>
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="https://facebook.com/multiagentsupport" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center justify-center w-3.5 h-3.5 min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]">
                      <svg className="w-3.5 h-3.5 min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '14px', height: '14px' }}>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/company/multi-agent-support" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center justify-center w-3.5 h-3.5 min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]">
                      <svg className="w-3.5 h-3.5 min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '14px', height: '14px' }}>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/multi-agent-support" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center justify-center w-3.5 h-3.5 min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]">
                      <svg className="w-3.5 h-3.5 min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '14px', height: '14px' }}>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                    <a href="https://tiktok.com/@multiagentsupport" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center justify-center w-3.5 h-3.5 min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]">
                      <svg className="w-3.5 h-3.5 min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '14px', height: '14px' }}>
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-center text-xs text-gray-500 dark:text-gray-400">
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