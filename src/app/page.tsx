import Image from 'next/image';
import { About } from './components/about';
import { Terminal } from './components/terminal';

export default function Page(){
  return(
    <div className="relative min-h-screen bg-gray-900 text-cyan-100 overflow-x-hidden">
      <main className="relative z-10">
        <Terminal />
        <About />
      </main>
    </div>
  )
}