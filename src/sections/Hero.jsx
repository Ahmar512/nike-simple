import Button from '../components/Button';
import { useState } from 'react';
import {arrowRight} from '../assets/icons';
import {shoes, statistics} from '../constent';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {

  const tl = gsap.timeline({});
  useGSAP(()=>{
    tl.from('#hero-box',{
        x:-350,
        duration:2,
        opacity:0,
        force3D:true,
        ease:'back.out',
    }),
    tl.from('#nike',{
        duration:1,
        rotateX:-360,
        stagger:0.2,
        force3D:true,
        ease:'power3.inOut',
    })
  },[]);
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container xl:pl-10">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 z-20">
        <p className='text-xl font-montserrat text-coral-red'>Our Summer collections</p>
        <h1 id='hero-box' className='mt-10 font-palanquin text-8xl max-sm:text-[78px] max-sm:leading-[82px] font-bold z-10 flex flex-wrap items-center' >
          <span  className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span  className='text-coral-red inline-block flex flex-wrap mr-4 '><p id='nike' >N</p><p id='nike' >i</p><p id='nike' >k</p><p id='nike' >e</p></span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button
          label = "Shop now"
          imgURL ={arrowRight}
        />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center z-0'>
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500}
        className='object-contain relative z-10'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
              imgURL = {shoe}
              changeBigShoeImage = {(shoe)=> setBigShoeImg(shoe)}
              bigShoeImg ={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero;
