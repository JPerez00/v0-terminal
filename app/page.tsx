"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Terminal } from "@/components/terminal"
import { TerminalHeader } from "@/components/terminal-header"
import { CommandProcessor } from "@/components/command-processor"
import { useTerminalCommands } from "@/hooks/use-terminal-commands"
import { HomeSection } from "@/components/sections/home-section"
import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: string; content: React.ReactNode; id: string }>>(
    [],
  )
  const { processCommand, commandHelp, isLoading, lastOutputId } = useTerminalCommands(setTerminalHistory)
  const terminalRef = useRef<HTMLDivElement>(null)
  const initialLoadRef = useRef(true)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Initial terminal welcome message
  useEffect(() => {
    if (initialLoadRef.current) {
      // Show home section on initial load
      setTerminalHistory([
        {
          type: "output",
          content: <HomeSection />,
          id: "initial-home",
        },
      ])
      initialLoadRef.current = false
    }
  }, [])

  // Scroll to the latest output
  useEffect(() => {
    if (terminalRef.current && lastOutputId) {
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Set a small timeout to ensure DOM is updated
      scrollTimeoutRef.current = setTimeout(() => {
        const outputElement = document.getElementById(lastOutputId)
        if (outputElement) {
          outputElement.scrollIntoView({ block: "start", behavior: "auto" })
        }
      }, 10)
    }

    // Cleanup timeout on unmount
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [lastOutputId, terminalHistory])

  return (
    <main className="min-h-screen items-center justify-center bg-zinc-950 p-4 sm:p-8 space-y-2 antialiased">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-zinc-700 shadow-2xl animate-terminal-appear">
        <TerminalHeader />
        <div className="bg-[#1a1b26] h-[72vh] overflow-hidden flex flex-col font-mono relative">
          <Terminal history={terminalHistory} ref={terminalRef} />
          <CommandProcessor onCommand={processCommand} commandHelp={commandHelp} isLoading={isLoading} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
