import { services } from "../constent";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <section className="grid lg:grid-cols-3 gap-12 sm:grid-cols-2">
      {services.map((service)=>(
        <ServiceCard 
          key={service.label}
          imgURL = {service.imgURL}
          label ={service.label}
          anime = {service.anime}
          subtext = {service.subtext}
        />
      ))}
    </section>
  )
}

export default Services;