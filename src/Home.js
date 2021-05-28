import React from 'react'
import data from './data';
import {useHistory} from 'react-router-dom';
import AddressSearch from './AddressSearch';

function Home() {

    let history = useHistory()

    const handler = (items)=>
    {
        history.push({
            pathname:'/restaurant',
            items:items
    })
    }
    return (
        <div>
            <AddressSearch />
            {
                data.map((restaurent)=>
                {
                    return(
                    restaurent.restaurants.map((items)=>
                    {
                        //console.log(items);
                        return <h2 onClick={()=>handler(items)}>{items.name}</h2>
                    }))
                })
            }
        </div>
    )
}

export default Home
