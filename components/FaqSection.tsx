'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { IconPlus, IconMinus } from '@tabler/icons-react'

const faqs = [
  {
    question: "How long does it take to build an MVP?",
    answer: "Our MVP development typically takes 2-4 weeks, depending on the complexity and scope of your project. We focus on delivering core features quickly while maintaining quality."
  },
  {
    question: "What's included in the MVP package?",
    answer: "Our MVP packages include core feature development, UI/UX design, responsive implementation, basic testing, and deployment. Premium packages also include additional features, optimizations, and post-launch support."
  },
  {
    question: "Can I upgrade my MVP later?",
    answer: "Yes! Our MVPs are built with scalability in mind. You can easily add features or upgrade your application as your business grows and requirements evolve."
  },
  {
    question: "Do you provide support after launch?",
    answer: "Premium packages include 1 month of post-launch support. We also offer extended support packages and maintenance plans to ensure your MVP continues to perform optimally."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, proven technologies like React, Next.js, Node.js, and other industry-standard tools. The specific tech stack is chosen based on your project's requirements and scalability needs."
  },
  {
    question: "Do you help with deployment?",
    answer: "Yes, we handle the entire deployment process and can set up your application on various platforms like Vercel, AWS, or other cloud services based on your needs."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section>
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p>Everything you need to know about our MVP development process</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left backdrop-blur-md bg-black/30 border border-gray-800 rounded-2xl p-6 transition-colors hover:border-gray-700"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                  >
                    {openIndex === index ? (
                      <IconMinus className="w-5 h-5 text-gray-400" />
                    ) : (
                      <IconPlus className="w-5 h-5 text-gray-400" />
                    )}
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                    marginTop: openIndex === index ? 12 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 