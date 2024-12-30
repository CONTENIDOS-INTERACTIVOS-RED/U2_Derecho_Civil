export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 2.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '1',
        titulo: 'Personalidad jurídica: inicio y fin',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de personalidad jurídica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Inicio de la personalidad jurídica',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Fin de la personalidad jurídica',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '2',
        titulo: 'Capacidad jurídica y capacidad de obrar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Diferencias entre la capacidad jurídica y la capacidad de obrar',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Limitaciones de la capacidad de obrar',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '3',
        titulo: 'Estado civil y sus efectos jurídicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición de estado civil',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Efectos jurídicos del estado civil',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'El estado civil en la evolución del derecho',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia:
        'Chavarro Cadena, J. E. (2018). Código Civil: (2 ed.). Grupo Editorial Nueva Legislación SAS.',
      link: 'https://ebook.net/es/lc/tecnologicadeloriente/titulos/68942',
    },
    {
      referencia:
        'Medina Pabón, J. E. (2018). Derecho Civil: derecho de familia: (5 ed.). Editorial Universidad del Rosario.',
      link: 'https://ebook.net/es/lc/tecnologicadeloriente/titulos/70721',
    },
    {
      referencia:
        'Medina Pabón, J. E. (2014). Derecho civil: derecho de personas: (4 ed.). Editorial Universidad del Rosario.',
      link: 'https://ebook.net/es/lc/tecnologicadeloriente/titulos/69643',
    },
    {
      referencia: 'Corte Constitucional (2021) Sentencia T-375',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2021/T-375-21.htm',
    },
    {
      referencia: 'Corte Constitucional (2011) Sentencia C-577',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2011/c-577-11.htm',
    },
    {
      referencia: 'Corte Constitucional (2016) Sentencia SU-214',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2016/su214-16.htm',
    },
  ],
  glosario: [
    {
      termino: 'Capacidad de obrar',
      significado:
        'es la aptitud que tiene una persona para ejercer derechos y cumplir obligaciones por sí misma, realizando actos jurídicos válidos. Esta capacidad puede estar limitada en algunos individuos (como menores de edad o personas con discapacidad) y puede requerir de representantes para realizar ciertas acciones.',
    },
    {
      termino: 'Capacidad jurídica',
      significado:
        'es la aptitud que tiene una persona para ser titular de derechos y obligaciones, independientemente de si puede ejercerlos por sí misma. Toda persona, desde su nacimiento, posee capacidad jurídica de forma inherente.',
    },
    {
      termino: 'Estado Civil',
      significado:
        'es la situación jurídica de una persona en relación con su familia y ciertos aspectos sociales, como el matrimonio, la soltería, el divorcio o la viudez. El estado civil afecta ciertos derechos y deberes en temas como el patrimonio o las relaciones familiares.',
    },
    {
      termino: 'Existencia Legal de las personas',
      significado:
        'es el reconocimiento jurídico de una persona como sujeto de derechos y obligaciones. En el caso de las personas físicas, comienza con el nacimiento y, en el caso de las personas jurídicas, con su constitución y reconocimiento jurídico.',
    },
    {
      termino: 'Fin de la existencia legal',
      significado:
        'es el momento en que una persona física o jurídica deja de ser reconocida como sujeto de derechos y obligaciones. Para las personas físicas, esto ocurre con la muerte, mientras que para las personas jurídicas sucede con la disolución y liquidación.',
    },
    {
      termino: 'Menores de edad',
      significado:
        'son las personas que aún no han alcanzado la mayoría de edad establecida por la ley y, por tanto, tienen una capacidad de obrar limitada. En general, requieren la representación o autorización de sus padres o tutores para realizar actos jurídicos.',
    },
    {
      termino: 'Obligaciones',
      significado:
        'son vínculos jurídicos por los cuales una persona (deudor) está comprometida a realizar una prestación o a abstenerse de hacer algo en favor de otra (acreedor). Las obligaciones son fundamentales en el derecho civil y regulan relaciones como contratos y reparaciones por daños.',
    },
    {
      termino: 'Personalidad jurídica',
      significado:
        'es la cualidad que otorga el derecho a ciertos entes para ser sujetos de derechos y obligaciones. Este concepto incluye tanto a las personas físicas como a las personas jurídicas, permitiéndoles actuar en el ámbito jurídico como individuos o colectivos con identidad propia.',
    },
    {
      termino: 'Registro civil',
      significado:
        'es la institución o sistema mediante el cual el Estado lleva un registro de los actos y hechos relacionados con el estado civil de las personas, tales como nacimientos, matrimonios, divorcios y defunciones. Este registro garantiza la publicidad y validez de estos hechos.',
    },
    {
      termino: 'Voluntad',
      significado:
        'es la intención o deseo de una persona de realizar ciertos actos jurídicos. En el derecho civil, la voluntad es fundamental para la validez de los actos jurídicos, ya que una persona debe actuar con libre intención y conocimiento para que el acto sea considerado válido.',
    },
  ],
  complementario: [],
  creditos: [],
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
