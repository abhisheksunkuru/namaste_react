import RestroCard from "./RestroCard";
import resData from "../utils/mock_data";
import { useState } from "react";

const Body = () =>{
  const [listOfRest, setListOfRest] = useState(resData)
  return <div className='body'>
    <div className="filter">
      <button className="filter-btn"
      onClick={()=>{
        const filteredList = listOfRest.filter(

          (res) => res.info.avgRating>=4.4
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