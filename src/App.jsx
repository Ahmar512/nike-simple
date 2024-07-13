import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer,CustomerReviews, Subscribe,Footer } from "./sections"
import Nav from './components/Nav';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // const observer = new IntersectionObserver((entries)=>{
  //   entries.forEach((entry)=>{
  //     console.log(entry);
  //     if(entry.isIntersecting){
  //       entry.target.classList.add('show');
  //     }else{
  //       entry.target.classList.remove('show');
  //     }
  //   })
  // })
  // const hiddenElements = document.querySelectorAll('#hidden');
  // console.log(hiddenElements);
  // hiddenElements.forEach((el)=> observer.observe(el));

  useGSAP(()=>{
    const boxes = document.querySelectorAll('#box');
    boxes.forEach((box)=>{
      gsap.from(box ,{
        x:-350,
        duration:2,
        opacity:0,
        ease:'power3.inOut',
        scrollTrigger:{
          trigger:box,
          start:'bottom bottom',
          end: 'top 50%',
          scrub: true,
        }
  
      })
    })
    
  },[]);
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
       <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16">
        <Subscribe />
      </section>
      <section className="padding bg-black">
        <Footer />
      </section>
    </main>
  );
}

export default App