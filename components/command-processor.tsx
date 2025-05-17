"use client"

import type React from "react"

import { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { LoadingSpinner } from "./loading-spinner"

interface CommandProcessorProps {
  onCommand: (command: string) => void
  commandHelp: Record<string, string>
  isLoading: boolean
}

export function CommandProcessor({ onCommand, commandHelp, isLoading }: CommandProcessorProps) {
  const [command, setCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input on mount and when clicked outside
  useEffect(() => {
    inputRef.current?.focus()

    const handleClick = (e: MouseEvent) => {
      // Check if the click is on a form element
      const target = e.target as HTMLElement
      const isFormElement =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "BUTTON" ||
        target.closest("form") !== null

      // Only focus the terminal input if not clicking on a form element
      if (!isFormElement) {
        inputRef.current?.focus()
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  // Keep focus on input after command execution
  useEffect(() => {
    // Short timeout to ensure focus happens after React updates
    const timeoutId = setTimeout(() => {
      inputRef.current?.focus()
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [isLoading])

  const handleSubmit = () => {
    if (command.trim()) {
      onCommand(command)
      setCommandHistory((prev) => [...prev, command])
      setCommand("")
      setHistoryIndex(-1)
      setSuggestions([])
      setShowSuggestions(false)

      // Ensure input stays focused after command execution
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(newIndex)
        setCommand(commandHistory[commandHistory.length - 1 - newIndex] || "")
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCommand(commandHistory[commandHistory.length - 1 - newIndex] || "")
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCommand("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      if (showSuggestions && suggestions.length > 0) {
        setCommand(suggestions[0])
        setSuggestions([])
        setShowSuggestions(false)
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCommand(value)

    // Show command suggestions
    if (value.trim()) {
      const availableCommands = Object.keys(commandHelp)
      const matches = availableCommands.filter((cmd) => cmd.startsWith(value.trim().toLowerCase()))

      setSuggestions(matches)
      setShowSuggestions(matches.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  return (
    <div className="relative border-t border-zinc-800 bg-[#1a1b26] p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="text-green-400 mr-2 font-mono">~$</div>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-zinc-800/30 outline-none text-gray-200 font-mono px-2 py-0.5 rounded-md border border-white/5"
            spellCheck="false"
            autoComplete="off"
            autoCapitalize="off"
            // Don't disable the input during loading to maintain focus
          />
        </div>
        <div className="ml-2 w-3">
          <LoadingSpinner isLoading={isLoading} />
        </div>
      </div>

      {showSuggestions && (
        <div className="absolute bottom-full left-0 bg-zinc-800 border border-zinc-700 rounded-md p-2 mb-2 w-64">
          <div className="text-xs text-zinc-400 mb-1">Tab to autocomplete:</div>
          {suggestions.map((suggestion, index) => (
            <div key={index} className={`text-sm ${index === 0 ? "text-blue-400" : "text-zinc-300"}`}>
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
