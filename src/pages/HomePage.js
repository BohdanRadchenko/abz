import React from 'react'
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import AboutMe from "../components/AboutMe/AboutMe";
import Users from "../components/Users/Users";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import Footer from "../components/Footer/Footer";


const HomePage = () => {
    return (
        <div style={{overflow: 'hidden'}}>
            <BurgerMenu/>
            <Header/>
            <Banner/>
            <AboutMe/>
            <Users/>
            <RegistrationForm/>
            <Footer/>
        </div>
    )
}
export default HomePage