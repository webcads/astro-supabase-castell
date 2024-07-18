/**
 * @author DuX
 * @version 1.0
 */

/**
 * Función que simula un clic en el botón + del menú del estudiante
 */
function clicMenuEstudiante() {
	$('.estudianteMenuPanel').children('.ui-panel-content').show('fast');
}

/**
 * Función que simula un clic en el botón + del menú del docente
 */
function clicMenuDocente() {
	$('.docenteMenuPanel').children('.ui-panel-titlebar').children('a').click();
}

/**
 * Función que simula un clic en el botón + del menú del administrativo
 */
function clicMenuAdministrativo() {
	$('.administrativoMenuPanel').children('.ui-panel-titlebar').children('a').click();
}

/**
 * Función que activa o desactiva el contenido del menú del estudiante para ser simulado por el clic en la barra.
 * Simula además un clic en el botón oculto del formulario formSelectorMenu, en _principal.xhtml
 */
function toggleMenuEstudiante() {
	if ($('.estudianteMenuPanel').children('.ui-panel-content').is(':visible'))	{
		$('.estudianteMenuPanel').children('.ui-panel-content').hide('slow');
	}
	else {
		$('#formSelectorMenu\\:cambiarAPerfilEstudiante').click();
		$('.estudianteMenuPanel').children('.ui-panel-content').show('slow');
		$('.docenteMenuPanel').children('.ui-panel-content').hide('slow');
		$('.administrativoMenuPanel').children('.ui-panel-content').hide('slow');
		$('.estudianteMenuPanel').children('.ui-panel-content').children('.ui-accordion').children('.ui-accordion-header').eq(0).click();
	}
}

/**
 * Función que activa o desactiva el contenido del menú de consultas de residencias para ser simulado por el clic en la barra.
 */
function toggleMenuResidencias() {
	if ($('.consultasRMenuPanel').children('.ui-panel-content').is(':visible'))	{
		$('.consultasRMenuPanel').children('.ui-panel-content').hide('slow');
	}
	else {
		$('.consultasRMenuPanel').children('.ui-panel-content').show('slow');
	}
}

/**
 * Función que activa o desactiva el contenido del menú del docente para ser simulado por el clic en la barra.
 * Simula además un clic en el botón oculto del formulario formSelectorMenu, en _principal.xhtml
 */
function toggleMenuDocente() {
	if ($('.docenteMenuPanel').children('.ui-panel-content').is(':visible'))	{
		$('.docenteMenuPanel').children('.ui-panel-content').hide('slow');
	}
	else {
		$('#formSelectorMenu\\:cambiarAPerfilDocente').click();
		$('.docenteMenuPanel').children('.ui-panel-content').show('slow');
		$('.administrativoMenuPanel').children('.ui-panel-content').hide('slow');
		$('.estudianteMenuPanel').children('.ui-panel-content').hide('slow');
		
	}
}

/**
 * Función que activa o desactiva el contenido del menú del administrativo para ser simulado por el clic en la barra.
 * Simula además un clic en el botón oculto del formulario formSelectorMenu, en _principal.xhtml
 */
function toggleMenuAdministrativo() {
	if ($('.administrativoMenuPanel').children('.ui-panel-content').is(':visible'))	{
		$('.administrativoMenuPanel').children('.ui-panel-content').hide('slow');
	}
	else {
		$('#formSelectorMenu\\:cambiarAPerfilAdministrativo').click();
		$('.administrativoMenuPanel').children('.ui-panel-content').show('slow');
		$('.estudianteMenuPanel').children('.ui-panel-content').hide('slow');
		$('.docenteMenuPanel').children('.ui-panel-content').hide('slow');
	}
}


/**
 * Función que activa o desactiva el accordion simulando un clic en el header que corresponda al texto del parámetro.
 * @param text Texto del <a> del accordion que va a ser activado/desactivado
 */
function toggleAccordionText(text) {
	$('.estudianteMenuPanel').children('.ui-panel-content').show('fast');
	var elementos = $('.estudianteMenuPanel')
		.children('.ui-panel-content')
		.children('.ui-accordion')
		.children('.ui-accordion-header');
	elementos.children('a').each(function(index){
		if ($(this).text() == text)
		{
			elementos.eq(index).click();
		}
	});
}

