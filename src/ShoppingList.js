import React from 'react';
import ShoppingItem from './ShoppingItem';

export default function ShoppingList(props) {

  return (
    <ul>
      {props.items.map((item, i) =>
        <ShoppingItem
          key={i}
          item={item}
          onCheckItem={props.onCheckItem}
          onDeleteItem={props.onDeleteItem}
        />
      )}
    </ul>
  )

}

ShoppingList.defaultProps = {
  items: []
};
