import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.';
import Body from './Body';
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



const App = () => {
  return <div className='app'>
    <Header></Header>
    <Body></Body>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<App />)