import React from "react"
import { Helmet } from "react-helmet-async"
import AboutFounder from "../components/AboutFounder"

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Vaibhav Kukreja - LevelUp Academy Founder</title>
        <meta
          name="description"
          content="Meet Vaibhav Kukreja, ISB alumni and founder of LevelUp Academy. Global Hackathon winner and ex-EY consultant transforming maths education."
        />
        <link rel="canonical" href="https://www.levelupacademy.com/about" />
      </Helmet>

      <main className="min-h-screen bg-dark-900 pt-32 pb-20">
        <AboutFounder />
      </main>
    </>
  )
}