import React from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css'

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_email: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendEmail(event);
  }

  handleChange(event) {
    this.setState({
      user_name: event.target.user_name,
      user_email: event.target.user_email,
      message: event.target.user_message
    });
  }


  sendEmail(event) {
    emailjs.sendForm('service_lfhq5ei', 'template_93h7hud', event.target, 'user_sh7Azkp41AdxWpDOMYHGs')
      .then((result) => {
        console.log(result);
        window.alert('Tu mensaje fue enviado con éxito!');
        document.getElementById("contact-form").reset();
      })
      .catch(error => {
        console.log(error);
        alert('ERROR: Tu mensaje no pudo ser enviado!\nIntentalo más tarde.');
      });
  };

  render() {
    return (
      <div>
        <section className="contact" id="contact">
          <div className="max-width">
            <h2 className="title">Contáctame</h2>
            <div className="contact-content">
              <div className="column left">
                <div className="text">Contáctame</div>
                <p>Puedes enviarme un email a la dirección que indica debajo, o simplemente completar el formulario.</p>
                <div className="icons">
                  <div className="row">
                    <i className="fas fa-user"></i>
                    <div className="info">
                      <div className="head">Nombre</div>
                      <div className="sub-title">Leandro Antúnez</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="info">
                      <div className="head">Ubicación</div>
                      <div className="sub-title">Buenos Aires, Argentina</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-envelope"></i>
                    <div className="info">
                      <div className="head">Email</div>
                      <a className="sub-title" href='mailto:leandro_antunez@outlook.com'>leandro_antunez@outlook.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column right">
                <div className="text">Escríbeme</div>
                <form onSubmit={this.handleSubmit} id="contact-form">
                  <div className='fields'>
                    <div className='field name'>
                      <input class="form-control" placeholder="Nombre completo" type="text" name="user_name" onChange={this.handleChange} value={this.state.user_name} required />
                    </div>
                    <div className='field email'>
                      <input class="form-control" placeholder="tu.correo@email.com" type="email" name="user_email" onChange={this.handleChange} value={this.state.user_email} required />
                    </div>
                  </div>
                  <div className='field subject'>
                    <input class="form-control" type="text" placeholder='Asunto' />
                  </div>
                  <div className='field textarea'>
                    <textarea class="form-control" placeholder="Un mensaje" name="message" onChange={this.handleChange} value={this.state.message} required />
                  </div>
                  <div className='button'>
                    <button type="submit" value="Submit">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section >
      </div >
    );
  }

};
export default ContactMe;