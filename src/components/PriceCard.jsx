import { star } from "../assets/icons";
const PriceCard = ({name, imgURL, price, delay}) => {
 
  return (
    <div data-aos="fade-up" data-aos-delay={delay} className="cursor-pointer flex flex-1 flex-col w-full max-sm:w-full" >
        <img 
            src={imgURL} 
            alt={name} 
            className="w-[280px] h-[280px]"
        />
        <div className="flex mt-8">
        <img src={star} alt="star icon" width={25} height={25} className="mr-2"/>
        <p className="text-slate-gray">(4.5)</p>
        </div>
        <p className="font-bold font-palanquin mt-2">{name}</p>
        <p className="font-montserrat font-bold text-coral-red mt-2">{price}</p>
    </div>
  )
}

export default PriceCard;