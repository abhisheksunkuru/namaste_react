import RestroCard from "./RestroCard";
//import resData from "../utils/mock_data";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
  const [listOfRest, setListOfRest] = useState([])
  useEffect(()=>  {
    fetchData() 
  },[])
  
  const fetchData = async () => {
    console.log("in use effect")
    try{
      response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const data = await response.json();
      console.log("swigy response",data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      //optional chaining
      setListOfRest(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }catch(error){
      console.error("Error in fetching data", error)
    }
  }
  if(listOfRest.length == 0){
    return(<Shimmer/>)
  }
  console.log("in render function")
  return <div className='body'>
    <div className="filter">
      <button className="filter-btn"
      onClick={()=>{
        const filteredList = listOfRest.filter(

          (res) => res.info.avgRating>=4.5
        );
        setListOfRest(filteredList);
      }}
      >Top rated Resturants</button>
    </div>
    <div className='search'>Search</div>
    <div className='restro-container'>{
        listOfRest.map((res)=>
          <RestroCard key={res.id} resData={res}/>
        )
      }

    
    </div>
  </div>
}
export default Body;