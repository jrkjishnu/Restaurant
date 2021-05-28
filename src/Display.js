import React from 'react'
import data from './data';
function Display({latlng}) {
    function calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }
    return (
        <div>
            {
              data.map((restaurent)=>
              {
                  return(
                  restaurent.restaurants.map((items)=>
                  {
                      let array = calcCrow(items.latlng.lat,items.latlng.lng,latlng.lat,latlng.lng).toFixed(1)
                      if(array < 5 )
                        return(<h2>{items.name}</h2>)

                  }))
              })
            }
        
        </div>
    )
}

export default Display

