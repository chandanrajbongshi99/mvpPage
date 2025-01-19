'use client'

import { motion } from 'framer-motion'

const works = [
  {
    title: "Web Applications",
    description: "Scalable and modern web solutions",
    image: "/web-app.jpg",
    tags: ["React", "Node.js"],
    size: "large" // will take 2 columns
  },
  {
    title: "Mobile Apps",
    description: "Native iOS and Android development",
    image: "/mobile-app.jpg",
    tags: ["React Native"],
    size: "small"
  },
  {
    title: "E-commerce",
    description: "Custom shopping experiences",
    image: "/ecommerce.jpg",
    tags: ["Next.js", "Stripe"],
    size: "small"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable infrastructure",
    image: "/cloud.jpg",
    tags: ["AWS", "Azure"],
    size: "small"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful user interfaces",
    image: "/design.jpg",
    tags: ["Figma", "Adobe XD"],
    size: "small"
  }
]

export function WorkSection() {
  return (
    <section>
      <div className="container max-w-4xl">
        <h2 className="text-center mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl backdrop-blur-md bg-black/30 border border-gray-800
                ${work.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
              `}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="relative z-20 h-full p-6 flex flex-col justify-end">
                <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {work.title}
                  </h3>
                  <p className="text-gray-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {work.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 