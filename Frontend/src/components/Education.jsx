import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: "Symbiosis Institute of Technology, Pune",
      duration: "2022 – 26",
      degree: "B.Tech in Computer Science & Engineering",
      grade: "CGPA: 9.12",
      icon: '/images/symbi.png',  
    },
    {
      institution: "Chinmaya Vidyalaya, Tarapur",
      duration: "2022",
      degree: "CBSE (Class XII)",
      grade: "94.4%",
      icon: '/images/cvt.png', 
    },
    {
      institution: "Chinmaya Vidyalaya, Tarapur",
      duration: "2020",
      degree: "CBSE (Class X)",
      grade: "97.8%",
      icon: '/images/cvt.png',  
    },
  ];

  return (
    <section id="education" className="pt-28 lg:pt-36">
        
      <div className="container mx-auto px-4 lg:px-8">
      <h2 className="headline-2 mb-5 text-center lg:text-left">Education</h2>
        <div className="bg-zinc-800/50 p-7 rounded-2xl">
          <ul className="space-y-8">
            {educationData.map((edu, index) => (
              <li key={index} className="flex items-start justify-between space-x-4 w-full">
                {/* Left side (Institution and Degree) */}
                <div className="flex items-center gap-4 w-full md:w-2/3">
                  {/* Institution Icon/Image */}
                  <figure className="w-12 h-12 rounded-lg overflow-hidden bg-white">
                    <img
                      src={edu.icon}
                      alt={edu.institution}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div>
                    <h3 className="headline-3">{edu.institution}</h3>
                    <p className="title-2 text-zinc-500">{edu.degree}</p>
                  </div>
                </div>

                {/* Right side (Duration and Grade) */}
                <div className="text-right w-full md:w-1/3">
                  <p className="text-sm text-zinc-400">{edu.duration}</p>
                  <p className="text-sm text-zinc-50">{edu.grade}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
