import { styleCard } from "../utils/constants";


const RestroCard = (props) =>{
  

  const resInfo = props.resData.info;
  console.log("response",resInfo)
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resInfo.cloudinaryImageId}`;
  return <div className='res-card' style={styleCard}>
    <img className="res-pic" src={imageUrl}></img>
    <h3>{resInfo.name}</h3>
    <h4>{resInfo.cuisines.join(" ")}</h4>
    <h5>{resInfo.avgRating} stars</h5>
    <h5>{resInfo.sla.deliveryTime} Minutes</h5>
  </div>
}
export default RestroCard;