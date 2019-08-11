import React from 'react';


class AddItemForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddItem(e.target.itemToAdd.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="apples" name="itemToAdd" aria-label="shopping list item"/>
        <button type="submit">Add Item</button>
      </form>
    )
  }
}

export default AddItemForm;
