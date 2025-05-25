import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive maps.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "OpenWeather API", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and featuring smooth animations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">Featured</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
