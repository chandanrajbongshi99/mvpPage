import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// Function to handle scrolling
const scrollToForm = () => {
  const formElement = document.getElementById('form-id');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      {/* Hero Section with all content */}
      <section className="relative min-h-screen">
        {/* Background Image and Gradient Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%203-SkcLxIgfwTewhbVwXy0sgpz9vAsNKE.svg")' }}
          />
          <div className="absolute -left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[150px] mix-blend-overlay" />
          <div className="absolute -right-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-green-500/20 blur-[150px] mix-blend-overlay" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-12">
          {/* Notification Banner */}
          <div className="flex justify-center pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm backdrop-blur animate-pulse">
              <Heart className="h-4 w-4 text-white" />
              Only 2 spots left
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Your MVP, Built
              <br />
              <span className="font-bold italic text-5xl sm:text-7xl md:text-8xl font-knewave">
                Fast & Affordable
              </span>
            </h1>
            
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Partner with us to validate your startup idea with a working
              product — without breaking the bank
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
                onClick={scrollToForm}
              >
                Get started
              </Button>
              <Button size="lg" variant="outline">
                Schedule a free consultation
              </Button>
            </div>

            {/* Trust Badge */}
         

            {/* Features Section */}
            <div className="mx-auto max-w-6xl mt-6 text-left">
              <div className="mt-24">
                <h1 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h1>
              </div>
              <div className="grid gap-12 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-12">
                  <div className="flex items-center gap-8 mb-6">
                    <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-left">We Build Together</h3>
                  </div>
                  <p className="text-sm text-gray-400 pl-14 text-left">
                    We collaborate directly with you to brainstorm and refine your product idea
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-12">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Affordably Priced for Startups</h3>
                  </div>
                  <p className="text-sm text-gray-400 pl-14">
                    Cost-effective MVP solutions starting at{" "}
                    <span className="font-semibold text-white">$1999</span>
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-12">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Design-First Approach</h3>
                  </div>
                  <p className="text-sm text-gray-400 pl-14">
                    Exceptional design paired with scalable development—no compromises
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-12">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Rapid Iteration</h3>
                  </div>
                  <p className="text-sm text-gray-400 pl-14">
                    Continuous feedback-driven improvements so your product evolves with user needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

