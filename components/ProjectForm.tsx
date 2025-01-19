'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const budgetRanges = [
  "< $1,000",
  "$1,000 - $2,000",
  "> $3,000"
]

const supabaseUrl = 'https://ctiwhitorqopttelbino.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0aXdoaXRvcnFvcHR0ZWxiaW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczMDk1MjMsImV4cCI6MjA1Mjg4NTUyM30.yxDnH2X8rTJz91JhQaDKCmQA_iTjhBzFxvtZo8Ydqi4'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function ProjectForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    description: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([formData])

      if (error) {
        console.error('Error submitting project:', error.message, error.details, error.hint)
      } else {
        console.log('Project submitted successfully:', data)
        setIsSubmitted(true)
        setFormData({ name: '', email: '', budget: '', description: '' }) // Reset form
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }

  if (isSubmitted) {
    return (
      <section>
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-md bg-black/30 border border-gray-800 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Thanks for reaching out!</h2>
            <p className="text-gray-300 mb-6">We'll get back to you within 24 hours to discuss your project.</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium 
                hover:bg-primary/90 transition-colors"
            >
              Submit Another Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className="container max-w-4xl">
        <h2 className="text-center mb-8">Start Your Project</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-md bg-black/30 border border-gray-800 rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} id="form-id" className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium text-gray-300">
                Budget Range
              </label>
              <select
                id="budget"
                required
                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-gray-300">
                Project Description
              </label>
              <textarea
                id="description"
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium 
                hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none
                transition-colors"
            >
              Submit Project
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
} 