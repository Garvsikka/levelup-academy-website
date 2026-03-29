import React from "react"
import { Helmet } from "react-helmet-async"
import HeroSection from "../components/HeroSection"
import CinematicTeaching from "../components/CinematicTeaching"
import PhilosophyGrid from "../components/PhilosophyGrid"
import CoursesPage from "../components/CoursesPage"
import IssueSolver from "../components/IssueSolver"
import AboutFounder from "../components/AboutFounder"
import LevelUpLife from "../components/LevelUpLife"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LevelUp Academy | AI-Powered Maths Learning in Delhi</title>
        <meta
          name="description"
          content="Delhi's first & only institute developing AI-powered maths games. Expert coaching for Classes 8-12 with 98% success rate. 24/7 doubt support. Rohini & Pitampura."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.levelupacademy.com/" />
      </Helmet>

      <main className="min-h-screen bg-dark-900 pt-20">
        <HeroSection />
        <CinematicTeaching />
        <PhilosophyGrid />
        <CoursesPage />
        <IssueSolver />
        <AboutFounder />
        <LevelUpLife />
      </main>
    </>
  )
}