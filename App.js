import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', 
// {}, 
// "Abhishek Sunkuru"
// )
const Title = () => (
  <h1 className='head' tabIndex="5">
    React Header Component
  </h1>
)

// console.log(heading);
// jsx is transapiled before it reached js engine - parcel -> babel
// jsx => React.createElement => reactcreateElement js => html element
// const jsxheading = <h1 id="test">Namaste React ABhi</h1>;
// console.log(jsxheading);
const HeadingComponent = () => (
  <div id="container" >
    {Title()}
    <Title/>
    <h1 className="heading"> Namaste React Functional Component</h1>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<HeadingComponent />)