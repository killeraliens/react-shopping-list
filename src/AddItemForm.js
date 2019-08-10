import React from 'react';


class AddItemForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="apples" aria-label="shopping list item"/>
        <button type="submit">Add Item</button>
      </form>
    )
  }
}

export default AddItemForm;
