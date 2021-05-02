import React from 'react';
import Projects from '../../Projects/Projects';
import Blog from '../Blog/Blog';
import ContactForm from '../ContactForm/ContactForm';
import Form from '../form/Form';
import Header from '../Header/Header';
import Sidebar from '../Navbar/Sidebar';
const Home = () => {
    return (
        <div style={{backgroundColor: '#101010'}}>
            <Sidebar></Sidebar>
            <Header></Header>
            <Projects></Projects>
            <Blog></Blog>
            {/* <Form></Form> */}
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;