export default {
  global: {
    componenteFormativo: 'Exhibición y vitrinismo en el formato comercial',
    descripcionCurso:
      'La exhibición del surtido en el punto de venta es fundamental para todo tipo de establecimiento comercial. Por esta razón, las empresas deben pensar en cómo organizar adecuadamente sus locales de tal forma que tengan un impacto y una influencia positiva sobre las decisiones de compra por parte de los clientes.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<i>Retail</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Establecimiento comercial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Formatos comerciales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Arquitectura del establecimiento',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Surtido',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructura del surtido',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Planograma o planimetría',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<i>Layout</i>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'La exhibición de productos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Vitrinismo o <i>visual merchandising</i>',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: '<i>Merchandising</i>',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Señalización comercial',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Dispositivos de seguridad',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Muebles en el punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de muebles',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Rotación de las categorías',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Codificación de productos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'El precio',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Activación de marca',
            hash: 't_3_5',
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
  referencias: [
    {
      referencia:
        'AA. VV. (2020). La comunicación en la sociedad digital: reputación, <i>big data</i>-audiencia y medios, ante un público. Esic Editorial.',
    },
    {
      referencia:
        'Aranda, J. R. (2015). <i>Marketing</i> y promoción en el punto de venta. Editorial Elearning S.L.',
    },
    {
      referencia:
        'Borja, R. P. (2021). <i>Merchadinsing</i>. Teoría, práctica y estrategia. Esic Editorial.',
    },
    {
      referencia:
        'Costa, J. (2007). Señalética corporativa. Costa Punto Com Editor (CPC).',
    },
    {
      referencia:
        'Cruz, H. M. (2018). El arte de seducir. <i>Merchandising</i>. Ecoe Ediciones.',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2013). Fundaments de <i>Marketing</i>. Pearson Educación.',
    },
    {
      referencia:
        'Martínez, M. B. (2016). Escaparatismo y diseño de espacios comerciales. Paraninfo.',
    },
    {
      referencia:
        'Publicaciones Vértice S.L. (2010). Animación y presentación del producto en el punto de venta. Editorial Vértice.',
    },
    {
      referencia: 'Puente, A. M. (2004). Gestión por categorías. Netbiblo.',
    },
    {
      referencia:
        'Salen, H. (1994). Los secretos del <i>merchandising</i> activo. Ediciones Díaz de Santos, S.A.',
    },
    {
      referencia:
        'Vidal, F. J., Mas, J. J., y González, M. A. (2011). Sistemas de seguridad y confortabilidad. Editorial Editex.',
    },
    {
      referencia:
        'Vigaray, M. D. (2005). Comercialización y <i>retailing</i>: distribución comercial aplicada. Pearson Educación.',
    },
  ],
  glosario: [
    {
      termino: 'Amplitud',
      significado:
        'número de familias diferentes de productos que ofrece la marca.',
    },
    {
      termino: 'Checkout',
      terminoHtml: '<em>Checkout</em>',
      significado:
        'mueble ubicado cerca de las cajas y que está para exhibir productos de compra compulsiva como chocolates, chicles, mecato, revistas, libros, entre otros.',
    },
    {
      termino: 'Consistencia',
      significado:
        'Se cercanía relativa entre las líneas de producto y su uso final.',
    },
    {
      termino: 'Escaparate',
      significado:
        'espacio exterior de las tiendas comerciales, destinado a exponer las mercancías en venta al público.',
    },
    {
      termino: 'Góndola',
      significado:
        'tipo de mueble dispuesto a modo de pared para exhibir productos al consumidor en los puntos de venta.',
    },
    {
      termino: 'Layout',
      terminoHtml: '<em>Layout</em>',
      significado:
        'diseño o disposición de los productos (bienes y servicios) en sectores o categorías en el punto de venta del establecimiento.',
    },
    {
      termino: 'Longitud',
      significado:
        'número total de productos que tiene la marca en una familia.',
    },
    {
      termino: 'Merchandising',
      terminoHtml: '<em>Merchandising</em>',
      significado:
        'conjunto de estrategias y tácticas efectuadas dentro del establecimiento y que tiene como fin ubicar el artículo correcto, en la cantidad necesaria, con el precio justo, en el tiempo adecuado, con una presentación visual impactante y dentro de una exhibición sobresaliente. Se refiere a todos los esfuerzos destinados a que el cliente, no solo conozca el producto, sino también, que tome una acción de compra.',
    },
    {
      termino: 'Planograma',
      significado:
        'herramienta necesaria para la gestión eficaz del espacio donde se exhiben los productos de los establecimientos minoristas, más aún en la actualidad porque existe un mercado más complicado y competitivo, en el que ha aumentado el tamaño de las tiendas, las dimensiones del surtido y el número de categorías.',
    },
    {
      termino: 'Profundidad',
      significado:
        'número de variantes que la marca ofrece por cada producto en cada familia.',
    },
    {
      termino: 'Retail',
      terminoHtml: '<em>Retail</em>',
      significado:
        'concepto que se refiere a la venta al por menor o comercio minorista. Sistema de comercialización que entrega el producto al cliente.',
    },
    {
      termino: 'Señalización comercial',
      significado:
        'herramienta muy importante que ayuda a mejorar la información dentro del establecimiento, de tal forma que el visitante encuentre fácil el producto que necesita.',
    },
    {
      termino: 'Surtido',
      significado:
        'conjunto de productos ofertados por los diferentes establecimientos comerciales y que se encuentran dispuestos que el consumidor los compre.',
    },
    {
      termino: 'Vitrinismo',
      significado:
        'técnicas y estrategias que se emplean en el diseño de un escaparate o vitrina con el fin de conquistar los clientes que transitan en el establecimiento, incitarlos e invitarlos a que realicen la compra de los productos exhibidos.',
    },
  ],
  complementario: [
    {
      texto:
        'Quintero, A., L. F. (2015). El sector retail, los puntos de venta y el comportamiento de compra de los consumidores de la base de la pirámide en la comuna 10 de la ciudad de Medellín. Revista Ciencias Estratégicas, 23(33), 109-118.',
      tipo: 'Artículo PDF',
      link: 'https://www.redalyc.org/pdf/1513/151345259009.pdf',
    },
    {
      texto:
        'González, D. [Marketing 2.0]. (2019). ¿Qué es Merchandising? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Val9lx16bsc',
    },
    {
      texto:
        'Salgado, R. [Visual Branding LA]. (2013). Conceptos básicos de visual merchandising. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xZZ63K6cVbc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Samuel Pinilla Hurtado',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio - Regional Antioquia',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
