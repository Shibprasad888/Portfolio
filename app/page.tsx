"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Globe,
  Cpu,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  Music,
  Zap,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const rotatingTexts = [
    "Passionate Computer Science Engineering Student",
    "Aspiring Software Developer",
    "Future Tech Innovator",
    "Problem Solving Enthusiast",
    "IoT & Automation Specialist",
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [rotatingTexts.length])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  // Animated Counter Component
  const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: duration * 1000 })
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
      const unsubscribe = springValue.on("change", (latest) => {
        setDisplayValue(Math.round(latest))
      })
      return unsubscribe
    }, [springValue])

    useEffect(() => {
      motionValue.set(value)
    }, [motionValue, value])

    return <span>{displayValue}%</span>
  }

  const skills = [
    {
      name: "C Programming",
      icon: Code,
      level: 90,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      icon: Code,
      level: 95,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Python",
      icon: Code,
      level: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Data Structure & Algorithm",
      icon: Database,
      level: 70,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/algorithm/algorithm-original.svg",
      image: "/images/data-structure.jpg",
    },
    {
      name: "MySQL",
      icon: Database,
      level: 75,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "HTML",
      icon: Globe,
      level: 95,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: Globe,
      level: 60,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: Globe,
      level: 60,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "IoT",
      icon: Cpu,
      level: 80,
      logo: "/placeholder.svg?height=40&width=40&text=IoT",
      image: "/images/iot.webp",
    },
    {
      name: "Dart",
      icon: Code,
      level: 40,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      flutterLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "BlockChain Technologies",
      icon: Database,
      level: 5,
      logo: "/placeholder.svg?height=40&width=40&text=BC",
      image: "/images/blockchain.webp",
    },
    {
      name: "AI & ML",
      icon: Cpu,
      level: 5,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "Data Analytics",
      icon: Globe,
      level: 5,
      logo: "/placeholder.svg?height=40&width=40&text=DA",
      image: "/images/data-analytics.jpeg",
    },
  ]

  // Updated projects array with Banking System moved to featured
  const projects = [
    {
      title: "A.U.R.A",
      description:
        "Automated Utility for Responsive Ambient-Lighting (A.K.A AURA) is an intelligent home automation system using IoT sensors and microcontrollers to control lighting, sensing temperature, and security purpose.",
      tech: ["Embedded C", "Python", "IoT", "Arduino", "ESP8266", "Motion Sensors", "LDR Sensor", "DHT22 Sensor"],
      status: "Completed",
      image: "/images/iot.webp",
      featured: true,
    },
    {
      title: "S.T.A.R",
      description:
        "Student Tracking and Academic Record (A.K.A STAR) is a modular console-based application in C++ to manage student records, including name, ID, course marks, and attendance.",
      tech: ["C++", "OOP", "DSA"],
      status: "Published",
      image: "/images/data-structure.jpg",
      featured: true,
    },
    {
      title: "Banking System",
      description:
        "A comprehensive system for managing banking operations, including account creation, balance management, and other operations with secure transaction processing.",
      tech: ["C", "DSA", "File System", "Security"],
      status: "Published",
      image: "/images/data-analytics.jpeg",
      featured: true,
    },
  ]

  const socialLinks = [
    {
      name: "Discord",
      icon: MessageCircle,
      href: "https://discordapp.com/users/718501980816932884",
      color: "hover:text-indigo-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shibprasadroy2602",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Shibprasad888",
      color: "hover:text-gray-300",
    },
    {
      name: "X (Twitter)",
      icon: () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com/Shibprasad_8888",
      color: "hover:text-gray-300",
    },
    {
      name: "Facebook",
      icon: () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "https://www.facebook.com/shibprasad26",
      color: "hover:text-blue-500",
    },
    {
      name: "Spotify",
      icon: Music,
      href: "https://open.spotify.com/user/31se5s7q2evsel6oiydzfjzr72ju",
      color: "hover:text-green-400",
    },
  ]

  // Enhanced Thunder effect component with optimized performance
  const ThunderEffect = () => (
    <motion.div
      className="absolute -top-2 -right-2 pointer-events-none"
      initial={{ opacity: 0, scale: 0 }}
      whileHover={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="relative"
      >
        <Zap className="w-4 h-4 text-yellow-400 drop-shadow-sm" />
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.4, 1],
          }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Zap className="w-4 h-4 text-cyan-400 drop-shadow-sm" />
        </motion.div>
      </motion.div>
    </motion.div>
  )

  // Enhanced Aesthetic Geometric Elements with Time-based Color Changes
  const GeometricElements = ({ section }: { section: string }) => {
    const getElements = () => {
      switch (section) {
        case "hero":
          return (
            <>
              {/* Large decorative circle with dynamic colors */}
              <motion.div
                className="absolute top-20 right-20 w-80 h-80 border-2 rounded-full dynamic-border-colors"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  borderColor: [
                    "rgba(139, 92, 246, 0.3)",
                    "rgba(6, 182, 212, 0.3)",
                    "rgba(59, 130, 246, 0.3)",
                    "rgba(236, 72, 153, 0.3)",
                    "rgba(139, 92, 246, 0.3)",
                  ],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  borderColor: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              {/* Small squares with color transitions */}
              <motion.div
                className="absolute top-40 left-20 w-8 h-8 border rotate-45 dynamic-border-colors"
                animate={{
                  rotate: [45, 405],
                  opacity: [0.3, 0.8, 0.3],
                  borderColor: [
                    "rgba(6, 182, 212, 0.4)",
                    "rgba(59, 130, 246, 0.4)",
                    "rgba(139, 92, 246, 0.4)",
                    "rgba(6, 182, 212, 0.4)",
                  ],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  borderColor: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute bottom-40 right-40 w-6 h-6 rounded-full dynamic-bg-colors"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                  backgroundColor: [
                    "rgba(59, 130, 246, 0.2)",
                    "rgba(6, 182, 212, 0.2)",
                    "rgba(139, 92, 246, 0.2)",
                    "rgba(59, 130, 246, 0.2)",
                  ],
                }}
                transition={{
                  scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  opacity: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  backgroundColor: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
            </>
          )
        case "about":
          return (
            <>
              <motion.div
                className="absolute top-10 left-10 w-16 h-16 border rounded-lg rotate-12 dynamic-border-colors"
                animate={{
                  rotate: [12, 372],
                  y: [0, -20, 0],
                  borderColor: [
                    "rgba(6, 182, 212, 0.25)",
                    "rgba(139, 92, 246, 0.25)",
                    "rgba(59, 130, 246, 0.25)",
                    "rgba(6, 182, 212, 0.25)",
                  ],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  y: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  borderColor: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute bottom-20 right-10 w-12 h-12 border-2 rounded-full dynamic-border-colors"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.6, 0.2],
                  borderColor: [
                    "rgba(59, 130, 246, 0.2)",
                    "rgba(236, 72, 153, 0.2)",
                    "rgba(6, 182, 212, 0.2)",
                    "rgba(59, 130, 246, 0.2)",
                  ],
                }}
                transition={{
                  scale: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  opacity: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  borderColor: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
            </>
          )
        case "skills":
          return (
            <>
              <motion.div
                className="absolute top-16 right-16 w-10 h-10 border rotate-45 dynamic-border-colors"
                animate={{
                  rotate: [45, 405],
                  x: [0, 20, 0],
                  borderColor: [
                    "rgba(139, 92, 246, 0.3)",
                    "rgba(16, 185, 129, 0.3)",
                    "rgba(6, 182, 212, 0.3)",
                    "rgba(139, 92, 246, 0.3)",
                  ],
                }}
                transition={{
                  rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  x: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  borderColor: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute bottom-16 left-16 w-14 h-14 border-2 rounded-full dynamic-border-colors"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  borderColor: [
                    "rgba(16, 185, 129, 0.25)",
                    "rgba(6, 182, 212, 0.25)",
                    "rgba(59, 130, 246, 0.25)",
                    "rgba(16, 185, 129, 0.25)",
                  ],
                }}
                transition={{
                  rotate: { duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  borderColor: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
            </>
          )
        case "projects":
          return (
            <>
              <motion.div
                className="absolute top-12 left-12 w-20 h-20 border rounded-xl rotate-12 dynamic-border-colors"
                animate={{
                  rotate: [12, 372],
                  scale: [1, 1.05, 1],
                  borderColor: [
                    "rgba(6, 182, 212, 0.2)",
                    "rgba(139, 92, 246, 0.2)",
                    "rgba(16, 185, 129, 0.2)",
                    "rgba(6, 182, 212, 0.2)",
                  ],
                }}
                transition={{
                  rotate: { duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  borderColor: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute bottom-12 right-12 w-8 h-8 rounded-full dynamic-bg-colors"
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.7, 0.3],
                  backgroundColor: [
                    "rgba(139, 92, 246, 0.15)",
                    "rgba(6, 182, 212, 0.15)",
                    "rgba(16, 185, 129, 0.15)",
                    "rgba(139, 92, 246, 0.15)",
                  ],
                }}
                transition={{
                  y: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  backgroundColor: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
            </>
          )
        case "contact":
          return (
            <>
              <motion.div
                className="absolute top-20 right-20 w-16 h-16 border-2 rounded-lg rotate-45 dynamic-border-colors"
                animate={{
                  rotate: [45, 405],
                  opacity: [0.25, 0.6, 0.25],
                  borderColor: [
                    "rgba(236, 72, 153, 0.25)",
                    "rgba(6, 182, 212, 0.25)",
                    "rgba(139, 92, 246, 0.25)",
                    "rgba(236, 72, 153, 0.25)",
                  ],
                }}
                transition={{
                  rotate: { duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  opacity: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  borderColor: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute bottom-20 left-20 w-12 h-12 border rounded-full dynamic-border-colors"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                  borderColor: [
                    "rgba(6, 182, 212, 0.3)",
                    "rgba(236, 72, 153, 0.3)",
                    "rgba(59, 130, 246, 0.3)",
                    "rgba(6, 182, 212, 0.3)",
                  ],
                }}
                transition={{
                  scale: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  borderColor: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
            </>
          )
        default:
          return null
      }
    }

    return <div className="absolute inset-0 pointer-events-none overflow-hidden">{getElements()}</div>
  }

  // Enhanced Particle System with Dynamic Colors
  const ParticleSystem = () => {
    const particles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 15 + 10,
      opacity: Math.random() * 0.4 + 0.1,
    }))

    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, -200, -100, 0],
              x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
              opacity: [0, particle.opacity, particle.opacity, 0],
              scale: [0, 1, 1.2, 1, 0],
              backgroundColor: [
                "rgba(6, 182, 212, 0.2)",
                "rgba(59, 130, 246, 0.2)",
                "rgba(139, 92, 246, 0.2)",
                "rgba(6, 182, 212, 0.2)",
              ],
            }}
            transition={{
              y: { duration: particle.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              x: { duration: particle.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              opacity: { duration: particle.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              scale: { duration: particle.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              backgroundColor: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: particle.delay,
              },
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ perspective: "2000px" }}>
      {/* Enhanced Particle System */}
      <ParticleSystem />

      {/* Enhanced Fixed Navigation - Always Visible */}
      <motion.nav
        className="fixed-nav"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent relative cursor-pointer"
              initial={{ scale: 0, rotateY: -180 }}
              animate={isLoaded ? { scale: 1, rotateY: 0 } : { scale: 0, rotateY: -180 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.08, rotateY: 8, z: 12 }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => scrollToSection("home")}
            >
              Axid
            </motion.div>

            <div className="flex space-x-8">
              {["home", "about", "skills", "projects"].map((section, index) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, y: -25, rotateX: -90 }}
                  animate={isLoaded ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: -25, rotateX: -90 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.08, type: "spring", stiffness: 100 }}
                  onClick={() => scrollToSection(section)}
                  whileHover={{ scale: 1.12, rotateX: 6, z: 20, color: "#06b6d4" }}
                  whileTap={{ scale: 0.96 }}
                  className={`capitalize transition-all duration-200 hover:text-cyan-400 transform-gpu text-lg font-medium relative ${
                    activeSection === section ? "text-cyan-400" : "text-gray-300"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    textShadow: activeSection === section ? "0 0 12px rgba(6, 182, 212, 0.5)" : "none",
                  }}
                >
                  {section === "home" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1)}
                  <ThunderEffect />
                  <motion.div
                    className="absolute inset-0 bg-cyan-400/15 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.6, opacity: [0, 0.6, 0] }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg pt-20"
      >
        {/* Geometric Elements */}
        <GeometricElements section="hero" />

        {/* Enhanced 3D Background Elements */}
        <motion.div className="absolute inset-0 opacity-15" style={{ y }}>
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/12 to-blue-500/12 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              x: [0, 40, 0],
              y: [0, -25, 0],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/12 to-pink-500/12 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.3, 1.1],
              rotate: [360, 180, 0, 360],
              x: [0, -35, 0],
              y: [0, 35, 0],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div style={{ transformStyle: "preserve-3d" }}>
            {/* Enhanced Main Title */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-8 relative"
              initial={{ opacity: 0, scale: 0.6, rotateX: -50, z: -80 }}
              animate={
                isLoaded ? { opacity: 1, scale: 1, rotateX: 0, z: 0 } : { opacity: 0, scale: 0.6, rotateX: -50, z: -80 }
              }
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block relative gradient-text"
                animate={{
                  rotateY: [0, 2, 0, -2, 0],
                  scale: [1, 1.005, 1, 1.005, 1],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                style={{
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 0 12px rgba(6, 182, 212, 0.15)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                }}
              >
                Shib Prasad Roy
              </motion.span>
            </motion.h1>

            {/* Enhanced Dynamic Rotating Subtitle */}
            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed h-16 flex items-center justify-center"
              initial={{ opacity: 0, y: 50, rotateX: -35, z: -60 }}
              animate={isLoaded ? { opacity: 1, y: 0, rotateX: 0, z: 0 } : { opacity: 0, y: 50, rotateX: -35, z: -60 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 80 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 30, rotateX: -50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, rotateX: 50, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    transformStyle: "preserve-3d",
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.08)",
                  }}
                  className="block"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 50, scale: 0.9, z: -80 }}
              animate={isLoaded ? { opacity: 1, y: 0, scale: 1, z: 0 } : { opacity: 0, y: 50, scale: 0.9, z: -80 }}
              transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 90 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                whileHover={{ scale: 1.04, rotateX: 6, z: 15 }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: "preserve-3d" }}
                className="btn-3d"
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-4 rounded-full transition-all duration-300 text-lg font-semibold relative overflow-hidden group"
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 8px 20px rgba(6, 182, 212, 0.25), 0 4px 8px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative z-10">Explore Projects</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, rotateX: -6, z: 15 }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: "preserve-3d" }}
                className="btn-3d"
              >
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/12 hover:border-cyan-400 px-10 py-4 rounded-full transition-all duration-300 text-lg font-semibold relative overflow-hidden group"
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 8px 20px rgba(6, 182, 212, 0.15), 0 4px 8px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-cyan-400/6"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                  <span className="relative z-10">Get In Touch</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 15 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            whileHover={{ scale: 1.08 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown
              className="w-8 h-8 text-cyan-400/70"
              style={{ filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced About Section with Dynamic Colors */}
      <section id="about" className="py-24 relative about-bg" style={{ transformStyle: "preserve-3d" }}>
        <GeometricElements section="about" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-center mb-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent gradient-text"
              initial={{ opacity: 0.4, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ amount: 0.3, once: true }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-32 h-1 mx-auto rounded-full"
              initial={{ scaleX: 0, opacity: 0.6 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ amount: 0.3, once: true }}
              style={{ transformOrigin: "center" }}
              animate={{
                background: [
                  "linear-gradient(90deg, rgba(6, 182, 212, 1), rgba(59, 130, 246, 1))",
                  "linear-gradient(90deg, rgba(59, 130, 246, 1), rgba(139, 92, 246, 1))",
                  "linear-gradient(90deg, rgba(139, 92, 246, 1), rgba(6, 182, 212, 1))",
                  "linear-gradient(90deg, rgba(6, 182, 212, 1), rgba(59, 130, 246, 1))",
                ],
              }}
              transition={{
                background: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.1, margin: "0px 0px -25% 0px" }}
              style={{ transformStyle: "preserve-3d" }}
              className="card-3d"
            >
              <Card className="bg-gray-900/60 border-cyan-500/25 backdrop-blur-xl shadow-2xl border-2 hover:shadow-cyan-500/15 transition-all duration-400">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl text-cyan-400 font-bold">Educational Journey</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-l-4 border-cyan-500/40 pl-6 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.img
                        src="/images/iut.png"
                        alt="ICFAI University Tripura"
                        className="w-14 h-14 rounded-full object-contain bg-white/8 p-1"
                        whileHover={{ scale: 1.08, rotate: 4 }}
                        transition={{ duration: 0.25 }}
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">B.Tech Computer Science & Engineering</h3>
                        <p className="text-cyan-400 text-lg font-medium">ICFAI University Tripura</p>
                        <p className="text-gray-400">2023 - Present</p>
                      </div>
                    </div>
                    <motion.a
                      href="https://iutripura.edu.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 p-2 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-full transition-all duration-300 group"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                    </motion.a>
                  </div>
                  <div className="border-l-4 border-cyan-500/40 pl-6 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.img
                        src="/images/btvm.jpg"
                        alt="Bhavan's Tripura Vidya Mandir"
                        className="w-14 h-14 rounded-full object-contain bg-white/8 p-1"
                        whileHover={{ scale: 1.08, rotate: -4 }}
                        transition={{ duration: 0.25 }}
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Higher Secondary Education</h3>
                        <p className="text-cyan-400 text-lg font-medium">Bhavan's Tripura Vidya Mandir</p>
                        <p className="text-gray-400">Completed 2023</p>
                      </div>
                    </div>
                    <motion.a
                      href="https://www.bhavanstripura.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 p-2 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-full transition-all duration-300 group"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                    </motion.a>
                  </div>
                  <div className="border-l-4 border-cyan-500/40 pl-6 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.img
                        src="/images/btvm.jpg"
                        alt="Bhavan's Tripura Vidya Mandir"
                        className="w-14 h-14 rounded-full object-contain bg-white/8 p-1"
                        whileHover={{ scale: 1.08, rotate: 4 }}
                        transition={{ duration: 0.25 }}
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Secondary Education</h3>
                        <p className="text-cyan-400 text-lg font-medium">Bhavan's Tripura Vidya Mandir</p>
                        <p className="text-gray-400">Completed 2021</p>
                      </div>
                    </div>
                    <motion.a
                      href="https://www.bhavanstripura.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 p-2 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-full transition-all duration-300 group"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.1, margin: "0px 0px -25% 0px" }}
              className="space-y-8"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ amount: 0.1, margin: "0px 0px -25% 0px" }}
              >
                I'm a passionate Computer Science Engineering student with a deep fascination for technology and
                innovation. My journey in the world of programming began with curiosity and has evolved into a
                commitment to creating solutions that make a difference.
              </motion.p>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ amount: 0.1, margin: "0px 0px -25% 0px" }}
              >
                Currently pursuing my B.Tech at ICFAI University Tripura, I'm constantly exploring new technologies and
                pushing the boundaries of what's possible. From algorithms to IoT, I believe in the power of code to
                transform ideas into reality.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ amount: 0.1, margin: "0px 0px -25% 0px" }}
              >
                <motion.div
                  animate={{
                    backgroundColor: ["rgba(6, 182, 212, 0.15)", "rgba(59, 130, 246, 0.15)", "rgba(6, 182, 212, 0.15)"],
                    borderColor: ["rgba(6, 182, 212, 0.3)", "rgba(59, 130, 246, 0.3)", "rgba(6, 182, 212, 0.3)"],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Badge
                    variant="secondary"
                    className="shadow-xl transform hover:scale-104 hover:rotateY(6deg) transition-all duration-300 px-4 py-2 text-base interactive-element"
                  >
                    Problem Solver
                  </Badge>
                </motion.div>
                <motion.div
                  animate={{
                    backgroundColor: [
                      "rgba(59, 130, 246, 0.15)",
                      "rgba(139, 92, 246, 0.15)",
                      "rgba(59, 130, 246, 0.15)",
                    ],
                    borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(139, 92, 246, 0.3)", "rgba(59, 130, 246, 0.3)"],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                >
                  <Badge
                    variant="secondary"
                    className="shadow-xl transform hover:scale-104 hover:rotateY(6deg) transition-all duration-300 px-4 py-2 text-base interactive-element"
                  >
                    Tech Enthusiast
                  </Badge>
                </motion.div>
                <motion.div
                  animate={{
                    backgroundColor: [
                      "rgba(139, 92, 246, 0.15)",
                      "rgba(6, 182, 212, 0.15)",
                      "rgba(139, 92, 246, 0.15)",
                    ],
                    borderColor: ["rgba(139, 92, 246, 0.3)", "rgba(6, 182, 212, 0.3)", "rgba(139, 92, 246, 0.3)"],
                  }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                >
                  <Badge
                    variant="secondary"
                    className="shadow-xl transform hover:scale-104 hover:rotateY(6deg) transition-all duration-300 px-4 py-2 text-base interactive-element"
                  >
                    Innovation Driven
                  </Badge>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section with Animated Progress Bars */}
      <section id="skills" className="py-24 skills-bg" style={{ transformStyle: "preserve-3d" }}>
        <GeometricElements section="skills" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-center mb-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent gradient-text"
              initial={{ opacity: 0.4, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ amount: 0.3, once: true }}
            >
              Technical Skills
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
              initial={{ scaleX: 0, opacity: 0.6 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ amount: 0.3, once: true }}
              style={{ transformOrigin: "center" }}
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ amount: 0.02, margin: "0px 0px -20% 0px" }}
                whileHover={{ scale: 1.04, rotateY: 6, z: 30 }}
                className="group card-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="bg-gray-900/65 border-cyan-500/25 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 h-full shadow-2xl transform hover:shadow-cyan-500/20 border-2 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/4 to-blue-500/4"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="mb-6 flex justify-center">
                      <motion.div
                        className="relative"
                        whileHover={{ rotate: 360, scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <div className="p-4 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full group-hover:from-cyan-500/25 group-hover:to-blue-500/25 transition-all duration-300 relative">
                          {skill.image ? (
                            <img
                              src={skill.image || "/placeholder.svg"}
                              alt={skill.name}
                              className="w-10 h-10 object-contain rounded"
                              onError={(e) => {
                                e.currentTarget.src =
                                  skill.logo || "/placeholder.svg?height=40&width=40&text=" + skill.name.charAt(0)
                              }}
                            />
                          ) : skill.name === "Dart" ? (
                            <div className="flex items-center justify-center space-x-1">
                              <img
                                src={skill.logo || "/placeholder.svg"}
                                alt="Dart"
                                className="w-5 h-5 object-contain"
                                onError={(e) => {
                                  e.currentTarget.src = "/placeholder.svg?height=20&width=20&text=D"
                                }}
                              />
                              <img
                                src={skill.flutterLogo || "/placeholder.svg"}
                                alt="Flutter"
                                className="w-5 h-5 object-contain"
                                onError={(e) => {
                                  e.currentTarget.src = "/placeholder.svg?height=20&width=20&text=F"
                                }}
                              />
                            </div>
                          ) : (
                            <img
                              src={skill.logo || "/placeholder.svg"}
                              alt={skill.name}
                              className="w-10 h-10 object-contain"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg?height=40&width=40&text=" + skill.name.charAt(0)
                              }}
                            />
                          )}
                        </div>
                      </motion.div>
                    </div>
                    <h3 className="text-base font-bold text-white mb-4 leading-tight">{skill.name}</h3>

                    {/* Enhanced Animated Progress Bar */}
                    <div className="w-full bg-gray-700/50 rounded-full h-3 mb-3 overflow-hidden relative">
                      <motion.div
                        className="h-3 rounded-full relative overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.08,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        viewport={{ amount: 0.02, margin: "0px 0px -20% 0px", once: true }}
                        style={{
                          background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
                          backgroundSize: "200% 100%",
                        }}
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                        }}
                        transition={{
                          backgroundPosition: {
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.1 + 1.5,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Animated Percentage Counter */}
                    <motion.span
                      className="text-base text-gray-400 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.08 + 0.5 }}
                      viewport={{ amount: 0.02, margin: "0px 0px -20% 0px", once: true }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.08 + 1 }}
                        viewport={{ amount: 0.02, margin: "0px 0px -20% 0px", once: true }}
                      >
                        <AnimatedCounter value={skill.level} duration={1.5} />
                      </motion.span>
                    </motion.span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section - Only Featured Projects */}
      <section id="projects" className="py-24 projects-bg" style={{ transformStyle: "preserve-3d" }}>
        <GeometricElements section="projects" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-center mb-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent gradient-text"
              initial={{ opacity: 0.4, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ amount: 0.3, once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
              initial={{ scaleX: 0, opacity: 0.6 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ amount: 0.3, once: true }}
              style={{ transformOrigin: "center" }}
            />
          </motion.div>

          {/* Featured Projects Grid - Now includes Banking System */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60, rotateX: -20, z: -100 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80,
                }}
                viewport={{ amount: 0.05, margin: "0px 0px -20% 0px" }}
                whileHover={{ y: -8, scale: 1.02, rotateY: 4, z: 50 }}
                className="group card-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="bg-gray-900/65 border-cyan-500/25 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 h-full shadow-2xl transform hover:shadow-cyan-500/20 border-2 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/4 to-blue-500/4"
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  {project.image && (
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                      <Badge
                        variant="secondary"
                        className="absolute top-4 right-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/40 shadow-xl"
                      >
                        Featured
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors duration-300 font-bold">
                        {project.title}
                      </CardTitle>
                      <motion.div whileHover={{ rotate: 45, scale: 1.15 }} transition={{ duration: 0.25 }}>
                        <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                      </motion.div>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`w-fit shadow-xl text-base px-3 py-1 ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : project.status === "Published"
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-gray-300 mb-6 leading-relaxed text-base">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.03 }}
                          viewport={{ amount: 0.05, margin: "0px 0px -20% 0px" }}
                          whileHover={{ scale: 1.04, rotateZ: 2 }}
                          className="interactive-element"
                        >
                          <Badge
                            variant="outline"
                            className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/8 transition-all duration-200 shadow-lg hover:shadow-cyan-500/15 text-sm px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 contact-bg" style={{ transformStyle: "preserve-3d" }}>
        <GeometricElements section="contact" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-center mb-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent gradient-text"
              initial={{ opacity: 0.4, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ amount: 0.3, once: true }}
            >
              Get In Touch
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0, opacity: 0.6 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ amount: 0.3, once: true }}
              style={{ transformOrigin: "center" }}
            />
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on exciting projects or discuss opportunities? Let's connect!
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Information Section */}
              <motion.div
                initial={{ opacity: 0, x: -40, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, margin: "0px 0px -15% 0px" }}
                className="space-y-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Contact Information</h3>

                {/* Email */}
                <motion.a
                  href="mailto:connect@shibprasad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-6 group cursor-pointer interactive-element"
                  whileHover={{ scale: 1.03, rotateY: 2, z: 15 }}
                  transition={{ duration: 0.25 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 shadow-xl">
                    <Mail className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Email</h4>
                    <p className="text-gray-400 text-lg">connect@shibprasad.com</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.div
                  className="flex items-center space-x-6 group interactive-element"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 shadow-xl">
                    <Phone className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Phone</h4>
                    <p className="text-gray-400 text-lg">+91 8415077112</p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  className="flex items-center space-x-6 group interactive-element"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 shadow-xl">
                    <MapPin className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Location</h4>
                    <p className="text-gray-400 text-lg">Tripura, India</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Connect With Me Section */}
              <motion.div
                initial={{ opacity: 0, x: 40, rotateY: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.1, margin: "0px 0px -15% 0px" }}
                className="space-y-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Connect With Me</h3>

                <div className="grid grid-cols-2 gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon-optimized flex flex-col items-center p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl hover:from-cyan-500/30 hover:to-blue-500/30 shadow-xl relative overflow-hidden group ${social.color}`}
                      initial={{ opacity: 0, scale: 0.9, y: 25 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                      viewport={{ amount: 0.1, margin: "0px 0px -15% 0px", once: true }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-cyan-400/8 rounded-xl"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                      <div className="relative z-10 mb-3">
                        {typeof social.icon === "function" ? (
                          <social.icon />
                        ) : (
                          <social.icon className="w-8 h-8 text-cyan-400" />
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-300 relative z-10">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 border-t border-cyan-500/25">
        <div className="container mx-auto px-6">
          {/* Buy Me a Coffee Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.5, once: true }}
          >
            <motion.h3
              className="text-2xl font-bold text-cyan-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ amount: 0.5, once: true }}
            >
              Support My Work
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ amount: 0.5, once: true }}
            >
              If you found my projects helpful or would like to support my journey in tech, consider buying me a coffee!
            </motion.p>

            <motion.a
              href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thanks-3GfgCfnpk8bQAKu9b98XtZuI6mNJrk.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-yellow-500/25 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ amount: 0.5, once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                ☕
              </motion.div>
              <span>Buy Me a Coffee</span>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center pt-8 border-t border-cyan-500/15"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ amount: 0.5, once: true }}
          >
            <p className="text-gray-400 text-lg">© 2024 Shib Prasad Roy. Crafted with passion and code.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
