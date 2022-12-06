import React from "react";
import './Testimonial.css';

function Testimonial() {
  return (
    <div className='Testimonial_container'>
      <div>
        <h2 className='Testimonial_name' > Bernardo Hernandez</h2>
      </div>

      <div className='Testimonial_content'>
        <p className='Testimonial_starts' > *****</p>
        <p className='Testimonial_text' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

export default Testimonial;