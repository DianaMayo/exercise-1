import React from 'react';
import {useParams, Link, Navigate } from 'react-router-dom';

function Color({colorList}){
    let {color} = useParams();
    if (!colorList.includes(color)){
        return <Navigate  to='/colors' />
    }
    if (color.length === 6){
        color = '#' + color
    }
    return (
        <>
            <div style={{backgroundColor:color}}>
                <Link exact="true" to='/colors'>Home</Link>
            </div>
        </>
    )
}

export default Color;