import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Products = [
    {name: 'Alamin', price: '$120', country:'banglades'},
    {name: 'Adnan', price: '$132', country:'banglades'},
    {name: 'Sumon', price: '$140', country:'banglades'},
    {name: 'Sumon', price: '$140', country:'banglades'}
  ]
  const users = [ 'Alamin','Sumon','Sagor', 'Sahin']

  return (
    <div className="App">
      <header className="App-header">
        <p>My Name is Alamin</p>
        <Counter></Counter>
        <Users></Users>
        {
          Products.map(product=><li>{product.name}</li>)
        }
        {
          Products.map(product=><Product product={product}></Product>)
        }
       
      </header>
    </div>
  );
}


function Users() {
  const [user, setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUser(data))
  },[])

  return(
    <div className="">
      <h2>Users: {user.length} </h2>
      <ul>
        {
          user.map(user=><li> {user.name} </li>)
        }
      </ul>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(10)
  return(
    <div className="">
      <h2>Count : {count}</h2>
      <button onClick = { () => setCount(count - 1) }>Decrement</button>
      <button onClick = { () => setCount(count + 1) }>Increment</button>
    </div>
  )
}


function Product(props) {
  const productStyle = {
    border:'1px solid red',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    color: '#333',
    float: 'left'
  }
  const {name, price, country} = props.product;
  return(
    <div style={productStyle} className="productDetails">
      <h4>{name}</h4>
      <h2>{price}</h2>
      <h3>{country}</h3>
      <button>Sent me!</button>
    </div>
  )
}









export default App;
