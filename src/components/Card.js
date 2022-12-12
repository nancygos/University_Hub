import React from 'react'

function Card(props) {
  return (
    <>
        <div className='cardContainer'>
            <div className='logo-and-heading'>
                <img src={props.logo} alt="logo" className='cardLogo' />
                <h2> {props.name} </h2>
            </div>
            <h3 className='words'> <a href={props.linking1} className='cardLink' target="_blank" rel="noopener noreferrer" > {props.field1}</a> </h3>
            <hr className='hrr'></hr>
            <h3 className='words'><a href={props.linking2} className='cardLink' target="_blank" rel="noopener noreferrer" > {props.field2} </a> </h3>
            <hr className='hrr'></hr>
            <h3 className='words'><a href={props.linking3} className='cardLink' target="_blank" rel="noopener noreferrer" > {props.field3}</a> </h3>
        </div>
    </>
  )
}

export default Card