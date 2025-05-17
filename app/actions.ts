"use server"

import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Define the email data type
interface EmailData {
  name: string
  email: string
  message: string
}

// Server action to send email
export async function sendEmail(data: EmailData) {
  try {
    // Validate inputs
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        error: "Please provide all required fields",
      }
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return {
        success: false,
        error: "Email service is not configured",
      }
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "V0 Terminal Contact Form <onboarding@resend.dev>", // Use your verified domain
      to: "YOUR_EMAIL@HERE.COM", // Your email address
      subject: `New message from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
      `,
      // You can also use HTML for a nicer email
      html: `
<div>
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <h3>Message:</h3>
  <p>${data.message.replace(/\n/g, "<br>")}</p>
</div>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        error: "Failed to send email",
      }
    }

    return {
      success: true,
    }
  } catch (error) {
    console.error("Unexpected error sending email:", error)
    return {
      success: false,
      error: "An unexpected error occurred",
    }
  }
}
