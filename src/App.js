import React from 'react';
import './App.css';
import AddItemForm from './AddItemForm';
import ShoppingList from './ShoppingList';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingItems: [
        { name: 'test item 1', checked: false },
        { name: 'another test item', checked: true },
        { name: 'test item number three', checked: false },
      ]
    };
  }

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({ shoppingItems: newItems });
  }

  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    });
    this.setState({ shoppingItems: newItems});
  }

  handleAddItem = (itemName) => {
    console.log('adding item', { itemName });
    const newItems = this.state.shoppingItems;
    newItems.push({name: itemName, checked: false});
    this.setState({ shoppingItems: newItems})
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onCheckItem={this.handleCheckItem}
              onDeleteItem={this.handleDeleteItem}
            />
          </section>
        </main>
      </>
    )

  }
}

export default App;
