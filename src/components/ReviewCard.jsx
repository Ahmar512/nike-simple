
import { star } from "../assets/icons";
const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-1 flex-col items-center px-20 max-sm:px-2">
        <img 
            src={imgURL} 
            alt={customerName}
            className="w-28 h-28 rounded-full" 
        />
        <p className="text-center info-text mt-5">{feedback}</p>
        <div className="mt-5 flex flex-1">
            <img src={star} alt="" height={25} width={25}/>
            <p className="info-text ml-3">({rating})</p>
        </div>
        <h3 className="font-bold font-palanquin text-3xl mt-5">{customerName}</h3>
    </div>
  )
}

export default ReviewCard;