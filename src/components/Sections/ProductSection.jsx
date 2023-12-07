import { Typography } from '@material-tailwind/react'
import React from 'react'

export const ProductSection = () => {
  return (
    <section>
        <div className='container mx-auto py-150 flex justify-center items-center'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 space-y-4'>
                    <Typography className='text-5xl font-black text-black uppercase leading-tight'>Explore Our Wide Range of <span className='text-orange-primary'>Healthy</span> Drink Options</Typography>
                    <Typography className='text-lg font-normal leading-tight mb-2'>
                        From refreshing waters to energizing smoothies, we have something for every taste and need
                    </Typography>
                </div>
                <div> </div>
            </div>
        </div>
    </section>
  )
}
