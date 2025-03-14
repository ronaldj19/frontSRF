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
  const areaTrabajoOptions = ["Elegir","OBRAS DISTRIBUCIÓN", "OBRAS DE TRANSMISIÓN", "B2B", "OPERACIONES","PÉRDIDAS","COMERCIAL","OBRAS AA.HH"];
  const supervisorOptions = ["Elegir","SERGIO PEÑA BORDON", "EMERSON PAREDES JAYO", "ELDER CORONEL REGALADO","JERSON CARBAJAL JIMENEZ","GIL RAMOS TELLO","HAROLD RAMIREZ UCULMANA","LUIS SUAREZ DOMINGUEZ","HEISON HUAMANÍ MALDONADO","JAVIER MOQUILLAZA PEDROZA","ERICK MEJIA ALARCON","JOSE PALOMARES MAGALLANES","ELMER CHOQUEZ YATACO","CARLOS GODIN ZAMBARANO","JORGE CANCHARI","CARLOS POMEZ MEREL","KEVIN AREVALO PEREZ","GERALD TRILLO SALAZAR","JOSE JUSCAMAITA VARGAS","EDU OLIVERA MARQUEZ","ALEX LEVANO ABREGU","JULIAN CAUTI RIOS","DITO ESCAJADILLO FLORES","JORGE MENDOZA CORRALES","SUNCIÓN ATOCHE","DILAN GUTIERREZ FRANCO"];
  const zonalOptions = ["Elegir", "ICA", "PISCO", "CHINCHA","NAZCA","PALPA","PUQUI/CORA CORA"];

  // Datos estructurados para “Peligros / Riesgos”
  const peligrosRiesgosData = [
    {
      id: "caidaMismoNivel",
      title: "CAÍDA AL MISMO NIVEL (SUPERFICIE)",
      subItems: [
        {
          id: "caidaMismoNivel_1",
          text: "Inspección visual del entorno de la zona de trabajo y concentración durante el desplazamiento en la zona. (Ojos y Mente en la tarea)",
        },
        {
          id: "caidaMismoNivel_2",
          text: "Orden y limpieza en la zona de trabajo y aledaños.",
        },
      ],
    },
    {
      id: "caidaDistintoNivel",
      title: "CAÍDA A DISTINTO NIVEL (ALTURA)",
      subItems: [
        {
          id: "caidaDistintoNivel_1",
          text: "Verificación visual al rededor de la base de los postes o estructuras donde se va realizar el escalamiento.",
        },
        {
          id: "caidaDistintoNivel_2",
          text: "Prohibido Escalar Postes: De concreto que presentan rajaduras y exposiciones de fierros corrugados, De Fierro que presenten costras de corrosión (oxidación) y De Madera que presenten agujeros por apolillamiento o desmoronamiento superficial en la base (excavación de 20 Cm. de su empotramiento)",
        },
        {
          id: "caidaDistintoNivel_3",
          text: "Para el escalamiento del poste o estructura, uso permanente del armés de seguridad con doble estrobo de soga de nylon de 1.8 y 3.5 M. con mosquetones con doble seguro y linea de vida con faja de anclaje escaleras embonables, extensibles o telescópicas (fibra de vidrio) aseguradas al poste o estructura",
        },
        {
          id: "caidaDistintoNivel_4",
          text: "Para realizar desplazamientos o movimientos en un poste o en cualquier estructura elevada deberá estar asegurado en forma permanente mientras dure las actividades de trabajos en altura",
        },
      ],
    },
    {
      id: "caidaObjetos",
      title: "CAÍDA DE OBJETOS (EQUIPOS, HERRAMIENTA, MATERIALES)",
      subItems: [
        {
          id: "caidaObjetos_1",
          text: "Señalización adecuada, usar casco dieléctrico con barbiquejo, personal fuera de la zona de influencia (Linea de Fuego).",
        },
        {
          id: "caidaObjetos_2",
          text: "Manipulación adecuada de equipos, herramientas y materiales en altura, uso de soga de servicio, polea de servicio y balde portaherramienta",
        },
        {
          id: "caidaObjetos_3",
          text: "Uso de eslinga o soguilla de nylon para sujeción de equipos y herramientas en trabajos de altura",
        },
      ],
    },
    {
      id: "derrumbes",
      title: "DERRUMBES",
      subItems: [
        {
          id: "derrumbes_1",
          text: "En las excavaciones, tener presente el entibamiento adecuado. Desprendimiento de muro, asegurarlo o eliminarlo",
        },
      ],
    },
    {
      id: "choqueAtropello",
      title: "CHOQUE Y ATROPELLO VEHICULAR",
      subItems: [
        {
          id: "choqueAtropello_1",
          text: "Manejo a la defensiva, respetar reglas de tránsito, señalización adecuada en zona de trabajo, evalúe previamente el riesgo antes de cruzar por una vía de alta fluidez de vehículos.",
        },
      ],
    },
    {
      id: "golpesContusiones",
      title: "GOLPES Y CONTUSIONES",
      subItems: [
        {
          id: "golpesContusiones_1",
          text: "Concentración en la tarea, cuando utilice picos, palas o herramientas manuales",
        },
        {
          id: "golpesContusiones_2",
          text: "Usar los EPP's adecuados para el tipo de actividad.",
        },
      ],
    },
    {
      id: "atrapamiento",
      title: "ATRAPAMIENTO CON EQUIPOS Y HERRAMIENTAS MANUALES",
      subItems: [
        {
          id: "atrapamiento_1",
          text: "Revisar y usar adecuadamente el estado de las herramientas manuales, verificar fundas y elementos de protección mecánica, estar atento a maquinas en movimiento.",
        },
        {
          id: "atrapamiento_2",
          text: "Desconectar la energia de alimentación para cualquier manipulación en los equipos o herramientas manuales.",
        },
      ],
    },
    {
      id: "cortesEscoriaciones",
      title: "CORTES Y ESCORIACIONES",
      subItems: [
        {
          id: "cortesEscoriaciones_1",
          text: "Usar los EPP's, equipos, herramientas y materiales adecuadamente y concentración en la tarea (Ojos y Mente en la tarea.",
        },
      ],
    },
    {
      id: "proyeccionesObjetos",
      title: "PROYECCIONES DE OBJETOS",
      subItems: [
        {
          id: "proyeccionesObjetos_1",
          text: "Uso permanente de lentes contra impacto o careta facial de acuerdo a la actividad de trabajo.",
        },
      ],
    },
    {
      id: "contactoElectrico",
      title: "CONTACTO ELÉCTRICO (DIRECTO/INDIRECTO)",
      subItems: [
        {
          id: "contactoElectrico_1",
          text: "Uso permanente de lentes contra impacto o careta facial de acuerdo a la actividad de trabajo. Uso permanente de guantes dieléctricos con protección de guante de badana (trabajos en BT Clase 0 y Trabajos en MT/AT Clase 3.",
        },
        {
          id: "contactoElectrico_2",
          text: "Señalización de la tensión de retorno, uso de separadores y mantas aislantes, herramientas aisladas y cumplir las distancias mininas de seguridad (DMS).",
        },
        {
          id: "contactoElectrico_3",
          text: "Respetar las indicaciones de la tarjeta de seguridad personal.",
        },
        {
            id: "contactoElectrico_4",
            text: "En linea AT sin servicio con línea paralela energizada de AT, deberán escalar por el lado de la estructura que se encuentre fuera de servicio y disponer de supervisión permanente en la actividad de trabajo.",
          },
      ],
    },
    {
      id: "arcoElectrico",
      title: "ARCO ELÉCTRICO",
      subItems: [
        {
          id: "arcoElectrico_1",
          text: "Uso permanente de careta facial y ropa de trabajo con ATPV 10 Cal/Cm2 para trabajos en BT.",
        },
        {
          id: "arcoElectrico_2",
          text: "Uso permanente de careta facial con ATPV 20 Cal/Cm2 y ropa de trabajo con ATPV 25 Cal/Cm2 para trabajos en MT/AT.",
        },
      ],
    },
    {
      id: "ruidos",
      title: "RUIDOS",
      subItems: [
        {
          id: "ruidos_1",
          text: "Uso de protección auditiva (tapones u orejeras).",
        },
      ],
    },
    {
      id: "exposicionPolvos",
      title: "EXPOSICIÓN PROLONGADA A POLVOS, HUMOS, SOLVENTES",
      subItems: [
        {
          id: "exposicionPolvos_1",
          text: "Usar respiradores adecuados para la actividad de trabajo.",
        },
      ],
    },
    {
      id: "agresionPersonas",
      title: "AGRESIÓN DE PERSONAS",
      subItems: [
        {
          id: "agresionPersonas_1",
          text: "Protección policial, evitar el enfrentamiento y retirarse de la zona de trabajo.",
        },
      ],
    },
    {
      id: "agresionAnimales",
      title: "AGRESIÓN DE ANIMALES (PERROS, INSECTOS)",
      subItems: [
        {
          id: "agresionAnimales_1",
          text: "En caso de perros no enfrentarse y cambiar de ruta, si ocurriese una mordedura llevarlo al centro de salud más cercano.",
        },
        {
            id: "agresionAnimales_2",
            text: "En caso de Abejas utilizar el traje protección contra abejas y en caso de Araña verificar la zona a intervenir, limpiar y utilizar los EPP's; si ocurriese picaduras trasladarlo al centro de salud mas cercano.",
          },
      ],
    },
  ];
  

  // Datos estructurados para “Aspectos Ambientales Significativos”
  const aspectosAmbientalesData = [
    {
      id: "residuosPeligrosos",
      title:
        "RESIDUOS PELIGROSOS (DERRAME DE ACEITES, LUBRICANTES, PARTÍCULAS DE ASBESTOS, WYPES CONTAMINADOS, LÁMPARAS DESASTADAS Y OTROS)",
      subItems: [
        {
          id: "residuosPeligrosos_1",
          text: "En caso de Derrame de Aceite o Fuga de Gas SF6: Uso de EPP's (guantes de nitrilo, respirador, botas de jebe y traje tyvek), Kit de Contingencia (paños, rollos, almohadillas absorbentes), lampa, pico y tacho de residuos peligrosos (Rojo).",
        },
        {
          id: "residuosPeligrosos_2",
          text: "En caso particulas de Asbesto, Waypes contaminados, Lámparas desgastadas: Uso de EPP's (guantes de nitrilo y traje tyvek), bolsas gruesas transparentes y tacho de residuos peligrosos (Rojo).",
        },
        {
          id: "residuosPeligrosos_3",
          text: "En caso Otros (latas de pintura, bolsas de cemento, grasas, etc.): Uso de EPP's (guantes de jebe o nitrilo, y respirador), bolsas gruesas transparentes y tacho de residuos peligrosos (Rojo).",
        },
      ],
    },
    {
      id: "podaArboles",
      title: "PODA DE ÁRBOLES",
      subItems: [
        {
          id: "podaArboles_1",
          text: "Seleccionar, podar las ramas del árbol que están cerca del cable eléctrico y dejar la maleza en al centro de acopio autorizado.",
        },
      ],
    },
    {
      id: "residuosGenerales",
      title: "RESIDUOS GENERALES",
      subItems: [
        {
          id: "residuosGenerales_1",
          text: "Limpiar toda la zona de trabajo, trasladar los residuos generados al centro de acopio autorizado.",
        },
      ],
    },
    {
        id: "controlHumano",
        title: "CONTROL HUMANO",
        subItems: [
          {
            id: "controlHumano_1",
            text: "El personal involucrado en la tarea se encuentra apto y en buenas condiciones de salud para realizar el trabajo.",
          },
        ],
      },
    {
      id: "controlAdministrativo",
      title: "CONTROL ADMINISTRATIVO",
      subItems: [
        {
          id: "controlAdministrativo_1",
          text: "El personal involucrado en la tarea conoce perfectamente el procedimiento de trabajo seguro ha sido capacitado en temas relacionados a la actividad.",
        },
      ],
    },
  ];
  

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
  
    // Construimos el objeto con los campos del formulario
    const dataToSend = {
      fecha: "2025-03-19",                   // "2025-03-13"
      hora: "14:30:00",                              // Podrías usar otro state si lo capturas en el formulario
      id_area: 1,                                    // Podrías mapear formData.areaTrabajo si tu Lambda maneja un INT
      id_contratista: 2,                             // Mapea si lo obtienes del formulario
      permiso_trabajo: 845412,
      id_personal_responsable: 3,
      descripcion_peligro: "Peligro en el trabajo",
      imagen: null,                                  // Si quisieras enviar una imagen en base64, aquí la asignas
      medidas: [
        { "id_medida": 1, "id_peligro": 1, "checked": 0 },
                { "id_medida": 2, "id_peligro": 1, "checked": 0 }
      ],                                   // Ajusta si tu Lambda las necesita
      participantes: [
        { "id_personal": 1 },
                { "id_personal": 2 }
      ]                              // Ajusta si tu Lambda las necesita
    };
  
      // Imprimir en consola para verificar
  console.log("JSON que se enviará:", JSON.stringify(dataToSend));
  
    try {
      // Realizamos la petición a la API usando JSON
      const response = await fetch("https://sn338ly3k8.execute-api.us-east-1.amazonaws.com/dev/wsinputdb", {
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
          <label>Fecha de la Charla</label>
          <input className="textarea-estilizada" 
            type="date"
            name="fechaCharla"
            value={formData.fechaCharla}
            onChange={handleInputChange}
          />

          <label>Permiso de Trabajo</label>
          <input className="textarea-estilizada" 
            placeholder="Escribe un mensaje..."
            type="text"
            name="permisoTrabajo"
            value={formData.permisoTrabajo}
            onChange={handleInputChange}
          />

          <label>DNI - Responsable del Trabajo</label>
          <input className="textarea-estilizada" 
            placeholder="Escribe un mensaje..."
            type="text"
            name="dniResponsable"
            value={formData.dniResponsable}
            onChange={handleInputChange}
          />

          <label>Responsable de Cuadrilla</label>
          <input className="textarea-estilizada" 
            placeholder="Escribe un mensaje..."
            type="text"
            name="responsableCuadrilla"
            value={formData.responsableCuadrilla}
            onChange={handleInputChange}
          />

          <label>Integrantes de la Cuadrilla</label>
          <input className="textarea-estilizada" 
            placeholder="Escribe un mensaje..."
            type="text"
            name="integrantesCuadrilla"
            value={formData.integrantesCuadrilla}
            onChange={handleInputChange}
          />

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
          <label>Área de Trabajo</label>
          <select className="textarea-estilizada" 
            name="areaTrabajo"
            value={formData.areaTrabajo}
            onChange={handleInputChange}
          >
            {areaTrabajoOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label>Supervisor Inmediato</label>
          <select className="textarea-estilizada" 
            name="supervisorInmediato"
            value={formData.supervisorInmediato}
            onChange={handleInputChange}
          >
            {supervisorOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
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

        {/* IDENTIFICACIÓN DE PELIGROS / RIESGOS */}
        <div className="form-section">
          <h3>IDENTIFICACIÓN DE PELIGROS/RIESGOS</h3>
          {peligrosRiesgosData.map((riesgo) => (
  <div key={riesgo.id} className="riesgo-card">
    <h4>{riesgo.title}</h4>

    {riesgo.subItems.map((subItem) => (
      <label key={subItem.id} className="paragraph-checkbox">
        <input
          type="checkbox"
          value={subItem.id}
          checked={formData.peligrosRiesgos.includes(subItem.id)}
          onChange={(e) => handleCheckboxChange(e, "peligrosRiesgos")}
        />
        <span>{subItem.text}</span>
      </label>
    ))}
  </div>
))}
        </div>

        {/* ASPECTOS AMBIENTALES SIGNIFICATIVOS */}
        <div className="form-section">
          <h3>ASPECTOS AMBIENTALES SIGNIFICATIVOS</h3>
          {aspectosAmbientalesData.map((aspecto) => (
  <div key={aspecto.id} className="aspecto-card">
    <h4>{aspecto.title}</h4>
    {aspecto.subItems.map((subItem) => (
      <label key={subItem.id} className="paragraph-checkbox">
        <input
          type="checkbox"
          value={subItem.id}
          checked={formData.aspectosAmbientales.includes(subItem.id)}
          onChange={(e) => handleCheckboxChange(e, "aspectosAmbientales")}
        />
        <span>{subItem.text}</span>
      </label>
    ))}
  </div>
))}

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
