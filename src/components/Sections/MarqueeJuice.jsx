import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Typography } from '@material-tailwind/react';
import starImg from '../../../public/starImg.svg';

gsap.registerPlugin(ScrollTrigger);

const MarqueeJuice = () => {
  const marqueeRef = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(marqueeRef.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  const marqueePartStyles = {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    padding: '0 5px',
  };

  const marqueeInnerStyles = {
    display: 'flex',
    width: 'fit-content',
    flex: 'auto',
    flexDirection: 'row',
  };

  const marqueeStyles = {
    backgroundPosition: 'relative',
    backgroundColor: "#FF5C00",
    padding: '10px 0',
    borderTop: '2px solid black',
    borderBottom: '2px solid black',
    overflow: 'hidden',
  };

  return (
    <div className="marquee" style={marqueeStyles}>
      <div className='marquee-inner' style={marqueeInnerStyles} ref={marqueeRef}>
        <div className='marquee-part' style={marqueePartStyles}>
          <Typography className='text-4xl font-bold text-black'>NO CALORIES</Typography>
          <img src={starImg} alt="" className='mx-10'/>
          <Typography className='text-4xl font-bold text-black'>NO ADDED SUGAR</Typography>
          <img src={starImg} alt="" className='mx-10'/>
          <Typography className='text-4xl font-bold text-black'>NO CALORIES</Typography>
          <img src={starImg} alt="" className='mx-10'/>
          <Typography className='text-4xl font-bold text-black'>NO ADDED SUGAR</Typography>
          <img src={starImg} alt="" className='mx-10'/>
          <Typography className='text-4xl font-bold text-black'>NO CALORIES</Typography>
          <img src={starImg} alt="" className='mx-10'/>
          <Typography className='text-4xl font-bold text-black'>NO ADDED SUGAR</Typography>
          <img src={starImg} alt="" className='mx-10'/>
          <Typography className='text-4xl font-bold text-black'>NO CALORIES</Typography>
          <img src={starImg} alt="" className='mx-10'/>
          <Typography className='text-4xl font-bold text-black'>NO ADDED SUGAR</Typography>
          <img src={starImg} alt="" className='mx-10'/>
          <Typography className='text-4xl font-bold text-black'>NO CALORIES</Typography>
          <img src={starImg} alt="" className='mx-10'/>
          <Typography className='text-4xl font-bold text-black'>NO ADDED SUGAR</Typography>
        </div>
      </div>
    </div>
  );
}

export default MarqueeJuice;
