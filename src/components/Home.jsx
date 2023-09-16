import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
    
      <p>
        Welcome to our platform dedicated to crafting bespoke projects for
        frontend software engineers. Elevate your digital presence with our
        expert team proficient in JavaScript, HTML, CSS, and React. We specialize
        in creating captivating web experiences, ensuring seamless user
        interactions and visually stunning designs. Let us turn your vision into
        a polished reality that resonates with your target audience. Empower
        your brand with our expertise, delivering innovative solutions that
        drive success in the ever-evolving digital landscape.
      </p>
      <section className='features'>
        <h2>Our features</h2>
        <ul>
        <li>Custom Web Development</li>
          <li>User Experience Design</li>
          <li>Responsive and Mobile-First Design</li>
        </ul>

      </section>
      <section className='cta'>
        <h2>Ready to Elevate Your Projects?</h2>
        <p>Join us now and experience the difference.</p>
        <button className='btn'>Get Started</button>
      </section>
    </div>
  );
};

export default Home;
