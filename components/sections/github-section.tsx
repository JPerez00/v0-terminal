"use client"

import Link from "next/link";
import { useEffect } from "react"
import { GitHubIcon } from "../social-icons";

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" 
    {...props}>
      <Icon className="h-8 w-8 fill-zinc-400 transition group-hover:fill-zinc-300" />
    </Link>
  );
}

export function GithubSection() {
  useEffect(() => {
    // Open GitHub profile in a new tab
    window.open("https://github.com/yourusername", "_blank")
  }, [])

  return (
    <div className="px-4 space-y-3">
      <div className="flex items-center gap-1.5">
        <SocialLink
          target="_blank" 
          rel="noopener noreferrer"
          href="https://github.com/"
          aria-label="Follow on GitHub"
          icon={GitHubIcon}
        />
        <h2 className="text-xl text-purple-400 font-bold">GitHub</h2>
      </div>

      <p className="text-green-400">Opening GitHub profile in a new tab...</p>

      <p className="text-gray-300">If the page doesn&apos;t open automatically, please click this link:</p>

      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        github.com/yourusername
      </a>
    </div>
  )
}
