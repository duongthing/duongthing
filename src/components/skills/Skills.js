import React from 'react'
import Frontend from './Frontend'
import "./skills.css"
import Social from './Social'

const Skills = () => {
    return (
        <section className='skills section' id='skills'>
            <h2 className='section_title'>Skills</h2>
            <span className='section_subtitle'>My techical level</span>
            <div className='skills_container container grid'>
                <Frontend />
                <Social />
            </div>
        </section>
    )
}

export default Skills
//11620