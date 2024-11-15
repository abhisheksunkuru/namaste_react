import { styleCard } from "../utils/constants";


const RestroCard = (props) =>{
  

  const resInfo = props.resData.info;
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resInfo.cloudinaryImageId}`;
  return <div className='res-card' style={styleCard}>
    <img className="res-pic" src={imageUrl}></img>
    <div>{resInfo.name}</div>
    <h6>{resInfo.cuisines.join(" ")}</h6>
    <p>{resInfo.avgRating} stars</p>
    <p>{resInfo.sla.deliveryTime} Minutes</p>
  </div>
}
export default RestroCard;