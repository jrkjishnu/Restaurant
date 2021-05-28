import React, { useState } from 'react'
import {useLocation} from 'react-router-dom';
function Restaurent() {
    let location = useLocation();
    console.log(location.items);
    const [items,setItems] = useState([location.items]);
    return (
        <div>
            {
                items.map((item)=>
                {
                    console.log(item.operating_hours.Monday);
                    return(
                        <div>
                               <h1>{item.name}</h1>
                        <hr />
                        <h2>Cuisine_type:{item.cuisine_type}</h2>
                        <h2>Working Hours:</h2>
                        <h3>Monday:{item.operating_hours.Monday}</h3>
                        <h3>Tuesday:{item.operating_hours.Tuesday}</h3>
                        <h3>Wednesday:{item.operating_hours.Wednesday}</h3>
                        <h3>Thursday:{item.operating_hours.Thursday}</h3>
                        <h3>Friday:{item.operating_hours.Friday}</h3>
                        <h3>Saturday:{item.operating_hours.Saturday}</h3>
                        <h3>Sunday:{item.operating_hours.Sunday}</h3>
                        <h2>Reviews</h2>
                        <hr />
                        {
                            item.reviews.map((review)=>
                            {
                                return(
                                    <div>
                                        <h2>Name:{review.name}</h2>
                                        <h3>{review.date}</h3>
                                        <h2>Rating:{review.rating}</h2>
                                        <p>{review.comments}</p>
                                        <hr />
                                    </div>
                                    
                                )
                            })
                        }

                        </div>
                     
                    )
                })
            }
        </div>
    )
}

export default Restaurent
