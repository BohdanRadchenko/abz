import React from 'react'
import Modal from "../components/Modal/Modal";
import SuccessModal from "../components/Modal/SuccessModal/SuccessModal";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import AboutMe from "../components/AboutMe/AboutMe";
import Users from "../components/Users/Users";
import RegistrationForm from "../components/Registration/Registration";
import Footer from "../components/Footer/Footer";


const HomePage = () => {
    return (
        <>
            <Modal>
                <SuccessModal/>
            </Modal>
            <BurgerMenu/>
            <Header/>
            <Banner/>
            <AboutMe/>
            <Users/>
            <RegistrationForm/>
            <Footer/>
        </>
    )
}
export default HomePage