export default function ClothingItem(props) {
    function handleClick() {
        props.setTotal(props.total + props.item.price);
        props.setCart((prevCart) => {
          let newCart = [...prevCart];
          newCart[props.index] += 1;
          return newCart;
        });
        props.setQuantityList((prevList) => {
          let newquantityList = [...prevList];
          newquantityList[props.index] += 1;
          return newquantityList;
        });
          
        //props.setQuantity(() => props.quantity + 1);
      }

    return (
        <div>
            <h1>{props.item.name}</h1>
            <img class="images" src={props.item.image}/>
            <p>Product Description: {props.item.description}</p>
            <p>Price: ${props.item.price}</p>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
