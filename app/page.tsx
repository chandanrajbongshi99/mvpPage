"use client"

import LandingPage from "../page"
import { MvpTimeline } from '@/components/MvpTimeline'
import { WorkSection } from '@/components/WorkSection'
import { ProjectForm } from '@/components/ProjectForm'
import { Footer } from '@/components/Footer'
import { PricingSection } from '@/components/PricingSection'
import { FaqSection } from '@/components/FaqSection'
import { Navigation } from '@/components/Navigation'
import { TeamSection } from '@/components/TeamSection'

export default function SyntheticV0PageForDeployment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <LandingPage />
        <section id="process">
          <MvpTimeline />
        </section>
        <section id="work">
          <WorkSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <TeamSection />
        <section id="faq">
          <FaqSection />
        </section>
        <section id="contact">
          <ProjectForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}