import React from 'react';
import { ButtonPrimary } from './Button'; // Assuming the Button component is in a separate file

const certifications = [
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    provider: "Udemy",
    certificateLink: "https://www.udemy.com/", 
  },
  {
    title: "The WebDeveloper Bootcamp 2024",
    provider: "Udemy",
    certificateLink: "https://www.udemy.com/", 
  },
  {
    title: "MongoDB for SQL Experts",
    provider: "MongoDB",
    certificateLink: "https://www.mongodb.com/", 
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="pt-28 lg:pt-36">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="headline-2 mb-8 text-center lg:text-left">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 p-7 rounded-2xl flex flex-col justify-between transform transition-all hover:shadow-lg hover:bg-zinc-700"
            >
              <div className="flex flex-col mb-4">
                <h3 className="headline-3 text-white mb-2">{cert.title}</h3>
                <p className="text-zinc-500">{cert.provider}</p>
              </div>

              <ButtonPrimary
                href={cert.certificateLink}
                target="_blank"
                label="Certificate"
                icon="open_in_new"
                classes="mt-4 w-full transition-all hover:bg-sky-500 hover:text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
