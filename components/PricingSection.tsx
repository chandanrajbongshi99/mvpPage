'use client'

import { motion } from 'framer-motion'
import { IconCheck } from '@tabler/icons-react'

const pricingPlans = [
  {
    name: "Essential MVP",
    price: "$1,400",
    features: [
      "Core MVP development with essential features only",
      "Basic UX/UI design and landing page",
      "2-4 week turnaround",
      "Handover documentation"
    ],
    cta: "Get started"
  },
  {
    name: "Premium MVP",
    price: "$2,900",
    features: [
      "Fully functional MVP with advanced integrations",
      "Premium UX/UI design for target audience",
      "Custom landing page optimized for conversion",
      "2-4 week turnaround with project management",
      "Documentation + 1 month post-launch support"
    ],
    cta: "Get started",
    popular: true
  }
]

export function PricingSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section>
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="mb-4">Choose Your MVP Package</h2>
          <p>Professional MVP Development Solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative backdrop-blur-md bg-black/30 border border-gray-800 rounded-2xl p-8
                ${plan.popular ? 'ring-2 ring-primary/50' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">one-time payment</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button  
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors
                  ${plan.popular 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                  }
                `}
                onClick={() => scrollToSection('#contact')}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 