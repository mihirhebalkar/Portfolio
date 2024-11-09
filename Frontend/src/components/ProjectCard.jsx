import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes
}) => {
  return (
    <div className={'relative p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ' + classes}>
    
      <figure className='w-200 h-200 rounded-lg mb-4 overflow-hidden'>
        <img src={imgSrc} alt={title} loading='lazy' className='object-cover w-full max-h-[150px]' />
      </figure>

      <div className='flex-col items-center justify-between gap-4'>
        <h3 className='title-3 mb-3'>{title}</h3>

        <div className='flex justify-between items-start gap-4'>
          <div className='flex flex-wrap items-center gap-2'>
            {tags.map((label, key) => (
              <span
                key={key}
                className='h-7 text-xs text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg'>
                {label}
              </span>
            ))}
          </div>

          <a 
            href={projectLink} 
            target='_blank' 
            className='w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0'>
            <span className='material-symbols-rounded h-[0.7em]' aria-hidden="true">
              arrow_outward
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string
}

export default ProjectCard
