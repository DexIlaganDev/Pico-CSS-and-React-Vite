import React from 'react'

import SliderMVG from './components/SliderMVG'


import './mvg.styles.scss'

import { SectionWrapper } from '@/hoc'

const MissionVisionGoal = () => {
    return (
        <section>
            <div className='container'>
            <div className="grid mvg-grid">
                <div>
                    <img src='/images/placeholder.jpg' />
                </div>
                <div>
                    <SliderMVG />
                </div>
            </div>
                
            </div>
        </section>
    )
}

export default SectionWrapper (MissionVisionGoal, {})