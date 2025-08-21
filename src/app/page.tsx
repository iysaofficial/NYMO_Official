'use client';

import './globals.css';
import HeroComp from "@/components/home/HeroComp"
import AboutComp from "@/components/home/AboutComp"
import CategoryComp from '@/components/home/CategoryComp'
import AfterEventComp from "@/components/home/AfterEventComp"
// import NewsComp from '@/components/home/NewsComp'
import ContactComp from "@/components/home/ContactComp"
import LogoComp from "@/components/home/LogoComp"

const HomePage = () => {
    return(
        <>
        <br />
        <br />
        <br />
        <HeroComp/>
        <AboutComp/>
        <CategoryComp/>
        <AfterEventComp/>
        {/* <NewsComp></NewsComp> */}
        <ContactComp/>
        <LogoComp/>
        </>
    )
}

export default HomePage