import React from 'react'

import './slidermvgitem.styles.scss'
import { SlideItem } from '@/data/slides'

type Props = {
    item : SlideItem
}

const SliderMVGItem = ({item}: Props) => {
    
    return (
        <div className="headings slidermvgheadings">
            <h2>{item.caption}</h2>
            <h3>{item.title}</h3>
            
        </div>
    )
}

export default SliderMVGItem