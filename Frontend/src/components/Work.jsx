import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/images/medisync.png',
      title: 'MediSync',
      tags: ['React','Express','MongoDB','Node.js', 'Tailwind','Gemini AI'],
      projectLink: 'https://github.com/mihirhebalkar/MediSync'
    },
    {
      imgSrc: '/images/yelpcamp.png',
      title: 'YelpCamp',
      tags: ['EJS','Node.js','Express','MongoDB','Bootstrap'],
      projectLink: 'https://github.com/mihirhebalkar/yelpcamp'
    },
    {
      imgSrc: '/images/medxtract.png',
      title: 'MedXtract',
      tags: ['Python','OpenCV','Tesseract','Gen AI', 'React','Django'],
      projectLink: 'https://github.com/mihirhebalkar/MedXtract'
    },
    {
      imgSrc: '/images/partytime.png',
      title: 'PartyTime',
      tags: ['Next.js','Django','SQLite','E-commerce'],
      projectLink: 'https://github.com/mihirhebalkar/PartyTime'
    },
    {
      imgSrc: '/images/fintracker.png',
      title: 'Finance Tracker',
      tags: ['Java','Java Swing', 'MySQL','JDBC','Netbeans'],
      projectLink: 'https://github.com/mihirhebalkar/Personal_Finance_Management'
    },
  ];


const Work = () => {
  return (
    <section
    id='projects'
    className='section'>
        <div className='container'>

            <h2 className='headline-2 mb-8'>
                My Portfolio highlights
            </h2>

            <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]'>
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink} />
                ))}


            </div>            
        </div>
    </section>
  )
}

export default Work