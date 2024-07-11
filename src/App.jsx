import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer,CustomerReviews, Subscribe,Footer } from "./sections"
import Nav from './components/Nav';
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