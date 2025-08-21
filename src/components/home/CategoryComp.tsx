const CategoryComp = () =>{
    return(
        <>
        <section className="category-section" id="category">
            <div className="category-container">
                <h1>Jenjang Olimpiade</h1>
                <br />
                <br />
                <br />
                <div className="category-row">
                    <div className="category-column">
                        <div className="category-card">
                            <div className="icon-wrapper">
                                <i className="fa-solid fa-building-columns"></i>  
                            </div>
                            <h3>Sekolah Dasar</h3>
                            <p>Ayo daftarkan sekolah Anda dalam olimpiade Matematika dan raih prestasi bersama</p>
                            {/* <p>Ayo sertakan sekolahmu dalam olimpiade kimia dan raih prestasi bersama</p> */}
                        </div>
                    </div>
                    <div className="category-column">
                        <div className="category-card">
                            <div className="icon-wrapper">
                                <i className="fa-solid fa-building-columns"></i>  
                            </div>
                            <h3>Sekolah Menengah Pertama</h3>
                            <p>Ayo daftarkan sekolah Anda dalam olimpiade Matematika dan raih prestasi bersama</p>
                            {/* <p>Ikuti Olimpiade kimia tingkat universitas dan tunjukan kemampuanmu</p> */}
                        </div>
                    </div>
                    <div className="category-column">
                        <div className="category-card">
                            <div className="icon-wrapper">
                                <i className="fa-solid fa-building-columns"></i>  
                            </div>
                            <h3>Sekolah Menengah Atas</h3>
                            <p>Ayo daftarkan sekolah Anda dalam olimpiade Matematika dan raih prestasi bersama</p>
                            {/* <p>Ayo sertakan sekolahmu dalam olimpiade kimia dan raih prestasi bersama</p> */}
                        </div>
                    </div>
                    <div className="category-column">
                        <div className="category-card">
                            <div className="icon-wrapper">
                                <i className="fa-solid fa-building-columns"></i>  
                            </div>
                            <h3>Universitas</h3>
                            <p>Bergabunglah dengan olimpiade Matematika universitas dan tunjukkan kemampuan Anda</p>
                            {/* <p>Ikuti Olimpiade kimia tingkat universitas dan tunjukan kemampuanmu</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CategoryComp