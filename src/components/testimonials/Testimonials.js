import React from 'react'
import "./testimonials.css"
import { Data } from './Data'
const Testimonials = () => {
    return (
        <section className='testimonial container section'>
            <h2 className='section_title'>Reviews</h2>
            <span className='section_subtitle'>Testimonials</span>

            <div className='testimonial_container'>
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <div className='testimonial-card' key={id}>
                            <img src={image} alt=""
                                className='testimonial_img'
                            />
                            <h3 className='testimonial_name'>{title}</h3>
                            <p className='testimonial_description'>{description}</p>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Testimonials