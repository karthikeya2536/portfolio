import React from 'react';
import { TracingBeam } from '../components/ui/tracing-beam';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "AI Intern",
      company: "ZenithIndia",
      period: "May 2025 – Present",
      location: "Remote/Hybrid", 
      tech: ["Python", "Power BI", "Llama 2", "Streamlit", "Data Analytics"],
      stats: [
        { label: "Dashboard KPIs", value: "10+" },
        { label: "Churn Reduced", value: "5%" },
      ],
      desc: [
        "Developed a comprehensive Seller Dashboard using Power BI to visualize sales trends, directly enabling data-driven decisions that reduced seller churn by 5%.",
        "Built a 'Code Comment Generator' tool using the Llama 2 LLM, automating documentation for Python codebases and improving developer productivity.",
        "Constructed automated data pipelines to process and clean 10K+ records weekly for accurate reporting."
      ]
    },
    {
      role: "Vice President",
      company: "Street Cause",
      period: "July 2024 – May 2025",
      location: "Hyderabad",
      tech: ["Leadership", "Event Mgmt", "Public Speaking", "Team Building"],
      stats: [
        { label: "Funds Raised", value: "₹1.5L+" },
        { label: "Events Led", value: "15+" },
      ],
      desc: [
        "Strategic Leadership: Orchestrated the operations of a 50+ member team, delegating tasks effectively to ensure successful execution of large-scale initiatives.",
        "Impact Scaling: Spearheaded fundraising campaigns raising over ₹1.5 Lakhs, directly funding educational resources for underprivileged schools.",
        "Brand Visibility: Enhanced the organization's outreach through targeted social campaigns and local partnerships, increasing volunteer participation by 20%."
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-black pt-32 pb-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
         <h1 className="text-5xl md:text-7xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
           Professional Journey
        </h1>
        <TracingBeam className="px-6">
          <div className="max-w-3xl mx-auto antialiased pt-4 relative">
            {experiences.map((item, index) => (
              <div key={index} className="mb-32 group relative pl-8 border-l border-neutral-800">
                 <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                 
                 {/* Header */}
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
                   <h3 className="text-4xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-2 sm:mb-0">{item.role}</h3>
                   <span className="text-neutral-400 text-sm font-mono mt-1 sm:mt-0 bg-neutral-900 px-4 py-2 rounded-xl border border-neutral-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                      {item.period}
                   </span>
                </div>
                <div className="text-2xl text-neutral-300 font-medium mb-10 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-lg font-bold text-white shadow-lg border border-white/5">
                    {item.company[0]}
                  </span>
                  {item.company}
                  <span className="text-sm px-3 py-1 rounded-full bg-white/5 text-neutral-500 border border-white/5">{item.location}</span>
                </div>

                {/* Stat Cards - Enhanced Size */}
                <div className="grid grid-cols-2 gap-6 mb-10">
                  {item.stats.map((stat, s) => (
                     <div key={s} className="bg-gradient-to-br from-neutral-900 to-neutral-800/30 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors group/stat">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover/stat:text-indigo-400 transition-colors">{stat.value}</div>
                        <div className="text-sm text-neutral-500 uppercase tracking-widest font-semibold">{stat.label}</div>
                     </div>
                  ))}
                </div>

                {/* Tech Stack - Expanded visuals */}
                <div className="mb-10">
                    <h4 className="text-sm font-mono text-neutral-500 mb-4 uppercase tracking-widest">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-3">
                    {item.tech.map((t, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-white/5 text-neutral-300 hover:text-white hover:bg-white/5 transition-all">
                        {/* Mock Icon dot */}
                        <div className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-indigo-500' : 'bg-purple-500'}`} />
                        <span className="text-sm font-medium">{t}</span>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Description - Card Style List */}
                <div className="space-y-6">
                  {item.desc.map((d, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-2xl bg-gradient-to-r from-neutral-900/50 to-transparent border border-white/5 hover:border-white/10 transition-all hover:bg-neutral-900">
                      <div className="mt-1.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/20">
                          <span className="text-indigo-400 font-bold">{i + 1}</span>
                      </div>
                      <p className="text-neutral-300 leading-7 text-lg">
                        {d}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </motion.div>
  );
};

export default Experience;
