/**
 * Romanos 1:1-17 — Estudio exegético con paralelos bíblicos
 * Lógica de interactividad
 *
 * Funcionalidades:
 * - Toggle individual de paralelos con animación
 * - Botones globales "Desplegar todo" / "Ocultar todo"
 * - Toggle de modo oscuro/claro con persistencia en localStorage
 * - Navegación por teclado y atributos ARIA
 */

(function () {
  'use strict';

  // =============================================
  // 1. MODO OSCURO / CLARO
  // =============================================

  const btnTema = document.getElementById('btn-tema');
  const raiz = document.documentElement;

  /**
   * Aplica el tema indicado al documento y lo guarda en localStorage.
   * @param {'claro'|'oscuro'} tema
   */
  function aplicarTema(tema) {
    raiz.setAttribute('data-tema', tema);
    localStorage.setItem('tema-romanos', tema);
  }

  /**
   * Determina el tema inicial:
   * 1. Si hay valor en localStorage, lo usa.
   * 2. Si no, respeta prefers-color-scheme del sistema.
   * 3. Por defecto: claro.
   */
  function inicializarTema() {
    const guardado = localStorage.getItem('tema-romanos');
    if (guardado) {
      aplicarTema(guardado);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      aplicarTema('oscuro');
    } else {
      aplicarTema('claro');
    }
  }

  // Inicializar tema al cargar
  inicializarTema();

  // Alternar tema al hacer clic
  btnTema.addEventListener('click', function () {
    const actual = raiz.getAttribute('data-tema');
    aplicarTema(actual === 'oscuro' ? 'claro' : 'oscuro');
  });

  // =============================================
  // 2. TOGGLE INDIVIDUAL DE PARALELOS
  // =============================================

  /**
   * Alterna la visibilidad de un panel de paralelos.
   * Actualiza aria-expanded y el ícono del botón.
   * @param {HTMLButtonElement} boton - El botón de paralelos
   */
  function alternarParalelos(boton) {
    const idPanel = boton.getAttribute('aria-controls');
    const panel = document.getElementById(idPanel);
    if (!panel) return;

    const estaAbierto = boton.getAttribute('aria-expanded') === 'true';
    const icono = boton.querySelector('.btn-paralelos-icono');

    if (estaAbierto) {
      // Cerrar
      panel.classList.remove('abierto');
      boton.setAttribute('aria-expanded', 'false');
      if (icono) icono.textContent = '+';
    } else {
      // Abrir
      panel.classList.add('abierto');
      boton.setAttribute('aria-expanded', 'true');
      if (icono) icono.textContent = '+'; // Se mantiene "+" porque la rotación CSS lo convierte en "×"
    }
  }

  // Registrar eventos en todos los botones de paralelos
  var botonesParalelos = document.querySelectorAll('.btn-paralelos');

  botonesParalelos.forEach(function (boton) {
    boton.addEventListener('click', function () {
      alternarParalelos(boton);
    });

    // Soporte de teclado: Enter y Espacio
    boton.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        alternarParalelos(boton);
      }
    });
  });

  // =============================================
  // 3. BOTONES GLOBALES
  // =============================================

  var btnDesplegar = document.getElementById('btn-desplegar-todo');
  var btnOcultar = document.getElementById('btn-ocultar-todo');

  /**
   * Despliega todos los paneles de paralelos.
   */
  btnDesplegar.addEventListener('click', function () {
    botonesParalelos.forEach(function (boton) {
      var idPanel = boton.getAttribute('aria-controls');
      var panel = document.getElementById(idPanel);
      if (panel) {
        panel.classList.add('abierto');
        boton.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /**
   * Oculta todos los paneles de paralelos.
   */
  btnOcultar.addEventListener('click', function () {
    botonesParalelos.forEach(function (boton) {
      var idPanel = boton.getAttribute('aria-controls');
      var panel = document.getElementById(idPanel);
      if (panel) {
        panel.classList.remove('abierto');
        boton.setAttribute('aria-expanded', 'false');
        var icono = boton.querySelector('.btn-paralelos-icono');
        if (icono) icono.textContent = '+';
      }
    });
  });

})();
