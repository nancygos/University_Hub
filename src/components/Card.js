import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <>
        <div className='cardContainer'>
            <div className='logo-and-heading'>
                <img src={props.logo} alt="logo" className='cardLogo' />
                <h2> {props.name} </h2>
            </div>
            <h3 className='words'> <Link to={props.linking1} className='cardLink' target="_blank" rel="noopener noreferrer" > {props.field1}</Link> </h3>
            <hr className='hrr'></hr>
            <h3 className='words'><Link to={props.linking2} className='cardLink' target="_blank" rel="noopener noreferrer" > {props.field2} </Link> </h3>
            <hr className='hrr'></hr>
            <h3 className='words'><Link to={props.linking3} className='cardLink' target="_blank" rel="noopener noreferrer" > {props.field3}</Link> </h3>
        </div>
    </>
  )
}

export default Card