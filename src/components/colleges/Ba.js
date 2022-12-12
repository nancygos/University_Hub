import React from 'react';
import CollegeCards from '../CollegeCards';
// import Footer from '../Footer';

function Ba() {
  return (
    <>
        <div className='btechClgs'>
            <CollegeCards name="MIRANDA HOUSE" bio="Miranda House is a constituent college for women at the University of Delhi in India. Established in 1948, it is one of the top ranked colleges of the country and ranked as number 1 for consecutively six years." linked="http://www.mirandahouse.ac.in/" />
            <CollegeCards name="FEGGUSON COLLEGE" bio="Fergusson College is an autonomous public-private college offering various courses in the streams of arts and science in the city of Pune, India. It was founded in 1885 by the Deccan Education Society." linked="http://www.fergusson.edu/" />
            <CollegeCards name="PRESIDENCY UNIVERSITY" bio="Presidency University, Kolkata is a second major public state aided research university located in College Street, Kolkata. Considered as one of best colleges when Presidency College was affiliated to University of Calcutta. Established in 1817, it is the oldest college in India." linked="http://presiuniv.ac.in/" />
            <CollegeCards name="ST. XAVIER’S COLLEGE" bio="St. Xavier's College is a private, Catholic, autonomous higher education college under Calcutta University run by the Calcutta Province of the Society of Jesus in Kolkata, India. It was founded by the Jesuits in 1860 and named after St. Francis Xavier, a Jesuit saint of the 16th century, who travelled to India." linked="https://www.sxccal.edu/" />
            <CollegeCards name="DELHI COLLEGE OF ARTS AND COMMERCE" bio="Delhi College of Arts and Commerce is a constituent college of the University of Delhi, in New Delhi, India. The college presently operates in a building owned by the Department of Higher Education, GNCTD. situated at Netaji Nagar, New Delhi." linked="http://www.dcac.du.ac.in/" />

          {/* <Footer /> */}
        </div>
    </>
  )
}

export default Ba