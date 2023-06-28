import React from 'react'

import { FaFax, FaMapMarkedAlt } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

import './footer.styles.scss'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="grid">

                    <div className='grid-logo'>
                        <h3>
                            <img src='/images/logo.svg' />
                        </h3>
                        <p>
                            Copyright 2023, All Rights reserved
                        </p>
                    </div>


                    <div className='grid-contact-info'>
                        <h3>Contact Info</h3>

                        <div className='contact-info'>

                            <hgroup>
                                <h5><BiSolidPhoneCall /> &nbsp; Contact #</h5>
                                <p>818-869-4998</p>
                            </hgroup>

                            

                            <hgroup>
                                <h5><MdEmail /> &nbsp; Email</h5>
                                <p>test@gmail.com</p>
                            </hgroup>

                            <hgroup>
                                <h5><FaFax /> &nbsp; Fax #</h5>
                                <p>818-736-8880</p>
                            </hgroup>

                            <hgroup>
                                <h5><FaMapMarkedAlt /> &nbsp; Address</h5>
                                <p>11111 Test Blvd Suite 100 North Holywood, CA 91606</p>
                            </hgroup>
                        </div>
                        
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer