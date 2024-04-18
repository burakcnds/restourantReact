// const serviceId = 'service_qmnth1n';
//const templateId = 'template_7xrykfg';
//const userId = 'Ef5CGELE6ijk2RuBH';
import rezImage from '../assets/rezFoto.webp'; 
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Rezervx() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [partySize, setPartySize] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_qmnth1n';
    const templateId = 'template_7xrykfg';
    const userId = 'Ef5CGELE6ijk2RuBH';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Burak Can Candas',
      phone: phone,
      date: date,
      partySize: partySize,
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setPartySize('');
        setMessage('');
        alert('Rezervasyon talebiniz alınmıştır. Teşekkür ederiz!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Rezervasyon talebi gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.');
      });
  };

  return (
    <>
      <section className='section-bg' id="about">
        <div className="container">
          <div className="section-title">
            <h2>Rezervasyon</h2>
            <p> Formu Doldurun Sizi Arayalım  </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h2 style={{ color: '#aaaaaa' }}>Rezervasyon:</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label" style={{ color: '#aaaaaa' }}>Ad-Soyad</label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark"><i className="bi bi-person text-white"></i></span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control bg-dark text-white" placeholder="Adınızı giriniz" required />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label" style={{ color: '#aaaaaa' }}>Kişi Sayısı</label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark"><i className="bi bi-envelope text-white"></i></span>
                        <input type="number" value={partySize} onChange={(e) => setPartySize(e.target.value)} className="form-control bg-dark text-white" placeholder="Kişi sayısı" required />
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
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control bg-dark text-white" placeholder="Telefon numaranızı giriniz" required />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label" style={{ color: '#aaaaaa' }}>Tarih:</label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark" ><i className="bi bi-house text-white"></i></span>
                        <input type='date' value={date} onChange={(e) => setDate(e.target.value)} className="form-control bg-dark text-white" required />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <label className="form-label" style={{ color: '#aaaaaa' }}>Eklemek İstediğiniz Not:</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark"><i className="bi bi-pencil text-white"></i></span>
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control bg-dark text-white" rows="5" placeholder="Mesajınızı giriniz" style={{ color: '#aaaaaa' }}></textarea>
                    </div>
                  </div>
                </div>
                <div className='d-flex gap-2'>
                  <button type="submit" className="btn btn-outline-light" >Rezervasyon Yap</button>
                  <button type="button" className="btn btn-dark">İptal</button>
                </div>
              </form>
            </div>

            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="about-img">
                <img className='img-fluid' style={{height:'500px'}} src={rezImage} alt="Rezerv" /> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rezervx;
