import React from 'react';
import { Link } from 'react-router-dom';

const Garden = ({ garden, availablePlants, addPlant, removePlant, waterPlant }) => {
    function handleAdd(e) {
        addPlant(e.target.value);
    }

    function handleRemove(e) {
        removePlant(e.target.value);
    }

    function handleWater(e) {
        waterPlant(e.target.value);
    }

    return (
        <div>
            <h1>Garden</h1>
            <ul>
                {garden.map((plant, key) => (
                    <li key={key}>
                        <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
                        {Math.floor((new Date() - plant.lastWatered) / 864000) >= plant.water && 
                            <button value={plant.id} onClick={handleWater}>Water</button>
                        }
                        <button value={plant.id} onClick={handleRemove}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Available Plants</h2>
            <ul>
                {availablePlants.map((plant, key) => (
                    <li key={key}>
                        <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
                        {garden.length < 6 && 
                            <button value={plant.id} onClick={handleAdd}>Add to Garden</button>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Garden;