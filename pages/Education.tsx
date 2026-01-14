import React, { useState } from 'react';
import { GraduationCap, School, BookOpen, Award, ExternalLink, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';

interface EducationItem {
  title: string;
  school: string;
  year: string;
  score: string;
  icon: React.ReactNode;
  coursework: string[];
  shadowClass?: string;
}

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedCoursework = isExpanded ? item.coursework : item.coursework.slice(0, 3);
  const showButton = item.coursework.length > 3;

  return (
    <div className="h-full w-full">
      <CardContainer className="inter-var w-full h-full" containerClassName="h-full py-2">
        <CardBody className={`bg-neutral-900/50 relative group/card border-white/10 w-full h-full flex flex-col rounded-xl p-6 border transition-all duration-300 hover:shadow-2xl ${item.shadowClass}`}>
          <CardItem translateZ="50" className="w-full flex justify-between items-start mb-4">
             <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center shadow-lg">
               {item.icon}
             </div>
             <div className="flex flex-col items-end">
                <span className="text-xs font-mono text-neutral-500 bg-neutral-800/50 px-2 py-1 rounded border border-white/5">{item.year}</span>
                <span className="text-xs font-bold text-indigo-400 mt-1">{item.score}</span>
             </div>
          </CardItem>
          
          <CardItem translateZ="60" className="text-xl font-bold text-white mb-2">
            {item.title}
          </CardItem>
          
          <CardItem translateZ="50" className="text-sm text-indigo-300 font-medium mb-6">
            {item.school}
          </CardItem>

          <CardItem translateZ="40" className="w-full">
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <BookOpen className="w-3 h-3" /> Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                  {displayedCoursework.map((c, i) => (
                      <span key={i} className="text-[10px] text-neutral-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                          {c}
                      </span>
                  ))}
                  {showButton && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card hover/click issues if any
                        setIsExpanded(!isExpanded);
                      }}
                      className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {isExpanded ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </button>
                  )}
              </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      title: "B.Tech in AI & ML",
      school: "St. Martins Engineering College",
      year: "2022 – 2026",
      score: "CGPA: 7.98",
      icon: <GraduationCap className="h-8 w-8 text-indigo-400" />,
      coursework: ["Artificial Intelligence", "Operating Systems", "DBMS", "Computer Networks", "Probability & Statistics", "Deep Learning", "Machine Learning", "Data Science"],
      shadowClass: "hover:shadow-indigo-500/20"
    },
    {
      title: "Intermediate",
      school: "MJPTBCWREIS",
      year: "2020 – 2022",
      score: "91.8%",
      icon: <School className="h-8 w-8 text-purple-400" />,
      coursework: ["Mathematics", "Physics", "Chemistry"],
      shadowClass: "hover:shadow-purple-500/20"
    },
    {
      title: "SSC (10th Class)",
      school: "Sri Vijaya Sai High School",
      year: "2019 – 2020",
      score: "GPA: 10.0",
      icon: <BookOpen className="h-8 w-8 text-pink-400" />,
      coursework: ["Mathematics", "Science", "Social Studies", "English", "Hindi", "Telugu"],
      shadowClass: "hover:shadow-pink-500/20"
    }
  ];

  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "IBM Cognitive Class",
      date: "2024",
      link: "/assets/IBM PY0101EN Certificate _ Cognitive Class.pdf"
    },
    {
      title: "Data Visualisation Job Simulation",
      issuer: "Tata Group",
      date: "August 2024",
      link: "/assets/MyXvBcppsW2FkNYCX_Tata Group_xEzMYEzFbcppGWr3w_1725561096055_completion_certificate.pdf"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Accenture North America",
      date: "August 2024",
      link: "/assets/hzmoNKtzvAzXsEqx8_Accenture North America_xEzMYEzFbcppGWr3w_1725729284402_completion_certificate.pdf"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-black pt-32 pb-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full">
         <h1 className="text-5xl md:text-7xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
           Education
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <EducationCard key={index} item={item} />
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
             <Award className="w-8 h-8 text-yellow-500" /> Certifications & Licenses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a 
                key={index}
                href={cert.link}
                target="_blank"
                rel="noreferrer" 
                className="group relative bg-neutral-900/50 border border-white/10 p-6 rounded-2xl hover:bg-neutral-800/80 transition-all hover:-translate-y-1 block z-10 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                    <Award className="w-6 h-6 text-neutral-400 group-hover:text-indigo-400" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{cert.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">{cert.issuer}</p>
                
                <div className="text-xs font-mono text-neutral-600 border-t border-white/5 pt-3">
                   Issued: {cert.date}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
