export function About() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    <span className="text-cyan-400 glitch-text">About</span>
                    <span className="text-white">Me</span>
                </h2>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded -lg p-8 neon-border">
                    <div className="prose prose-invert prose-cyan max-w-none">
                        <p className="text-lg leading-relaxed mb-6 text-cyan-100">
                            Hi, I'm <span className="text-cyan-400 font-semibold">Aditya Gupta</span> - a passionate full-stack developer, AI Engineer, and systems thinker who thrives at the intersection of technology and innovation.
                        </p>

                        <p className="text-lg leading-relaxed mb-6 text-cyan-100">
                            My journey in tech began with curiosity about how things work under the hood. Today, I build scalable
                            applications, experiment with cutting-edge AI technologies, and architect systems that solve real-world
                            problems. I believe in writing clean, maintainable code and creating user experiences that matter. lorem ipsum
                        </p>

                        <p className="text-lg leading-relaxed mb-6 text-cyan-100">
                            When I'm not coding, you'll find me exploring the latest in machine learning, contributing to open-source
                            projects, or diving deep into system design patterns. I'm always excited to collaborate on projects that
                            push the boundaries of what's possible.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {["React","Node.js","Python","AI/ML","Typescript","Next.js","Docker","AWS"].map((skill) => (
                                <div key={skill} className="bg-gray-700/50 border border=cyan-500/30 rounded px-3 py-2 text-center text-cyan-300 font-mono text-sm hover:border-cyan-400 hover:glow-text transition-all duration-200">{skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}