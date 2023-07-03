export default {
  global: {
    componenteFormativo: 'Orientaciones pedagógicas en RIAS',
    descripcionCurso:
      'Los procesos de educación para la salud requieren considerar los elementos conceptuales, epistemológicos, pedagógicos y didácticos, reconociendo de manera directa los resultados en salud en los que se propone incidir en el marco de la Política de atención integral en salud, así como las rutas integrales de atención en salud, lo que permite favorecer el diálogo de saberes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Reconocimiento de los sujetos individuales y colectivos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Reconocimiento de capacidades en los sujetos y premisas de la EpS',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Premisas para la planeación de procesos y diseño de herramientas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Planteamiento de educación grupal por curso de vida en la primera infancia',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Planteamiento de educación grupal en el curso de preparación para la maternidad y la paternidad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Planteamiento de educación para la salud en entornos',
            hash: 't_3_3',
          },
        ],
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
        download: 'downloads/prueba.pdf',
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
      tema:
        'Planteamiento de educación grupal en el curso de preparación para la maternidad y la paternidad',
      referencia:
        'MinSalud. (2017). <i>Derechos sexuales y derechos reproductivos en salud. MinSalud</i>.',
      tipo: 'Artículo',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/PS/derechos-sexuales-derechos-reproductivos-r1904-2017.pdf',
    },
    {
      tema:
        'Planteamiento de educación grupal en el curso de preparación para la maternidad y la paternidad',
      referencia:
        'MinSalud. (s.f.). <i>Sexualidad, derechos sexuales y derechos reproductivos</i>. MinSalud.',
      tipo: 'Artículo',
      link:
        'https://www.minsalud.gov.co/salud/publica/ssr/Paginas/home-salud-sexual.aspx',
    },
    {
      tema:
        'Planteamiento de educación grupal en el curso de preparación para la maternidad y la paternidad',
      referencia:
        'Fondo de Población de las Naciones Unidas. (s.f.). <i>Infografía: derechos sexuales y reproductivos</i>. Fondo de Población de las Naciones Unidas.',
      tipo: 'Artículo',
      link:
        'https://colombia.unfpa.org/sites/default/files/pub-pdf/INFOGRAFIA_DSR_WEB.pdf',
    },
    {
      tema: 'Planteamiento de educación para la salud en entornos',
      referencia:
        'MinSalud. (2022). <i>Modos, condiciones y estilos de vida saludables</i>. MinSalud.',
      tipo: 'Artículo',
      link: 'https://www.minsalud.gov.co/salud/Paginas/habitos-saludables.aspx',
    },
    {
      tema: 'Planteamiento de educación para la salud en entornos',
      referencia:
        'Núñez, A. (s.f.). UNFPA - <i>Sexualidad con sentido - Proyectos de vida</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/TCrpOEXFFNA',
    },
    {
      tema: 'Planteamiento de educación para la salud en entornos',
      referencia:
        'Resolución 3280 de 2018.  [Ministerio de Salud y Protección Social]. Por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. Agosto 2 de 2018.',
      tipo: 'Resolución',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203280%20de%2020183280.pdf',
    },
    {
      tema: 'Planteamiento de educación para la salud en entornos',
      referencia:
        'MinSalud. (2021). <i>Información para el cuidado de la salud por momentos de curso de vida</i>. MinSalud.',
      tipo: 'Documento',
      descarga: '/downloads/anexo1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Capacidad de agencia',
      significado:
        'Recursos con los que cuentan las personas para actuar por su propia vida, para definir y conseguir sus objetivos, metas y propósitos, para elegir y tomar decisiones.',
    },
    {
      termino: 'Hogar',
      significado:
        'Es el escenario de refugio, acogida y afecto. Constituye un espacio de residencia y convivencia permanente, es fundamental para el desarrollo y establecimiento de vínculos y relaciones sociales de base para la vida social, cultural y política de las personas y las familias.',
    },
    {
      termino: 'Laboral',
      significado:
        'Comprende los escenarios donde las personas e individuos se organizan para producir bienes y servicios en condiciones que promueven y protegen la salud, brindando bienestar a los trabajadores, sus familias y comunidades, con participación en la potenciación de factores protectores y en el control y mitigación de los factores adversos a su salud. Comprende los escenarios laborales formales e informales.',
    },
    {
      termino: 'Problema de salud',
      significado:
        'Es un problema relacionado con un estado o proceso relativo a la salud, manifiesto por una persona, una familia o una comunidad. Los problemas de la salud de las personas no solo afectan a las estructuras corporales específicas y a los mecanismos fisiológicos o psicológicos implicados, sino que también repercuten, en un grado y una duración variable, sobre su funcionamiento global.',
    },
    {
      termino: 'Promoción de la salud',
      significado:
        'Es el proceso que permite a las personas incrementar su control sobre los determinantes de la salud y, en consecuencia, mejorarla.',
    },
    {
      termino: 'Puerperio',
      significado:
        'Puerperio inmediato: son las primeras 24 horas después del parto. Puerperio mediato: abarca desde las 24 horas a los primeros 10 días luego de dar a luz. Puerperio alejado: se extiende hasta el día 40 posterior al parto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fondo Colombia en Paz – FCP. (2021).  <i>Orientaciones pedagógicas, metodológicas, técnicas y operativas para el desarrollo de capacidades en redes de apoyo comunitarias, para el cuidado de la salud materna e infantil en redes comunitarias “Tejiendo espacios para el cuidado intercultural de la salud en los primeros mil días de vida”</i>. Documento en proceso de publicación. FCP.',
      link: '',
    },
    {
      referencia:
        'Kaplún. (2002). <i>Una pedagogía de la comunicación (el comunicador popular)</i>. Editorial Caminos de La Habana.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020). <i>Lineamiento para el cuidado y la reducción del riesgo de contagio de SARS-COV-2 /COVID-19 en el marco de la ampliación de la medida de salida de niñas y niños entre dos y cinco  años de edad al espacio público</i>. ',
      link:
        'www.minsalud.gov.co/salud/publica/PET/Paginas/Documentos-tecnicos-covid-19.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). <i>Estrategia de entorno comunitario saludable</i>. Ministerio de Salud y Protección Social. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/estrategia-entorno-comunitario-2019.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). <i>Marco conceptual y metodológico para el desarrollo de la educación para la salud de las Rutas Integrales de Atención en Salud – RIAS. -Orientaciones pedagógicas, metodológicas y didácticas-</i>. MinSalud. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/directrices-educacion-pp.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <i>Lineamientos nacionales de entornos</i>. Ministerio de Salud y Protección Social. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-entornos-nacionales-2016.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <i>Política de atención integral en salud</i>. Ministerio de Salud y Protección Social. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/modelo-pais-2016.pdf',
    },
    {
      referencia:
        'Resolución 3280 de 2018. [Ministerio de Salud y Protección Social]. Por la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. Agosto 2 de 2018. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolución%20No.%203280%20de%2020183280.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nelly Rivas',
          cargo:
            'Profesional especializado grupo convivencia social y ciudadana',
          centro:
            'Ministerio de Salud y Protección Social – Dirección de Promoción y Prevención',
        },
        {
          nombre: 'Mónica Castro',
          cargo: 'Coordinadora grupo curso de vida',
          centro:
            'Ministerio de Salud y Protección Social – Dirección de Promoción y Prevención',
        },
        {
          nombre: 'Suralba Mosquera Mosquera',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
