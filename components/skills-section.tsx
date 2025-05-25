import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 80 },
    ],
  },
]

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Sass",
  "Git",
  "Docker",
  "AWS",
  "Vercel",
  "Figma",
  "Prisma",
  "GraphQL",
  "REST APIs",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
