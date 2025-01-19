'use client'

import { motion } from 'framer-motion'
import { IconCircleDot } from '@tabler/icons-react'

const timelineSteps = [
  {
    title: "Problem Definition",
    description: "Identify and validate the core problem your MVP will solve"
  },
  {
    title: "Core Features",
    description: "Define and prioritize essential features that address the problem"
  },
  {
    title: "Design & Prototype",
    description: "Create wireframes and interactive prototypes for testing"
  },
  {
    title: "Development",
    description: "Build the core functionality with a focus on essential features"
  },
  {
    title: "Testing",
    description: "Validate functionality and gather initial user feedback"
  },
  {
    title: "Launch",
    description: "Release MVP to early adopters and collect feedback"
  }
]

export function MvpTimeline() {
  return (
    <section>
      <div className="container max-w-4xl">
        <h2 className="text-center mb-8">MVP Development Process</h2>
        <div className="relative">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 flex gap-4"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-8 h-8 rounded-full bg-primary flex items-center justify-center relative z-10"
                >
                  <IconCircleDot className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                {index !== timelineSteps.length - 1 && (
                  <div className="absolute top-8 left-4 w-[2px] h-full bg-muted" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="relative p-6 rounded-xl backdrop-blur-md bg-black/30 border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-xl" />
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl font-semibold mb-2 relative z-10"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground relative z-10"
                  >
                    {step.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 