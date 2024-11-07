import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center fixed top-0 left-0 w-full h-20 z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img src="/images/logo.svg" width={40} height={40} alt="My logo" />
          </a>
        </h1>
        <div className="flex items-center">
          <button onClick={null}>
            <span className="material-symbols-rounded">menu</span>
          </button>
          Navbar
        </div>
        <a href="#contact" className="text-white">
          Contact Me
        </a>
      </div>
    </header>
  );
}

export default Header;
