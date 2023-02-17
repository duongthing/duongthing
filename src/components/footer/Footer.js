import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container container'>
                <h1 className='footer_title'>Duong</h1>

                <ul className='footer_list'>
                    <li>
                        <a href='#about' className='footer_link'>About</a>
                    </li>
                    <li>
                        <a href='#portfolio' className='footer_link'>Projects</a>
                    </li>
                    <li>
                        <a href='#testimonials' className='footer_link'>Testimonials</a>
                    </li>
                </ul>

                <div className='footer_social'>
                    <a href='https://www.instagram.com/duongthing_/' className='footer_social-link' target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href='' className='footer_social-link' target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                    <a href='https://www.facebook.com/hathu.vu.357/' className='footer_social-link' target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>
                </div>

                <span className='footer_copy'>
                    &#169; Duongthing. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer
