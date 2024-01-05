import React, { useState } from 'react';
import { Link } from 'react-scroll';
import profile from './profile.jpg';
import Sidebar from './Sidebar';
import './App.css';
const Home = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const h1 = {
      letterSpacing : '3px',
     paddingLeft:'10px',
     whiteSpace: 'nowrap',
     cursor :'pointer',
    };
    const container = {
        display : 'flex',
        borderRadius : '40px',
        alignItems : 'center',
        paddingLeft :'2em',
        backgroundColor:'#fdcbcb',
        paddingBottom:'0.5em',
        position : 'fixed',
        zIndex: 1000,
        top: 0,
  left: '3px',
  right : '10px',
  transition: 'background-color 0.3s ease-in-out',
    };
    const A = {
      textDecoration :'none',
marginRight:'3em',
transition: 'transform 0.3s ease-in-out',

    };
    const Nav = {
        display : 'flex',
        alignItems : 'center',
        paddingLeft :'35em',
        cursor : 'pointer',
       
    };
    const infos = { 
      textAlign : 'center',
        alignItems : 'center',
      backgroundColor:'#fff4f4',
        paddingTop : '9em',
        paddingBottom : '9em',
    };
    const h11 = {
        fontSize : '6em',
       
    };
    const p = {
        fontWeight : 'bold',
        color : 'gray',
    };
    const img = {
      paddingTop:'5px',
        width:'50px',
        height : '60px',
     borderRadius : '50%',
     cursor:'pointer',
    }
    const main ={
      fontFamily :'cursive',
    };
  return (
    <div style={main}>
        <div style={container}>
<a href="#home" onClick={() => scrollToSection('home')}>
        <img style={img} src={profile} />   
</a>
<a href="#home" onClick={() => scrollToSection('home')}><h3 id='h3' style={h1}>NAMER RANIA</h3></a>
      <div style={Nav}>
      <a href ="#project" style={A} className='link' onClick={() => scrollToSection('projects')}>
            Projects
          </a>
          <a href="#skills" style={A} className='link' onClick={() => scrollToSection('skills')}>
            Skills
          </a>
          <a href ="#experience" className='link' style={A} onClick={() => scrollToSection('experience')}>
            Experience
          </a>
          <a href="#contact" className='link' style={A} onClick={() => scrollToSection('contact')}>
            Contact
          </a>
</div>
      </div>
      <Sidebar />
      <div style={infos} id='home'>
      <h1 style={h11}>I'm Namer Rania</h1>
      <h2 >Welcome to my Portfolio</h2>
      <p style={p}>A mini Web Developer building and developing basic simple but effective and intresting as well Websites and Web Applications,</p>
      <p style={p}>Down here you will find informations about me including my skills and some projects and other things that can be helpful.</p>
      </div>
     
    </div>
  
  );
};

export default Home;
