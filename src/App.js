import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Nazmul",
    age: 21,
    job: "freelancer"
  }

  var person2 = {
    name: "Jhankar Mahbub",
    job: "Instructor"
  }

  var style = {
    color: "red",
    fontWeight: 'bold',
    backgroundColor:'blue',
    padding: '20px 50px'
  }

  const nayoks = ['Nazml','Arif','Emon','Elias','Jafar'];
  const products = [
    {name:'Photoshop', price:'$99'},
    {name:'Illustrator', price:'$67'},
    {name:'Adobe Xd', price:'$35'}
  ]
  const productNames = products.map (product => products.name);
  const nayokNames = nayoks.map(nayok => nayok)


  return (
    <div className="App">
      <header className="App-header">

        <div>
          <ul>
            {nayoks.map(nayok => <li>{nayok}</li>)}
            {/* {nayokNames.map(nayok => <li>{nayok}</li>)} */}
          </ul>

          <ul>
            {products.map(product => <li>{product.name}</li>)}
          </ul>
        </div>
        <div>
        <p>My First React Core Concept Paragraph</p>
        <h1>My heading : {2+5*2+100}</h1>
        <p>My name is {person.name}. I'm a professional {person.job}</p>
        <p>{person2.name+" "+person2.job}</p>
        <p className="" style={style}>I'm styled</p>
        <p style={{backgroundColor:'purple', padding:'10px'}}>I'm styled using second method</p>
        <Person></Person>
        <Person name="Nazmul"></Person>
        <Person name="Arif"></Person> 
        </div>

        < Count></Count>

        <Users></Users>
        
      </header>
       {/* products */}
       <div>
          {/* <Product name={products[0].name} price={products[0].price}></Product> 
          <Product name={products[1].name} price={products[1].price}></Product>
          <Product name={products[2].name} price={products[2].price}></Product>
        */}

        

        <Product productItem = {products[0]}></Product>
        <Product productItem = {products[1]}></Product>
        <Product productItem = {products[2]}></Product>

        {/* dynamic */}
        {
          products.map(product => <Product productItem={product}></Product> )
        }


        </div>
    </div>
  );
}

function Person(props){
  const style = {
    border:'2px solid red',
    padding: '20px 40px',
    margin: '10px',
    backgroundColor: 'gray',
    color:'black'
  }
  return <div style = {style}>
    {/* <h1>Sakib Al Hasan</h1> */}
    <h1>Name: {props.name}</h1>
    <h3>Best all rounder in the world</h3>
  </div>
}


function Product(props){
  const productStyle = {
    border:'2px solid gray',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#f5f5f5',
    color:'black',
    borderRadius: '5px',
    height: '200px',
    width: '200px',
    float:'left'
  }
  const {name,price} = props.productItem; //destructuring
  // console.log(props)
  return (
    <div style={productStyle}>
      {/* <h3>{props.productItem.name}</h3> */}
      <h3>{name}</h3>
      {/* <p>{props.productItem.price}</p> */}
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  )
}

// Component State
function Count(){
  const [count,setCount] = useState(0);
  // const handleIncrease = () => {
  //   const newCount = count+1;
  //   setCount(newCount);
  // }
  // const handleIncrease = () => setCount(count+1);
  return(
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onMouseMove={() => setCount(count-1)}>Decrease</button>
      <br/>
      <br/>
    </div>
  )
}

// Load dynamic data

function Users(){
  const [users,setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App;
