simplyCountdown('#cuenta', {
	year: 2024, // año
	month: 10, // mes (octubre)
	day: 4, // día
	hours: 0, // 12 AM (medianoche)
	minutes: 0, // 0 minutos
	seconds: 0, // 0 segundos
	words: { // Palabras para el conteo
        days: 'Día',
        hours: 'Hora',
        minutes: 'Minuto',
        seconds: 'Segundo',
        pluralLetter: 's'
    },
	plural: true, // usa plurales
	inline: false, // establece en true para obtener un conteo en línea
	inlineClass: 'simply-countdown-inline', // clase CSS para conteo en línea
	enableUtc: false, // Cambiado a false para usar hora local
	onEnd: function() {
		document.getElementById('portada').classList.add('oculta');
		// Puedes añadir aquí el mensaje de fin
	}, // Callback al final de la cuenta regresiva
	refresh: 1000, // refresco cada 1s
	sectionClass: 'simply-section', // clase CSS de sección
	amountClass: 'simply-amount', // clase CSS de cantidad
	wordClass: 'simply-word', // clase CSS de palabra
	zeroPad: false,
	countUp: false
});
