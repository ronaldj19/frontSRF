import React, {useState} from 'react'
import FormatoPanel from './FormatoPanel';
import ReporteporFechaPanel from './ReporteporFechaPanel';
import './App.css'

function App() {
  
  //Estado para saber que panel está activo
  const [activePanel, setActivePanel] = useState("Reporte");

  //Función para cambiar el panel activo
  const handlePanelChange  = (panel) => {
    setActivePanel(panel);
  };

  return (
    <>
    <div className="container">
      <aside className="sidebar">
        <div className="logo">
          <img className="icono" src='/img/icono.jpg'/>
          <h2>SRF</h2>
        </div>
        <nav>
          <ul className="main-menu">

            <li >
              <a href="#"
                 >Formatos
              </a>
              <ul className="submenu">
                <li className='submenuItem'><a href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePanelChange("Formato");
                 }}
                 className={activePanel === "Formato" ? "active" : ""}
                 >Formato1</a></li>
                <li className='submenuItem'><a href="#">Formato2</a></li>
              </ul>
            </li>

            <li>
              <a href="#"
                 >Reportes
              </a>
              <ul className="submenu">
                <li className='submenuItem'><a href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePanelChange("ReporteIndividual");
                 }}
                 className={activePanel === "ReporteIndividual" ? "active" : ""}>Individual</a></li>
                <li className='submenuItem'><a href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePanelChange("ReportePorFecha");
                 }}
                 className={activePanel === "ReportePorFecha" ? "active" : ""}>Por periodo</a></li>
              </ul>
            </li>

            <li>
              <a href="#"
                 onClick={(e) => {
                  e.preventDefault();
                  handlePanelChange("Bandeja");
                 }}
                 className={activePanel === "Bandeja" ? "active" : ""}
                 >Bandeja
              </a>
            </li>

            <li>
              <a href="#"
                 onClick={(e) => {
                  e.preventDefault();
                  handlePanelChange("Administracion");
                 }}
                 className={activePanel === "Administracion" ? "active" : ""}
                 >Administración
              </a>
            </li>

          </ul>
        </nav>
      </aside>
    <main>
      
      <header className="topbar">
        <h1></h1>
        <div >
          <button className="btnLogin">Login</button>
        </div>
      </header>

      
      <section className="content">
        {/* Renderizado condicional según el panel activo */}
        {activePanel === "Formato" && <FormatoPanel />}
        {activePanel === "ReporteIndividual" && <ReportePanel />}
        {activePanel === "ReportePorFecha" && <ReporteporFechaPanel />}
        {activePanel === "Bandeja" && <BandejaPanel />}
        {activePanel === "Administracion" && <AdministracionPanel />}
       
      </section>
    </main>
  </div>

    </>
  )
}

/** EJEMPLO DE COMPONENTES PARA CADA SECCIÓN */


function ReportePanel() {
  return (
    <div>
      <h2>Panel de Reporte</h2>
      <p>Contenido disponible próximamente..</p>
    </div>
  );
}

function BandejaPanel() {
  return (
    <div>
      <h2>Panel de Bandeja</h2>
      <p>Contenido disponible próximamente..</p>
    </div>
  );
}

function AdministracionPanel() {
  return (
    <div>
      <h2>Panel de Administración</h2>
      <p>Contenido disponible próximamente...</p>
    </div>
  );
}

export default App
