import '../assets/css/Footer.css'
import Link from 'next/link';

const FooterComp = () => {
    return(
        <>
        <footer>
            <div className="footer-container">
                <div className="footer-sec aboutus">
                    <h2>NYMO</h2>
                    <p>Olimpiade Matematika merupakan sebuah kompetisi yang diselenggarakan untuk menguji kemampuan dan pengetahuan para pelajar di bidang Matematika.</p>
                    <br />
                    <div className="hero-social-icon">
                        <span>Follow us</span>
                        <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></Link>
                        <Link href="https://www.instagram.com/nymo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></Link>
                        <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></Link>
                        <Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></Link>
                        <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></Link>
                    </div>
                </div>
                <div className="footer-sec footer-quicklinks">
                    <h2>Link Informasi</h2>
                    <ul>
                        <li><a href="#contact-section">Kontak</a></li>
                        <li><a href="https://iysa.or.id" target='_blank'>Website Utama Kami</a></li>
                        <li><a href="https://www.iysaolympiad.or.id/" target='_blank'>IYSA Olympiad Website</a></li>
                    </ul>
                </div>
                <div className="footer-sec footer-quicklinks">
                    <h2>Navigation</h2>
                    <ul>
                        <li><Link href="/">Utama</Link></li>
                        <li><Link href="/#about-section">Tentang</Link></li>
                        {/* <li><a href="#main-category-section">Category</a></li> */}
                        <li><Link href="https://drive.google.com/file/d/1Yh24wRk4QCw1FX19xb5eclsKpBKuT6Zo/view?usp=sharing">Buku Panduan</Link></li>
                        <li><Link href="/#contact-section">Kontak</Link></li>
                    </ul>
                </div>
                <div className="footer-sec footer-contact">
                    <h2>Office</h2>
                    <ul className='info'>
                        <li>
                            <span><i className='fa-solid fa-location-dot'></i></span><p><Link href="https://goo.gl/maps/9x18coXGCmSscKec6" target='_blank'>Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat 16519</Link></p>
                        </li>
                        <li>
                            <span><i className='fa-solid fa-phone'></i></span><p><Link href="https://wa.me/+6288213248890" target='_blank'>+6288213248890</Link></p>
                        </li>
                        <li>
                            <span><i className='fa-solid fa-envelope'></i></span><p><Link href="mailto:iysa.olympiad@gmail.com" target='_blank'>iysa.olympiad@gmail.com</Link></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className='copyrightText'>
            <p>Copyright © 2024 NYMO Official. All rights reserved</p>
        </div>
        </>
    )
}

export default FooterComp