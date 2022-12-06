import React from 'react';
import CollegeCards from '../CollegeCards';

function Llm() {
  return (
    <>
        <div className='btechClgs'>
            <CollegeCards name="Army institute of Law" bio ="Army Institute of Law is a private law school in Mohali, Punjab, India. The institute is affiliated to Punjabi University, Patiala, and is run by the Army Welfare Education Society." linked="https://www.ail.ac.in/" />
            <CollegeCards name="National law university Delhi" bio ="National Law University, Delhi is a National Law University in India, offering courses at the undergraduate and postgraduate levels. " linked="http://www.nludelhi.ac.in/ " /><CollegeCards name="The National Law School of India University" bio="The National Law School of India University is a public law school and a National Law University located in Bangalore, Karnataka." linked="https://www.nls.ac.in/" />
            <CollegeCards name="National Law university jodhpur" bio="National Law University, Jodhpur is a public law school and a National Law University established under the National Law University, Jodhpur, Act, 1999 enacted by the Rajasthan State Legislature." linked="http://nlujodhpur.ac.in/" />
            <CollegeCards name="ILS LAW COLLEGE" bio="LS Law College, or in its full name Indian Law Society's Law College, is a government-aided law school in Pune, India. It was established in 1924 and offers courses that include three-year and five-year degrees. ILS is located on Law College Road, Pune. The college was aided by The Ford Foundation." linked="https://www.ilslaw.edu/" />
            <CollegeCards name="Lloyd Law College" bio="Lloyd Law College is a private law school in India located in Noida, Uttar Pradesh offering legal education since year 2003 in affiliation with CCS University, Meerut, U.P, and approved by the Bar Council of India." linked="https://www.lloydlawcollege.edu.in/" />
            
        </div>
    </>
  )
}

export default Llm