interface Skill {
  category: string
  items: string[]
}

export function SkillsSection() {
  const skills: Skill[] = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Material UI"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "AWS", "Firebase", "Vercel", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Design & Other",
      items: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design", "SEO", "Performance Optimization"],
    },
  ]

  return (
    <div className="px-4 space-y-4">
      <h2 className="text-xl text-purple-400 font-bold mb-2">Core Competencies That Define My Craft</h2>

      <div className="mb-4 text-xs">
        <div className="flex mb-2">
          <span className="text-green-400 mr-2">~$</span>
          <span className="text-gray-300">ls -la skills/</span>
        </div>
      </div>

      <div className="space-y-6">
        {skills.map((skillGroup, groupIndex) => (
          <div key={`skill-group-${groupIndex}`} className="skill-category">
            <h3 className="text-blue-400 mb-2 font-medium text-sm">{skillGroup.category}/</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ml-3">
              {skillGroup.items.map((skill, skillIndex) => (
                <div
                  key={`skill-${groupIndex}-${skillIndex}`}
                  className="text-xs py-1.5 px-2.5 bg-zinc-800/80 rounded flex items-center"
                >
                  <span className="text-green-400 mr-2">→</span>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-gray-400 pt-4 italic">
        Type <span className="text-green-400 not-italic">contact</span> to get in touch.
      </div>
    </div>
  )
}
