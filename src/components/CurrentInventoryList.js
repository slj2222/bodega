import React from 'react'
import InventoryItemCard from "./InventoryItemCard"

function CurrentInventoryList({ inventoryArray, addItem }) {

    const mapInventoryArray = inventoryArray.map(item => {
        return <InventoryItemCard key={item.id} item={item} handleClick={addItem} />
    })

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {mapInventoryArray}
            </div>
        </div>
    );
}

export default CurrentInventoryList;