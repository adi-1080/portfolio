"use client"
import type React from "react";

import { useState, useEffect, useRef } from "react";
// import { TerminalIcon } from "lucide-react";

interface Command {
    input: string
    output: string[]
}

export function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<Command[]>([{
        input: "welcome",
        output: [
            `Welcome to Aditya's terminal!, 'Type "help" to see available commands.'`, ""],
    },
    ])

    const [currentPath] = useState("~/aditya-gupta");
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const commands: Record<string, string[]> = {
        help: [
            "Available commands:",
            "  help     - Show this help message",
            "  about    - Learn more about me",
            "  projects - View my projects",
            "  skills   - List my technical skills",
            "  contact  - Get my contact information",
            "  clear    - Clear the terminal",
            "  whoami   - Display current user",
            "  date     - Show current date",
            "  joke     - Get a programming joke",
            "",
        ],
        about: [
            "Aditya Gupta - Full-stack Developer & AI Enthusiast",
            "",
            "I'm passionate about building scalable applications,",
            "exploring AI technologies, and solving complex problems.",
            "Always learning, always coding! 💻",
            "",
        ],
        projects: [
            "Featured Projects:",
            "",
            "📱 MediSync - AI-powered healthcare management",
            "🛋️  FurnitureWala - AR furniture e-commerce",
            "🚀 HackXplore - Developer community platform",
            "🤖 CodeMind AI - AI code review tool",
            "",
            "Visit the projects section for more details!",
            "",
        ],
        skills: [
            "Technical Skills:",
            "",
            "🌐 Frontend: React, Next.js, Vue.js, TypeScript",
            "⚙️  Backend: Node.js, Python, Express, FastAPI",
            "🗄️  Database: MongoDB, PostgreSQL, Redis",
            "☁️  Cloud: AWS, Docker, Kubernetes",
            "🤖 AI/ML: TensorFlow, PyTorch, Scikit-learn",
            "",
        ],
        contact: [
            "Contact Information:",
            "",
            "📧 Email: adityagupta5277@gmail.com",
            "🐙 GitHub: https://github.com/adi-1080",
            "💼 LinkedIn: https://www.linkedin.com/in/adi1080/",
            "🐦 Twitter: https://x.com/adi_1080",
            "",
            "Feel free to reach out! 👋",
            "",
        ],
        whoami: ["aditya-gupta", ""],
        date: [new Date().toString(), ""],
        pun: ["Why do programmers prefer dark mode?", "Because light attracts bugs! 🐛", ""],
    }

    return (
        <section id="terminal" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    <span className="text-cyan-400 glitch-text">Terminal</span>
                    <span className="text-white">Interface</span>
                </h2>

                <div className="bg-gray-900 border border-cyan-500/30 rounded-lg overflow-hidden neon-border">
                    {/* Terminal header */}
                    <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-cyan-500/20">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}