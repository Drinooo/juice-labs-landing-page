// Hero
import imgDrinks from '/Images/Background/hero-imgv2.png';
import imgBerry from '/Images/Background/berry.png';
import imgCherry from '/Images/Background/cherry.png';
import imgOrangeSlice from '/Images/Background/orange-slice.png';
import imgOrangeStraw from '/Images/Background/orange-straw.png';

export const heroDrinks = {
  backgroundImage: `url(${imgDrinks})`,
  backgroundSize: 'cover',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
};

export const fruits = [
  { name: 'berry', image: imgBerry },
  { name: 'cherry', image: imgCherry },
  { name: 'orange-slice', image: imgOrangeSlice },
  { name: 'orange-straw', image: imgOrangeStraw },
];

// Button Style
export const ButtonStyle = ({ children }) => {
  return (
    <a href="#_" className="relative inline-block px-6 py-3 font-medium group">
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-orange-primary border-2 border-black group-hover:bg-black"></span>
      <span className="relative text-white group-hover:text-white">{children}</span>
    </a>
  );
};