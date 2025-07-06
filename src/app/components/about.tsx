export function About(){
    return(
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
                    </div>                
                </div>
            </div>
        </section>
    )
}