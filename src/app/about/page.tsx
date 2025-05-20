import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
              About Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
              We are a dedicated team of AI experts and customer service professionals
              working together to revolutionize customer support through intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="feature-card group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden gradient-bg p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      {member.emoji}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 gradient-text">{member.name}</h3>
                  <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* What We Do */}
              <div className="feature-card animate-slide-up">
                <div className="w-12 h-12 mb-6 gradient-bg rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">What We Do</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We develop and deploy AI-powered customer support solutions that combine
                  the efficiency of automation with the empathy of human interaction.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Our multi-agent system ensures that every customer query is handled with
                  precision and care, 24/7.
                </p>
              </div>

              {/* Our Vision */}
              <div className="feature-card animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 mb-6 gradient-bg rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  To transform customer support by making it more efficient, accessible,
                  and personalized through the power of artificial intelligence.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in creating technology that enhances human capabilities
                  rather than replacing them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="feature-card animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mb-6 gradient-bg rounded-lg flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const team = [
  {
    emoji: "👩‍💼",
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description: "AI expert with 15+ years of experience in machine learning and customer service automation."
  },
  {
    emoji: "👨‍💻",
    name: "Michael Chen",
    role: "CTO",
    description: "Former tech lead at major tech companies, specializing in AI and natural language processing."
  },
  {
    emoji: "👩‍💼",
    name: "Emily Rodriguez",
    role: "Head of Customer Success",
    description: "Customer service veteran with a passion for implementing AI solutions in support operations."
  }
]

const values = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Innovation",
    description: "Constantly pushing boundaries to create better solutions for our customers."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Customer First",
    description: "Every decision we make is guided by what's best for our customers."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Excellence",
    description: "Committed to delivering the highest quality in everything we do."
  }
] 