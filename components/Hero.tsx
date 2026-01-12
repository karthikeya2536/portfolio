import React from 'react';
import { motion } from 'framer-motion';
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Link } from 'react-router-dom';
import { Github, Linkedin, Code2, Terminal, BarChart2, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-screen pt-[120px] pb-20 bg-black/[0.96] px-[20px] lg:px-[60px] grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] lg:gap-[80px] relative overflow-hidden font-sans">
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Left Column: Content */}
      <div className="z-10 flex flex-col justify-center items-start text-white">
        {/* 1. GREETING BADGE */}
        <motion.span 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block bg-white/10 border border-white/20 backdrop-blur-md rounded-[24px] px-5 py-2 text-[13px] font-semibold mb-8 tracking-normal shadow-sm text-white"
        >
          ✱ HELLO!
        </motion.span>

        {/* 2. MAIN HEADLINE */}
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[40px] lg:text-[56px] leading-[1.15] font-bold tracking-[-1px] text-white mb-7"
        >
          I'm Yemula Karthikeya,<br/>
          <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            ML Engineer.
          </span>
        </motion.h1>

        {/* 3. SUBHEADLINE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[16px] lg:text-[18px] font-normal text-neutral-300 mb-9 leading-[1.6] max-w-[540px]"
        >
           Aspiring Machine Learning Engineer with hands-on experience in recommendation systems, neural networks, NLP, and computer vision. Strong in Python, PyTorch, and REST API integration.
        </motion.p>

        {/* 4. ACTIONS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Link 
            to="/projects"
            className="border-2 border-white bg-white text-black rounded-[12px] px-8 py-4 text-[16px] font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
          >
            See My Projects
          </Link>
          
          <div className="flex gap-3">
             <a 
              href="https://linkedin.com/in/yemulakarthikeya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border-2 border-white/20 rounded-[12px] bg-white/5 text-white hover:bg-white/10 transition-transform active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Karthikeya2536" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border-2 border-white/20 rounded-[12px] bg-white/5 text-white hover:bg-white/10 transition-transform active:scale-95"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://leetcode.com/u/Karthik3241/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border-2 border-white/20 rounded-[12px] bg-white/5 text-white hover:bg-white/10 transition-transform active:scale-95"
              aria-label="LeetCode"
              title="LeetCode"
            >
              <Code2 className="w-6 h-6" />
            </a>
            <a 
              href="https://www.codechef.com/users/karthikeya3241" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border-2 border-white/20 rounded-[12px] bg-white/5 text-white hover:bg-white/10 transition-transform active:scale-95"
              aria-label="CodeChef"
              title="CodeChef"
            >
              <Terminal className="w-6 h-6" />
            </a>
            <a 
              href="https://codeforces.com/profile/karthik2536" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border-2 border-white/20 rounded-[12px] bg-white/5 text-white hover:bg-white/10 transition-transform active:scale-95"
              aria-label="Codeforces"
              title="Codeforces"
            >
              <BarChart2 className="w-6 h-6" />
            </a>
             <a 
              href="https://wa.me/918008799505" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border-2 border-white/20 rounded-[12px] bg-white/5 text-white hover:bg-white/10 transition-transform active:scale-95"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Spline 3D Scene */}
      <div className="relative flex items-center justify-center z-10 w-full h-[600px] lg:h-[700px]">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

    </section>
  );
};

export default Hero;