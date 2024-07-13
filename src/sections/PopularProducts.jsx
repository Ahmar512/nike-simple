import {products} from "../constent";
import PriceCard from "../components/PriceCard";
const PopularProducts = () => {
  
  
  return (
    <section id="PopularProducts" className="flex flex-col justify-center">
      <h1 id='box' className="text-4xl font-bold xhidden font-palanquin" >Our <span  className="text-coral-red">Popular</span> Products</h1>
      <p className="text-slate-gray font-montserrat mt-8 mb-16 text-md sm:max-w-[500px]">Experience top-notch quality and style with our sought-after selections Discover a world of comfort, design. and value</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm-grid-col-1 sm:gap-4 gap-14">
      {products.map((product)=>(
        <PriceCard 
          key={product.name}
          delay={product.delay}
          name = {product.name}
          imgURL = {product.imgURL}
          price = {product.price}
        />
      ))}
      </div>
    </section>
  )
}

export default PopularProducts;