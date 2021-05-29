import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { plants } from '../assets/plants';

const Plants = () => {
    const { id } = useParams();
    const data = plants.find(plant => plant.id === id);

    return (
        <div>
            <h1>{data.name}</h1>
            <p>Water: every {data.water} days</p>
            <p>Last Watered: {data.lastWatered}</p>
            <Link to="/">Back to the Garden...</Link>
        </div>
    )
}

export default Plants;