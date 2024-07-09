import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex gap-10 max-lg:flex-col-reverse">
      <div className="w-full lg:w-[45%] flex justify-center items-center">
          <img src={offer} alt="offer png" className="max-lg:w-[100%] max-lg:h-[100%]"/>
      </div>
      <div className="lg:w-[55%] w-full">
        <h1 className="text-4xl font-bold font-palanquin"><span className="text-coral-red">Special</span> Offer</h1>
        <p className="text-slate-gray mt-5 font-montserrat">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="text-slate-gray mt-5 font-montserrat">Navigate a realm of possibilities designed to fulfill you unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-10 flex gap-6">
        <Button 
           label="Shop now"
           imgURL = {arrowRight}
        />
        <button className="py-4 px-7 border-[1px] border-slate-gray rounded-full font-montserrat text-lg text-slate-gray">Learn more</button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer;