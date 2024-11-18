// app.js
let cronometroInterval;
let tiempo = 0;
let cronometroActivo = false;
let partidoData = {
    golesLocal: 0,
    golesVisitante: 0,
    incidencias: [],
    jugadoresLocal: [],
    jugadoresVisitante: []
};
let incidenciaActual = null;
let startTimestamp = null;

// Cargar datos guardados
function cargarDatos() {
    const datosGuardados = localStorage.getItem('partidoData');
    if (datosGuardados) {
        partidoData = JSON.parse(datosGuardados);
        actualizarUI();
    }
    
    const tiempoGuardado = localStorage.getItem('tiempo');
    const timestampGuardado = localStorage.getItem('startTimestamp');
    const cronometroActivoGuardado = localStorage.getItem('cronometroActivo') === 'true';
    const minutoSegundaParte = localStorage.getItem('minutoSegundaParte');

    if (minutoSegundaParte) {
        document.getElementById('minutoSegundaParte').value = minutoSegundaParte;
    }

    if (tiempoGuardado) {
        tiempo = parseInt(tiempoGuardado);
        if (cronometroActivoGuardado && timestampGuardado) {
            const tiempoPasado = Math.floor((Date.now() - parseInt(timestampGuardado)) / 1000);
            tiempo += tiempoPasado;
        }
        actualizarTiempo();
    }

    if (cronometroActivoGuardado) {
        iniciarCronometro();
    }
}

// Guardar datos
function guardarDatos() {
    localStorage.setItem('partidoData', JSON.stringify(partidoData));
    localStorage.setItem('tiempo', tiempo.toString());
    localStorage.setItem('cronometroActivo', cronometroActivo);
    if (cronometroActivo) {
        localStorage.setItem('startTimestamp', startTimestamp);
    } else {
        localStorage.removeItem('startTimestamp');
    }
}

// Actualizar la interfaz de usuario
function actualizarUI() {
    document.getElementById('golesLocal').textContent = partidoData.golesLocal;
    document.getElementById('golesVisitante').textContent = partidoData.golesVisitante;

    const incidenciasDiv = document.getElementById('incidencias');
    incidenciasDiv.innerHTML = '';
    partidoData.incidencias.forEach(inc => {
        const div = document.createElement('div');
        div.className = `p-2 rounded ${inc.equipo === 'local' ? 'bg-blue-100' : 'bg-red-100'}`;
        div.textContent = `${inc.minuto}' - ${inc.tipo.toUpperCase()} - ${inc.jugador} (${inc.equipo})`;
        incidenciasDiv.appendChild(div);
    });

    document.getElementById('jugadoresLocal').value = partidoData.jugadoresLocal.join('\n');
    document.getElementById('jugadoresVisitante').value = partidoData.jugadoresVisitante.join('\n');
}

// Gestión del cronómetro
function toggleCronometro() {
    if (!cronometroActivo) {
        iniciarCronometro();
    } else {
        pausarCronometro();
    }
    guardarDatos();
}

function iniciarCronometro() {
    startTimestamp = Date.now() - (tiempo * 1000);
    cronometroInterval = setInterval(() => {
        const tiempoPasado = Math.floor((Date.now() - startTimestamp) / 1000);
        actualizarTiempo(tiempoPasado);
    }, 1000);
    cronometroActivo = true;
    document.getElementById('iniciarBtn').textContent = 'Pausar';
    document.getElementById('iniciarBtn').classList.replace('bg-green-500', 'bg-yellow-500');
}

function pausarCronometro() {
    clearInterval(cronometroInterval);
    tiempo = Math.floor((Date.now() - startTimestamp) / 1000);
    cronometroActivo = false;
    document.getElementById('iniciarBtn').textContent = 'Reanudar';
    document.getElementById('iniciarBtn').classList.replace('bg-yellow-500', 'bg-green-500');
}

function actualizarTiempo(newTiempo = tiempo) {
    tiempo = newTiempo;
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;
    document.getElementById('tiempo').textContent = 
        `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function iniciarSegundaParte() {
    const minutoSegundaParte = localStorage.getItem('minutoSegundaParte');
    if (minutoSegundaParte !== null) {
        tiempo = parseInt(minutoSegundaParte) * 60;
        actualizarTiempo(tiempo);
        iniciarCronometro();
        guardarDatos();
    } else {
        alert('Por favor, configure el minuto de inicio de la segunda parte en la pestaña de Configuración.');
    }
}

// Gestión de jugadores
function guardarJugadores(equipo) {
    const textarea = document.getElementById(`jugadores${equipo.charAt(0).toUpperCase() + equipo.slice(1)}`);
    const jugadores = textarea.value.split('\n').filter(j => j.trim());
    partidoData[`jugadores${equipo.charAt(0).toUpperCase() + equipo.slice(1)}`] = jugadores;
    guardarDatos();
    alert('Jugadores guardados correctamente');
}

// Configuración del minuto de inicio de la segunda parte
function guardarMinutoSegundaParte() {
    const minuto = parseInt(document.getElementById('minutoSegundaParte').value);
    if (minuto >= 0 && minuto <= 45) {
        localStorage.setItem('minutoSegundaParte', minuto);
        alert('Minuto de inicio de la segunda parte guardado correctamente');
    } else {
        alert('El minuto debe ser un número entre 0 y 45');
    }
}

// Gestión de incidencias
function registrarIncidencia(tipo, equipo) {
    if (!cronometroActivo) {
        alert('El cronómetro debe estar activo para registrar incidencias');
        return;
    }

    const modal = document.getElementById('modalJugador');
    const select = document.getElementById('selectJugador');
    select.innerHTML = '';
    
    const jugadores = partidoData[`jugadores${equipo.charAt(0).toUpperCase() + equipo.slice(1)}`];
    jugadores.forEach(jugador => {
        const option = document.createElement('option');
        option.value = jugador;
        option.textContent = jugador;
        select.appendChild(option);
    });

    incidenciaActual = { tipo, equipo, tiempoActual: tiempo };
    modal.style.display = 'block';
}

function confirmarJugador() {
    const jugador = document.getElementById('selectJugador').value;
    const tiempoActual = incidenciaActual.tiempoActual;
    const minuto = Math.floor(tiempoActual / 60);
    const segundos = tiempoActual % 60;
    
    const incidencia = {
        ...incidenciaActual,
        jugador,
        minuto: `${minuto}:${segundos.toString().padStart(2, '0')}`
    };

    if (incidencia.tipo === 'gol') {
        if (incidencia.equipo === 'local') {
            partidoData.golesLocal++;
        } else {
            partidoData.golesVisitante++;
        }
    }

    partidoData.incidencias.push(incidencia);
    guardarDatos();
    actualizarUI();
    cerrarModal();
}

function cerrarModal() {
    document.getElementById('modalJugador').style.display = 'none';
    incidenciaActual = null;
}

// Modal para ajustar el tiempo
function abrirModalTiempo() {
    document.getElementById('modalTiempo').style.display = 'block';
}

function cerrarModalTiempo() {
    document.getElementById('modalTiempo').style.display = 'none';
}

function confirmarTiempo() {
    const minutos = parseInt(document.getElementById('minutosInput').value) || 0;
    const segundos = parseInt(document.getElementById('segundosInput').value) || 0;
    tiempo = (minutos * 60) + segundos;
    actualizarTiempo();
    clearInterval(cronometroInterval);
    iniciarCronometro();
    guardarDatos();
    cerrarModalTiempo();
}

// Exportar datos a CSV
function exportarCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Equipo,Jugador,Minuto,Incidencia\n";
    partidoData.incidencias.forEach(inc => {
        csvContent += `${inc.equipo},${inc.jugador},${inc.minuto},${inc.tipo}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "partido_futbol.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Gestión de pestañas
function showTab(tabName) {
    document.getElementById('partido-content').classList.add('hidden');
    document.getElementById('jugadores-content').classList.add('hidden');
    document.getElementById('configuracion-content').classList.add('hidden');
    
    document.getElementById('partido-tab').classList.remove('border-blue-500', 'text-blue-600');
    document.getElementById('jugadores-tab').classList.remove('border-blue-500', 'text-blue-600');
    document.getElementById('configuracion-tab').classList.remove('border-blue-500', 'text-blue-600');
    
    document.getElementById(`${tabName}-content`).classList.remove('hidden');
    document.getElementById(`${tabName}-tab`).classList.add('border-blue-500', 'text-blue-600');
}

function resetPartido() {
    if (confirm('¿Estás seguro de que quieres reiniciar el partido? Se perderán todos los datos.')) {
        // Reiniciar datos del partido
        partidoData = {
            golesLocal: 0,
            golesVisitante: 0,
            incidencias: [],
            jugadoresLocal: partidoData.jugadoresLocal,
            jugadoresVisitante: partidoData.jugadoresVisitante
        };
        tiempo = 0;
        clearInterval(cronometroInterval);
        cronometroActivo = false;
        document.getElementById('iniciarBtn').textContent = 'Iniciar';
        document.getElementById('iniciarBtn').classList.replace('bg-yellow-500', 'bg-green-500');
        
        // Limpiar almacenamiento local
        localStorage.removeItem('partidoData');
        localStorage.removeItem('tiempo');
        localStorage.removeItem('cronometroActivo');
        localStorage.removeItem('startTimestamp');
        
        // Actualizar almacenamiento y UI
        actualizarUI();
        actualizarTiempo(0); // Reiniciar el tiempo a 00:00
        guardarDatos(); // Guardar los datos reseteados en localStorage
    }
}

// Llamar a cargarDatos al cargar la página
window.onload = cargarDatos;
