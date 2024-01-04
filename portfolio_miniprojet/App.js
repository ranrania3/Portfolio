
import React, { useEffect } from 'react';
import Home from './Home';
import ProjectShowCase from './ProjectShowCase';
import SkillsAndExperience from './SkillsAndExperience';
import ContactInformation from './ContactInformation';
import './App.css'
function App() {
  useEffect(() => {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);
  return (
    <div className='page'>
    <div className='scrollbar'>
      <Home />
      <ProjectShowCase />
      <SkillsAndExperience />
      <ContactInformation />
    </div></div>
  );
 
}


export default App;
