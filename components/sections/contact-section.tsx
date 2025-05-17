"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { sendEmail } from "@/app/actions"
import { MailIcon, GitHubIcon, LinkedInIcon, XIcon } from "@/components/social-icons"

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const contactMethods = [
    {
      icon: <MailIcon className="h-5 w-5 fill-zinc-300" />,
      label: "Email",
      value: "developer@example.com",
      link: "mailto:developer@example.com",
    },
    {
      icon: <GitHubIcon className="h-5 w-5 fill-zinc-300" />,
      label: "GitHub",
      value: "github.com/developer",
      link: "https://github.com/developer",
    },
    {
      icon: <LinkedInIcon className="h-5 w-5 fill-zinc-300" />,
      label: "LinkedIn",
      value: "linkedin.com/in/developer",
      link: "https://linkedin.com/in/developer",
    },
    {
      icon: <XIcon className="h-5 w-5 fill-zinc-300" />,
      label: "Twitter",
      value: "x.com/developer",
      link: "https://twitter.com/developer",
    },
  ]

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setSubmitResult(null)
  
    try {
      // Send email using the server action
      const result = await sendEmail({
        name: data.name,
        email: data.email,
        message: data.message,
      })
  
      if (result.success) {
        setSubmitResult({
          success: true,
          message: "Message sent successfully! I'll get back to you soon.",
        })
        // Reset form on success
        reset()
      } else {
        setSubmitResult({
          success: false,
          message: result.error || "Failed to send message. Please try again later.",
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: error instanceof Error ? error.message : "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Stop propagation to prevent terminal input focus
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div className="px-4 space-y-4">
      <h2 className="text-xl text-purple-400 font-bold mb-2">Contact</h2>

      <div className="flex flex-col md:flex-row md:gap-4">
        {/* Contact Information - Left Side */}
        <div className="md:w-1/2 space-y-4 md:border-r border-zinc-700">
          <p className="text-gray-300">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="space-y-3 pt-2">
            {contactMethods.map((contact, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <div className="text-blue-400 mr-2">{contact.icon}</div>
                <span className="text-gray-400 w-20">{contact.label}:</span>
                <a
                  href={contact.link}
                  className="text-green-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={stopPropagation}
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>

          <div className="pt-4 text-gray-300">
            <p>Available for freelance work, full-time positions, and consulting opportunities.</p>
            <p className="mt-2">Based in San Francisco, CA. Open to remote work worldwide.</p>
          </div>
        </div>

        {/* Contact Form - Right Side */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-2">
          <h3 className="text-lg text-purple-400 mb-3">Send me a message</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" onClick={stopPropagation}>
            <div>
              <label htmlFor="name" className="block text-gray-400 text-sm mb-1">
                Name
              </label>
              <input
                id="name"
                {...register("name")}
                className={`w-full bg-zinc-800/50 border ${
                  errors.name ? "border-red-500" : "border-zinc-700"
                } rounded px-3 py-1.5 text-gray-300 focus:outline-none focus:border-blue-400`}
                onClick={stopPropagation}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-400 text-sm mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`w-full bg-zinc-800/50 border ${
                  errors.email ? "border-red-500" : "border-zinc-700"
                } rounded px-3 py-1.5 text-gray-300 focus:outline-none focus:border-blue-400`}
                onClick={stopPropagation}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-400 text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={4}
                className={`w-full bg-zinc-800/50 border ${
                  errors.message ? "border-red-500" : "border-zinc-700"
                } rounded px-3 py-1.5 text-gray-300 focus:outline-none focus:border-blue-400`}
                onClick={stopPropagation}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center gap-2 px-4 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-gray-300 transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                onClick={stopPropagation}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          {submitResult && (
            <div
              className={`mt-3 p-2 rounded flex items-center gap-2 ${
                submitResult.success ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
              }`}
            >
              {submitResult.success ? (
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
              )}
              <span>{submitResult.message}</span>
            </div>
          )}
        </div>
      </div>

      <div className="text-gray-400 mt-4 italic">
        Type <span className="text-green-400 not-italic">resume</span> to view my professional experience.
      </div>
    </div>
  )
}
