import React from 'react'

function CollegeCards(props) {
  return (
    <>
        <div className='collegeCardContainer'>
            <div className='clgName'>{props.name}</div>
            <div>{props.bio}</div>
            <div> <a href={props.linked} className='collegeCardLink'>know more </a> </div>
        </div>
    </>
  )
}

export default CollegeCards