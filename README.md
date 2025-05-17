# V0 Terminal - A Sleek Terminal-Inspired Developer Portfolio

![Image](/public/v0-terminal-banner.png)

This is a stylish portfolio mimicking zsh in iTerm2/Ghostty, built in V0. Features a functional contact form with Resend API and Zod validation.

## Features

1. **Authentic Terminal Interface** - Complete with a header bar featuring macOS-style traffic light buttons and a realistic command prompt.

2. **Interactive Command Line** - Fully functional command processor with:

- Command history navigation (up/down arrows)
- Tab completion for commands
- Realistic terminal prompt styling

3. **Portfolio Sections** - Accessible via terminal commands:

- `home` - Intial introduction
- `about` - Personal introduction
- `projects` - Showcase of development work
- `skills` - Technical expertise with visual skill bars
- `contact` - Contact information with social links
- `resume` - Professional experience and education
- `github` - Opens your GitHub page
- `stack` - Shows the stack used to build this app

4. **Terminal Utilities** - Additional commands like `clear`, `ls`, for an authentic terminal experience.

5. **Working Contact Form** - It includes a fully functional contact form powered by the Resend API and validated with Zod. (Resend API key required).

6. **Responsive Design** - Works beautifully on both desktop and mobile devices.

## Prerequisites:

This template requires a Resend API key and a verified domain name. Follow the instructions below to set this up:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## ENV File

Rename the `.env.example` file to `.env.local` and add your Resend API key

```bash
RESEND_API_KEY=your_resend_api_key_here
```

## Contact Form

Finally, update the "From" and "To" emails in the `app/actions.ts` file.

```bash
from: "V0 Terminal Contact Form <onboarding@resend.dev>", // Use your verified domain
to: "YOUR_EMAIL@HERE.COM", // Your email address
```

## Run it

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.