import React from 'react';
import MyFormPage from './external_element/MyFormPage';
function Footer() {
  return (
    <footer>
       <div className='footer-info'>
      <p>© 2023 Andrea Gronchi</p>
          <p>Bordeaux, France</p>
          </div>
      <div className='footer-info'>
          <a href="mailto:andreagronchi21@gmial.com">andreagronchi21@gmial.com</a>
          <p></p>
          <a href="tel:631-814-032">(+33) 06 31 81 40 32</a>
        <MyFormPage />
      </div>
    </footer>
  )
}
export default Footer