import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnLens — AI-Powered Exit Survey Analysis',
  description: 'Analyze cancellation reasons from exit surveys to identify churn patterns and suggest retention strategies for SaaS founders and customer success teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f9865c70-59e4-4463-a3fa-80f0612a90b4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
