import React from 'react'
import ContactsList from '../ContactsList'

function Home() {
    const people = [
        {
          firstName: "Javaughn ",
          lastName: "Bailey",
          dob: "11/12/2021",
          cohort: "Cohort 1",
          email: "janecooper@example.com",
          phone: "+1-202-555-0170",
        },
        {
            firstName: "Jane",
            lastName: "Cooper",
            dob: "11/12/2021",
            cohort: "Cohort 1",
            email: "janecooper@example.com",
            phone: "+1-202-555-0170",
          },
        
      ];
  return (
    <div className='p-10'>
        <ContactsList people={people}/>
    </div>
  )
}

export default Home