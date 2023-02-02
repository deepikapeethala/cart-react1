import Header from "./Components/Header.jsx";
import index from "./index.css";
import CartIcon from "./Components/CartIcon.jsx";
import Card from "./Components/Card.jsx";
import { useState } from "react";
import Total from "./Total.js";
let products=[
  {
    name:"Redmi 4",
    path:"mobile.jpeg",
    price:9000,
  },
  {
    name:"Samsung",
    path:"mobile2.jpeg",
    price:10000,
  },
  {
    name:"Redmi 9",
    path:"mobile3.jpeg",
    price:9000,
  },
  {
    name:"samsung",
    path:"mobile4.jpeg",
    price:9000,
  }
]

function App() {
  let[CartIteams,setCartItems]=useState(0);
  let[total,setTotal]=useState(0);


  function addCartItems(){
    setCartItems(CartIteams+1)
  }
  function decreaseCartItem(){
    setCartItems(CartIteams-1)
  }
  function changeTotal(t){
  setTotal(total+t)

}
  return (
    <>
    <Header/>
    <main>
    {products.map((e,i)=>(
    <Card 
    changeTotal={changeTotal}
    addCartItems={addCartItems}
    decreaseCartItem={decreaseCartItem}
    key={i}
     product={e}
     />
     ))}
    </main>
    <Total total={total}/>
    </>
  );
 
}

export default App;