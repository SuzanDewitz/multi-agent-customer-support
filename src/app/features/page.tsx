export default function Features() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our multi-agent system revolutionizes customer support
            with cutting-edge AI technology and seamless integration.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <section className="mt-20 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Easy Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect with Your Tools</h3>
              <p className="text-gray-600 mb-6">
                Our system seamlessly integrates with your existing tools and platforms,
                making implementation smooth and hassle-free.
              </p>
              <ul className="space-y-3">
                {integrations.map((integration, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      {integration.icon}
                    </span>
                    <span className="text-gray-700">{integration.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
              <ol className="space-y-4">
                {steps.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-3">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-900">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Agents",
    description: "Our intelligent agents work together to provide comprehensive support.",
    benefits: [
      "Natural language understanding",
      "Context-aware responses",
      "Continuous learning and improvement"
    ]
  },
  {
    icon: "⚡",
    title: "Real-time Processing",
    description: "Lightning-fast response times with advanced processing capabilities.",
    benefits: [
      "Instant query resolution",
      "Parallel processing",
      "Scalable infrastructure"
    ]
  },
  {
    icon: "🎯",
    title: "Smart Routing",
    description: "Intelligent ticket distribution to the most appropriate agent.",
    benefits: [
      "Priority-based routing",
      "Skill-based assignment",
      "Load balancing"
    ]
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Comprehensive insights into your support operations.",
    benefits: [
      "Real-time metrics",
      "Performance tracking",
      "Custom reports"
    ]
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Bank-grade security to protect your data and communications.",
    benefits: [
      "End-to-end encryption",
      "Compliance ready",
      "Regular security audits"
    ]
  },
  {
    icon: "🌐",
    title: "Global Support",
    description: "24/7 support in multiple languages across all time zones.",
    benefits: [
      "Multi-language support",
      "Cultural awareness",
      "Time zone coverage"
    ]
  }
]

const integrations = [
  { icon: "💬", name: "Slack" },
  { icon: "📧", name: "Email" },
  { icon: "💻", name: "CRM Systems" },
  { icon: "📱", name: "Mobile Apps" },
  { icon: "🌐", name: "Web Platforms" },
  { icon: "📊", name: "Analytics Tools" }
]

const steps = [
  {
    title: "Sign Up",
    description: "Create your account and set up your organization profile."
  },
  {
    title: "Configure Agents",
    description: "Customize your AI agents to match your business needs."
  },
  {
    title: "Integrate Tools",
    description: "Connect your existing tools and platforms with our system."
  },
  {
    title: "Go Live",
    description: "Launch your multi-agent support system and start serving customers."
  }
] 