import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    location: "Mumbai, India",
    period: "2022 - 2023",
    description:
      "Developed and maintained multiple client projects, focusing on performance optimization and user experience improvements.",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Bangalore, India",
    period: "2021 - 2022",
    description:
      "Built responsive web applications and collaborated with design teams to implement pixel-perfect UI components.",
    technologies: ["React", "JavaScript", "Sass", "REST APIs"],
  },
]

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "XYZ University",
    period: "2017 - 2021",
    description: "Graduated with honors. Specialized in web development and software engineering.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{edu.field}</CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.institution}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
