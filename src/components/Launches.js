import React from "react";
import Launch from './Launch';

const Launches = ( {data} ) =>
{
    return (
        <div className="ui four stackable raised cards">
            { data.map((launch) =>
                (
                    <Launch launch={launch} />
                )
            )}
      </div>
    );
}

export default Launches