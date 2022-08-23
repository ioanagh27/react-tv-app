import React from 'react';

const ShowCard = ({data}) => {


    return <div className="show-card">

                { <img src={data["image"] ? data["image"]["medium"] : ""}></img>
                // (data["image"] && 
                // <img src={data["image"]["medium"]}></img>)
                }
                <h2>{data.name}</h2>
                <p>{data.summary}</p>
                            

            </div>
}

export default ShowCard;
