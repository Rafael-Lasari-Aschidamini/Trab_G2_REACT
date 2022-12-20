import { Avatar } from '@mui/material';
import React from 'react';
import ProfileImage from '../assets/images/profile.png';
import ProfileImagedois from '../assets/images/profile2.png';
import { LinkedIn, GitHub } from '@mui/icons-material'

const About = () => {
  return (
    <div className="about">
      <Avatar sx={{width: 150, height: 150, objectPosition: 'top'}} style={{objectPosition: 'top'}} alt="Remy Sharp" src={ProfileImage} />
      <h1>Rafael Lasari Aschidamini</h1>
      <h11>rafaelaschidamini@gmail.com</h11>
      <h12>54 9 8150 3700</h12>
      <div className='link-group'>
        <a href='https://www.linkedin.com/in/rafael-lasari-aschidamini-141834213/' target='_blank'><LinkedIn/></a>
        <a href='https://github.com/Rafael-Lasari-Aschidamini/' target='_blank'><GitHub/></a>
        </div>
      <Avatar sx={{width: 150, height: 150, objectPosition: 'top'}} style={{objectPosition: 'top'}} alt="Remy Sharp" src={ProfileImagedois} />
      <h2>Ronald Tozzo Auler</h2>
      <h21>ronaldtozzo@hotmail.com</h21>
      <h22>54 9 9921 2359</h22>
      <div className='link-group'>
        <a href='https://www.linkedin.com/in/ronald-tozzo-auler-50832b1b3/' target='_blank'><LinkedIn/></a>
        <a href='https://github.com/RonTozzo/' target='_blank'><GitHub/></a>
      </div>
    </div>
  );
};

export default About;
