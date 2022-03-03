import React, { useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventoryArray, setInventoryArray] = useState([])
    const [reOrdersArray, setReOrdersArray] = useState([])

    function addItem(newObj) {
        // see if the new Obj is already in the reOrdersArray, if it in the array, dont add. else, add it to the array.
        if (reOrdersArray.includes(newObj)) {
            return console.log("ALREADY IN REORDER")
        } else {
            // add a cloned card obj into the reOrdersArray
            setReOrdersArray([...reOrdersArray, newObj])
        }
    }

    function removeItem(newObj) {
        const newArray = reOrdersArray.filter(item => item !== newObj)
        setReOrdersArray(newArray)
    }

    useEffect(() => {
        fetch("http://localhost:8001/inventory")
            .then(res => res.json())
            .then(data => setInventoryArray(data))
    }, [])

    return (
        <div className="container">
            <CurrentInventoryList addItem={addItem} inventoryArray={inventoryArray} />
            <ReorderInventoryList removeItem={removeItem} reOrdersArray={reOrdersArray} />
        </div>
    );
}

export default InventoryManager;