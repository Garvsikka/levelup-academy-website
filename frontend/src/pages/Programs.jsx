import React from "react";
import { Helmet } from "react-helmet-async";
import LevelUpLife from "../components/LevelUpLife";

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>LevelUp Life Programs - Industrial Visits, Placement Prep & Success Festival</title>
        <meta
          name="description"
          content="Explore LevelUp Life programs including industrial visits, placement preparation, mock interviews, and annual success festival with awards."
        />
        <link rel="canonical" href="https://www.levelupacademy.com/programs" />
      </Helmet>

      <main className="min-h-screen bg-dark-900 pt-32 pb-20">
        <LevelUpLife />
      </main>
    </>
  );
}