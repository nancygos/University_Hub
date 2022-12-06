import React from 'react';
import CollegeCards from '../CollegeCards';

function Pg() {
  return (
    <>
        <div className='btechClgs'>
            <CollegeCards name="KING GEORGE MEDICAL COLLEGE" bio="King George's Medical University is a medical school, hospital, and medical university located in Lucknow, Uttar Pradesh, India. The medical school was raised to a medical university by an act passed by the government of Uttar Pradesh on 16 September 2002." linked="http://www.kgmu.org/" />
            <CollegeCards name="MADRAS MEDICAL COLLEGE" bio="Madras Medical College is a public medical college located in Chennai, Tamil Nadu, India. Established on 2 February 1835, it is the second oldest medical college in India, established after Calcutta Medical College." linked="http://www.mmc.ac.in/" />
            <CollegeCards name="INSTITUTE OF MEDICAL SCIENCES BHU" bio="The Institute Of Medical Sciences is one of the Six institutes of Banaras Hindu University in Varanasi, India and comprises three faculties, Faculty of Medicine, Dental Sciences, and Ayurveda. The Institute of Medical Sciences is the medical school of the university." linked="http://www.bhu.ac.in/ims/" /><CollegeCards name="AIIMS JODHPUR" bio="All India Institute of Medical Sciences, Jodhpur is a medical institute and medical research public university based in Jodhpur, India. It is an Institute of National Importance." linked="https://www.aiimsjodhpur.edu.in/" />
            <CollegeCards name="AIIMS NAGPUR" bio="All India Institute of Medical Sciences, Nagpur is a medical research public higher education institute located at the Multi-modal International Cargo Hub and Airport at Nagpur, Nagpur, Maharashtra, India. It is one of the four Phase-IV, All India Institutes of Medical Sciences announced in July 2014 " linked="http://aiimsnagpur.edu.in/" />
            <CollegeCards name="AIIMS BHOPAL" bio="All India Institute of Medical Sciences Bhopal is a medical research public university and Institute of National Importance, located in the Saket Nagar suburb of Bhopal, Madhya Pradesh, India." linked="https://www.aiimsbhopal.edu.in/" />
            
        </div>
    </>
  )
}

export default Pg