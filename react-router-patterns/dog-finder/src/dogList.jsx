import React from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid} from "uuid";

const defaultNames = ['Whiskey','Duke','Perry','Tubby']
function DogList({ dogs = defaultNames }){
    return (
    
        <ul>
            {dogs.map(d => {
                return <div key={uuid()}>
                    <Link to={`/dogs/${d.name}`}>{d.name}</Link>
                    <img src={d.src} alt={d.name} />
                </div>}
            )}
        </ul>
    );
}

export default DogList;