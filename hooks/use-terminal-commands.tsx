"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { HomeSection } from "@/components/sections/home-section"
import { GithubSection } from "@/components/sections/github-section"

type HistoryEntry = { type: string; content: React.ReactNode; id: string }
type SetHistoryFunction = React.Dispatch<React.SetStateAction<HistoryEntry[]>>

export function useTerminalCommands(setHistory: SetHistoryFunction) {
  const [lastCommand, setLastCommand] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [lastOutputId, setLastOutputId] = useState<string | null>(null)

  const commandHelp: Record<string, string> = {
    help: "Display available commands",
    ls: "List available sections",
    home: "Display welcome message",
    about: "Display information about me",
    projects: "View my portfolio projects",
    skills: "List my technical skills",
    contact: "Show my contact information",
    resume: "View my resume",
    github: "Open my GitHub profile",
    clear: "Clear the terminal",
    stack: "Check the tech stack & versions used",
  }

  const addToHistory = useCallback(
    (entry: HistoryEntry) => {
      setHistory((prev) => [...prev, entry])
    },
    [setHistory],
  )

  const processCommand = useCallback(
    (input: string) => {
      const trimmedInput = input.trim()
      const [command, ...args] = trimmedInput.split(" ")
      const commandId = `cmd-${Date.now()}`

      // Add command to history
      addToHistory({
        type: "command",
        content: (
          <div className="flex items-center">
            <span className="text-green-400 mr-2">~$</span>
            <span className="text-gray-200">{trimmedInput}</span>
          </div>
        ),
        id: commandId,
      })

      setLastCommand(command.toLowerCase())

      // Start loading - this triggers the spinner animation
      setIsLoading(true)

      // Process command immediately
      let content: React.ReactNode = null
      const outputId = `output-${Date.now()}`

      switch (command.toLowerCase()) {
        case "home":
          content = <HomeSection />
          break

        case "help":
          content = (
            <div className="pl-4">
              <p className="text-xl text-purple-400 font-bold mb-2">Available commands:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                {Object.entries(commandHelp).map(([cmd, desc]) => (
                  <div key={cmd} className="mb-1">
                    <span className="text-green-400 mr-2">{cmd}</span>
                    <span className="text-gray-400">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )
          break

        case "about":
          content = <AboutSection />
          break

        case "projects":
          content = <ProjectsSection />
          break

        case "skills":
          content = <SkillsSection />
          break

        case "contact":
          content = <ContactSection />
          break

        case "resume":
          content = <ResumeSection />
          break

        case "github":
          content = <GithubSection />
          break

        case "clear":
          setHistory([])
          setLastOutputId(null)
          // We still want to show the spinner animation for clear command
          setTimeout(() => {
            setIsLoading(false)
          }, 0)
          return

        case "ls":
          content = (
            <div className="text-lg pl-4 grid grid-cols-2 md:grid-cols-3 gap-2">
              <span className="text-blue-400">home/</span>
              <span className="text-blue-400">about/</span>
              <span className="text-blue-400">projects/</span>
              <span className="text-blue-400">skills/</span>
              <span className="text-blue-400">resume/</span>
              <span className="text-blue-400">contact/</span>
              <span className="text-blue-400">github/</span>
            </div>
          )
          break

          case "stack":
          content = (
            <>
            <div className="mb-4 text-sm">
              <div className="flex mb-2">
                <span className="text-gray-300">This is a next.js project, and this is the full stack used:</span>
              </div>
            </div>
            <div className="px-4 grid grid-cols-2 md:grid-cols-2 gap-2">
              <div>
                <span className="text-red-400">"next"</span><span className="text-gray-300">:</span><span className="text-green-400">"^14.2.28"</span>
              </div>
              <div>
                <span className="text-red-400">"react"</span><span className="text-gray-300">:</span><span className="text-green-400">"^18"</span>
              </div>
              <div>
                <span className="text-red-400">"react-dom"</span><span className="text-gray-300">:</span><span className="text-green-400">"^18"</span>
              </div>
              <div>
                <span className="text-red-400">"react-hook-form"</span><span className="text-gray-300">:</span><span className="text-green-400">"^7.56.3"</span>
              </div>
              <div>
                <span className="text-red-400">"tailwindcss"</span><span className="text-gray-300">:</span><span className="text-green-400">"^3.4.17"</span>
              </div>
              <div>
                <span className="text-red-400">"tailwind-merge"</span><span className="text-gray-300">:</span><span className="text-green-400">"^2.5.5"</span>
              </div>
              <div>
                <span className="text-red-400">"tailwindcss-animate"</span><span className="text-gray-300">:</span><span className="text-green-400">^1.0.7"</span>
              </div>
              <div>
                <span className="text-red-400">"typescript"</span><span className="text-gray-300">:</span><span className="text-green-400">"^5"</span>
              </div>
              <div>
                <span className="text-red-400">"@hookform/resolvers"</span><span className="text-gray-300">:</span><span className="text-green-400">"^3.10.0"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-accordion"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.2.2"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-alert-dialog"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.4"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-aspect-ratio"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.1"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-avatar"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.2"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-checkbox"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.3"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-collapsible"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.2"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-context-menu"</span><span className="text-gray-300">:</span><span className="text-green-400">"2.2.4"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-dialog"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.4"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-dropdown-menu"</span><span className="text-gray-300">:</span><span className="text-green-400">"2.1.4"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-hover-card"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.4"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-label"</span><span className="text-gray-300">:</span><span className="text-green-400">"2.1.1"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-menubar"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.4"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-navigation-menu"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.2.3"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-popover"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.4"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-progress"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.1"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-radio-group"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.2.2"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-scroll-area"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.2.2"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-select"</span><span className="text-gray-300">:</span><span className="text-green-400">"2.1.4"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-separator"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.1"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-slider"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.2.2"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-slot"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.1"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-switch"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.2"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-tabs"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.2"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-toast"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.2.4"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-toggle"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.1"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-toggle-group"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.1"</span>
              </div>
              <div>
                <span className="text-red-400">"@radix-ui/react-tooltip"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.1.6"</span>
              </div>
              <div>
                <span className="text-red-400">"class-variance-authority"</span><span className="text-gray-300">:</span><span className="text-green-400">"^0.7.1"</span>
              </div>
              <div>
                <span className="text-red-400">"clsx"</span><span className="text-gray-300">:</span><span className="text-green-400">"^2.1.1"</span>
              </div>
              <div>
                <span className="text-red-400">"cmdk"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.0.4"</span>
              </div>
              <div>
                <span className="text-red-400">"embla-carousel-react"</span><span className="text-gray-300">:</span><span className="text-green-400">"8.5.1"</span>
              </div>
              <div>
                <span className="text-red-400">"input-otp"</span><span className="text-gray-300">:</span><span className="text-green-400">"1.4.1"</span>
              </div>
              <div>
                <span className="text-red-400">"lucide-react"</span><span className="text-gray-300">:</span><span className="text-green-400">"^0.454.0"</span>
              </div>
              <div>
                <span className="text-red-400">"next-themes"</span><span className="text-gray-300">:</span><span className="text-green-400">"^0.4.4"</span>
              </div>
              <div>
                <span className="text-red-400">"react-resizable-panels"</span><span className="text-gray-300">:</span><span className="text-green-400">"^2.1.7"</span>
              </div>
              <div>
                <span className="text-red-400">"recharts"</span><span className="text-gray-300">:</span><span className="text-green-400">"2.15.0"</span>
              </div>
              <div>
                <span className="text-red-400">"resend"</span><span className="text-gray-300">:</span><span className="text-green-400">"^4.5.1"</span>
              </div>
              <div>
                <span className="text-red-400">"sonner"</span><span className="text-gray-300">:</span><span className="text-green-400">""^1.7.1"</span>
              </div>
              <div>
                <span className="text-red-400">"vaul"</span><span className="text-gray-300">:</span><span className="text-green-400">"^0.9.6"</span>
              </div>
              <div>
                <span className="text-red-400">"zod"</span><span className="text-gray-300">:</span><span className="text-green-400">"^3.24.4"</span>
              </div>
            </div>
            </>
          )
          break

        default:
          content = (
            <div className="text-red-400 pl-4">
              Command not found: {command}. Type <span className="text-yellow-300">help</span> to see available
              commands.
            </div>
          )
      }

      // Add content to history immediately
      if (content) {
        addToHistory({
          type: "output",
          content,
          id: outputId,
        })

        // Set the last output ID for scrolling
        setLastOutputId(commandId)
      }

      // The spinner will stop on its own after completing its animation cycles
      // We just need to reset the isLoading state after a short delay
      setTimeout(() => {
        setIsLoading(false)
      }, 0)
    },
    [addToHistory, commandHelp, setHistory],
  )

  return { processCommand, lastCommand, commandHelp, isLoading, lastOutputId }
}
