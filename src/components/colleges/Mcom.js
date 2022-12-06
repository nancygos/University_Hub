import React from 'react';
import CollegeCards from '../CollegeCards';

function Mcom() {
  return (
    <>
        <div className='btechClgs'>
            <CollegeCards name="ST. JOSEPH’S COLLEGE OF COMMERCE" bio="St. Joseph's College of Commerce is a Bengaluru City University-affiliated college operated by the Jesuits. It is autonomous and has an independent examination and recognition system. It is situated in central Bangalore at Brigade Road." linked="https://www.sjcc.edu.in/" />
            <CollegeCards name="MOUNT CARMEL COLLEGE" bio="Mount Carmel College is an autonomous college located in Bangalore, India, affiliated to Bengaluru City University. It is one of the first women’s colleges established in 1944 in Trichur as 'Carmel College' under the Madras University and shifted to Bengaluru in 1948. " linked="https://mccblr.edu.in/" />
            <CollegeCards name="STELLA MARIS COLLEGE" bio="Stella Maris College is an institution of higher education for women in Chennai, India. It is an autonomous college affiliated to the University of Madras and is partly residential. The college, which is under the direction of the Society of the Franciscan Missionaries of Mary, is a minority institution." linked="http://stellamariscollege.edu.in/" />
            <CollegeCards name="SHRI RAM COLLEGE OF COMMERCE" bio="Shri Ram College of Commerce is a constituent college of the University of Delhi. Founded in 1926 by industrialist Lala Shri Ram, it is widely regarded as the most prestigious college for commerce and economics in India. SRCC was ranked the best Commerce College in India by India Today in 2020." linked="https://www.srcc.edu/" />
        </div>
    </>
  )
}

export default Mcom