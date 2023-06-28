import React from 'react'

import globalData from '@/data/global'
import useOpenToggle from '@/hooks/useOpenToggle'

interface ILink {
    title : string
    link : string
    button? : boolean
}

const links : ILink[] = [
    {
        title : 'LINK',
        link : '#LINK'
    },
    {
        title : 'LINK',
        link : '#LINK'
    },
    {
        title : 'LINK',
        link : '#LINK',
    },

]


type Props = {
    toggleModal : () => void
}

const Nav = ({toggleModal} : Props) => {

    return (
        <div className='container'>
            <nav className='nav-links'>
                <ul>
                    <li>
                        <a href='/'>
                            <img className='img-logo' src={globalData.logo} alt='Logo' />
                        </a>
                    </li>
                </ul>
                <ul>
                    {links.map( (link,index) => <li key={index}><a { ...( link.button && {role : 'button'} ) } href={link.link}>{link.title}</a></li>)}

                    <button className='cta-button' onClick={toggleModal}>Contact</button>
                </ul>
            </nav>
        </div>  
        
    )
}

export default Nav