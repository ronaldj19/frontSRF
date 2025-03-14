import './ReporteporFechaPanel.css';

function ReporteporFechaPanel () {

    return(
        <>
        <div className="contenedorPrincipal">
            <div className="areaParametros"> 
              <h2>Ingresa el rango de fechas</h2>
              <div className='secionCalecdario'>
                <div className='boxFechaInicio'>
                    <p className='textoboxcalendario'>Fecha inicio</p>
                    <input type="date" id="start" name="trip-start"  />
                </div>
                <div className='boxFechaFin'>
                  <p className='textoboxcalendario'>Fecha fin</p>
                  <input type="date" id="stop" name="trip-start"  />
                </div>
              </div>
              <div className='seccionGenerar'>
                <button type="submit" className='btnGenerarFormatos'>Generar Formatos</button>
              </div>
            </div>
            <div className="areaResultado">
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