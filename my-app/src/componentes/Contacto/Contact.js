import React from 'react';
import './Contact.scss';
export const Contact = () => {
  return (
    
    <div className='contact__container'>
        <h1 className='contact__title'>Contacto</h1>
        <p>Whatsapp: 3492205290</p>
        <form className="contact__form">
            <label>Nombre</label>
            <input type="text" name="nombre" />
            <label>Apellido</label>
            <input type="text" name="apellido" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Telefono</label>
            <input type="number" name="telefono" />
            <label>Mensaje</label>
            <textarea name="mensaje" />
            <button>Enviar</button>
        </form>
    </div>
  )
}
