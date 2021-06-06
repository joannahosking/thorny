import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { plants } from '../assets/plants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons';

const Plants = () => {
    const { id } = useParams();
    const data = plants.find(plant => plant.id === id);

    return (
        <div className="plant-details">
            <h1>{data.name}</h1>
            <span className="scientific-name"><em>({data.scientificName})</em></span>
            <img src={`/illustrations/${data.id}.svg`} alt={data.name} />
            <p className="water-details"><FontAwesomeIcon icon={faTint} /> every {(data.water === 1) ? 'day' : data.water + ' days'}</p>
            <p className="details-description">{data.description} - <a href={data.wiki} target="_blank" rel="noreferrer">Wikipedia</a></p>
            <Link to="/">Back to the Garden</Link>
        </div>
    )
}

export default Plants;