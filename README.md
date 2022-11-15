# Development

### Link to Deployed Website
If you used the stencil code, this is `https://tiredlabradoodle123.github.io/development`

### Goal and Value of the Application
The goal of this application is to simulate a shopping site where a user can add garments to a cart and see the total cost of what they have.  Users can filter through item types, for tops, trousers and dresses, can sort each of these in order of price low/high and reset these filters.  Users can also remove items from their cart by clicking the remove button.

### Usability Principles Considered
I made my application user friendly by having the buttons all labeled with stanards words to produce expected results. For example, my add button adds an item to my cart. My remove button removes an item from my cart. Also, I had my total cart at the bottom so that users can scroll through and see all the items first. I also included a Quantity feature so users can see how much of a product they have added to their cart. Also, my use of price low to high filters and sorting for specific item types takes hierarhcy into consideration, as users may want to prioritise items with a lower price. 

### Organization of Components
clothingItem.js - Handles the display related to a clothing item within the selection area. This is processed and updated in my app.js. This page also updates the total and quantity when the add button is interacted with. I used state to keep up with the cart where I create a new const variable where it keeps up with the name, price, and quantity of items added. 

### How Data is Passed Down Through Components
I have a ClothingItem component which takes in index, name, image, description, price, setCart, cart, quantity and set Quantity. The specific data is passed in to clothingItem.js from data.json. All of this is passed in to app.js and set in my ItemContainer class. 

### How the User Triggers State Changes
When the user presses the add or remove button, a state change is triggered, ie the total cost, quantity and cart is change. I used state to handle an array that contained the items in the cart and handle the cart total. I also used state in my clothingItem component to keep track of the number of clicks the add button for the item received. 