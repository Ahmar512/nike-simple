import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-10">
      <div id="hidden" className="w-full lg:w-[50%] flex flex-col justify-center">
        <h1 className="font-palanquin text-4xl font-bold">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h1>
        <p className="text-slate-gray font-montserrat mt-5">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="text-slate-gray font-montserrat mt-5">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-10">
        <Button 
          label="View details"
          imgURL = " "
        />
        </div>
      </div>
      <div id="hidden" className=" flex justify-center 
       object-contain items-center">
        <img src={shoe8} alt="" className="w-full  h-full max-lg:w-[80%]" />
      </div>
    </section>
  )
}

export default SuperQuality;