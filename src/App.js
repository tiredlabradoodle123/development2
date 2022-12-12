import {useState} from 'react';
import './App.css';
import ClothingData from "./assets/data.json";
import ClothingItem from './components/clothingItem';
import logo from './fanci.png';

ClothingData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
}); 

function App() {
  const [cart, setCart] = useState(new Array(ClothingData.length).fill(0));
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const originalList = ClothingData;
  const [displayItem, setDisplayItem] = useState(ClothingData);
  const formatTotal = (total) => "$" + Number(total.toFixed(2));
  const formatQuantity = (quantity) => Number(quantity.toFixed(2));

  function sortByPrice() {
    const copyItems = [...displayItem];
    copyItems.sort(function(x, y){
      if(x.price < y.price) {
        return -1;
      } 
      if (x.price > y.price) {
        return 1;
      } 
      return 0;
    }
    )
    setDisplayItem([...copyItems])
  }

  function filterTop(){
    const copyItem = [...originalList];
    const filterTop = copyItem.filter(item => {
      return item.name.includes("Top");
    } )

    setDisplayItem([...filterTop])
  }

  function filterBottoms(){
    const copyItem = [...originalList];
    const filterBottoms = copyItem.filter(item => {
      return item.name.includes("Pants" || "Skirt");
    } )

    setDisplayItem([...filterBottoms])
  }

  function filterDresses(){
    const copyItem = [...originalList];
    const filterDress = copyItem.filter(item => {
      return item.name.includes("Dress");
    } )

    setDisplayItem([...filterDress])
  }

  function filterBlack(){
    const copyItem = [...originalList];
    const filterBlack = copyItem.filter(item => {
      return item.colour.includes("black");
    } )

    setDisplayItem([...filterBlack])
  }

  function filterWhite(){
    const copyItem = [...originalList];
    const filterWhite = copyItem.filter(item => {
      return item.colour.includes("white");
    } )

    setDisplayItem([...filterWhite])
  }

  function filterYellow(){
    const copyItem = [...originalList];
    const filterYellow = copyItem.filter(item => {
      return item.colour.includes("yellow");
    } )

    setDisplayItem([...filterYellow])
  }

  function filterPink(){
    const copyItem = [...originalList];
    const filterPink = copyItem.filter(item => {
      return item.colour.includes("pink");
    } )

    setDisplayItem([...filterPink])
  }

  function filterBlue(){
    const copyItem = [...originalList];
    const filterBlue = copyItem.filter(item => {
      return item.colour.includes("blue");
    } )

    setDisplayItem([...filterBlue])
  }

  function filterOrange(){
    const copyItem = [...originalList];
    const filterOrange = copyItem.filter(item => {
      return item.colour.includes("orange");
    } )

    setDisplayItem([...filterOrange])
  }

  function filterBrown(){
    const copyItem = [...originalList];
    const filterBrown= copyItem.filter(item => {
      return item.colour.includes("brown");
    } )

    setDisplayItem([...filterBrown])
  }

  function resetItems(){
    const copyItems = [...originalList];
    setDisplayItem(copyItems);
  }

  function removeItem(item){
    const originalCart = [...cart];
    const newCart = originalCart.filter(cartItem => {return item.price != cartItem.price})
    setCart(newCart)
    setTotal(total - item.price);
    setQuantity(quantity -1);
  }

  return (
    <div className="App">
      <img class="logo" src={logo} alt="Logo" />
      <h1>Welcome to FanciClub</h1> {}

      <div className="itemsContainer">
        <button class="buttons" onClick={sortByPrice}>Sort by Price (low to high)</button>
        <div>  - </div>
        <button class="Buttons" onClick={resetItems}>Reset/clear filters</button>
        <h2>Filter for Item Type:</h2>
        <button class="Buttons" onClick={filterTop}>Tops Only</button> &nbsp;&nbsp;&nbsp;
        <button class="Buttons" onClick={filterBottoms}>Bottoms Only</button> &nbsp;&nbsp;&nbsp;
        <button class="Buttons" onClick={filterDresses}>Dresses Only</button>
        <h2>Filter for Item Colour:</h2>
        <button class="Buttons" onClick={filterBlack}>Black</button> &nbsp;&nbsp;&nbsp;
        <button class="Buttons" onClick={filterWhite}>White</button> &nbsp;&nbsp;&nbsp;
        <button class="Buttons" onClick={filterYellow}>Yellow</button> &nbsp;&nbsp;&nbsp;
        <button class="Buttons" onClick={filterPink}>Pink</button> &nbsp;&nbsp;&nbsp;
        <button class="Buttons" onClick={filterBlue}>Blue</button> &nbsp;&nbsp;&nbsp;
        <button class="Buttons" onClick={filterOrange}>Orange</button> &nbsp;&nbsp;&nbsp;
        <button class="Buttons" onClick={filterBrown}>Brown</button>
          {displayItem.map((item, index) => (
            <ClothingItem
              item={item}
              setCart={setCart}
              total={total}
              setTotal={setTotal}
              quantity={quantity}
              setQuantity={setQuantity}
              index={index}
              key={index}
            />
          ))}
        </div>

      <div>
        <h2>Cart</h2>
        <p>Cost Breakdown:</p>
        {cart.map((item, idx) => {
            if (item > 0) {
              return (
                <div className="CartItem" key={idx}>
                  Name: {ClothingData[idx].name}, Price: {ClothingData[idx].price}, Quantity:{formatQuantity(quantity)} &nbsp;&nbsp;&nbsp;
                  <button onClick={() => removeItem(ClothingData[idx])}>Remove</button> 
                </div>
              );
            }
              return null;
          } )}
          </div>
        <p>Total Cost: {formatTotal(total)}</p>
        <p> - </p>
      </div>
  );
        }

export default App;
