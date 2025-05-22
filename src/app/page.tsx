import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Logo in Middle of Page */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center max-w-4xl mx-auto px-4">
          <p className="text-3xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform your customer support with intelligent AI agents
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="hero-content">
              <p className="text-xl mb-8 animate-slide-up">
                Experience the future of customer service with our intelligent multi-agent system.
                Faster responses, happier customers, and seamless support around the clock.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-slide-up">
                <a href="#features" className="btn-primary">
                  Explore Features
                </a>
                <a href="#contact" className="btn-secondary">
                  Get Started
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image animate-fade-in">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-6">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        AI Support Chat
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-4">
                      {/* AI Message */}
                      <div className="chat-message ai animate-fade-in">
                        <div className="chat-avatar ai">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">AI Assistant</div>
                          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                            <p className="text-sm">How can I help you today?</p>
                          </div>
                        </div>
                      </div>

                      {/* User Message */}
                      <div className="chat-message user animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="chat-avatar user">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">You</div>
                          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-3">
                            <p className="text-sm">I need help with my recent order.</p>
                          </div>
                        </div>
                      </div>

                      {/* AI Response with Typing */}
                      <div className="chat-message ai animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <div className="chat-avatar ai">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">AI Assistant</div>
                          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                            <p className="text-sm">I'll help you with that. Could you please provide your order number?</p>
                            <div className="typing-indicator mt-2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-800/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 gradient-text">About Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
              We are a dedicated team of AI experts and customer service professionals
              working together to revolutionize customer support through intelligent automation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {values.map((value, index) => (
                <div key={index} className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gray-50 dark:bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-gray-900/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how our multi-agent system revolutionizes customer support
              with cutting-edge AI technology and seamless integration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">{feature.description}</p>
                <ul className="space-y-4">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span className="text-gray-600 dark:text-gray-300 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-800/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Contact Us</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-10 shadow-sm">
                <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      123 AI Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      support@multiagentsupport.com
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-10 shadow-sm">
                <form className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-3" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-3" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea id="message" rows={5} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-3"></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary text-lg py-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in AI-powered customer support."
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service and technology."
  },
  {
    title: "Customer First",
    description: "Our customers' success is our top priority in everything we do."
  }
]

const features = [
  {
    title: "AI-Powered Agents",
    description: "Our intelligent agents work together to provide comprehensive support.",
    benefits: [
      "Natural language understanding",
      "Context-aware responses",
      "Continuous learning and improvement"
    ]
  },
  {
    title: "Real-time Processing",
    description: "Lightning-fast response times with advanced processing capabilities.",
    benefits: [
      "Instant query resolution",
      "Parallel processing",
      "Scalable infrastructure"
    ]
  },
  {
    title: "Smart Routing",
    description: "Intelligent ticket distribution to the most appropriate agent.",
    benefits: [
      "Priority-based routing",
      "Skill-based assignment",
      "Load balancing"
    ]
  }
] 