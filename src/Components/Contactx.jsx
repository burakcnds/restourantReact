import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contactx() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_qmnth1n';
    const templateId = 'template_2isvf7m';
    const userId = 'Ef5CGELE6ijk2RuBH';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Burak Can Candas',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        alert('Email gönderildi!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Email gönderirken bir hata oluştu.');
      });
  };

  return (
    <section className='section-bg' id="contact">
      <div className="container">
        <div className="section-title">
          <h2>İletişim</h2>
          <p>Bizimle İletişime Geç</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h2 style={{ color: '#aaaaaa' }}>Bize Yazın:</h2>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" style={{ color: '#aaaaaa' }}>Ad</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark"><i className="bi bi-person text-white"></i></span>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="ad" className="form-control bg-dark text-white" placeholder="Adınızı giriniz" required />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label" style={{ color: '#aaaaaa' }}>Email</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark"><i className="bi bi-envelope text-white"></i></span>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" className="form-control bg-dark text-white" placeholder="Emailinizi giriniz" required />
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
                    <label className="form-label" style={{ color: '#aaaaaa' }}>Konu:</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark" ><i className="bi bi-house text-white"></i></span>
                      <select className="form-select bg-dark text-white" required>
                        <option className='text-white' value="">Seçiniz</option>
                        <option value="Öneri">Öneri</option>
                        <option value="İş Başvurusu">İş Başvurusu</option>
                        <option value="Şikayet">Şikayet</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#aaaaaa' }}>Mesajınız</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark"><i className="bi bi-pencil text-white"></i></span>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="mesaj" className="form-control bg-dark" rows="5" placeholder="Mesajınızı giriniz" style={{ color: '#aaaaaa' }} required></textarea>
                </div>
              </div>
              <div className='d-flex gap-2'>
                <button type="submit" className="btn btn-outline-light" >Mail Gönder</button>
                <button type="button" className="btn btn-dark">İptal</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <h2 style={{ color: '#aaaaaa' }}>Restorant:</h2>
            <div className="ratio ratio-4x3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12502.754373801616!2d27.1401049!3d38.4255609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8f7315662e1%3A0xe54c864af6a2f959!2sNeos%20Yazilim%20Akademi!5e0!3m2!1str!2str!4v1711886639488!5m2!1str!2str"
                width="600" height="400" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactx;
