import Image from "next/image"
import Link from "next/link";
import { XIcon, GitHubIcon, LinkedInIcon, GumroadIcon } from "@/components/social-icons"

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" 
    {...props}>
      <Icon className="h-6 w-6 fill-zinc-400 transition group-hover:fill-zinc-300" />
    </Link>
  );
}

export function AboutSection() {
  return (
    <div className="px-4 space-y-4 text-gray-300">
      <h2 className="text-xl text-purple-400 font-bold mb-2 tracking-tight">Next.js developer, founder, and artist based in the innovative SF area, where the future is engineered.</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-[60%] space-y-4 text-pretty">
          <p>
            I specialize in developing cutting-edge applications that seamlessly blend technology with everyday life. My approach focuses on creating intuitive, user-friendly experiences that address real-world challenges.
          </p>
          <p>
            With a strong background in computer science and years of industry experience, I’ve led projects that range from groundbreaking startups to transformative enterprise solutions.
          </p>
          <p>
            When I’m not coding, you can find me exploring the latest advancements in technology, contributing to open-source initiatives, or enjoying the beauty of the outdoors. Let’s connect and innovate together!
          </p>
          <div className="pt-2 flex gap-6">
            <SocialLink
              target="_blank" 
              rel="noopener noreferrer"
              href="https://github.com/"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              target="_blank" 
              rel="noopener noreferrer"
              href="https://x.com/"
              aria-label="Follow on X"
              icon={XIcon}
            />      
            <SocialLink
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.linkedin.com/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              target="_blank" 
              rel="noopener noreferrer"
              href="https://gumroad.com/"
              aria-label="My Gumroad Store"
              icon={GumroadIcon}
              className="mt-0.5 ml-0.5"
            />
          </div>
        </div>

        <div className="md:w-[40%] flex justify-center">
          <div className="w-72 h-72 rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-md">
            <Image
              height={160}
              width={160}
              src="/headshot.jpg"
              alt="Developer portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-gray-400 pt-4 italic">
        Type <span className="text-green-400 not-italic font-semibold">projects</span> to see my work,
        <span className="text-green-400 not-italic font-semibold"> contact</span> to get in touch or <span className="text-green-400 not-italic font-semibold">help</span> to see available commands.
      </div>
    </div>
  )
}
