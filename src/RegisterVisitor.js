import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import axios from 'axios'; 
import Navbar from './Navbar'; 
import './RegisterVisitor.css';

const RegisterVisitor = () => {
  const [visitor, setVisitor] = useState({
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    nroDocumento: '',
    correo: '',
    motivo: '',
    celular: '',
    fechaIngreso: '',
  });

  const [qrValue, setQrValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVisitor({ ...visitor, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleCelularChange = (e) => {
    const { value } = e.target;

    if (/^\d{0,9}$/.test(value)) {
      setVisitor({ ...visitor, celular: value });
      setErrors({ ...errors, celular: '' });
    } else {
      setErrors({ ...errors, celular: 'Número de celular debe contener solo dígitos y tener hasta 9 dígitos.' });
    }
  };

  const handleTipoDocumentoChange = (e) => {
    const { value } = e.target;
    setVisitor({ ...visitor, tipoDocumento: value, nroDocumento: '' });
    setErrors({ ...errors, tipoDocumento: '' });
  };

  const handleNroDocumentoChange = (e) => {
    const { value } = e.target;
    const maxLength = getMaxLength(visitor.tipoDocumento);

    if (value.length <= maxLength) {
      setVisitor({ ...visitor, nroDocumento: value });
      setErrors({ ...errors, nroDocumento: '' });
    }
  };

  const getMaxLength = (tipoDocumento) => {
    switch (tipoDocumento) {
      case 'DNI':
        return 8;
      case 'Pasaporte':
        return 9;
      case 'Carnet de extranjería':
        return 12;
      case 'RUC':
        return 11;
      default:
        return 0;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const today = new Date().toISOString().split('T')[0];

    if (!/^[a-zA-Z\s]{3,20}$/.test(visitor.nombres)) {
      newErrors.nombres = 'Nombres deben contener solo letras, mín. 3 y máx 20 caracteres.';
    }
    if (!/^[a-zA-Z\s]{3,20}$/.test(visitor.apellidos)) {
      newErrors.apellidos = 'Apellidos deben contener solo letras, mín. 3 y máx 20 caracteres.';
    }
    if (!visitor.tipoDocumento) {
      newErrors.tipoDocumento = 'Tipo de documento es requerido.';
    } else {
      const nroDocLength = getMaxLength(visitor.tipoDocumento);
      if (visitor.nroDocumento.length !== nroDocLength) {
        newErrors.nroDocumento = `Número de documento debe tener ${nroDocLength} dígitos para ${visitor.tipoDocumento}.`;
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(visitor.correo)) {
      newErrors.correo = 'Correo electrónico no es válido.';
    }
    if (!/^\d{9}$/.test(visitor.celular)) {
      newErrors.celular = 'Número de celular debe tener 9 dígitos.';
    }
    if (visitor.motivo.length > 300) {
      newErrors.motivo = 'Motivo de visita no puede exceder 300 caracteres.';
    }
    if (!visitor.fechaIngreso) {
      newErrors.fechaIngreso = 'Fecha de ingreso es requerida.';
    } else if (visitor.fechaIngreso < today) {
      newErrors.fechaIngreso = 'Fecha de ingreso debe ser hoy o una fecha futura.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
        return;
    }

    setLoading(true);

    try {
        const response = await axios.post('/api/visitors', visitor); // Asegúrate de que la URL sea correcta
        setQrValue(JSON.stringify(response.data)); // Utiliza la respuesta para generar el QR
    } catch (error) {
        console.error('Error al registrar el visitante:', error);
        // Aquí puedes agregar un mensaje de error si lo deseas
    } finally {
        setLoading(false);
    }

    setTimeout(() => {
        setQrValue(JSON.stringify(visitor)); // Genera el QR basado en la data del visitante
    }, 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSendEmail = () => {
    alert('Funcionalidad para enviar correo aún no implementada.');
  };

  const handleExit = () => {
    setVisitor({
      nombres: '',
      apellidos: '',
      tipoDocumento: '',
      nroDocumento: '',
      correo: '',
      motivo: '',
      celular: '',
      fechaIngreso: '',
    });
    setQrValue('');
  };

  return (
    <div>
      <Navbar /> {/* Agrega el componente Navbar aquí */}
      {loading ? (
        <div className="loading-container">
          <h2>Cargando...</h2>
          <div className="loader"></div>
        </div>
      ) : qrValue ? (
        <div className="qr-container">
          <h1>TU CÓDIGO QR</h1>
          <div className="qr-code-container">
            <QRCodeCanvas value={qrValue} size={300} className="qr-code" />
          </div>
          <div className="qr-buttons">
            <button id="print-button" className="qr-button" onClick={handlePrint}>
              Imprimir
            </button>
            <button id="email-button" className="qr-button" onClick={handleSendEmail}>
              Enviar por correo
            </button>
            <button id="exit-button" className="qr-button" onClick={handleExit}>
              Salir
            </button>
            <p>*Ten en cuenta que el código es válido únicamente para la fecha en la que se generó la cita.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Pre-registro de visitantes</h1>
          <div>
            <label>Nombres:</label>
            <input type="text" name="nombres" placeholder="Nombres" value={visitor.nombres} onChange={handleInputChange} />
            {errors.nombres && <span className="error">{errors.nombres}</span>}
          </div>
          <div>
            <label>Apellidos:</label>
            <input type="text" name="apellidos" placeholder="Apellidos" value={visitor.apellidos} onChange={handleInputChange} />
            {errors.apellidos && <span className="error">{errors.apellidos}</span>}
          </div>
          <div>
            <label>Tipo de documento:</label>
            <select name="tipoDocumento" value={visitor.tipoDocumento} onChange={handleTipoDocumentoChange}>
              <option value="">Seleccione</option>
              <option value="DNI">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="Carnet de extranjería">Carnet de extranjería</option>
              <option value="RUC">RUC</option>
            </select>
            {errors.tipoDocumento && <span className="error">{errors.tipoDocumento}</span>}
          </div>
          <div>
            <label>Número de documento:</label>
            <input
              type="text"
              name="nroDocumento"
              placeholder="Número de documento"
              value={visitor.nroDocumento}
              onChange={handleNroDocumentoChange}
              maxLength={getMaxLength(visitor.tipoDocumento)}
              disabled={!visitor.tipoDocumento} // Deshabilita el campo si no hay tipo de documento seleccionado
            />
            {errors.nroDocumento && <span className="error">{errors.nroDocumento}</span>}
          </div>
          <div>
            <label>Correo electrónico:</label>
            <input type="email" name="correo" placeholder="Correo electrónico" value={visitor.correo} onChange={handleInputChange} />
            {errors.correo && <span className="error">{errors.correo}</span>}
          </div>
          <div>
            <label>Motivo de visita:</label>
            <textarea name="motivo" placeholder="Motivo de visita" value={visitor.motivo} onChange={handleInputChange} maxLength="300"></textarea>
            {errors.motivo && <span className="error">{errors.motivo}</span>}
          </div>
          <div>
            <label>Número de celular:</label>
            <input type="text" name="celular" placeholder="Número de celular" value={visitor.celular} onChange={handleCelularChange} maxLength="9" />
            {errors.celular && <span className="error">{errors.celular}</span>}
          </div>
          <div>
            <label>Fecha de ingreso:</label>
            <input type="date" name="fechaIngreso" value={visitor.fechaIngreso} onChange={handleInputChange} />
            {errors.fechaIngreso && <span className="error">{errors.fechaIngreso}</span>}
          </div>
          <button type="submit">Generar QR</button>
        </form>
      )}
    </div>
  );
};

export default RegisterVisitor;
