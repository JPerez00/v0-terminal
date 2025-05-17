import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment processing and inventory management.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
      link: "#",
      image: "/placeholder.svg?height=225&width=400", // 16:9 aspect ratio
    },
    {
      title: "AI Content Generator",
      description: "Web application that leverages AI to generate marketing content and social media posts.",
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
      link: "#",
      image: "/placeholder.svg?height=225&width=400", // 16:9 aspect ratio
    },
    {
      title: "Health & Fitness Tracker",
      description: "Mobile-first application for tracking workouts, nutrition, and health metrics.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js", "OAuth"],
      link: "#",
      image: "/placeholder.svg?height=225&width=400", // 16:9 aspect ratio
    },
    {
      title: "Developer Portfolio",
      description: "Terminal-inspired portfolio website showcasing my projects and skills.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "#",
      image: "/placeholder.svg?height=225&width=400", // 16:9 aspect ratio
    },
  ]

  return (
    <div className="px-4 space-y-4">
      <h2 className="text-xl text-purple-400 font-bold mb-2">Things I’ve made trying to put my dent in the universe.</h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-zinc-700 rounded-md overflow-hidden bg-zinc-900/50">
            <div className="flex flex-col md:flex-row">
              {/* Content section (left side) */}
              <div className="p-4 md:w-1/2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg text-blue-400 font-bold">{project.title}</h3>
                  <a href={project.link} className="text-gray-400 hover:text-gray-300 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 bg-zinc-800 text-green-400 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image section (right side) - 16:9 aspect ratio */}
              <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-zinc-700">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                {/* 16:9 aspect ratio */}
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  layout="fill" // This will make the image fill the parent container
                  objectFit="cover" // This will maintain the aspect ratio and cover the area
                  className="absolute inset-0"
                />
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-gray-400 mt-4 italic">
        Type <span className="text-green-400 not-italic">skills</span> to see my technical expertise.
      </div>
    </div>
  )
}
