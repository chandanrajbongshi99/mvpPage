'use client'

import { motion } from 'framer-motion'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

const teamMembers = [
  {
    name: "John Smith",
    role: "Full Stack Developer",
    image: "/team/john.jpg", // Add placeholder image
    bio: "10+ years of experience building scalable web applications. Previously worked at Google and Amazon.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "/team/sarah.jpg",
    bio: "Design leader with a passion for creating beautiful, user-centric interfaces. Former design lead at Figma.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
]

export function TeamSection() {
  return (
    <section>
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="mb-4">Meet Your Team</h2>
          <p className="text-gray-400">Work with experienced developers who understand your vision</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="backdrop-blur-md bg-black/30 border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-gray-800"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-gray-400 mb-6">{member.bio}</p>

                <div className="flex gap-4">
                  <motion.a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <IconBrandGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <IconBrandLinkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 