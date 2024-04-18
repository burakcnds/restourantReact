import React from 'react';
import aboutImage from '../assets/about.jpg'; 

function About() {
  return (
    <section id="about" className="section-bg about">
      <div className="container">
        <div className="section-title">
          <h2>Biz Kimiz</h2>
          <p>Canburger Hakkında Bilgi</p>
        </div>
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div className="about-img">
              <img className='' src={aboutImage} alt="Hakkımızda" /> 
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Lezzetli hamburgerler sunmak için buradayız.</h3>
            <p className="fst-italic">
              Canburger, 2020 yılında İzmir'de kurulan bir hamburger restoranıdır. Müşterilerimize kaliteli ve lezzetli hamburgerler sunmak için buradayız.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Kaliteli malzemeler kullanarak lezzetli hamburgerler hazırlıyoruz.</li>
              <li><i className="bi bi-check-circle"></i> Müşteri memnuniyetini en üst düzeyde tutmayı hedefliyoruz.</li>
              <li><i className="bi bi-check-circle"></i> İşimizi severek yapıyor ve her zaman en iyisini sunmak için çaba gösteriyoruz.</li>
            </ul>
            <p>
              Canburger olarak, müşterilerimize harika bir yemek deneyimi sunmayı amaçlıyoruz. Lezzetli hamburgerlerimizi denemek için sizi restoranımıza bekliyoruz!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
