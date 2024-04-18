import React from 'react';

function Rezervx() {
  return (
    <>
      <section className='section-bg' id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Rezervasyon</h2>
            <p> Önceden yerini ayırt! </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3 style={{ color: '#aaaaaa' }}>Adres:</h3>
              <address style={{ color: '#aaaaaa' }}>
                <strong>Gazi Bulvarı No:116 Zemin, Cengizhan Caddesi No:03, 35000 Konak</strong><br />
                İzmir <br />
                Selçuk <br />
                <i className="bi bi-telephone"></i><span className="text-decoration-none" style={{ color: '#aaaaaa' }}>0505-055-5535/0232-222-2532</span> <br />
              </address>
            </div>
            <div className="col-lg-6">
              <h3 style={{ color: '#aaaaaa' }}>Çalışma Saatleri:</h3>
              <div className="d-flex justify-content-between">
                <p className="mb-0" style={{ color: '#aaaaaa' }}> Pazartesi-Cuma:</p>
                <p className="mb-0" style={{ color: '#aaaaaa' }}>10:00 - 23:00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0" style={{ color: '#aaaaaa' }}>Cumartesi-Pazar:</p>
                <p className="mb-0" style={{ color: '#aaaaaa' }}>12:00 - 00:00</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h2 style={{ color: '#aaaaaa' }}>Bize Yazın:</h2>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label" style={{ color: '#aaaaaa' }}>Ad-Soyad</label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark"><i className="bi bi-person text-white"></i></span>
                        <input type="text" className="form-control bg-dark text-white" placeholder="Adınızı giriniz" required />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label" style={{ color: '#aaaaaa' }}>Kişi Sayısı</label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark"><i className="bi bi-envelope text-white"></i></span>
                        <input  type="number" className="form-control bg-dark text-white" placeholder="" required />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label" style={{ color: '#aaaaaa' }}>Telefon Numarası</label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark"><i className="bi bi-phone text-white"></i></span>
                        <input type="tel" className="form-control bg-dark text-white" placeholder="Telefon numaranızı giriniz" required />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label" style={{ color: '#aaaaaa' }}>Tarih:</label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark" ><i className="bi bi-house text-white"></i></span>
                        <input type='date' className="form-control bg-dark text-white" required>
                         
                        </input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: '#aaaaaa' }}>Eklemek İstediğiniz Not:</label>
                  <div className="input-group">
                    <span className="input-group-text bg-dark"><i className="bi bi-pencil text-white"></i></span>
                    <textarea className="form-control bg-dark text-white" rows="5" placeholder="Mesajınızı giriniz" style={{ color: '#aaaaaa' }}></textarea>
                  </div>
                </div>
                <div className='d-flex gap-2'>
                  <button className="btn btn-outline-light" >Gönder</button>
                  <button className="btn btn-dark">İptal</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rezervx;
