import React from 'react'

function InventoryItemCard({ item, handleClick }) {
    
    
    
    return(
        <div className="card" onClick={() => handleClick(item)}>
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
            <button onClick={() => console.log("Deleting the item...")}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;