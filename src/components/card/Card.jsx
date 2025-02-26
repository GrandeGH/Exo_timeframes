import './Card.css'
import React from 'react'

function Card({titre, current, previous, textePeriode, imagesCard}) {
    
    return (
        <>
        <div className='bg-dark'
            style={{
                height:"200px"
            }}>
            <div style={{
                position: "relative"
            }}>
                <img style={{
                    position: "absolute"}} src={imagesCard} alt=""/>
            </div>
            {/* heure */}
            <div className='bg-danger rounded-3 p-3'>
 
                <div>
                    <h5>{titre}</h5>
                </div>
                <h1>{current}hrs</h1>
                <p>{textePeriode} - {previous}hrs</p>
            </div>
        </div>
        </>
    )
}

export default Card