import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "EduPredict",
      tagline: "A student performance intelligence platform with live analytics and ML-powered score prediction.",
      tech: ["Django", "DRF", "Next.js", "TypeScript", "scikit-learn"],
      challenge: "Unifying student data, file uploads, and score prediction into a secure workflow that stays usable for school staff in real time.",
      solution: "Built a Django REST backend with automated retraining, bulk CSV/XLSX ingestion, and a Next.js dashboard for live student tracking and analytics.",
      impact: "Delivered a production-oriented school analytics platform with health checks, summary insights, and prediction-driven student management.",
      img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=800&auto=format&fit=crop",
      live: "https://frontend-virid-pi-53.vercel.app/",
      repo: "https://github.com/karthikeya2536/student-performance-analysis"
    },
    {
      title: "Music Recommendation System",
      tagline: "Graph Neural Networks tailored for personalized audio discovery.",
      tech: ["PyTorch", "GNN", "Docker", "Python", "React"],
      challenge: "Solving the 'cold start' problem in music discovery where standard collaborative filtering fails for new users or niche songs.",
      solution: "Engineered a Heterogeneous Neural Network (HNN) treating users, songs, and artists as distinct nodes in a unified graph to predict affinity scores.",
      impact: "Higher relevance for sparse datasets compared to baseline matrix factorization.",
      img: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=800&auto=format&fit=crop",
      live: "https://karthikeya2536.github.io/Music-Recommendation-System/",
      repo: "https://github.com/karthikeya2536/Music-Recommendation-System"
    },
    {
      title: "Lumina 2k25",
      tagline: "The official web portal for a massive collegiate fest.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      challenge: "Creating a high-performance, visually stunning experience to engage thousands of student participants and handle event registrations.",
      solution: "Built a responsive, animation-heavy web application with diverse event categories and smooth page transitions.",
      impact: "Served as the central hub for fest information and engagement.",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      live: "https://lu-m-in-a-2k25-gamma.vercel.app",
      repo: "https://github.com/karthikeya2536/LuMInA-2k25" 
    },
    {
      title: "Code Comment Generator",
      tagline: "Automated code documentation tool using Llama 2 LLM.",
      tech: ["Python", "Llama 2", "Streamlit", "GenAI"],
      challenge: "Reducing technical debt by automating the tedious process of writing comprehensive docstrings for legacy codebases.",
      solution: "Fine-tuned a Llama 2 model to analyze Python function signatures and bodies, generating standards-compliant docstrings automatically.",
      impact: "Improved developer productivity and codebase maintainability.",
      img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
      live: "https://github.com/karthikeya2536/CODE_COMMENT_GENERATOR", 
      repo: "https://github.com/karthikeya2536/CODE_COMMENT_GENERATOR"
    },
    {
      title: "SMS Spam Detection",
      tagline: "High-precision NLP classifier for enterprise messaging security.",
      tech: ["NLP", "TF-IDF", "Naive Bayes", "Scikit-learn"],
      challenge: "Filtering spam from legitimate messages with high accuracy while maintaining low latency for real-time processing.",
      solution: "Developed an NLP pipeline using TF-IDF vectorization and a Naive Bayes classifier, optimized for short text messages.",
      impact: "95% Accuracy on a dataset of 5,500+ messages.",
      img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop",
      live: "https://spam-detection-in-short-message-service.onrender.com/",
      repo: "https://github.com/karthikeya2536/Spam_Detection_In_Short_message_Service"
    },
    {
      title: "Karthik's Cafe",
      tagline: "A modern, interactive frontend for a boutique cafe brand.",
      tech: ["React", "CSS Modules", "Firebase", "UI/UX"],
      challenge: "Translating a premium brand identity into a digital storefront that feels welcoming and accessible.",
      solution: "Developed a clean, aesthetic UI with intuitive menu navigation and direct ordering capabilities.",
      impact: "Enhanced brand visibility and customer browsing experience.",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
      live: "https://karthiks-cafe-website.vercel.app",
      repo: "https://github.com/karthikeya2536/karthiks-cafe-website"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-black pt-32 pb-20 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
           Selected Case Studies
        </h1>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-32 text-lg">
          Deep dives into complex problems solved with code, data, and machine learning.
        </p>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              
              {/* Image Section */}
              <div className="w-full lg:w-1/2 group relative flex items-center justify-center min-h-[300px]">
                <CardContainer className="inter-var w-full h-full">
                  <CardBody className="relative group/card w-full h-auto rounded-xl p-6 border border-white/[0.1] bg-black/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-all duration-300">
                    
                    <a href={project.live} target="_blank" rel="noreferrer" className="block cursor-pointer">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {project.title}
                      </CardItem>
                      
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        {project.tagline}
                      </CardItem>
                      
                      <CardItem translateZ="100" className="w-full mt-4 relative">
                        <img
                          src={project.img}
                          height="1000"
                          width="1000"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt={project.title}
                        />
                        
                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 z-10">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span className="text-xs font-mono text-white font-medium">View Live</span>
                        </div>
                      </CardItem>
                    </a>

                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.live}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Visit →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.repo}
                        target="__blank"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        GitHub
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>

              {/* Content Section (Kept as is for context, could also be 3D-ified) */}
              <div className="w-full lg:w-1/2 space-y-8 pl-0 lg:pl-10">
                <div>
                   <h2 className="text-4xl font-bold text-white mb-3">{project.title}</h2>
                   <p className="text-xl text-indigo-400 font-medium leading-relaxed">{project.tagline}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/30 p-4 rounded-xl border border-white/5">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-red-500"/> The Challenge
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                   <div className="bg-neutral-900/30 p-4 rounded-xl border border-white/5">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-emerald-500"/> The Outcome
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                <div>
                   <h3 className="text-white font-semibold mb-3">Technologies</h3>
                   <div className="flex flex-wrap gap-2">
                     {project.tech.map((t, i) => (
                       <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono">
                         {t}
                       </span>
                     ))}
                   </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
