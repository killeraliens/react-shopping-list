import React from 'react';
import './App.css';
import AddItemForm from './AddItemForm';
import ShoppingList from './ShoppingList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingItems: []
    };
  }

  render() {
    return (
      <>
       <header>
         <h1>Shopping List</h1>
       </header>
       <main>
         <section>
           <AddItemForm />
         </section>
         <section>
           <ShoppingList items={this.state.shoppingItems}/>
         </section>
       </main>
      </>
    )

  }
}

export default App;
