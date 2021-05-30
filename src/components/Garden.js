import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faTint } from '@fortawesome/free-solid-svg-icons';

const Garden = ({ garden, availablePlants, addPlant, removePlant, waterPlant }) => {
    function handleAdd(e) {
        addPlant(e.currentTarget.value);
    }

    function handleRemove(e) {
        removePlant(e.currentTarget.value);
    }

    function handleWater(e) {
        waterPlant(e.currentTarget.value);
    }

    return (
        <div>
            <h1>Garden</h1>
            <ul className="garden">
                {garden.map((plant, key) => (
                    <li key={key}>
                        <div className="illustration">
                            <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
                        </div>
                        {Math.floor((new Date() - new Date(Date.parse(plant.lastWatered))) / 864000) >= plant.water && 
                            <div className="water">
                                <button value={plant.id} onClick={handleWater}><FontAwesomeIcon icon={faTint} /></button>
                            </div>
                        }
                        <div className="add-remove">
                            <button value={plant.id} onClick={handleRemove}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </div>
                    </li>
                ))}
            </ul>
            <h2>Available Plants</h2>
            <ul className="available">
                {availablePlants.map((plant, key) => (
                    <li key={key}>
                        <div className="illustration">
                            <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
                        </div>
                        {garden.length < 6 && 
                            <div className="add-remove">
                                <button value={plant.id} onClick={handleAdd}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Garden;