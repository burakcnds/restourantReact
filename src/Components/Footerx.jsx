import React from 'react';
import {Routes,Route,Link,NavLink} from "react-router-dom"
function Footerx() {
  return (
    <div className="containr my-4">
      <footer className="text-center footer  text-lg-start text-white" style={{ backgroundColor: '#0c0b09' }}>
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Canburger, restaurant</h6>
                <p>
                Lezzetli hamburgerlerimizi denemek için sizi restoranımıza bekliyoruz!
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Site Yönetimi</h6>
                <p><Link to={"/"} className="text-white">Anasayfa </Link></p>
                <p><Link to={"/hakkimizda"} className="text-white">Biz Kimiz</Link></p>
                <p><Link to={"/menu"} className="text-white">Menü</Link></p>
                <p><Link to={"/iletisim"} className="text-white">İletişim</Link></p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">İşletmemiz </h6>
                <p><a href='https://tr.foursquare.com/turkce' target='_blank' className="text-white">Bizi Puanla</a></p>
                <p><a href='https://www.yemeksepeti.com/' target='_blank' className="text-white">Sipariş Ver</a></p>
                <p><Link to={"/iletisim"} className="text-white">Bizimle Çalış</Link></p>
                <p><Link to={"/rezervasyon"} className="text-white">Rezervasyon</Link></p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="bi bi-house"></i> İzmir / Selçuk</p>
                <p><i className="bi bi-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="bi bi-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="bi bi-telephone mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </section>
          <hr className="my-3" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2024 Copyright:
                  <span className="text-white" href="">Burak Can Candas</span>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
  <a href='https://www.facebook.com/' target='_blank' className="btn btn-outline-light btn-floating m-1" ><i className="bi bi-facebook"></i></a>
  
  <a href='https://www.instagram.com/' target='_blank' className="btn btn-outline-light btn-floating m-1" ><i className="bi bi-instagram"></i></a>
  <a href='https://www.yemeksepeti.com/' target='_blank' className="btn btn-outline-light btn-floating m-1" ><i className="bi bi-google"></i></a>
  <a href='https://twitter.com/' target='_blank' className="btn btn-outline-light btn-floating m-1" ><i className="bi bi-twitter"></i></a>
</div>

            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footerx;
