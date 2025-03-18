import React, { useState } from "react";
import './FormatoPanel.css'

function FormatoPanel() {
  // Estado global del formulario
  const [formData, setFormData] = useState({
    fechaCharla: "",
    permisoTrabajo: "",
    dniResponsable: "",
    responsableCuadrilla: "",
    integrantesCuadrilla: "",
    placaVehiculo: "",
    areaTrabajo: "",
    participantes: [],  // aquí guardaremos los IDs de los integrantes seleccionados
    supervisorInmediato: "",
    zonal: "",
    direccionZonaTrabajo: "",
    actividadRealizar: "",
    // Aquí almacenamos las selecciones de checkboxes
    peligrosRiesgos: [],
    aspectosAmbientales: [],
    // Archivo
    evidenciaFotografica: null,
  });

  // Opciones para los <select>
 // Cada objeto tiene la descripción (label) y el código numérico (value)
const areaTrabajoOptions = [
  { label: "-- Seleccione --", value: "" },
  { label: "OBRAS DISTRIBUCIÓN", value: 1 },
  { label: "OBRAS DE TRANSMISIÓN", value: 2 },
  { label: "B2B", value: 3 },
  { label: "OPERACIONES", value: 4 },
  { label: "PÉRDIDAS", value: 5 },
  { label: "COMERCIAL", value: 6 },
  { label: "OBRAS AA.HH", value: 7 },
];

  const supervisorOptions = [
    { label: "-- Seleccione --", value: "" },
    { label: "SERGIO PEÑA BORDON", value: 1 },
    { label: "EMERSON PAREDES JAYO", value: 2 },
    { label: "ELDER CORONEL REGALADO", value: 3 },
    { label: "JERSON CARBAJAL JIMENEZ", value: 4 },
    { label: "GIL RAMOS TELLO", value: 5 },
    { label: "HAROLD RAMIREZ UCULMANA", value: 6 },
    { label: "LUIS SUAREZ DOMINGUEZ", value: 7 },
    { label: "HEISON HUAMANÍ MALDONADO", value: 8 },
    { label: "JAVIER MOQUILLAZA PEDROZA", value: 9 },
    { label: "ERICK MEJIA ALARCON", value: 10 },
    { label: "JOSE PALOMARES MAGALLANES", value: 11 },
    { label: "ELMER CHOQUEZ YATACO", value: 12 },
    { label: "CARLOS GODIN ZAMBARANO", value: 13 },
    { label: "JORGE CANCHARI", value: 14 },
    { label: "CARLOS POMEZ MEREL", value: 15 },
    { label: "KEVIN AREVALO PEREZ", value: 16 },
    { label: "GERALD TRILLO SALAZAR", value: 17 },
    { label: "JOSE JUSCAMAITA VARGAS", value: 18 },
    { label: "EDU OLIVERA MARQUEZ", value: 19 },
    { label: "ALEX LEVANO ABREGU", value: 20 },
    { label: "JULIAN CAUTI RIOS", value: 21 },
    { label: "DITO ESCAJADILLO FLORES", value: 22 },
    { label: "JORGE MENDOZA CORRALES", value: 23 },
    { label: "SUNCIÓN ATOCHE", value: 24 },
    { label: "DILAN GUTIERREZ FRANCO", value: 25 },
  ];
  const zonalOptions = ["Elegir", "ICA", "PISCO", "CHINCHA","NAZCA","PALPA","PUQUI/CORA CORA"];
 /* const zonalOptions = [
    { label: "Elegir", value: 0 },
    { label: "ICA", value: 1 },
    { label: "PISCO", value: 2 },
    { label: "CHINCHA", value: 3 },
    { label: "NAZCA", value: 4 },
    { label: "PALPA", value: 5 },
    { label: "PUQUI/CORA CORA", value: 6 },
  ]; */

  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  // Podrías obtener estos datos desde una API o tenerlos hardcodeados:
const allIntegrants  = [
  { id: 1, name: "Luis Mellan" },
  { id: 2, name: "Angel Mendoza" },
  { id: 3, name: "Pietro Castro" },
  // Agrega los que necesites...
];
  // Filtrar la lista según el texto escrito y 
  // que no aparezcan los que ya están en "selected"
  const filteredIntegrants = allIntegrants.filter((integrant) =>
    integrant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selected.some((sel) => sel.id === integrant.id)
  );

  // Maneja la selección de un integrante desde la lista
  const handleSelect = (integrant) => {
    // Agregamos al array de seleccionados
    setSelected((prev) => [...prev, integrant]);
    // Limpiamos el campo de búsqueda
    setSearchTerm("");
    // Ocultamos la lista desplegable
    setShowDropdown(false);
  };

  // Remueve un integrante seleccionado
  const handleRemove = (id) => {
    setSelected((prev) => prev.filter((item) => item.id !== id));
  };

  
  
  // Ejemplo de data para Peligros/Riesgos con IDs numéricos
const hazardsData = [
  {
    hazardId: 1,
    title: "CAÍDA AL MISMO NIVEL (SUPERFICIE)",
    measures: [
      { measureId: 1, text: "Inspección visual del entorno de la zona de trabajo y concentración durante el desplazamiento en la zona. (Ojos y Mente en la tarea)" },
      { measureId: 2, text: "Orden y limpieza en la zona de trabajo y aledaños." }
    ]
  },
  {
    hazardId: 2,
    title: "CAÍDA A DISTINTO NIVEL (ALTURA)",
    measures: [
      { measureId: 3, text: "Verificación visual al rededor de la base de los postes o estructuras donde se va realizar el escalamiento." },
      { measureId: 4, text: "Prohibido Escalar Postes: De concreto que presentan rajaduras y exposiciones de fierros corrugados, De Fierro que presenten costras de corrosión (oxidación) y De Madera que presenten agujeros por apolillamiento o desmoronamiento superficial en la base (excavación de 20 Cm. de su empotramiento)" },
      { measureId: 5, text: "Para el escalamiento del poste o estructura, uso permanente del armés de seguridad con doble estrobo de soga de nylon de 1.8 y 3.5 M. con mosquetones con doble seguro y linea de vida con faja de anclaje escaleras embonables, extensibles o telescópicas (fibra de vidrio) aseguradas al poste o estructura" },
      { measureId: 6, text: "Para realizar desplazamientos o movimientos en un poste o en cualquier estructura elevada deberá estar asegurado en forma permanente mientras dure las actividades de trabajos en altura" }
    ]
  },
  {
    hazardId: 3,
    title: "CAÍDA DE OBJETOS (EQUIPOS, HERRAMIENTA, MATERIALES)",
    measures: [
      { measureId: 7, text: "Señalización adecuada, usar casco dieléctrico con barbiquejo, personal fuera de la zona de influencia (Linea de Fuego)." },
      { measureId: 8, text: "Manipulación adecuada de equipos, herramientas y materiales en altura, uso de soga de servicio, polea de servicio y balde portaherramienta" },
      { measureId: 9, text: "Uso de eslinga o soguilla de nylon para sujeción de equipos y herramientas en trabajos de altura" }
    ]
  },
  {
    hazardId: 4,
    title: "DERRUMBES",
    measures: [
      { measureId: 10, text: "En las excavaciones, tener presente el entibamiento adecuado. Desprendimiento de muro, asegurarlo o eliminarlo." },
     ]
  },
  {
    hazardId: 5,
    title: "CHOQUE Y ATROPELLO VEHICULAR",
    measures: [
      { measureId: 11, text: "Manejo a la defensiva, respetar reglas de tránsito, señalización adecuada en zona de trabajo, evalúe previamente el riesgo antes de cruzar por una vía de alta fluidez de vehículos." },
    ]
  },
  {
    hazardId: 6,
    title: "GOLPES Y CONTUSIONES",
    measures: [
      { measureId: 12, text: "Concentración en la tarea, cuando utilice picos, palas o herramientas manuales." },
      { measureId: 13, text: "Usar los EPP's adecuados para el tipo de actividad." },
    ]
  },
  {
    hazardId: 7,
    title: "ATRAPAMIENTO CON EQUIPOS Y HERRAMIENTAS MANUALES",
    measures: [
      { measureId: 14, text: "Revisar y usar adecuadamente el estado de las herramientas manuales, verificar fundas y elementos de protección mecánica, estar atento a maquinas en movimiento." },
      { measureId: 15, text: "Desconectar la energia de alimentación para cualquier manipulación en los equipos o herramientas manuales." },
    ]
  },
  {
    hazardId: 8,
    title: "CORTES Y ESCORIACIONES",
    measures: [
      { measureId: 16, text: "Usar los EPP's, equipos, herramientas y materiales adecuadamente y concentración en la tarea (Ojos y Mente en la tarea." },
    ]
  },
  {
    hazardId: 9,
    title: "PROYECCIONES DE OBJETOS",
    measures: [
      { measureId: 17, text: "Uso permanente de lentes contra impacto o careta facial de acuerdo a la actividad de trabajo." },
     ]
  },
  {
    hazardId: 10,
    title: "CONTACTO ELÉCTRICO (DIRECTO/INDIRECTO)",
    measures: [
      { measureId: 18, text: "Uso permanente de lentes contra impacto o careta facial de acuerdo a la actividad de trabajo. Uso permanente de guantes dieléctricos con protección de guante de badana (trabajos en BT Clase 0 y Trabajos en MT/AT Clase 3." },
      { measureId: 19, text: "Señalización de la tensión de retorno, uso de separadores y mantas aislantes, herramientas aisladas y cumplir las distancias mininas de seguridad (DMS)." },
      { measureId: 20, text: "Respetar las indicaciones de la tarjeta de seguridad personal." },
      { measureId: 21, text: "En linea AT sin servicio con línea paralela energizada de AT, deberán escalar por el lado de la estructura que se encuentre fuera de servicio y disponer de supervisión permanente en la actividad de trabajo." }
    ]
  },
  {
    hazardId: 11,
    title: "ARCO ELÉCTRICO",
    measures: [
      { measureId: 22, text: "Uso permanente de careta facial y ropa de trabajo con ATPV 10 Cal/Cm2 para trabajos en BT." },
      { measureId: 23, text: "Uso permanente de careta facial con ATPV 20 Cal/Cm2 y ropa de trabajo con ATPV 25 Cal/Cm2 para trabajos en MT/AT."},
     ]
  },
  {
    hazardId: 12,
    title: "RUIDOS",
    measures: [
      { measureId: 24, text: "Uso de protección auditiva (tapones u orejeras)." },
    ]
  },
  {
    hazardId: 13,
    title: "EXPOSICIÓN PROLONGADA A POLVOS, HUMOS, SOLVENTES",
    measures: [
      { measureId: 25, text: "Usar respiradores adecuados para la actividad de trabajo." },
    ]
  },
  {
    hazardId: 14,
    title: "AGRESIÓN DE PERSONAS",
    measures: [
      { measureId: 26, text: "Protección policial, evitar el enfrentamiento y retirarse de la zona de trabajo." },
     ]
  },
  {
    hazardId: 15,
    title: "AGRESIÓN DE ANIMALES (PERROS, INSECTOS)",
    measures: [
      { measureId: 27, text: "En caso de perros no enfrentarse y cambiar de ruta, si ocurriese una mordedura llevarlo al centro de salud más cercano." },
      { measureId: 28, text: "En caso de Abejas utilizar el traje protección contra abejas y en caso de Araña verificar la zona a intervenir, limpiar y utilizar los EPP's; si ocurriese picaduras trasladarlo al centro de salud mas cercano." },
    ]
  },
  // ... y así con los demás peligros
   // Aquí insertas un “item especial” que es sólo un subtítulo
   {
    isSectionTitle: true,
    title: "ASPECTOS AMBIENTALES SIGNIFICATIVOS"
  },
  //sigue la otra sección
  {
    hazardId: 16,
    title: "RESIDUOS PELIGROSOS (DERRAME DE ACEITES, LUBRICANTES, PARTÍCULAS DE ASBESTOS, WYPES CONTAMINADOS, LÁMPARAS DESASTADAS Y OTROS)",
    measures: [
      { measureId: 29, text: "En caso de Derrame de Aceite o Fuga de Gas SF6: Uso de EPP's (guantes de nitrilo, respirador, botas de jebe y traje tyvek), Kit de Contingencia (paños, rollos, almohadillas absorbentes), lampa, pico y tacho de residuos peligrosos (Rojo)." },
      { measureId: 30, text: "En caso particulas de Asbesto, Waypes contaminados, Lámparas desgastadas: Uso de EPP's (guantes de nitrilo y traje tyvek), bolsas gruesas transparentes y tacho de residuos peligrosos (Rojo)." },
      { measureId: 31, text: "En caso Otros (latas de pintura, bolsas de cemento, grasas, etc.): Uso de EPP's (guantes de jebe o nitrilo, y respirador), bolsas gruesas transparentes y tacho de residuos peligrosos (Rojo)." },
    ]
  },
  {
    hazardId: 17,
    title: "PODA DE ÁRBOLES",
    measures: [
      { measureId: 32, text: "Seleccionar, podar las ramas del árbol que están cerca del cable eléctrico y dejar la maleza en al centro de acopio autorizado." },
     ]
  },
  {
    hazardId: 18,
    title: "RESIDUOS GENERALES",
    measures: [
      { measureId: 33, text: "Limpiar toda la zona de trabajo, trasladar los residuos generados al centro de acopio autorizado." },
    ]
  },
  {
    hazardId: 19,
    title: "CONTROL HUMANO",
    measures: [
      { measureId: 34, text: "El personal involucrado en la tarea se encuentra apto y en buenas condiciones de salud para realizar el trabajo." },
    ]
  },
  {
    hazardId: 20,
    title: "CONTROL ADMINISTRATIVO",
    measures: [
      { measureId: 35, text: "El personal involucrado en la tarea conoce perfectamente el procedimiento de trabajo seguro ha sido capacitado en temas relacionados a la actividad." },
    ]
  },
];

const [selectedMeasures, setSelectedMeasures] = useState([]);

const handleMeasureChange = (e, hazardId, measureId) => {
  const { checked } = e.target;

  if (checked) {
    // Agregar el par (hazardId, measureId)
    setSelectedMeasures((prev) => [
      ...prev,
      { hazardId, measureId }
    ]);
  } else {
    // Remover ese par
    setSelectedMeasures((prev) =>
      prev.filter(
        (item) =>
          !(item.hazardId === hazardId && item.measureId === measureId)
      )
    );
  }
};


 // Podrías traer esto de una API o tenerlo hardcodeado
const responsablesData = [
  { id: "", nombre: "-- Seleccione --", dni: "" },
  { id: 1, nombre: "Juan Pérez", dni: "12345678" },
  { id: 2, nombre: "María López", dni: "87654321" },
  { id: 3, nombre: "Carlos Sánchez", dni: "44556677" },
  // ...
];
const handleResponsableChange = (e) => {
  const selectedId = parseInt(e.target.value, 10);
  
  // Buscar al responsable seleccionado en la lista
  const responsable = responsablesData.find((r) => r.id === selectedId);
  if (responsable) {
    // Actualizar ambos campos en el estado
    setFormData((prev) => ({
      ...prev,
      idResponsable: responsable.id,
      responsableCuadrilla: responsable.nombre,
      dniResponsable: responsable.dni,
    }));
  } else {
    // Si eligen "Seleccionar..." (value = 0), limpiar campos
    setFormData((prev) => ({
      ...prev,
      idResponsable: responsable.id,
      responsableCuadrilla: "",
      dniResponsable: "",
    }));
  }
};

  

  // Manejadores de cambio
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e, fieldName) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const currentValues = prev[fieldName];
      if (checked) {
        // Agrega el valor seleccionado
        return {
          ...prev,
          [fieldName]: [...currentValues, value],
        };
      } else {
        // Quita el valor si ya estaba seleccionado
        return {
          ...prev,
          [fieldName]: currentValues.filter((val) => val !== value),
        };
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setFormData((prev) => ({ ...prev, evidenciaFotografica: file }));
  };

  // Manejador de envío
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Obtén la fecha/hora actual
      const now = new Date();

    // Formatea a HH:MM:SS (24 horas)
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

    // Hora actual en formato "HH:MM:SS"
      const currentTime = `${hours}:${minutes}:${seconds}`;
    // Construimos el objeto con los campos del formulario
    const dataToSend = {
      fecha: formData.fechaCharla,                   // "2025-03-13"
      hora: currentTime,                              // Podrías usar otro state si lo capturas en el formulario
      id_area: formData.areaTrabajo,                                    // Podrías mapear formData.areaTrabajo si tu Lambda maneja un INT
      id_contratista: formData.supervisorInmediato,                             // Mapea si lo obtienes del formulario
      permiso_trabajo: formData.permisoTrabajo,
      id_personal_responsable: formData.idResponsable,
      descripcion_peligro: "Peligro en el trabajo",
      imagen: null,                                  // Si quisieras enviar una imagen en base64, aquí la asignas
      medidas:selectedMeasures.map((item) => ({
        id_medida: item.measureId,
        id_peligro: item.hazardId,
        checked: 1
      })),                                   // Ajusta si tu Lambda las necesita
      participantes: selected.map((item) => ({ id_personal: item.id })),                             // Ajusta si tu Lambda las necesita
    };
  
      // Imprimir en consola para verificar
  console.log("JSON que se enviará:", JSON.stringify(dataToSend));
  
    try {
      // Realizamos la petición a la API usando JSON
      const response = await fetch("https://ooref3ltoy7dz5glhic4ss3saq0jzmdu.lambda-url.us-east-1.on.aws/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Indicamos que el cuerpo es JSON
        },
        body: JSON.stringify(dataToSend),      // Convertimos el objeto a JSON
      });
  
      if (!response.ok) {
        throw new Error("Error al enviar formulario");
      }
        // Leer la respuesta del servidor (por ejemplo, JSON)
        const result = await response.json();
        console.log("Respuesta de la API:", result);
      // Si todo salió bien
      alert("Formulario enviado con éxito");
      // Aquí podrías limpiar el formulario con setFormData({...})
    } catch (error) {
      console.error(error);
      alert("Hubo un error al enviar el formulario");
    }
  };
  

  return (
    <div className="formato-panel">
      <h2>Evaluación de Riesgos Previo al Inicio de los Trabajos</h2>

      <form onSubmit={handleSubmit}>
        {/* DATOS GENERALES */}
        <div className="form-section">
          <label>Fecha de la Charla(*)</label>
          <input className="textarea-estilizada"  required
            type="date"
            name="fechaCharla"
            value={formData.fechaCharla}
            onChange={handleInputChange}
          />

          <label>Permiso de Trabajo(*)</label>
          <input className="textarea-estilizada" required 
            placeholder="Escribe un mensaje..."
            type="number"
            name="permisoTrabajo"
            value={formData.permisoTrabajo}
            onChange={handleInputChange}
          />

<label>Responsable de Cuadrilla(*)</label>
<select
  className="textarea-estilizada" required
  value={responsablesData.find((r) => r.nombre === formData.responsableCuadrilla)?.id || 0}
  onChange={handleResponsableChange}
>
  {responsablesData.map((r) => (
    <option key={r.id} value={r.id}>
      {r.nombre}
    </option>
  ))}
</select>


<label>DNI - Responsable del Trabajo(*)</label>
<input
  className="textarea-estilizada" required
  placeholder="Escribe un mensaje..."
  type="text"
  name="dniResponsable"
  value={formData.dniResponsable}
  onChange={handleInputChange} 
  readOnly
  // o readOnly si no quieres que lo editen manualmente
/>


          

<div style={{ position: "relative" }}>
      <label>Integrantes de la Cuadrilla(*)</label>
      <br />
      {/* Campo de búsqueda */}
      <input 
        type="text"
        placeholder="Buscar integrante..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          // Cada vez que cambie el texto, volvemos a mostrar el dropdown
          setShowDropdown(true);
        }}
        onFocus={() => setShowDropdown(true)} // al enfocar, mostramos la lista
        style={{ width: "300px" }}
      />

      {/* Lista desplegable de sugerencias */}
      {showDropdown && filteredIntegrants.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            width: "300px",
            border: "1px solid #ccc",
            backgroundColor: "white",
            listStyle: "none",
            margin: 0,
            padding: 0,
            maxHeight: "150px",
            overflowY: "auto",
            zIndex: 999,
          }}
        >
          {filteredIntegrants.map((integrant) => (
            <li
              key={integrant.id}
              onClick={() => handleSelect(integrant)}
              style={{ padding: "8px", cursor: "pointer" }}
            >
              {integrant.name}
            </li>
          ))}
        </ul>
      )}

      {/* Lista de integrantes seleccionados */}
      <div style={{ marginTop: "1rem" }}>
        {selected.map((integrant) => (
          <div 
            key={integrant.id}
            style={{
              display: "inline-block",
              background: "#eee",
              padding: "5px 10px",
              margin: "5px",
              borderRadius: "4px",
            }}
          >
            {integrant.name}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleRemove(integrant.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>

          <label>Placa de Vehículo</label>
          <input className="textarea-estilizada" 
            placeholder="Escribe un mensaje..."
            type="text"
            name="placaVehiculo"
            value={formData.placaVehiculo}
            onChange={handleInputChange}
          />
        </div>

        {/* SELECCIONES (COMBOBOX) */}
        <div className="form-section">
          <label>Área de Trabajo(*)</label>
          <select className="textarea-estilizada" required 
            name="areaTrabajo"
            value={formData.areaTrabajo}
            onChange={handleInputChange}
          >
            {areaTrabajoOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <label>Supervisor Inmediato(*)</label>
          <select className="textarea-estilizada" required 
            name="supervisorInmediato"
            value={formData.supervisorInmediato}
            onChange={handleInputChange}
          >
            {supervisorOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <label>Zonal</label>
          <select className="textarea-estilizada" 
          name="zonal" value={formData.zonal} onChange={handleInputChange}>
            {zonalOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label>Dirección de Zona de Trabajo</label>
          <input className="textarea-estilizada" 
            placeholder="Escribe un mensaje..."
            type="text"
            name="direccionZonaTrabajo"
            value={formData.direccionZonaTrabajo}
            onChange={handleInputChange}
          />

          <label>Actividad a Realizar</label>
          <input className="textarea-estilizada" 
            placeholder="Escribe un mensaje..."
            type="text"
            name="actividadRealizar"
            value={formData.actividadRealizar}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-section">
        <h3>IDENTIFICACIÓN DE PELIGROS/RIESGOS</h3>

        {hazardsData.map((hazard, index) => {
  // 1. Si es un “item especial” (subtítulo)
  if (hazard.isSectionTitle) {
    return (
      <h3 key={`title-${index}`} className="my-subtitle">
        {hazard.title}
      </h3>
    );
  }

  // 2. Si es un “peligro” normal con “measures”
  return (
    <div key={hazard.hazardId} className="riesgo-card">
      <h4>{hazard.title}</h4>

      {hazard.measures.map((measure) => {
        // Determina si está marcado, etc.
        const isChecked = selectedMeasures.some(
          (item) =>
            item.hazardId === hazard.hazardId &&
            item.measureId === measure.measureId
        );

        return (
          <label key={measure.measureId} className="paragraph-checkbox">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) =>
                handleMeasureChange(e, hazard.hazardId, measure.measureId)
              }
            />
            <span>{measure.text}</span>
          </label>
        );
      })}
    </div>
  );
})}
</div>

        {/* EVIDENCIA FOTOGRÁFICA */}
        <div className="form-section">
          <h3>Evidencia Fotográfica</h3>
          <p>Tamaño máximo: 10 MB</p>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        {/* BOTÓN DE ENVÍO */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormatoPanel;


