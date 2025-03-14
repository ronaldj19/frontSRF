import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css'; // Tu tema preferido

function DateRangePicker() {
  // Almacena el rango de fechas en un estado
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  return (
    <div>
      <h2>Selecciona rango de fechas</h2>
      <Flatpickr
        value={dateRange}
        onChange={(selectedDates) => {
          // selectedDates será un array con las fechas seleccionadas
          console.log('Fechas seleccionadas:', selectedDates);
          setDateRange(selectedDates);
        }}
        options={{
          mode: 'range',      // Activa selección de rango
          dateFormat: 'Y-m-d' // Formato de las fechas en el input
        }}
      />
    </div>
  );
}

export default DateRangePicker;
