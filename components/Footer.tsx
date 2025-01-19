'use client'

import { motion } from 'framer-motion'
import { IconMail, IconBrandTwitter } from '@tabler/icons-react'

export function Footer() {
  return (
    <footer className="py-12 backdrop-blur-md bg-black/30 border-t border-gray-800">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-8">
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <IconMail className="w-5 h-5" />
              <span>contact@example.com</span>
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <IconBrandTwitter className="w-5 h-5" />
              <span>@yourusername</span>
            </motion.a>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 