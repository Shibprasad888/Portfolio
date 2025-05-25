"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TypewriterEffect } from "@/components/typewriter-effect"

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-float">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text">S</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Shibprasad</span>
        </h1>

        <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-16">
          <TypewriterEffect
            words={["Full Stack Developer", "React Specialist", "TypeScript Expert", "UI/UX Enthusiast"]}
          />
        </div>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Passionate about creating exceptional digital experiences with modern web technologies. I build scalable
          applications that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            View My Work
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="mailto:contact@example.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <Button variant="ghost" size="sm" onClick={scrollToAbout} className="animate-bounce">
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
