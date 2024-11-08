import React from 'react';
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool',
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface',
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction',
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework',
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database',
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Programming Language',
  },
  {
    imgSrc: '/images/cplusplus.svg',
    label: 'C++',
    desc: 'Programming Language',
  },
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Programming Language',
  },
  {
    imgSrc: '/images/vscode.svg',
    label: 'VSCode',
    desc: 'Code Editor',
  },
  {
    imgSrc: '/images/sql.svg',
    label: 'SQL',
    desc: 'Database Language',
  },
  {
    imgSrc: '/images/git.svg',
    label: 'Git',
    desc: 'Version Control',
  },
  {
    imgSrc: '/images/linux.svg',
    label: 'Linux',
    desc: 'Operating System',
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
