import React from 'react'

const About = () => {
  return (
    <div className='h-[67vh] w-[100vw] flex justify-center items-center gap-4 '>
       <div className="container grid grid-rows-2 gap-4 h-[100%] sm:grid-cols-2 sm:grid-rows-1">
       <div className="clg-logo flex justify-center items-center">
                <img src="https://www.hcoe.edu.np/assets/img/logo_hcoe.png" className='z-20 w-[90%]'/>
        </div>
        <div className="about text-white sm:flex sm:flex-col sm:justify-center sm:items-center">
                <h1 className='text-3xl font-semibold my-2 text-center sm:text-4xl'>About College</h1>
                <article className='text-justify my-2 text-xs p-4 sm:text-lg'>Himalaya College of Engineering (HCOE), affiliated with Tribhuvan University (TU), Nepal, was established in June 2000 and offers BE programs in Computer, Electronics & Communication, Civil Engineering, Architecture, and BSc CSIT. Located in Chyasal, Lalitpur, with modern infrastructure, the college emphasizes quality education through workshops, field visits, and project work. Managed by experienced professionals and associated with KMC Educational Network since 2007, HCOE has consistently produced competent graduates excelling in IOE exams and securing esteemed positions globally. The college also prioritizes extracurricular activities, with achievements like the Grand Prix in a robotics competition (2065) and participation in IIT Mumbai’s Tech Fest, reflecting its commitment to holistic development.</article>
        </div>
       </div>
    </div>
  )
}

export default About