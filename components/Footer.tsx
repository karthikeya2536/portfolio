import React from 'react';
import { Github, Linkedin, Mail, Code2, Terminal, BarChart2, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright */}
        <div className="text-neutral-500 text-sm">
          © 2026 All rights reserved.
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-6">
          <a href="https://github.com/Karthikeya2536" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/yemulakarthikeya/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
           <a href="https://leetcode.com/u/Karthik3241/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors" title="LeetCode">
            <Code2 className="w-5 h-5" />
          </a>
          <a href="https://www.codechef.com/users/karthikeya3241" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors" title="CodeChef">
            <Terminal className="w-5 h-5" />
          </a>
          <a href="https://codeforces.com/profile/karthik2536" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors" title="Codeforces">
            <BarChart2 className="w-5 h-5" />
          </a>
          <a href="https://wa.me/918008799505" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors" title="WhatsApp">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="mailto:yemulakarthikeya@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
