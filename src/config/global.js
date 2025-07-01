export default {
  global: {
    Name: 'Aspectos técnicos de insumos químicos en potabilización de agua',
    Description:
      'Este componente aborda la ejecución de pruebas de tratabilidad en agua cruda, con el fin de determinar la dosis óptima de insumos químicos y evaluar la eficiencia de los procesos unitarios de potabilización. Las temáticas descritas le permiten aplicar procedimientos técnicos y normativos para realizar ensayos como la prueba de jarras para determinar las dosis de coagulantes, interpretar resultados y proponer ajustes en los procesos de tratamiento de agua potable.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Lineamientos técnicos de agua potable y saneamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Resolución 0330 de 2017: Contenido y alcance',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normatividad calidad de agua',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sistemas de potabilización',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de plantas de tratamiento de agua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Características físicas y químicas del agua en proceso de potabilización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Caracterización del agua cruda: ensayos in situ y de laboratorio.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ensayos in situ ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Ensayos de laboratorio',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Procesos unitarios de potabilización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Aireación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Mezcla rápida',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Floculación',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Sedimentación',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Filtración',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Desinfección',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Coagulantes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Desinfectantes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Sustancias para ajuste de pH',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Criterios técnicos para la selección de insumos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Lineamientos técnicos de agua potable y saneamiento',
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio (2017).  Resolución 330 de 2017. Por la cual se adopta el Reglamento Técnico para el Sector de Agua Potable y Saneamiento Básico (RAS) y se derogan las Resoluciones números 1096 de 2000, 0424 de 2001, 0668 de 2003, 1459 de 2005, 1447 de 2005 y 2320 de 2009. ',
      tipo: 'Resolución',
      link: 'https://minvivienda.gov.co/normativa/resolucion-0330-2017-0 ',
    },
    {
      tema: 'Coagulantes',
      referencia:
        'Servicio Nacional de Aprendizaje. (2020, septiembre). Manual técnico: Elaboración de coagulantes y floculantes [PDF]. Repositorio SENA.',
      tipo: 'Manual',
      link: 'https://repositorio.sena.edu.co/handle/11404/6813',
    },
    {
      tema: 'Riesgos asociados al uso de insumos químicos',
      referencia: 'ARL Sura. (s.f.). Manejo seguro del gas cloro [PDF].',
      tipo: 'Documento ',
      descarga: '/downloads/manejo_seguro_gas_cloro.pdf',
    },
    {
      tema: 'Riesgos asociados al uso de insumos químicos',
      referencia:
        'ChemoSystems (o Chemos). (s.f.). Ficha de datos de seguridad: Hipoclorito de calcio (CAS 7681 52 9) [PDF].',
      tipo: 'Documento',
      descarga: '/downloads/7681-52-9-A0304021-ES-es.pdf',
    },
    {
      tema: 'Riesgos asociados al uso de insumos químicos',
      referencia:
        'ARL Sura. (s.f..). Manejo seguro de hipoclorito de calcio [Ficha de datos de seguridad, PDF].',
      tipo: 'Documento',
      descarga: '/downloads/hipoclorito_calcio.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agua cruda',
      significado:
        'es el agua natural que no ha sido sometida a proceso de tratamiento para su potabilización.',
    },
    {
      termino: 'Agua potable o agua para consumo humano',
      significado:
        'es aquella que cumple las características físicas, químicas y microbiológicas, en las condiciones señaladas en la Resolución 2115 de 2007.',
    },
    {
      termino: 'Coagulante',
      significado:
        'sustancia química utilizada en el tratamiento del agua para desestabilizar las partículas coloidales (como arcilla, materia orgánica, microorganismos y otros sólidos suspendidos) que no se sedimentan fácilmente por sí solas.',
    },
    {
      termino: 'Desinfectante',
      significado:
        'producto químico usado para eliminar microorganismos patógenos en el agua para consumo humano.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de la Protección Social (MPS) y Ministerio de Ambiente, Vivienda y Desarrollo Territorial (MAVDT). (2007). Resolución 2115 de 2007 Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio (2017).  Resolución 330 de 2017. Por la cual se adopta el Reglamento Técnico para el Sector de Agua Potable y Saneamiento Básico (RAS) y se derogan las Resoluciones números 1096 de 2000, 0424 de 2001, 0668 de 2003, 1459 de 2005, 1447 de 2005 y 2320 de 2009. ',
      link: 'https://minvivienda.gov.co/normativa/resolucion-0330-2017-0',
    },
    {
      referencia:
        'Murillo, S., Galvis, G y Pacheco, S. (2020). Manual técnico para la elaboración De coagulantes / floculantes a partir de productos naturales.',
      link: '',
    },
    {
      referencia:
        'Noreña, F. (2002). Modelo para la dosificación de cal en la planta Wiesner.  ',
      link:
        'https://repositorio.uniandes.edu.co/bitstreams/ff808f56-a97e-4e61-a5a1-3c6968869bf6/download',
    },
    {
      referencia:
        'Orenda Technologies (2023). Qué es el punto de ruptura de cloro. ',
      link:
        'https://blog.orendatech.com/es/entendiendo-el-puntode-rupturadelcloro',
    },
    {
      referencia:
        'Romero, J. (1999). Potabilización del agua. Editorial Escuela Colombiana de Ingeniería.',
      link: '',
    },
    {
      referencia:
        'Sawyer, C., McCarty, P., Parkin, G. (2001). Química para ingeniería ambiental. Editorial Mc Graw Hill. ',
      link: '',
    },
    {
      referencia: 'SURA. (2005). Manejo seguro del cloro  ',
      link: 'https://www.arlsura.com/files/hipoclorito_calcio.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
