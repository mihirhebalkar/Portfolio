import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  // Function to initialize or update the active box position and size
  const updateActiveBox = useCallback(() => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
      activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
      activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
      activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
    }
  }, []);

  // Initialize the active box position when the component mounts or `navOpen` changes
  useEffect(() => {
    updateActiveBox();
    // Add a listener to update active box on window resize
    window.addEventListener('resize', updateActiveBox);
    return () => window.removeEventListener('resize', updateActiveBox);
  }, [updateActiveBox, navOpen]);

  // Handler to activate the current link and update active box position
  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;
    updateActiveBox();
  };

  // Navigation items
  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link active' },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Projects', link: '#projects', className: 'nav-link' },
    { label: 'Bio', link: '#bio', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          ref={key === 0 ? lastActiveLink : null} // Set ref on the initial active link only
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}

      {/* The active box */}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
