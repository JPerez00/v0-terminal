import type React from "react"
import { forwardRef } from "react"

interface TerminalProps {
  history: Array<{ type: string; content: React.ReactNode; id: string }>
}

export const Terminal = forwardRef<HTMLDivElement, TerminalProps>(({ history }, ref) => {
  return (
    <div
      ref={ref}
      className="flex-1 overflow-y-auto p-2 text-sm text-gray-300 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent font-mono"
    >
      {history.map((entry, index) => (
        <div key={index} className="pt-4" id={entry.id}>
          {entry.content}
        </div>
      ))}
    </div>
  )
})

Terminal.displayName = "Terminal"
