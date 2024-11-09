import React from 'react'

const ExpCard = ({ title, role, description, duration, icon }) => {
    return (
      <div className="bg-zinc-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 overflow-hidden mt-1">
              <img src={icon} alt="Experience Icon" className="w-full h-full object-contain bg-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-zinc-50">{title}</h4>
              {role && <p className="text-zinc-300/50 mt-1 text-md">{role}</p>}
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-zinc-500 text-sm">{duration}</p>
          </div>
        </div>
        <p className="text-zinc-300 mt-2">{description}</p>
      </div>
    );
  };
  
  export default ExpCard;
  