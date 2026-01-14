import React from 'react';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { Code2, Database, Brain, Rocket, Terminal, Layers, Cpu, Globe, Server, GitBranch, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  // Exploded list of all skills from resume
  const skills = [
    { title: "Python", category: "Language", icon: <Code2 className="h-4 w-4 text-yellow-400" />, borderClass: "hover:border-yellow-400/50" },
    { title: "Java", category: "Language", icon: <Code2 className="h-4 w-4 text-orange-400" />, borderClass: "hover:border-orange-400/50" },
    { title: "SQL", category: "Language", icon: <Database className="h-4 w-4 text-blue-400" />, borderClass: "hover:border-blue-400/50" },
    { title: "PyTorch", category: "ML/AI", icon: <Brain className="h-4 w-4 text-red-500" />, borderClass: "hover:border-red-500/50" },
    { title: "TensorFlow", category: "ML/AI", icon: <Brain className="h-4 w-4 text-orange-500" />, borderClass: "hover:border-orange-500/50" },
    { title: "Scikit-learn", category: "ML/AI", icon: <Brain className="h-4 w-4 text-blue-500" />, borderClass: "hover:border-blue-500/50" },
    { title: "Pandas", category: "Data", icon: <Layers className="h-4 w-4 text-purple-400" />, borderClass: "hover:border-purple-400/50" },
    { title: "NumPy", category: "Data", icon: <Layers className="h-4 w-4 text-blue-400" />, borderClass: "hover:border-blue-400/50" },
    { title: "OpenCV", category: "CV", icon: <Cpu className="h-4 w-4 text-green-400" />, borderClass: "hover:border-green-400/50" },
    { title: "NLP", category: "AI", icon: <Brain className="h-4 w-4 text-indigo-400" />, borderClass: "hover:border-indigo-400/50" },
    { title: "React", category: "Web", icon: <Globe className="h-4 w-4 text-cyan-400" />, borderClass: "hover:border-cyan-400/50" },
    { title: "Django", category: "Web", icon: <Globe className="h-4 w-4 text-green-600" />, borderClass: "hover:border-green-600/50" },
    { title: "Streamlit", category: "Web", icon: <Globe className="h-4 w-4 text-red-400" />, borderClass: "hover:border-red-400/50" },
    { title: "HTML/CSS", category: "Web", icon: <Code2 className="h-4 w-4 text-orange-600" />, borderClass: "hover:border-orange-600/50" },
    { title: "Docker", category: "DevOps", icon: <Box className="h-4 w-4 text-blue-500" />, borderClass: "hover:border-blue-500/50" },
    { title: "Git", category: "DevOps", icon: <GitBranch className="h-4 w-4 text-orange-500" />, borderClass: "hover:border-orange-500/50" },
    { title: "REST APIs", category: "DevOps", icon: <Server className="h-4 w-4 text-green-500" />, borderClass: "hover:border-green-500/50" },
    { title: "Power BI", category: "Analytics", icon: <Layers className="h-4 w-4 text-yellow-500" />, borderClass: "hover:border-yellow-500/50" },
    { title: "VS Code", category: "Tool", icon: <Terminal className="h-4 w-4 text-blue-400" />, borderClass: "hover:border-blue-400/50" },
    { title: "Jupyter", category: "Tool", icon: <Terminal className="h-4 w-4 text-orange-400" />, borderClass: "hover:border-orange-400/50" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-black pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
           Technical Arsenal
        </h1>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-20 text-lg">
          A comprehensive list of the technologies, languages, and tools I use to build intelligent systems.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((item, i) => (
            <div key={i} className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-neutral-900/50 border border-white/5 ${item.borderClass} hover:bg-neutral-800/80 transition-all duration-300`}>
              <div className="mb-4 p-3 rounded-full bg-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(item.icon as React.ReactElement, { className: "h-8 w-8 " + item.icon.props.className.split(" ").pop() })}
              </div>
              <h3 className="text-white font-medium text-lg mb-1">{item.title}</h3>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest group-hover:text-indigo-400 transition-colors">
                {item.category}
              </span>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-white/10 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
