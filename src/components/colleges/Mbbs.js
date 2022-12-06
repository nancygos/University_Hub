import React from 'react';
import CollegeCards from '../CollegeCards';

function Mbbs() {
  return (
    <>
        <div className='btechClgs'>
            <CollegeCards name="AIIMS DELHI" bio="All India Institute of Medical Sciences, New Delhi, also known as AIIMS Delhi, is a public medical research university and hospital in New Delhi, India. The institute is governed by the AIIMS Act, 1956 and operates autonomously under the Ministry of Health and Family Welfare." linked="https://www.aiims.edu/" />
            <CollegeCards name="AIIMS JODHPUR" bio="All India Institute of Medical Sciences, Jodhpur is a medical institute and medical research public university based in Jodhpur, India. It is an Institute of National Importance." linked="https://www.aiimsjodhpur.edu.in/" />
            <CollegeCards name="AIIMS NAGPUR" bio="All India Institute of Medical Sciences, Nagpur is a medical research public higher education institute located at the Multi-modal International Cargo Hub and Airport at Nagpur, Nagpur, Maharashtra, India. It is one of the four Phase-IV, All India Institutes of Medical Sciences announced in July 2014 " linked="http://aiimsnagpur.edu.in/" />
            <CollegeCards name="AIIMS BHOPAL" bio="All India Institute of Medical Sciences Bhopal is a medical research public university and Institute of National Importance, located in the Saket Nagar suburb of Bhopal, Madhya Pradesh, India." linked="https://www.aiimsbhopal.edu.in/" />
            <CollegeCards name="AIIMS GUWAHTI" bio="All India Institute of Medical Sciences, Guwahati is a public medical school and hospital based in Changsari, Assam, India, and one of the All India Institutes of Medical Sciences. On 26 May 2017, Honorable Prime Minister Shri.Narendra Modi laid the foundation stone of the Institute." linked="https://aiimsguwahati.ac.in/" />
        </div>
    </>
  )
}

export default Mbbs