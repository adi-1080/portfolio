"use client"
import type React from "react";

import { useState, useEffect, useRef } from "react";
import { TerminalIcon } from "lucide-react";

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
        joke: ["Why do programmers prefer dark mode?", "Because light attracts bugs! 🐛", ""],
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = input.trim().toLowerCase();

        if (trimmedInput === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        const output = commands[trimmedInput] || [`Command not found: ${trimmedInput}`, `Type "help" for available commands.`, "",];

        setHistory((prev) => [...prev, { input, output }]);
        setInput("");
    }

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    useEffect(() => {
        const handleClick = () => {
            inputRef.current?.focus();
        }
        document.addEventListener("click", handleClick);

        return () => { document.removeEventListener("click", handleClick); };
    }, [])

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
                        <div className="flex items-center ml-4">
                            <TerminalIcon size={16} className="text-cyan-400 mr-2"></TerminalIcon>
                            <span className="text-cyan-400 font-mono text-sm">aditya@portfolio:~$</span>
                        </div>
                    </div>

                    {/* Terminal content */}
                    <div ref={terminalRef} className="p-4 h-96 overflow-y-auto font-mono text-sm" onClick={() => inputRef.current?.focus()}>
                        {history.map((command, index) => (
                            <div key={index} className="mb-2">
                                <div className="flex items-center text-cyan-400">
                                    <span className="text-green-400">aditya@portfolio</span>
                                    <span className="text-white">:</span>
                                    <span className="text-blue-400">{currentPath}</span>
                                    <span className="text-white">$ </span>
                                    <span className="text-cyan-100">{command.input}</span>
                                </div>
                                {command.output.map((line, lineIndex) => (
                                    <div key={lineIndex} className="text-cyan-100 pl-0">
                                        {line}
                                    </div>
                                ))}
                            </div>
                        ))}

                        {/* Current input line */}
                        <form onSubmit={handleSubmit} className="flex items-center">
                            <span className="text-green-400">aditya@portfolio</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-400">{currentPath}</span>
                            <span className="text-white">$</span>
                            <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 bg-transparent text-cyan-100 outline-none ml-1" autoFocus />
                            <span className="text-cyan-400 animate-pulse">|</span>
                            
                        </form>
                    </div>
                </div>

                <p className="text-center text-cyan-400 mt-4 font-mono text-sm">
                    Click anywhere in the terminal to start typing commands!
                </p>
            </div>
        </section>
    )
}