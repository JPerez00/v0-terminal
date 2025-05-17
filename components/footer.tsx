import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      <div className="pt-6 max-w-4xl w-full mx-auto flex flex-col items-center sm:flex-row-reverse sm:justify-between">
        <p className="text-sm text-zinc-500 sm:mt-0">
          Developed by <Link href="https://www.jorge-perez.dev/" 
          className="hover:text-zinc-400 hover:underline transition-all duration-300" target="_blank" rel="noopener noreferrer">
            Jorge Perez</Link>
        </p>
        <div className="mt-4 md:mt-0 flex gap-x-4">
          <Link href="https://github.com/JPerez00" className="group" aria-label="Chech my GitHub" target="_blank" rel="noopener noreferrer">
            <svg
              className="h-5 w-5 fill-zinc-500 group-hover:fill-zinc-700"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
          </Link>
          <Link href="https://x.com/jperezverse" className="group" aria-label="Follow on X" target="_blank" rel="noopener noreferrer">
            <svg
              className="h-5 w-5 fill-zinc-500 group-hover:fill-zinc-700"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  )
}