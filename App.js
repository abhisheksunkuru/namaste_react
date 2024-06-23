import React from 'react';
import ReactDOM from 'react-dom/client';
/*
Header
  -Logo
  -NavItems
Body
  -Search
  -Items
Footer
  -copyright
  -links
*/
const styleCard = {
  backgroundColor: "#f0f0f0",
}
const RestroCard = (props) =>{

    const {name, cusinine, rating, eta} = props.resData;
    return <div className='res-card' style={styleCard}>
      <img className="res-pic" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2k9r9zkeqcjhohsgrfu'></img>
      <h3>{name}</h3>
      <h4>{cusinine}</h4>
      <h5>{rating}</h5>
      <h5>{eta}</h5>
    </div>
}
const resData=[
  {
    id: "123",
    name: "Meghana Foods",
    cusinine: "Indian, Souhtindian",
    rating: "4.4",
    eta: "20",

  },
  {
    id: "124",
    name: "KFC",
    cusinine: "Italian",
    rating: "4.3",
    eta: "40",

  }
];
const Body = () =>{
  return <div className='body'>
    <div className='search'>Search</div>
    <div className='restro-container'>{
        resData.map((res)=>
          <RestroCard key={res.id} resData={res}/>
        )
      }

    
    </div>
  </div>
}
const App = () => {
  return <div className='app'>
    <Header></Header>
    <Body></Body>
  </div>
}

const Header = () =>{
  return <div className='header'>
    <div className='logo'>
      <img src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
    </div>
    <div className='nav-items'>
      <ul>
        <li>
          Home
        </li>
        <li>
          About
        </li>
        <li>
          contact
        </li>
        <li>
          Cart
        </li>
      </ul>
    </div>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<App />)