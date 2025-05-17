import { FileText } from "lucide-react"

export function ResumeSection() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead development of the company's flagship SaaS product. Implemented new features and optimized performance, resulting in a 40% increase in user engagement.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Collaborated with design and product teams to deliver high-quality web applications.",
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Agency",
      period: "2016 - 2018",
      description:
        "Built responsive websites and e-commerce solutions for various clients. Gained experience with modern frontend frameworks and backend technologies.",
    },
  ]

  const education = [
    {
      degree: "M.S. in Computer Science",
      institution: "Tech University",
      year: "2016",
      details: "Specialized in Software Engineering and Human-Computer Interaction.",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "State University",
      year: "2014",
      details: "Minor in Mathematics. Dean's List all semesters.",
    },
  ]

  return (
    <div className="px-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-yellow-300 font-bold">Resume</h2>
        <button className="px-3 py-1.5 flex items-center text-blue-400 hover:text-blue-300 text-sm bg-blue-950/30 rounded-lg border border-white/10">
          <FileText className="h-4 w-4 mr-1" />
          Download PDF
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-purple-400 font-bold mb-2">Experience</h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-zinc-700 pl-4 ml-2">
                <div className="flex justify-between">
                  <h4 className="text-blue-400 font-bold">{exp.title}</h4>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <div className="text-green-400 text-sm">{exp.company}</div>
                <p className="text-gray-300 mt-1 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-purple-400 font-bold mb-2">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-zinc-700 pl-4 ml-2">
                <div className="flex justify-between">
                  <h4 className="text-blue-400 font-bold">{edu.degree}</h4>
                  <span className="text-gray-400 text-sm">{edu.year}</span>
                </div>
                <div className="text-green-400 text-sm">{edu.institution}</div>
                <p className="text-gray-300 mt-1 text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-gray-400 mt-4 italic">
        Type <span className="text-green-400 not-italic">projects</span> to see my portfolio work.
      </div>
    </div>
  )
}
