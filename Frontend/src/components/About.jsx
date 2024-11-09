import React from 'react'
import ExpCard from './ExpCard';

const aboutItems = [
  {
    label: 'Projects done',
    number: 10
  },
  {
    label: 'Certifications earned',
    number: 5
  }
];

const About = () => {
  return (
    <section
      id='about'
      className='section'>
      <div className='container'>

        <div className='bg-zinc-800/50 p-7 rounded-2xl'>

          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[80ch]">

Hi, I am currently pursuing my B.Tech in Computer Science Engineering. Passionate about technology and innovation, I have developed a strong interest in full-stack web development and am currently exploring Machine Learning. I am also dedicated to enhancing my problem-solving skills through various challenges and projects.          
</p>
<section className="mt-8">
            <h3 className="text-2xl font-semibold text-zinc-200">Experience</h3>
            <div className="space-y-4 mt-4">
              <ExpCard
                title="Ab Normal Home"
                role="Volunteer"
                description="Developed a dashboard app to enhance communication between parents and teachers. Facilitated weekly sessions and educational materials for children to support their academic growth."
                duration="Jul 2024 - Nov 2024"
                icon="/images/abnormalhome.png"  // Example icon path
              />
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-2xl font-semibold text-zinc-200 mb-5">Hackathons</h3>
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[80ch]">
              Apart from academics, I have participated in several hackathons, where I collaborated with my teammates to create innovative solutions under tight deadlines.
            </p>
            <div className="space-y-4 mt-4">
              <ExpCard
                title="Hackrx 5.0"
                role="Pune, Maharashtra"
                description="Developed MedXtract, a React and Django app using Tesseract OCR, Azure AI Vision, and OpenCV to extract and process prescription data, providing diagnosis with ICD codes via Gemini API with over 87% accuracy."
                duration="Sep 22-23, 2024"
                icon="/images/hackrx.png"  // Example icon path
              />
              <ExpCard
                title="FOSS Hack 2024"
                role="Pune, Maharashtra"
                description="Developed Livre a web application that aids travellers by providing essential features like currency converter, language translator, expense tracker and a journal. "
                duration="July 27-28, 2024"
                icon="/images/fosshack.svg"  // Example icon path
              />

            </div>
          </section>


          <div className='flex flex-wrap items-center gap-4 md:gap-7 mt-10'>
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className='flex items-center md:mb-2'>
                    <span className='text-2xl font-bold md:text-4xl'>{number}</span>
                    <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                  </div>
                  <p className='text-sm text-zinc-400'>{label}</p>
                </div>
              ))
            }
            <img
              src="/images/logo.png"
              alt=""
              width={40}
              height={40}
              className='ml-auto md:w-[40px] md:h-[40px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About