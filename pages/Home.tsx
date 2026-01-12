import React from 'react';
import Hero from '../components/Hero';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Brain, Database, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-black min-h-screen"
    >
      <Hero />
      
      {/* 1. Quick Intro / About Summary */}
      <section className="py-20 px-6 w-full">
        <h2 className="text-3xl font-bold text-white mb-10 border-l-4 border-indigo-500 pl-4 max-w-7xl mx-auto">
          Quick Overview
        </h2>
        <BentoGrid className="w-full max-w-none">
          
          {/* Item 1: ML Engineer (Graph Viz) */}
          <BentoGridItem
            title={<span className="text-xl font-bold text-white">ML Engineer</span>}
            description={<span className="text-neutral-400">Architecting neural networks & recommendation engines.</span>}
            header={
              <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-neutral-900 border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-dot-white/[0.2] opacity-50" />
                {/* Mock Graph Nodes */}
                <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10 animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10 delay-75 animate-pulse" />
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)] z-10 delay-150 animate-pulse" />
                
                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/20" style={{ strokeWidth: 1 }}>
                  <line x1="25%" y1="50%" x2="50%" y2="66%" />
                  <line x1="50%" y1="66%" x2="75%" y2="33%" />
                  <line x1="75%" y1="33%" x2="25%" y2="50%" />
                </svg>
              </div>
            }
            className="md:col-span-2"
          />

          {/* Item 2: Developer (Terminal) */}
          <BentoGridItem
            title={<span className="text-xl font-bold text-white">Developer</span>}
            description={<span className="text-neutral-400">Full-stack scalability.</span>}
            header={
              <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-neutral-950 border border-white/10 p-4 relative overflow-hidden">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-[10px] text-green-400">
                  <span className="text-pink-400">def</span> <span className="text-blue-400">init</span>():<br/>
                  &nbsp;&nbsp;<span className="text-white">return</span> "Hello World"
                </div>
              </div>
            }
            className="md:col-span-1"
          />

          {/* Item 3: Problem Solver (Stats) */}
          <BentoGridItem
            title={<span className="text-xl font-bold text-white">Solver</span>}
            description={<span className="text-neutral-400">Data-driven decisions.</span>}
            header={
              <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-x-0 bottom-0 flex justify-center items-end gap-2 p-4 h-full">
                    <div className="w-4 bg-indigo-500/20 h-[40%] rounded-t-sm" />
                    <div className="w-4 bg-indigo-500/40 h-[70%] rounded-t-sm" />
                    <div className="w-4 bg-indigo-500/60 h-[50%] rounded-t-sm" />
                    <div className="w-4 bg-indigo-500 h-[90%] rounded-t-sm shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                 </div>
              </div>
            }
            className="md:col-span-1"
          />

          {/* Item 4: Call to Action */}
          <BentoGridItem
            title={<Link to="/experience" className="flex items-center gap-2 text-white font-bold text-lg hover:text-indigo-400 transition-colors">See My Journey <ArrowRight className="w-5 h-5"/></Link>}
            description={<span className="text-neutral-500 text-sm">Explore my full professional timeline.</span>}
            header={
              <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-tr from-indigo-900/20 via-black to-black border border-white/10 items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                 <div className="p-4 rounded-full bg-white/5 group-hover:bg-indigo-600 transition-colors duration-300">
                    <ArrowRight className="w-6 h-6 text-white" />
                 </div>
              </div>
            }
            className="md:col-span-2"
          />
        </BentoGrid>
      </section>

      {/* 2. Featured Work Teaser */}
      <section className="py-20 px-6 bg-neutral-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white border-l-4 border-purple-500 pl-4">Selected Work</h2>
            <Link to="/projects" className="text-sm font-medium text-neutral-400 hover:text-white flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 Teaser */}
            <Link to="/projects" className="group relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=800&auto=format&fit=crop" 
                alt="Music Rec System" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Music Rec System</h3>
                <p className="text-neutral-400 text-sm translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  PyTorch • Graph Learning • Docker
                </p>
              </div>
            </Link>

            {/* Project 2 Teaser */}
            <Link to="/projects" className="group relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop" 
                alt="SMS Spam Detection" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
               <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">SMS Spam Detection</h3>
                <p className="text-neutral-400 text-sm translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  NLP • TF-IDF • Naive Bayes
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Infinite Skills Marquee */}
      <section className="py-24 overflow-hidden bg-black">
        <h2 className="text-center text-sm font-mono text-neutral-500 mb-8 uppercase tracking-widest">Technologies & Tools</h2>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-16 text-4xl font-bold text-neutral-800 select-none">
            <span>PYTHON</span>
            <span>PYTORCH</span>
            <span>REACT</span>
            <span>DOCKER</span>
            <span>SQL</span>
            <span>NLP</span>
            <span>GIT</span>
            <span>POWER BI</span>
            <span>JAVA</span>
             {/* Duplicate for seamless loop */}
            <span>PYTHON</span>
            <span>PYTORCH</span>
            <span>REACT</span>
            <span>DOCKER</span>
            <span>SQL</span>
            <span>NLP</span>
            <span>GIT</span>
            <span>POWER BI</span>
            <span>JAVA</span>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Home;
