// language.js

// Objeto de traducciones
const translations = {
    es: {
        title: "Gestión Partido Fútbol",
        publicidad: {
            text: "Equipamiento Deportivo: equipatefutbol.com"
        },
        tabs: {
            partido: "Partido",
            jugadores: "Jugadores",
            configuracion: "Configuración",
        },
        configuracion: {
            titulo: "Configuración Minuto Inicio Segunda Parte",
            placeholder: "Minuto de inicio de la 2ª parte",
            guardar: "Guardar Minuto",
        },
        jugadores: {
            local: "Equipo Local",
            visitante: "Equipo Visitante",
            placeholder:
                "Ingresa un jugador por línea (número nombre)\nEjemplo:\n7 Juan Pérez\n10 Carlos García",
            guardarLocales: "Guardar Locales",
            guardarVisitantes: "Guardar Visitantes",
        },
        partido: {
            marcador: { local: "Local", visitante: "Visitante" },
            tiempo: "00:00",
            ajustarTiempo: "Ajustar Tiempo",
            acciones: {
                gol: "Gol",
                amarilla: "Tarjeta Amarilla",
                roja: "Tarjeta Roja",
            },
            controles: {
                iniciar: "Iniciar",
                segundaParte: "2ª Parte",
                reset: "Reset",
                exportar: "Exportar CSV",
            },
            eventos: "Eventos del Partido",
        },
        modal: {
            seleccionarJugador: "Seleccionar Jugador",
            confirmar: "Confirmar",
            cancelar: "Cancelar",
            ajustarTiempo: "Ajustar Tiempo del Cronómetro",
            minutos: "Minutos",
            segundos: "Segundos",
            confirmarTiempo: "Confirmar Tiempo"
        },
        alert: {
            jugadoresGuardados: "Jugadores guardados correctamente",
            configurarMinuto: "Por favor, configure el minuto de inicio de la segunda parte en la pestaña de Configuración.",
            minutoInvalido: "El minuto debe ser un número entre 0 y 45",
            cronometroInactivo: "El cronómetro debe estar activo para registrar incidencias",
            minutoGuardado: "Minuto de inicio de la segunda parte guardado correctamente",
            resetConfirmacion: "¿Estás seguro de que quieres reiniciar el partido? Se perderán todos los datos."
        },
        botones: {
            pausar: "Pausar",
            reanudar: "Reanudar",
            iniciar: "Iniciar",
            confirmar: "Confirmar",
            cancelar: "Cancelar",
            exportarCSV: "Exportar CSV"
        },
    },
    pt: {
        title: "Gestão de Partida de Futebol",
        publicidad: {
            text: "Equipamento Esportivo: equipatefutbol.com"
        },
        tabs: {
            partido: "Jogo",
            jugadores: "Jogadores",
            configuracion: "Configuração",
        },
        configuracion: {
            titulo: "Configuração do Minuto de Início da Segunda Parte",
            placeholder: "Minuto de início da 2ª parte",
            guardar: "Salvar Minuto",
        },
        jugadores: {
            local: "Equipe Local",
            visitante: "Equipe Visitante",
            placeholder:
                "Insira um jogador por linha (número nome)\nExemplo:\n7 João Silva\n10 Carlos Pereira",
            guardarLocales: "Salvar Locais",
            guardarVisitantes: "Salvar Visitantes",
        },
        partido: {
            marcador: { local: "Local", visitante: "Visitante" },
            tiempo: "00:00",
            ajustarTiempo: "Ajustar Tempo",
            acciones: {
                gol: "Gol",
                amarilla: "Cartão Amarelo",
                roja: "Cartão Vermelho",
            },
            controles: {
                iniciar: "Iniciar",
                segundaParte: "2ª Parte",
                reset: "Resetar",
                exportar: "Exportar CSV",
            },
            eventos: "Eventos do Jogo",
        },
        modal: {
            seleccionarJugador: "Selecionar Jogador",
            confirmar: "Confirmar",
            cancelar: "Cancelar",
            ajustarTiempo: "Ajustar Tempo do Cronômetro",
            minutos: "Minutos",
            segundos: "Segundos",
            confirmarTiempo: "Confirmar Tempo"
        },
        alert: {
            jugadoresGuardados: "Jogadores salvos com sucesso",
            configurarMinuto: "Por favor, configure o minuto de início da segunda parte na aba de Configuração.",
            minutoInvalido: "O minuto deve ser um número entre 0 e 45",
            cronometroInactivo: "O cronômetro deve estar ativo para registrar incidentes",
            minutoGuardado: "Minuto de início da segunda parte salvo com sucesso",
            resetConfirmacion: "Tem certeza de que deseja reiniciar o jogo? Todos os dados serão perdidos."
        },
        botones: {
            pausar: "Pausar",
            reanudar: "Retomar",
            iniciar: "Iniciar",
            confirmar: "Confirmar",
            cancelar: "Cancelar",
            exportarCSV: "Exportar CSV"
        },
    },
    en: {
        title: "Football Match Management",
        publicidad: {
            text: "Sports Equipment: equipatefutbol.com"
        },
        tabs: {
            partido: "Match",
            jugadores: "Players",
            configuracion: "Settings",
        },
        configuracion: {
            titulo: "Second Half Start Minute Setting",
            placeholder: "Start minute of the 2nd half",
            guardar: "Save Minute",
        },
        jugadores: {
            local: "Home Team",
            visitante: "Away Team",
            placeholder:
                "Enter one player per line (number name)\nExample:\n7 John Smith\n10 Carlos Johnson",
            guardarLocales: "Save Home",
            guardarVisitantes: "Save Away",
        },
        partido: {
            marcador: { local: "Home", visitante: "Away" },
            tiempo: "00:00",
            ajustarTiempo: "Adjust Time",
            acciones: {
                gol: "Goal",
                amarilla: "Yellow Card",
                roja: "Red Card",
            },
            controles: {
                iniciar: "Start",
                segundaParte: "2nd Half",
                reset: "Reset",
                exportar: "Export CSV",
            },
            eventos: "Match Events",
        },
        modal: {
            seleccionarJugador: "Select Player",
            confirmar: "Confirm",
            cancelar: "Cancel",
            ajustarTiempo: "Adjust Timer",
            minutos: "Minutes",
            segundos: "Seconds",
            confirmarTiempo: "Confirm Time"
        },
        alert: {
            jugadoresGuardados: "Players saved successfully",
            configurarMinuto: "Please configure the second half start minute in the Settings tab.",
            minutoInvalido: "The minute must be a number between 0 and 45",
            cronometroInactivo: "The timer must be active to register incidents",
            minutoGuardado: "Second half start minute saved successfully",
            resetConfirmacion: "Are you sure you want to reset the match? All data will be lost."
        },
        botones: {
            pausar: "Pause",
            reanudar: "Resume",
            iniciar: "Start",
            confirmar: "Confirm",
            cancelar: "Cancel",
            exportarCSV: "Export CSV"
        },
    },
};

// Variable que almacena el idioma actual
let currentLanguage = 'es'; // Valor por defecto

// Función para obtener la traducción basada en una clave
function getTranslation(key) {
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    for (let k of keys) {
        if (translation[k] !== undefined) {
            translation = translation[k];
        } else {
            // Retorna la clave si no se encuentra la traducción
            return key;
        }
    }
    return translation;
}

// Actualizar el idioma actual cuando se cambia el selector
function changeLanguage() {
    const selectedLanguage = document.getElementById("languageSelector").value;
    currentLanguage = selectedLanguage;
    const elementsToTranslate = document.querySelectorAll("[data-translate-key]");

    elementsToTranslate.forEach((el) => {
        const keys = el.dataset.translateKey.split(".");
        let translation = translations[currentLanguage];
        keys.forEach((k) => {
            if (translation[k] !== undefined) {
                translation = translation[k];
            } else {
                translation = el.textContent; // Mantener el texto actual si no se encuentra la traducción
            }
        });
        if (el.placeholder && translations[currentLanguage][el.dataset.translateKey.split(".")[0]] && translations[currentLanguage][el.dataset.translateKey.split(".")[0]][el.dataset.translateKey.split(".")[1]] && translations[currentLanguage][el.dataset.translateKey.split(".")[0]][el.dataset.translateKey.split(".")[1]].placeholder) {
            el.placeholder = translation;
        } else if (el.placeholder) {
            el.placeholder = translation;
        } else {
            el.textContent = translation;
        }
    });

    // Actualizar textos dinámicos en `app_ft.js` si es necesario
    actualizarBotonIniciar(); // Asegúrate de que esta función está disponible globalmente
}

// Exportar funciones y variables necesarias al ámbito global
window.getTranslation = getTranslation;
window.changeLanguage = changeLanguage;
window.currentLanguage = () => currentLanguage;

// Inicializar el idioma al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    changeLanguage();
});
