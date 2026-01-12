import React from 'react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, Cpu, GraduationCap, Github, Linkedin, Mail, Code2, Terminal, BarChart2, MessageCircle, Download } from 'lucide-react';
import Resume from '../karthik_resume_AI_ML.pdf'; 

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Experience', url: '/experience', icon: User },
    { name: 'Skills', url: '/skills', icon: Cpu },
    { name: 'Education', url: '/education', icon: GraduationCap }
  ];

  return (
    <NavBar items={navItems} className="top-5">
      <div className="hidden md:flex items-center gap-8 pl-12 border-l border-white/10">
          {/* Resume */}
          <a href={Resume} download="Karthikeya_Yemula_Resume" className="text-neutral-400 hover:text-white transition-colors" title="Download Resume">
            <Download className="w-4 h-4" />
          </a>
          
          {/* Socials */}
          <a href="https://github.com/Karthikeya2536" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/yemulakarthikeya/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://leetcode.com/u/Karthik3241/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors" title="LeetCode">
            <Code2 className="w-4 h-4" />
          </a>
          <a href="https://www.codechef.com/users/karthikeya3241" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors" title="CodeChef">
            <Terminal className="w-4 h-4" />
          </a>
          <a href="https://codeforces.com/profile/karthik2536" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors" title="Codeforces">
            <BarChart2 className="w-4 h-4" />
          </a>
          <a href="https://wa.me/918008799505" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors" title="WhatsApp">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href="mailto:yemulakarthikeya@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </a>
      </div>
    </NavBar>
  );
};

export default Navbar;