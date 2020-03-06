import React from 'react'
import './nav.css'
export default function country(props) {
    return (
        <div className="bord6">
{
props.b.map((el)=>(
    <div className="country">
    
        
            <div className="country-img">
                <img src={el.img}/>
            </div>
            <div className="country-footer">
                         {el.country}
                <span className="btn-small">{el.see}</span>
            </div>
            </div>))}
 </div>
    )}
