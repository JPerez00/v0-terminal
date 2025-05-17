import Image from "next/image"

export function HomeSection() {
  return (
    <div className="px-4 flex flex-col py-4">
      {/* Profile Image */}
      <div className="mb-4 justify-start text-left">
        <div className="w-20 h-20 rounded-xl overflow-hidden border border-zinc-700">
          <Image
            width={100}
            height={100}
            src="/headshot.jpg" 
            alt="John Doe" 
            className="w-full h-full object-cover"
           />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h1 className="text-2xl text-purple-400 font-semibold tracking-tight">Hi, I&apos;m John Doe</h1>
        <p className="text-zinc-200 text-lg font-semibold tracking-tight">I&apos;m a Next.js developer, founder & artist based in the SF area.</p>
        <p className="text-zinc-400">I&apos;m the founder and CEO of NeuroSync, where we empower individuals by integrating AI personal assistants chips directly into their brains.</p>
        <p className="text-zinc-400">This is a sleek, terminal-inspired developer portfolio that mimics zsh in iTerm2/Ghostty with elegant Apple-like aesthetics, built entirely in <span className="text-purple-400 font-bold">V0</span>. Perfect for showcasing your work with style.</p>
        <p className="text-zinc-400">Additionally, it includes a fully functional contact form powered by the Resend API and validated with Zod. Full blog post/documentation coming soon.</p>
        <div className="text-blue-300">
            Type <span className="text-rose-300 font-bold">&apos;help&apos;</span> to see available commands, or <span className="text-yellow-300 font-bold">&apos;ls&apos;</span> to explore the dir.
        </div>
      </div>
    </div>
  )
}
