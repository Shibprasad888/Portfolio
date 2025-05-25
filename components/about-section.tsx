import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const highlights = ["3+ Years Experience", "50+ Projects Completed", "Full Stack Development", "Modern Technologies"]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Full Stack Developer with over 3 years of experience in creating modern web
                applications. My journey started with a curiosity about how websites work, and it has evolved into a
                deep love for crafting exceptional digital experiences.
              </p>
              <p>
                I specialize in React, Next.js, TypeScript, and modern web technologies. I believe in writing clean,
                maintainable code and creating user-centric applications that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {highlights.map((highlight) => (
                <Badge key={highlight} variant="secondary">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-4">Quick Facts</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span>India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span>3+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Specialization</span>
                  <span>Full Stack</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="text-green-600">Open to work</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
