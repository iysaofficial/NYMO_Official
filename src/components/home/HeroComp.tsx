import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section" id="hero-section">
            <div className="hero-content">
                <h1>NYMO</h1>
                <h3>National Youth Math Olympiad</h3>
                <p>Pendaftaran Olimpiade Matematika Nasional telah dibuka! Bergabunglah <br /> dengan acara bergengsi ini dan dapatkan pengalaman matematika yang tak terlupakan!</p>
                <br />
                <div className="hero-social-icon">   
                    <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></Link>
                    <Link href="https://www.instagram.com/nymo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></Link>
                    <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></Link>
                    <Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></Link>
                    <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></Link>
                </div>
                <br />
                <br />
                <Link href="/registration" className="btn">Registrasi Disini!</Link>
                <Link href="https://drive.google.com/file/d/1GlCI-mTnhmElOvsk2RSAmM9U-XrsmqYH/preview" target="_blank" className="btn">GuideBook</Link>
            </div>
            <div className="hero-img">
                <img src="/assets/images/logo/NYMO.png" alt="" />
            </div>
        </section>
        </>
    )
}

export default HeroComp