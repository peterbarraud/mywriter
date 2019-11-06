import React from 'react';

const style = {
    color: "#f27842"
}

export const AlloMessage = ({value}) => {
    return (
        <div>
            <h1 style={style}>{value}</h1>
        </div>
    )
} 
