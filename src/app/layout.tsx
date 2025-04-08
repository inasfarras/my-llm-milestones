import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "@/context/ProjectContext";
import { ThesisProvider } from "@/context/ThesisContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Journey to LLM Specialist",
  description: "Tracking my growth through hands-on projects and research.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100`}>
        <ProjectProvider>
          <ThesisProvider>
            {children}
          </ThesisProvider>
        </ProjectProvider>
      </body>
    </html>
  );
}
