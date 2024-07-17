import React from 'react'

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default scrollToSection;
