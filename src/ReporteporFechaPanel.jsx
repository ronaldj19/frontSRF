import React, { useState } from "react";
import './ReporteporFechaPanel.css';

function ReporteporFechaPanel () {

    // Estados para almacenar las fechas y el mensaje de respuesta
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");

      // Función que se llama al hacer clic en "Generar Formatos"
  const handleGenerate = async () => {
    // Validación mínima: revisa si hay fechas
    if (!startDate || !endDate) {
      setMessage("Por favor, ingresa ambas fechas antes de generar los reportes.");
      return;
    }

        // Construye el objeto que se enviará al servicio
        const bodyToSend = {
            fechaInicio: startDate,
            fechaFin: endDate
        };

        // Pinta en log el cuerpo a enviar
        console.log("Cuerpo que se enviará al servicio:", bodyToSend);

    try {
      // Llamada al servicio web (ajusta la URL y método a tu caso)
      const response = await fetch("https://xt2pwlyo2sufefz4e4s42bg4sm0wtrbx.lambda-url.us-east-1.on.aws/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyToSend)
      });

      // Si hubo un problema con la red o el servidor no responde OK
      if (!response.ok) {
        throw new Error("Error al invocar el servicio web.");
      }

      // Si la API retorna JSON, puedes leerlo así:
       const data = await response.json();
       console.log("Respuesta del servicio:", data.message);

       const cantidadRegistros = data.registrosEncontrados
    ? data.registrosEncontrados.length
    : 0;

      // Muestra un mensaje de éxito
      setMessage(`Se mandó a generar los reportes de la fecha ${startDate} a ${endDate}. 
        Se generaron ${cantidadRegistros} documentos. Para poder descargarlos ingresar a la ruta de almacenamiento xxx proporcionada.`);
    } catch (error) {
      console.error(error);
      setMessage("Ocurrió un error al generar los reportes. Intenta nuevamente.");
    }
  };

    return(
        <>
        <div className="contenedorPrincipal">
            <div className="areaParametros"> 
              <h2>Ingresa el rango de fechas</h2>
              <div className='secionCalecdario'>
                <div className='boxFechaInicio'>
                    <p className='textoboxcalendario'>Fecha inicio</p>
                    <input 
                     type="date"
                     id="start"
                     name="trip-start"
                     value={startDate}
                     onChange={(e) => setStartDate(e.target.value)}
                      />
                </div>
                <div className='boxFechaFin'>
                  <p className='textoboxcalendario'>Fecha fin</p>
                  <input 
                   type="date"
                   id="stop"
                   name="trip-stop"
                   value={endDate}
                   onChange={(e) => setEndDate(e.target.value)}
                     />
                </div>
              </div>
              <div className='seccionGenerar'>
                <button 
                type="button"
                className="btnGenerarFormatos"
                onClick={handleGenerate}
                >
                    Generar Formatos
                </button>
              </div>
              {/* Mensaje de confirmación o error */}
          {message && (
            <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
              {message}
            </div>
          )}
            </div>
            <div className="areaResultado" hidden>
                <h2>Reporte de todos los archivos generados</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col" className='cell'>Fecha Inicio</th>
                            <th scope="col" className='cell'>Fecha Fin</th>
                            <th scope="col" className='cell'>Cantidad Archivo</th>
                            <th scope="col" className='cell'>Comentarios</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='cell'>01/01/2025</td>
                            <td className='cell'>31/01/2025</td>
                            <td className='cell'>31</td>
                            <td className='cell'>Exito</td>
                        </tr>
                        <tr>
                            <td className='cell'>01/02/2025</td>
                            <td className='cell'>28/02/2025</td>
                            <td className='cell'>5</td>
                            <td className='cell'>Error: no se pudo generar los archivos , vuelva a intentarlo.</td>
                        </tr>
                        <tr>
                            <td className='cell'>17/01/2025</td>
                            <td className='cell'>25/01/2025</td>
                            <td className='cell'>6</td>
                            <td className='cell'>Exito</td>
                        </tr>
                    </tbody>
                </table>
                <div className='seccionGenerar'>
                    <button type="submit" className='btnGenerarFormatos'>Refrescar tabla</button>
                </div>
            </div>
        </div>
        </>
    );
   
}

export default ReporteporFechaPanel;