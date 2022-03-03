import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function ReorderInventoryList({ reOrdersArray, removeItem }) {

    const mapReOrdersArray = reOrdersArray.map(item => {
        return <InventoryItemCard key={item.id} item={item} handleClick={removeItem}  />
    })

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {mapReOrdersArray}
            </div>
        </div>
    );
}

export default ReorderInventoryList;