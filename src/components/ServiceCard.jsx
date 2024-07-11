
const ServiceCard = ({imgURL, label, subtext, anime}) => {
  return (
    <div data-aos={anime} data-aos-delay="200" className="shadow-2xl px-10 py-12 rounded-xl">
        <div className="bg-coral-red w-[35px] h-[35px] flex justify-center items-center rounded-full">
            <img src={imgURL} alt={label} />
        </div>
        <h1 className="font-bold font-palanquin text-2xl mt-5">{label}</h1>
        <p className="mt-5 font-montserrat text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard;