import React from "react";
import styled from "styled-components";

const MenuInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function OperatorMenuForm() {
  return (
    <div className='add-item-form container'>
      <h3>Add an item to your menu:</h3>
      <MenuInputs>
        <input type='text' placeholder='name' />
        <input type='text' placeholder='price' />
        <input type='text' placeholder='description' />
        <input type='text' placeholder='food, drink, deals, etc.' />
        <button>Add</button>
      </MenuInputs>
    </div>
  );
}
