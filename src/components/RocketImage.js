import React from 'react';
import PlaceholderImage from "../image-placeholder.png";

const RocketImage = ( {url, alt} ) =>
{
    let src = url !== null ? url : PlaceholderImage;
    return (
        <>
            <div className="ui divider" />
            <span>
                <img className="ui medium rounded image"
                 src={src} 
                 alt={alt} />
            </span>
            <div className="ui divider" />
        </>
    );
}

export default RocketImage;