import React from 'react';

const RocketImage = ( {url, alt} ) =>
{
    return (
        <>
            <div className="ui divider" />
            <span>
                <img className="ui medium rounded image"
                 src={url} 
                 alt={alt} />
            </span>
            <div className="ui divider" />
        </>
    );
}

export default RocketImage;