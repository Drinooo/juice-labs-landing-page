import { Typography } from '@material-tailwind/react';
import React from 'react';
import { ButtonStyle, heroDrinks, fruits } from '../../utils/Data';

export const HeroSection = () => {
  return (
    <section className='bg-orange-secondary relative flex justify-center items-center' style={heroDrinks}>
      <div className='absolute h-full 2xl:w-[45%] xl:w-[55%] lg:w-[55%] md:w-[70%] sm:w-[100%] left-0 py-10'>
          {fruits.map((fruit, index) => (
            <div key={index} className='absolute xl:left-[15rem] lg:left-[5rem]'>
              {fruit.name === 'cherry' && <img src={fruit.image} alt={fruit.name} />}
            </div>
            ))}
            {fruits.map((fruit, index) => (
              <div key={index} className='absolute top-[5rem] right-0 mr-[6rem]'>
                {fruit.name === 'orange-slice' && <img src={fruit.image} alt={fruit.name} />}
              </div>
            ))}
            {fruits.map((fruit, index) => (
              <div key={index} className='absolute bottom-0 right-0 mb-[10rem]'>
                {fruit.name === 'berry' && <img src={fruit.image} alt={fruit.name} />}
              </div>
            ))}
            {fruits.map((fruit, index) => (
              <div key={index} className='absolute mb-[5rem] bottom-0 lg:left-[20rem] md:left-[15rem]'>
                {fruit.name === 'orange-straw' && <img src={fruit.image} alt={fruit.name} />}
              </div>
            ))}
        </div>

        <div className='container mx-auto h-hero flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='space-y-6 p-3'>
                <Typography className='lg/md:text-h1 sm:text-[50px] font-black leading-tight uppercase min-w-min'>
                  Your Trusted Source for Delicious, <span className='text-orange-primary'>Healthy</span> Drinks.
                </Typography>
                <Typography className='text-lg font-normal leading-tight mb-2'>
                  Discover the perfect balance of taste and nutrition with Juice Labs. Our selection of healthy drinks is sure to satisfy your thirst and nourish your body. From refreshing waters to energizing smoothies, we have something for everyone.
                </Typography>
                <ButtonStyle>Shop Now</ButtonStyle>
              </div>
              <div className='hidden md:block'>
              </div>
            </div>
          </div>
    </section>
  );
};
