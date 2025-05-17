import { Circle } from "lucide-react"

export function TerminalHeader() {
  return (
    <div className="flex items-center h-8 bg-[#2d2d2d] px-4 border-b border-zinc-700">
      <div className="flex space-x-2 mr-4">
        <Circle className="h-3 w-3 text-red-500 fill-red-500" />
        <Circle className="h-3 w-3 text-yellow-500 fill-yellow-500" />
        <Circle className="h-3 w-3 text-green-500 fill-green-500" />
      </div>
      <div className="flex-1 text-center text-xs text-zinc-400 font-medium">jd@portfolio ~ zsh</div>
    </div>
  )
}
