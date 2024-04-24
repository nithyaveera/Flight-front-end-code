import React, { useState, useContext} from 'react';
import './style/Contact.css'
import NavComp from './NavComp';
import './style/Navcomp.css'
import axios from 'axios';
import { myContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactComp = () => {
    const {baseurl} =useContext(myContext)
    const [formData, setFormData] = useState({
        from: '',
        to: 'nithyaveeramani2003@gmail.com',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${baseurl}/mailer`, formData);
            toast.success(response.data.message)
            setFormData({
                from: '',
                to: 'nithyaveeramani2003@gmail.com',
                subject: '',
                message: ''
            });

        } catch (error) {
            toast.error(error.response.data.message)
        }
        setLoading(false);
    }; 

    return (
        <div>
            <NavComp />

        <div className='footermaindiv pb-md-3'>
            <h1>CONTACT US</h1>
                <div class="footerdiv1 p-4 pb-md-5">
                    <div className='row'>
                        <form className='col-md-3  p-lg-5 pb-2  search-form' onSubmit={handleSubmit} style={{ borderRadius: "10px" ,marginRight:"4vw",marginLeft:"2vw"}}>
                            <h2 className='text-center' style={{ fontFamily: "Rakkas" }}>Contact Us!</h2>
                            <div className='col'>
                                <div className='row'>
                                    <div className="col-12 pt-2">

                                        <input type="email" name="from" placeholder="Your Email" className='form-control ' value={formData.from} onChange={handleChange} required/>
                                    </div>
                                    <div className="col-12 pt-4 pb-1">

                                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} className='form-control' onChange={handleChange} required/>
                                    </div>
                                    <div className="col-12 pt-4 pb-1">
                                        <input type='text' name="message" className="form-control p-3" placeholder="Leave a message here" value={formData.message} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-12 pt-4 sub">
                                        <button type="submit" disabled={loading} className='btnn'>
                                            {loading ? 'Sending...' : 'Sent Email'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ToastContainer />
                        </form>
                <div class="ourcompanydiv col-md-3">
                    <h3>OUR COMPANY</h3>
                    <p> <i class="fa-solid fa-plane"></i>SkyFlights</p>
                    <p> <i class="fa-regular fa-face-smile"></i>Happy Nuts</p>
                    <p> <i class="fa-solid fa-ship"></i>My Transport</p>
                    <p> <i class="fa-solid fa-truck-fast"></i>Fast Email</p>
                    <span class="footericons">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>

                    </span>
                </div>
                <div className='col-md-3'>
                    <span class="emailfex ">
                        <h3> <i class="fa-regular fa-envelope"></i>Email</h3>
                        <a href=""> <i class="fa-solid fa-arrow-right"></i>skyflights342@gmail.com</a>
                        <a href="" ><i class="fa-solid fa-arrow-right"></i>fastfights3@gmail.com</a>
                    </span>
                    <span class="emailfex emailfex2">
                        <h3><i class="fa-solid fa-phone-volume"></i>
                            Phone
                        </h3>
                        <a href=""> <i class="fa-solid fa-arrow-right"></i> 91+6357461776</a>
                        <a href=""> <i class="fa-solid fa-arrow-right"></i>91+6357461778</a>
                        <a href=""> <i class="fa-solid fa-arrow-right"></i>91+6357461779</a>
                    </span>

                        </div>
                <div className='emailfex col-md-2'>
                    <h3><i class="fa-solid fa-location"></i>Address</h3>
                    <p>2130 Fulton Street, <br/>San Diego, CA 94117-1080 USA</p>
                
                    <h3><i class="fas fa-calendar-check"></i>Opening Hours</h3>
                    <p>
                        Mon–Fri 8:00am–6:00pm<br/>
                        Sat 10:00am–4:00pm<br/>
                        Sun Closed</p>
                </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default ContactComp;