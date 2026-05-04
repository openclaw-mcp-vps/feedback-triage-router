import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackTriage — Route customer feedback to right teams",
  description: "AI categorizes support tickets and routes to appropriate team members automatically. Save hours of manual triage every week."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a0b12e87-eb79-48ef-8026-7fd012e7cf87"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
