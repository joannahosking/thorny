import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faTint, faInfo } from '@fortawesome/free-solid-svg-icons';

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
            <ul className="garden">
                {garden.length < 1 && 
                    <p>Choose up to 4 plants below to add to your garden. Remember to check back daily and water the plants that have dried out.<br /><br /><strong>Happy gardening!</strong></p>
                }
                {garden.map((plant, key) => (
                    <li key={key}>
                        <div className="illustration">
                            <img src={`/illustrations/${plant.id}.svg`} alt={plant.name} />
                            <span className="plant-name">{plant.name}</span>
                        </div>
                        {Math.floor((new Date() - new Date(Date.parse(plant.lastWatered))) / 86400000) >= plant.water && 
                            <div className="water">
                                <button value={plant.id} onClick={handleWater} className="button"><FontAwesomeIcon icon={faTint} /></button>
                            </div>
                        }
                        <div className="add-remove">
                            <Link to={`/plants/${plant.id}`} className="button">
                                <FontAwesomeIcon icon={faInfo} />
                            </Link>
                            <button value={plant.id} onClick={handleRemove} className="button"><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </div>
                    </li>
                ))}
            </ul>
            <h2>Available Plants:</h2>
            <ul className="available">
                {availablePlants.map((plant, key) => (
                    <li key={key}>
                        <div className="illustration">
                            <img src={`/illustrations/${plant.id}.svg`} alt={plant.name} />
                            <span className="plant-name">{plant.name}</span>
                        </div>
                            <div className="add-remove">
                                <Link to={`/plants/${plant.id}`} className="button">
                                    <FontAwesomeIcon icon={faInfo} />
                                </Link>
                                {garden.length < 4 && 
                                    <button value={plant.id} onClick={handleAdd} className="button"><FontAwesomeIcon icon={faPlus} /></button>
                                }
                            </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Garden;