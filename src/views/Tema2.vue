<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Surtido
    .row.mb-5
      .col-lg-7.slideInLeft
        p.mb-3  Es el conjunto de productos ofertados por los diferentes establecimientos comerciales y que se encuentran dispuestos para que el consumidor los compre. El surtido se refiere a la variedad de los productos y no a la cantidad, sus objetivos son la satisfacción de las necesidades y deseos de los clientes, y la maximización en la rentabilidad del establecimiento, la cual se mide por metro cuadrado.
        p.mb-3.text-bold  En otras palabras, para definir el surtido se puede decir que es el grupo de referencias o artículos disponibles en el punto de venta. La rentabilidad de la empresa dependerá del valor de la marca, la rotación y composición del surtido (Puente, 2004).
        p.mb-3  Tener un buen surtido es vital para los establecimientos, porque de ello dependerá mucho la imagen de la marca, pues apoya en la creación de su personalidad y asegura, en gran medida, el éxito empresarial.

      .col-lg-5.slideInUp
        figure
          img(src='@/assets/curso/t2-i1.jpg', alt='imagen decorativa')
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0  <b>La coherencia del surtido:</b> es el equilibrio que se consigue entre productos según los criterios de rotación, margen, superficie y lineal disponible, motivación de la clientela, necesidades permanentes y estacionales. La elección del surtido es un acto fundamental ya que, al determinarlo, se satisface a un sector de clientela en detrimento de otro (Salen, 1994).

    #t_2_1.titulo-segundo
      h2 2.1  Estructura del surtido
    .row.mb-5
      .col-lg-7
        p.mb-3.text-bold(data-aos="slide-up")  Se refiere a los niveles, los cuales se dividen por departamentos, secciones, categorías, familias, subfamilias, artículos y referencias. Por ejemplo, la familia de los licores con productos de vinos comunes, vinos selectos, <i>whisky</i>, ron, aguardiente, <i>brandy</i>, etc.
        p.mb-3(data-aos="slide-up")  La cantidad de referencias que pone en venta un establecimiento está condicionada por el tamaño del local. Evidentemente, los establecimientos que posean más tamaño tendrán la posibilidad de poner en venta una mayor cantidad de referencias. 
        p.mb-3(data-aos="slide-up")  Los supermercados, que suelen tener más o menos entre 1.000 m² y 2.500 m², pueden poner en venta aproximadamente 5.300 referencias, y los autoservicios, que son más pequeños en tamaño, máximo 2.900 referencias. Otras variables que influyen en la cantidad de referencias que trabaja un local comercial, son los hábitos de compra del consumidor, la imagen que tenga el establecimiento y, por último, su política comercial.
        p.mb-3(data-aos="slide-up")  La clasificación o estructura del surtido radica en organizar este grupo de referencias en niveles. Tiene un doble propósito: el primero es diferenciar los niveles y el segundo es identificar cuáles niveles poseen mayor o menor rango. En cuanto a la gestión por categorías, la clasificación de referencias se puede distinguir comenzando en la totalidad del surtido y finalizando en las referencias de los artículos, y se puede ver en la siguiente figura:
      .col-lg-5
        figure(data-aos="flip-left")
          img.nW(src='@/assets/curso/t2-i2.jpg', alt='imagen decorativa')

    .neg-margin-x.bg-curved
      .row.mb-5.justify-content-center
        .col-lg-10
          ImagenInfografica.color-primario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t2-i3.jpg', alt='ejemplo de surtido de un supermercado')

            .tarjeta.color-acento-botones.p-3.shadow-box(x="40%" y="5%")
              .h5.mb-2 Departamentos:
              p  También se les conoce como sectores. Forman los grandes centros de actividades del establecimiento que agrupan varias secciones para tener un surtido homogéneo y complementario. 

            .tarjeta.color-acento-botones.p-3.shadow-box(x="21%" y="5%")
              .h5.mb-2 Divisiones:
              p También se conocen como grupos. Por ejemplo, divisiones de alimentación y no alimentación. 
            .tarjeta.color-acento-botones.p-3.shadow-box(x="15%" y="25%")
              .h5.mb-2 Categorías de productos:
              p Corresponden a una unidad de necesidad y responden a un mismo objetivo global. Según la definición de una categoría de productos un artículo podrá estar ubicado en un lugar o en otro, porque puede responder a distintas necesidades. 

            .tarjeta.color-acento-botones.p-3.shadow-box(x="10%" y="55%")
              .h5.mb-2 Familias:
              p Se refiere a artículos que satisfacen una misma necesidad genérica, creando a su vez, distintas categorías de productos. Por ejemplo, las familias de la categoría de aseo personal serían jabones para el cuerpo, champú, higiene infantil, etc. 

            .tarjeta.color-acento-botones.p-3.shadow-box(x="5%" y="87%")
              .h5.mb-2 Subfamilias:
              p  Se refiere a artículos similares pero que tienen una ligera diferencia, como, por ejemplo, yogures naturales sin azúcar, azucarados o con frutas. La subfamilia para la higiene infantil serían pañales, copitos, champú para niños, lociones, cremas, etc.

            .tarjeta.color-acento-botones.p-3.shadow-box(x="70%" y="35%")
              .h5.mb-2 Subcategorías:
              p Son divisiones existentes dentro de una categoría.

            .tarjeta.color-acento-botones.p-3.shadow-box(x="80%" y="40%")
              .h5.mb-2 Segmentos:
              p Son divisiones existentes dentro de una subcategoría.
              
            .tarjeta.color-acento-botones.p-3.shadow-box(x="90%" y="62%")
              .h5.mb-2 Referencias: 
              p Las diferentes opciones en tamaño, color, sabor, etc., que tienen los productos. 

            .tarjeta.color-acento-botones.p-3.shadow-box(x="60%" y="90%")
              .h5.mb-2 Artículos: 
              p También se les puede llamar productos o por su nombre común y natural como por ejemplo leche entera, semideslactosada o deslactosada.

          .cajon.color-primario.p-4.mb-4
            p.mb-0  Entonces, la clasificación o estructura del surtido se refiere a distribuir los artículos en grupos o niveles para que la oferta comercial se pueda clasificar, identificar y gestionar estratégicamente. Lo normal es que cada establecimiento diseñe su propia estructura, sin embargo, cabe anotar que la empresa debe gestionar de forma estratégica el surtido y su clasificación, teniendo en cuenta variables como la tipología del negocio y la filosofía empresarial.

      h3.titulo-tercero Dimensiones del surtido
      p.mb-5  Las dimensiones del surtido cuentan con las siguientes características:
      .spacer
      .row.mb-5
        .col-lg-3
          .tarjeta-avatar.white-card.shadow-box
            img(src='@/assets/curso/t1-a1.png' alt='imagen decorativa')
            .tarjeta.r-0
              .p-4
                h2.text-center Amplitud
                p Número de familias diferentes de productos que ofrece la marca.

        .col-lg-3
          .tarjeta-avatar.white-card.shadow-box
            img(src='@/assets/curso/t1-a2.png' alt='imagen decorativa')
            .tarjeta.r-0
              .p-4
                h2.text-center Profundidad
                p Número de variantes que la marca ofrece por cada producto en cada familia.
        .col-lg-3
          .tarjeta-avatar.white-card.shadow-box
            img(src='@/assets/curso/t1-a3.png' alt='imagen decorativa')
            .tarjeta.r-0
              .p-4
                h2.text-center Longitud
                p Número total de productos que tiene la marca en una familia.
                
        .col-lg-3
          .tarjeta-avatar.white-card.shadow-box
            img(src='@/assets/curso/t1-a4.png' alt='imagen decorativa')
            .tarjeta.r-0
              .p-4
                h2.text-center Consistencia
                p Cercanía relativa entre las líneas de producto y su uso final.

      p.mb-5  Ahora se verá cómo se organizan dichas dimensiones del surtido:
      .tarjeta.bg-sliders2.p-5.mb-5.shadow-box
        SlyderA
          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Surtido amplio y profundo
              p Es cuando un establecimiento comercial quiere satisfacer de manera amplia una gran variedad de necesidades. Para ello, debe haber muchas familias y que cada familia posea muchas referencias.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-s1.svg', alt='imagen decorativa')
              figcaption  Surtido amplio y profundo

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Surtido amplio y poco profundo
              p Muy normal en autoservicios y tiendas de descuento. Se da cuando el establecimiento tiene muchas familias y cada familia posee poca variedad de artículos.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-s2.svg', alt='imagen decorativa')
              figcaption  Surtido amplio y poco profundo

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Surtido estrecho y profundo
              p Muy normal en tiendas especializadas, porque presenta buena variedad de productos, pero solo para algunas familias específicas. Por ejemplo, las tiendas de electrodomésticos.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-s3.svg', alt='imagen decorativa')
              figcaption  Surtido estrecho y profundo

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Surtido estrecho y poco profundo
              p Muy normal en las tiendas tradicionales de barrio. Se da cuando el establecimiento posee pocas familias y pocas referencias. Otro ejemplo son los concesionarios de autos. 
            .col-md-6
              figure
                img.r-0(src='@/assets/curso/t2-s4.svg', alt='imagen decorativa')
              figcaption  Surtido estrecho y poco profundo
      .spacer
      h3.titulo-tercero Determinación de las dimensiones del surtido
      p.mb-5  En la gestión del surtido el primer paso debe ser la precisión de sus dimensiones. Y para lograrlo, se deben tener en cuenta los siguientes factores:
      TabsC.color-primario.mb-5.customTabs
        .py-3.py-md-4(titulo="El tamaño de la tienda")
          .row.justify-content-center.align-items-center   
            .col-md-6
              figure.slideInLeft
                img(src='@/assets/curso/t2-t1.jpg', alt='imagen decorativa')      
            .col-md-6.mb-4.mb-md-0
              h4 El tamaño de la tienda
              p Se refiere a la superficie que dispone el establecimiento, y según sea su tamaño la empresa podrá jugar con el diseño de la longitud y profundidad del surtido de productos.

        .py-3.py-md-4(titulo="La rentabilidad de la tienda")
          .row.justify-content-center.align-items-center   
            .col-md-6
              figure.slideInLeft
                img(src='@/assets/curso/t2-t2.jpg', alt='imagen decorativa')      
            .col-md-6.mb-4.mb-md-0
              h4 La rentabilidad de la tienda
              p El establecimiento debe decidir qué precio se ajusta a los productos. Desde la teoría, un establecimiento amplio y profundo, es decir, con una superficie grande, podría aumentar sus precios de venta con el fin de lograr mayor rentabilidad. Es normal, porque el cliente recibe a cambio el poder comprar todo lo que necesita sin necesidad de trasladarse a otro almacén, tienda o establecimiento. Pero se debe pensar en qué prefieren los clientes: mayor variedad de productos con mayores posibilidades de elección de productos o menor variedad de productos con menores posibilidades de elección de productos. 

        .py-3.py-md-4(titulo="La naturaleza de los productos")
          .row.justify-content-center.align-items-center   
            .col-md-6
              figure.slideInLeft
                img(src='@/assets/curso/t2-t3.jpg', alt='imagen decorativa')      
            .col-md-6.mb-4.mb-md-0
              h4 La naturaleza de los productos
              p A la hora de hacer una compra de un artículo común (pan, huevos, leche, mantequilla), no se suele comparar, por lo que no sería necesario poseer un surtido muy profundo en el establecimiento. En cambio, cuando se compran productos poco comunes, o no tan frecuentes, como por ejemplo electrodomésticos, textiles y muebles, sí se suele hacer una comparación, y es cuando el cliente requiere de analizar muy bien las diferentes posibilidades de precio, características, calidad, beneficios, etc. 

        .py-3.py-md-4(titulo="El modo de presentación de los productos")
          .row.justify-content-center.align-items-center   
            .col-md-6
              figure.slideInLeft
                img(src='@/assets/curso/t2-t4.jpg', alt='imagen decorativa')      
            .col-md-6.mb-4.mb-md-0
              h4 El modo de presentación de los productos
              p Se refiere a la forma en que se exhiben los productos. Se pueden usar góndolas, determinados tipos de contenedores, displays o, incluso, la presentación de los artículos en el suelo. Es por esto por lo que el modo de presentación de los productos influye directamente en la composición del surtido.

        .py-3.py-md-4(titulo="El comportamiento de la clientela")
          .row.justify-content-center.align-items-center   
            .col-md-6
              figure.slideInLeft
                img(src='@/assets/curso/t2-t5.jpg', alt='imagen decorativa')      
            .col-md-6.mb-4.mb-md-0
              h4 El comportamiento de la clientela
              p Se debe tener en cuenta los hábitos de compra por parte de los clientes que, según sus características psicológicas y su poder adquisitivo, realizan las compras bien sea de manera banal o excepcional.

      .row.mb-5
        .col-lg-8
          p.mb-3  Para lograr un equilibrio en el establecimiento comercial se debe llegar a una optimización en la anchura y la profundidad del surtido, eligiendo la composición que mejor funcione en el interior, y pensando en los factores enumerados anteriormente, en los productos y en los clientes. Además, se deben medir de forma cuidadosa los siguientes dos valores:
          ul.lista-ul
            li
              i.fas.fa-check
              p <b>La demanda de cada producto:</b> en el interior de cada familia de artículos se debe calificar cada referencia de acuerdo con su volumen de venta.
            li
              i.fas.fa-check
              p <b>La influencia de los productos de atracción:</b> cuáles son los artículos o referencias que influyen en la venta de demás. Su sola presencia en el punto de venta se hace necesaria porque ayuda las ventas en conjunto de la familia. Por lo general, los productos de atracción suelen ser más rentables que los demás, ya que además de influir en la venta de los demás, también son productos que tienen alta rotación (Salen, 1994).

        .col-lg-4
          figure
            img(src='@/assets/curso/t2-i4.png', alt='imagen decorativa')  


    Separador
    br
    br
    #t_2_2.titulo-segundo
      h2 2.2  Planograma o planimetría

    p.mb-5  Es una herramienta muy necesaria para la gestión eficaz del espacio donde se exhiben los productos de los establecimientos minoristas, más aún en la actualidad, porque existe un mercado más complicado y competitivo, en el que ha aumentado el tamaño de las tiendas, las dimensiones del surtido y el número de categorías. Esta herramienta tiene como objetivos mejorar la presentación de los artículos y aumentar las ventas.
    .row.mb-5
      .col-lg-7
        p.mb-3  Se puede definir como un instrumento del <i>merchandising</i> que consiste en el diseño de un boceto, diagrama o croquis a través de un <i>software</i>, donde se describe detalladamente el lugar en el que se van a ubicar los artículos. Además, el planograma detalla la cantidad de productos, el número de <i>facings</i> (caras) de un mismo producto, cuál es la altura y qué profundidad deben ocupar las distintas referencias señaladas. <b>Se entiende por <i>facing</i> al número de caras de un mismo producto que se necesitan para que se pueda ver por parte del cliente.</b> Por lo tanto, el planograma viene siendo una estrategia de mercadeo que tiene como objetivo hacer visible al producto al interior del establecimiento.
        p.mb-3  La complejidad de un planograma va a depender del tamaño del establecimiento, de las necesidades del detallista o del programa (<i>software</i>) utilizado para su diseño. Por eso se recomienda que el planograma sea sencillo pero que, a la vez, detalle toda la información necesaria para saber cuál es la ubicación exacta de cada artículo dentro de la tienda.
      .col-lg-5
        figure(data-aos="slide-up")
          img(src='@/assets/curso/t2-i5.jpg', alt='imagen decorativa')  

    p.mb-5  Las funciones principales del planograma son:
    .row.mb-5.justify-content-center
      .col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t2-ch1.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p <b>Mejorar la ubicación de los productos</b>, poniendo los productos más vendidos o que son más rentables en un nivel más destacado. 
      .col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t2-ch2.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p <b>Aumentar las ventas.</b> Con el uso de los planogramas, los establecimientos comerciales deciden cómo va a lucir el lineal y qué artículos serán más accesibles para el cliente; además de procurar que el diseño sea más impactante y atractivo para los clientes.

    .row.mb-5
      .col-lg-8
        p.mb-4.text-bold  Y en cuanto a los beneficios:
        ul.lista-ul
          li
            i.fas.fa-check
            p Reduce el tiempo de creación de la ubicación de los productos en el establecimiento.
          li
            i.fas.fa-check
            p Establece el potencial de venta de cada área de la superficie.
          li
            i.fas.fa-check
            p Mejora la satisfacción del cliente facilitando las compras a través de lineales ordenados y atractivos visualmente.
          li
            i.fas.fa-check
            p Permite una revisión más estricta del inventario al ordenar las estanterías y los <i>facings</i> (frentes) basándose en la rotación, lo que da como resultado una reducción de las roturas del <i>stock</i> (espacios vacíos).
          li
            i.fas.fa-check
            p Suministra una mejor relación del posicionamiento de los artículos.
          li
            i.fas.fa-check
            p Facilita la reposición de productos porque dota al personal encargado de una guía a seguir.
          li
            i.fas.fa-check
            p Influencia en la conducta del consumidor al realizar una acción de compra, por lo que se logra un aumento en las ventas y en la rentabilidad.
          li
            i.fas.fa-check
            p Es una herramienta efectiva para informar al personal la disposición determinada para el lineal.

      .col-lg-4
        figure(data-aos="slide-right")
          img(src='@/assets/curso/t2-i6.jpg', alt='imagen decorativa')  

    p.mb-3  En el momento del diseño de un planograma se recomienda determinar el espacio de acuerdo con el rendimiento o rotación de los productos. La principal regla es asegurar que exista en el lineal, mercancía suficiente que satisfaga la demanda de los clientes. 
    p.mb-4  Es por lo que el establecimiento debe tener en cuenta las siguientes consideraciones:
    .row.mb-5.justify-content-center
      .col-lg-3
        figure(data-aos="flip-right")
          img(src='@/assets/curso/t2-i7.jpg', alt='imagen decorativa')  
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-primario")
          .row.justify-content-center(titulo="Emplazamiento")
            .col-md-11.mb-4.mb-md-0
              p Elegir el lugar del establecimiento donde se va a ubicar una determinada referencia, los artículos adyacentes y los lugares secundarios. 
              
          .row.justify-content-center(titulo="Extensión de la categoría")
            .col-md-11.mb-4.mb-md-0
              p Cuál es el tamaño del espacio que le será asignado a la categoría. 
              
          .row.justify-content-center(titulo="Lugar del producto")
            .col-md-11.mb-4.mb-md-0
              p Cómo asignar el sitio a cada artículo. Se puede tener en cuenta por la cantidad de ventas, por rotación, por encargos, por niveles de inventario, etc.  

          .row.justify-content-center(titulo="Disposición")
            .col-md-11.mb-4.mb-md-0
              p Cómo organizar el planograma, puede ser por precios, marcas, fabricantes, etc.

          .row.justify-content-center(titulo="Señalización y PLV")
            .col-md-11.mb-4.mb-md-0
              p Establecer si la categoría pudiera beneficiarse de la señalización interna del local o del material PLV (Publicidad en el Lugar de Venta).

    h3.titulo-tercero Tipos de planogramas
    p.mb-5  Esencialmente hay tres tipos de planogramas:
    TabsC.color-primario.mb-5.customTabs
      .py-3.py-md-4(titulo="Casillas con texto")
        .row.justify-content-center.align-items-center   
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t2-b1.jpg', alt='imagen decorativa')      
          .col-md-6.mb-4.mb-md-0
            h4 Casillas con texto
            p Es el planograma más sencillo, porque emplea recuadros para representar los artículos, ubicando su nombre adentro. Por lo general, son en blanco y negro y bidimensionales. Principalmente son usados en tiendas de alimentos o en departamentos que tienen productos con alta rotación.

      .py-3.py-md-4(titulo="Pictóricos")
        .row.justify-content-center.align-items-center   
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t2-b2.jpg', alt='imagen decorativa')      
          .col-md-6.mb-4.mb-md-0
            h4 Pictóricos
            p Es un planograma más complejo y detallado porque usan una imagen del producto y de cómo debe ser exhibido. Por lo general, se diseñan a escala y en colores para proveer una descripción exacta de los productos exhibidos. Comúnmente usado en establecimientos de moda y tiendas por departamento donde la exhibición es más relevante y la presentación es primordial. Suelen ser imágenes bidimensionales a través de fotos o ilustraciones que muestran en detalle el diseño de los productos.

      .py-3.py-md-4(titulo="Tridimensionales")
        .row.justify-content-center
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t2-b3.jpg', alt='imagen decorativa')      
          .col-md-6.mb-4.mb-md-0
            h4 Tridimensionales
            p.mb-3  <i>PlanoGraphics</i>, Panogramas PRO y <i>Adalta Apollo Space Management & Planning</i>, entre otros.
            p.mb-4  Cuando se establece un planograma se debe evitar:
            ul.lista-ul.mb-4
              li
                i.fas.fa-check
                p.mb-0 Puertas cercanas a las puertas de acceso o a los depósitos de mercancías.
              li
                i.fas.fa-check
                p.mb-0 Esquinas con poca iluminación.
              li
                i.fas.fa-check
                p.mb-0 Mezclar productos de la canasta familiar con otros que tengan olores fuertes como por ejemplo detergentes o insecticidas.
            p.mb-4  Además, se debe buscar:
              ul.lista-ul.mb-4
                li
                  i.fas.fa-check
                  p.mb-0 Crear impacto.
                li
                  i.fas.fa-check
                  p.mb-0 Que haya disponibilidad de artículos de manera permanente.
                li
                  i.fas.fa-check
                  p.mb-0 Tener claridad en el precio (números redondos).            
                li
                  i.fas.fa-check
                  p.mb-0 La facilidad para el cliente.
                li
                  i.fas.fa-check
                  p.mb-0 Que la información sea clara.
                li
                  i.fas.fa-check
                  p.mb-0 Que exista un estímulo a la compra por parte del cliente.    



    Separador
    br
    br
    #t_2_3.titulo-segundo
      h2 2.3  <i>Layout</i>
    p.mb-5.text-bold  Se refiere al diseño o disposición de los productos (bienes y servicios) en sectores o categorías en el punto de venta del establecimiento. Para el <i>retail</i> es un concepto técnico tan importante que perfectamente puede estar incluido dentro de las estrategias en un plan de <i>marketing</i>.
    .row.mb-5
      .col-lg-7
        .cajon.color-primario.p-4.mb-4(data-aos='flip-up')
          p.mb-0  Este busca la instalación óptima de los componentes, activos o pasivos, para alcanzar los volúmenes requeridos disminuyendo el gasto en mano de obra, movimientos, existencias o almacenamientos intermedios, además de la inactividad o espera de los equipos.
        p.mb-3  En cuanto al mercadeo, el <i>layout</i> se refiere al emplazamiento de los bienes o servicios en cualquier tipo de establecimiento, o sea, a su organización estratégica con el fin de disminuir el consumo de mano de obra y certificar la correcta exhibición de los artículos. El <i>marketing-layout</i> tiene como objeto aumentar las ventas por metro cuadrado, agrupando o separando los artículos con base en los criterios de consumo que identifiquen a un determinado mercado. Por ejemplo, en el tema de las estanterías se suele elegir entre dos tipos de <i>layout</i>: rectangular o angular (Martínez, 2016).

      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t2-i8.jpg', alt='imagen decorativa')     
    
    h3.titulo-tercero Tipos de <i>layout</i>
    p.mb-5  A continuación, se presentan cinco (5) tipos de <i>layout</i> diferentes utilizados en los establecimientos:
    .row.mb-5.justify-content-center
      .col-lg-10
          PasosA.color-primario.mb-5(tipo="n")
            .row
              .col-md-6.mb-4.mb-md-0
                h3 Diseño recto
                p Normalmente usado en establecimientos que tienen venta al por menor. Puede confundir y frustrar, porque no se puede ver por encima del mobiliario; es más económico.
              .col-md-6
                figure
                  img(src='@/assets/curso/t2-m1.svg', alt='imagen decorativa')
                  figcaption Diseño recto
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/t2-m2.svg', alt='imagen decorativa')
                  figcaption Diseño diagonal
              .col-md-6
                h3 Diseño diagonal
                p.mb-3  Presenta una buena distribución del espacio para los establecimientos de autoservicio o tiendas minoristas.
                p.mb-3  Posee una muy buena visibilidad para los cajeros y clientes.
                p.mb-3  Permite el movimiento y el flujo de tráfico a la tienda.
            .row
              .col-md-6.mb-4.mb-md-0
                h3 Diseño angular 
                p.mb-3 Es la mejor opción para los establecimientos especializados de alta gama. Las curvas y ángulos de los muebles permiten al cliente apreciar mejor los artículos. Favorecen una mejor circulación dentro del establecimiento.
                p.mb-3  Es el más costoso por las curvas y los ángulos de los muebles.
              .col-md-6
                figure
                  img(src='@/assets/curso/t2-m3.svg', alt='imagen decorativa')
                  figcaption Diseño angular 
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/t2-m4.svg', alt='imagen decorativa')
                  figcaption Diseño geométrico
              .col-md-6
                h3 Diseño geométrico
                p.mb-3  Es el diseño apropiado para exhibición de ropa o tiendas departamentales.
                p.mb-3  Se utilizan bastidores y mobiliario especial para lucir un diseño interesante con un precio económico.

            .row
              .col-md-6.mb-4.mb-md-0
                h3 Diseño mixto
                p.mb-3 Integra diseños rectos, diagonales y con ángulos planos para generar un diseño funcional. Mueve el tráfico hacia los muros y el fondo del establecimiento.

              .col-md-6
                figure
                  img(src='@/assets/curso/t2-m5.svg', alt='imagen decorativa')
                  figcaption Diseño mixto

    h3.titulo-tercero Formatos del <i>layout</i>
    p.mb-3  Se distinguen dos (2) categorías principales, <i>layout</i> con transformación y sin transformación:
    .row.mb-5.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-primario")
          .row.justify-content-center(titulo="<i>Layout</i> con transformación")
            .col-md-2.mb-4.mb-md-0
              figure
                img.nW.centered(src='@/assets/curso/t2-ic1.svg', alt='imagen decorativa')
            .col-md-10.mb-4.mb-md-0  
              p.mb-3  <b><i>Layout</i> por proceso:</b> los componentes son agrupados por la función especial que cumplen, sin referirse a ningún producto en especial (por ejemplo, talleres por encargo).
              p.mb-3  <b><i>Layout</i> por producto:</b> los componentes se ordenan en función de las etapas por las cuales pasa el producto, desde la entrada de la materia prima hasta la salida del producto terminado (por ejemplo, montaje de automóviles).
              p.mb-3  <b><i>Layout</i> por posición fija: </b> el producto por sus características permanece inmovilizado y los diversos medios de fabricación requeridos se sitúan alrededor del mismo (por ejemplo, aviones, astilleros). Los medios de producción inmovilizados sirven para la fabricación de más de una unidad.
              p.mb-3  <b><i>Layout</i> por proyecto: </b> se refiere a situaciones especiales, como construcción de edificios o carreteras. A veces coincide este formato con el de posición fija, pero el de proyectos debe planearse teniendo en cuenta el terreno particular en el que se lleva a cabo la tarea, el cual puede sufrir cambios.

          .row.justify-content-center(titulo="<i>Layout</i> sin transformación")
            .col-md-2.mb-4.mb-md-0
              figure
                img.nW.centered(src='@/assets/curso/t2-ic2.svg', alt='imagen decorativa')
            .col-md-10.mb-4.mb-md-0  
              p.mb-3  <b><i>Layout</i> del almacenamiento:</b> el objetivo es cumplir con una función de inventario y analiza la colocación de los componentes en un almacén.
              p.mb-3  <b><i>Marketing layout:</i></b> los componentes se ubican de forma tal de facilitar la venta (por ejemplo, supermercados). 

    .row.mb-5
      .col-lg-8
        p.mb-3  Los objetivos del <i>layout</i> de los establecimientos comerciales son mejorar la rapidez para preparar los pedidos, facilitar la exactitud de estos y la ubicación más eficiente del surtido. Si todo lo anterior se logra, se pueden potencializar las ventajas competitivas de la empresa que están incluidas en el plan estratégico, por lo general adquiriendo ciclos de pedido con mayor rapidez y con mejor servicio al cliente.
        p.mb-3  Fases fundamentales en el diseño de un almacén:
        ul.lista-ul(data-aos='flip-left')
          li
            i.fas.fa-check
            p.mb-0  <b>Fase de diseño de la instalación.</b> Se elige el tipo de <i>layout</i> para el establecimiento.
          li
            i.fas.fa-check
            p.mb-0  <b>Fase de diseño de la disposición de los elementos que deben "decorar" el almacén.</b> Se procede a crear el <i>layout</i> en el almacén. La exhibición debe estar lista y los muebles deben tener todo el contenido de artículos, señalética y PLV.

      .col-lg-4    
        figure(data-aos='flip-up')
           img(src='@/assets/curso/t2-i9.png', alt='imagen decorativa')

    h3.titulo-tercero Características del <i>Layout</i>
    p.mb-3  Disminuye la cantidad de movimientos del surtido, además de su manipulación, mermas e incluso robos, lo que hace que el inventario sea exacto. También hace que el establecimiento tenga una buena distribución evitando zonas congestionadas y, por último, facilita la gestión de mantenimiento del surtido (Martínez, 2016).
    
    

    Separador
    br
    br
    .neg-margin-x.bg-curved
      #t_2_4.titulo-segundo
        h2 2.4  La exhibición de productos

      p.mb-5.text-bold  Consiste en la selección, ubicación y exposición de los artículos en el punto de venta, de tal forma que llamen la atención de los clientes motivándolos a una acción de compra. Según sea el tamaño y tipo de establecimiento va a condicionar la distribución y exhibición de los productos.
      .row.mb-5
        .col-lg-4
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t2-i19.png', alt='imagen decorativa')
        .col-lg-8
          p.mb-3  La exposición de los artículos en un almacén o establecimiento se hace mediante el uso de un mobiliario especial que permite mostrar al cliente la mayor cantidad de productos, durante el mayor tiempo posible.
          p.mb-3  Los objetivos de la exhibición son:
          ul.lista-ul(data-aos='flip-left')
            li
              i.fas.fa-check
              p.mb-0  Llamar la atención del cliente para que vea los productos.
            li
              i.fas.fa-check
              p.mb-0  Generar fidelidad hacia el establecimiento.
            li
              i.fas.fa-check
              p.mb-0  Exhibir los productos.
            li
              i.fas.fa-check
              p.mb-0  Ofrecer comodidad al cliente.
            li
              i.fas.fa-check
              p.mb-0  Disponer de pasillos amplios entre los muebles exhibidores.  
            li
              i.fas.fa-check
              p.mb-0  Apoyar las promociones de venta (descuentos, ofertas, 2x1, etc.).
            li
              i.fas.fa-check
              p.mb-0  Recordar al cliente la presencia de un producto que pueda estar necesitando.
            li
              i.fas.fa-check
              p.mb-0  Motivar la acción de compra por impulso.

      p.mb-5  Según sea la disposición del establecimiento, <b>el administrador que es el responsable del lugar y de la exhibición, tiene como objetivo organizarlo según:</b>
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span 1
          p Situación de las secciones.
        li 
          .lista-ol--cuadro__vineta
            span 2
          p La circulación.
        li 
          .lista-ol--cuadro__vineta
            span 3
          p Lugares y puntos de venta fríos y calientes.
        li 
          .lista-ol--cuadro__vineta
            span 4
          p Elementos en el exterior del punto de venta.
        li 
          .lista-ol--cuadro__vineta
            span 5
          p Áreas complementarias: bodegaje, servicios adicionales y entretenimiento.

      p.mb-5  Una vez organizado el interior del establecimiento, determinadas las diferentes secciones y definidos los espacios de los pasillos, se puede considerar el uso de los tipos de exhibición y el <i>layout</i> del surtido.

      h3.titulo-tercero Tipos de exhibición
      .row.mb-5
        .col-lg-7
          p.mb-3  No importa cuál sea el tipo de exhibición que se elija en el establecimiento, deberá motivar en el cliente la acción de compra, por lo que se deben tener en cuenta las actividades programadas en el punto de venta, lo mismo que la temporada y los objetivos de venta. De esta manera, se puede pensar en tener “exhibiciones especiales” y “exhibiciones secundarias o adicionales” (por fuera del lineal y la góndola).
          p.mb-3  Una exhibición debe contar con una excelente exposición de los productos para poder llamar la atención del público que con frecuencia visita el establecimiento. En cada sección se debe emplear un buen <i>merchandising</i> y utilizar los mejores elementos para su producción, lo cual es vital en la rotación del artículo que forme parte de la exhibición.
          p.mb-3  Por lo general, los clientes toman las decisiones de compra directamente en el punto de venta, por lo que una efectiva exhibición de los artículos puede influir positivamente en la toma de decisión.
        
        .col-lg-5
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t2-11.png', alt='imagen decorativa')

      p.mb-5.text-bold  Los siguientes son algunos de los tipos de exhibición más comunes:

      .row.mb-5
        .col-lg-3
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t2-12.png', alt='imagen decorativa')
        .col-lg-9
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 <b>Exhibición vertical:</b> los productos se ubican de manera que cubran todos los niveles del lineal o góndola. Los de tamaños más pequeños van arriba, los medianos van en medio y los de mayor tamaño en los niveles bajos del anaquel.

            li 
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 <b>Exhibición horizontal:</b> el producto se ubica en sus diferentes variedades, a lo largo de la estantería.

            li 
              .lista-ol--cuadro__vineta
                span 3
              p.mb-0 <b>Exhibición por bloques:</b> el producto se ubica en bloques en la estantería.
            li 
              .lista-ol--cuadro__vineta
                span 4
              p.mb-0 <b>Exhibición de doble franja:</b> en la misma estantería se exhiben dos líneas de productos que guardan alguna relación, una debe ser muy fuerte, (productos de gran consumo o básicos), y la otra línea con productos de impulso (dulces, chocolates, chicles, paletas).
              
            li 
              .lista-ol--cuadro__vineta
                span 5
              p.mb-0 <b>Exhibición en <i>check out:</i></b> Productos que se encuentran cerca de las cajas para que el cliente realice una acción de compra por impulso en el momento de hacer la fila para pagar.

            li 
              .lista-ol--cuadro__vineta
                span 6
              p.mb-0 <b>Exhibición especial:</b> tiene un diseño diferente al de un lineal, góndola o estantería. Puede ser un  exhibidor diseñado exclusivamente para el producto, o también puede ser una isla, y por lo general se usa cuando hay una promoción de venta o se está lanzando un nuevo producto.
      .row.mb-5.justify-content-center
        .col-lg-10
          .cajon.color-primario.p-4
            p.mb-0  La cantidad de formas para exhibir los productos en el punto de venta es muy amplia y variada. Lo importante es que son aplicables a cualquier establecimiento comercial, de tal forma que los espacios sean aprovechados al máximo al interior del local. Por esta razón, es vital planear adecuadamente en qué forma se van a exhibir los artículos, cómo se van a distribuir los lineales, las góndolas, los muebles, las vitrinas, el escaparate y demás elementos que le darán forma al establecimiento.
      
      p.mb-5  Exhibiciones adicionales o complementarias:            
      .tarjeta.bg-sliders2.p-5.mb-5.shadow-box
        SlyderA
          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Exhibición emblemática o especial
              p Es un <i>display</i> que busca destacar las características específicas de los productos. Puede ser diseñado de muchas formas.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n1.png', alt='imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Exhibición en islas
              p Es una forma de presentación masiva y solitaria de un artículo. Se ubican fuera del lineal o góndola y no tienen contacto con otro tipo de artículos.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n2.png', alt='imagen decorativa')
          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Exhibición en ganchos
              p Especial para tiendas de ropa, de tal forma que se pueda crear un diseño impactante a la hora de colgar el vestuario de los ganchos. 
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n3.png', alt='imagen decorativa')

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Exhibición en punta de góndola
              p Están ubicados en las esquinas de las góndolas, por lo que tienen un mayor impacto, aumentando la comunicación visual, con accesorios que lo hacen más atractivo como cabezotes, laterales, frontales, cenefas y partes móviles. Ayudan a posicionar una marca.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n4.png', alt='imagen decorativa')

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Exhibición mamut
              p Son de gran tamaño, versátiles y con un excelente contenido escenográfico, cuyo fin es presentar variedad de productos de una marca en el mismo lugar personalizándolo para impactar visualmente al cliente a través de diseños lúdicos.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n5.png', alt='imagen decorativa')
      .spacer
      .row.justify-content-center.mb-5
        .col-lg-10
          .cajon.color-primario.p-4(data-aos='flip-up')
            p.mb-0  Una exhibición debe tener un grupo de características que avalen su funcionalidad y logren que se cumplan los objetivos del establecimiento. Por esta razón, la exhibición debe ser visible y atractiva a los ojos del cliente y, además, debe comunicar, puesto que el <i>merchandising</i> es comunicación visual en el interior del establecimiento.
      
      .row.justify-content-center
        .col-lg-7
          h3.titulo-tercero Características de la exhibición
          p.mb-3  En primer lugar, se recomienda que <b>la exhibición ambiente el punto de venta</b>, lo cual debe venir con una presentación llamativa de los artículos, además de colorida, imponente y al alcance de los clientes, con precios justos y cuando sea posible, con degustaciones que hagan que el consumidor conozca de primera mano un producto.
          p.mb-0  Una exhibición debe reunir las siguientes características: <b>sencilla, visible, atractiva, accesible, comunicativa, rellenable, segura, alegre, limpia, estable y con precio visible </b>(Cruz, 2018).
        .col-lg-5
          figure
            img(src='@/assets/curso/t2-13.png', alt='imagen decorativa')

         


    Separador
    br
    br
    #t_2_5.titulo-segundo
      h2 2.5 Vitrinismo o <i>visual merchandising</i>
    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-3  Son todas las técnicas y estrategias que se emplean en el diseño de un escaparate o vitrina con el fin de conquistar los clientes que transitan en el establecimiento, incitarlos e invitarlos a que realicen la compra de los productos exhibidos. El vitrinismo funciona como comunicador visual y conceptual que funciona en pro de conquistar al consumidor. La vitrina es un lienzo en blanco donde puede formar toda la creatividad para convertirla en una obra de arte (Borja, 2021).
        p.mb-3  Según Joan Costa, la vitrina tiene un tiempo de percepción de 8 segundos para atraer la atención de un cliente. Es por esto por lo que la vitrina se debe trabajar con argumentos comunicacionales, que resalten los artículos, la sencillez y la creatividad. La idea, la composición, el color, las piezas gráficas, la línea y la iluminación deben ir de la mano para que la vitrina sea llamativa, impactante y una experiencia emocional e inolvidable para el cliente (Costa, 2007).
      .col-lg-5
        figure
          img(src='@/assets/curso/t2-14.png', alt='imagen decorativa')

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.custom-cardBlock.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2-cb1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-4  Elementos que componen una vitrina:
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  Creatividad
              li
                i.fas.fa-check
                p.mb-0  Sicología y percepción
              li
                i.fas.fa-check
                p.mb-0  Composición de los elementos
              li
                i.fas.fa-check
                p.mb-0  Color
              li
                i.fas.fa-check
                p.mb-0  Iluminación         


    h3.titulo-tercero Tipos de vitrina o escaparate
    TabsA.color-primario.mb-5
      .tarjeta.color-acento-contenido.p-4(titulo="Vitrina exterior")
        .row
          .col-lg-6
            h4 Vitrina exterior
            p.mb-3  Por lo general se encuentra a los lados del ingreso a la tienda, especialmente cuando esta está ubicada en un centro comercial.
            p.mb-3  La idea es la de llamar la atención del cliente y ofrecerle una breve información, básica e imaginativa, provocándole curiosidad por conocer más. 
          .col-lg-6
            figure(data-aos="slide-right")
              img(src='@/assets/curso/t2-p1.png', alt='imagen decorativa')     
    
      .tarjeta.color-acento-contenido.p-4(titulo="Vitrina cerrada")
        .row
          .col-lg-6
            h4 Vitrina cerrada
            p.mb-3  Cuando el diseño de la vitrina no permite ver hacia adentro del establecimiento.
          .col-lg-6
            figure(data-aos="slide-right")
              img(src='@/assets/curso/t2-p2.png', alt='imagen decorativa')   
      .tarjeta.color-acento-contenido.p-4(titulo="Vitrina abierta")
        .row
          .col-lg-6
            h4 Vitrina abierta
            p.mb-3  Cuando el diseño de la vitrina permite observar el interior de la tienda.
          .col-lg-6
            figure(data-aos="slide-right")
              img(src='@/assets/curso/t2-p3.png', alt='imagen decorativa')   
      .tarjeta.color-acento-contenido.p-4(titulo="Vitrina interior")
        .row
          .col-lg-6
            h4 Vitrina interior
            p.mb-3  Cuando el producto se exhibe dentro de la tienda en una vitrina que está ubicada en la zona caliente.
          .col-lg-6
            figure(data-aos="slide-right")
              img(src='@/assets/curso/t2-p4.png', alt='imagen decorativa')   

    p.mb-5  En cuanto a las vitrinas de tipo exterior, se debe tener tres elementos que resultan vitales:
    .row.mb-5
      .col-lg-4
        .tarjeta.text-center.h-100.c1.p-4(data-aos="flip-right")
          figure.mb-3
            img.nW.centered(src='@/assets/curso/ic-card1.svg', alt='imagen decorativa')  
          h3  El montaje
          p.mb-3  Una idea decorativa con productos integrados, que permiten al transeúnte entender rápidamente el mensaje de la tienda.
      .col-lg-4
        .tarjeta.text-center.h-100.c1.p-4(data-aos="flip-right")
          figure.mb-3
            img.nW.centered(src='@/assets/curso/ic-card2.svg', alt='imagen decorativa')  
          h3  El tema
          p.mb-3  Mensaje que se incorpora al montaje para recordar una fecha o actividad.
      .col-lg-4
        .tarjeta.text-center.h-100.c1.p-4(data-aos="flip-right")
          figure.mb-3
            img.nW.centered(src='@/assets/curso/ic-card3.svg', alt='imagen decorativa')  
          h3  El foco
          p.mb-3  Centro óptico seleccionado para llamar la atención.
    

    Separador
    br
    br
    #t_2_6.titulo-segundo
      h2 2.6  <i>Merchandising</i>
   
    .row.mb-5
      .col-lg-7
        p.mb-3  Es el conjunto de estrategias y tácticas efectuadas dentro del establecimiento y que tiene como fin buscar el artículo correcto, en la cantidad necesaria, con el precio justo, en el tiempo adecuado, con una presentación visual impactante y dentro de una exhibición sobresaliente. Se refiere a todos los esfuerzos destinados a que el cliente, no solo conozca el producto, sino también, que tome una acción de compra.
        p.mb-3  El término <i>merchandising</i>, como se conoce en la actualidad, se incrementó con la aparición del autoservicio en Estados Unidos en la década de 1930. Época en la que los establecimientos se dieron cuenta del impacto e influencia que tenían las exhibiciones en el consumidor. Los artículos que estaban exhibidos tenían una mejor respuesta comercial dando comienzo a una serie de investigaciones en el tema, que terminaron por profesionalizar el área. Y fue así como, con el paso de los años, los supermercados comenzaron a usar el <i>merchadising</i> para destacar y promocionar toda la mercancía en sus lugares de venta (Borja, 2021).
      .col-lg-5
        figure.mb-3
          img.nW(src='@/assets/curso/t2-15.png', alt='imagen decorativa')  



    h3.titulo-tercero Tipos de <i>merchandising</i>
    p.mb-5 Existen diferentes opciones para destacar los productos en el punto de venta, que dan mayores posibilidades para mejorar la exhibición de las marcas y sus artículos. Y para lograrlos, hay varios tipos de <i>merchandising</i>: según la naturaleza, según el tipo de cliente y según el ciclo de vida del producto, las cuales se verán a continuación:

    h4.titulo-cuarto
      i.fas.fa-angle-double-right 
      | &nbsp; Según la naturaleza
    .row.mb-5.justify-content-center
      .col-xs-8.col-sm-8.col-md-6.col-lg-5.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/ch-1.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 <i>Merchandising</i> de presentación
              p.small Se presentan los productos de modo que sea fácil de verlos por parte del cliente y además rentable para el establecimiento.

      .col-xs-8.col-sm-8.col-md-6.col-lg-5.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/ch-2.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 <i>Merchandising</i> de gestión
              p.small Gestiona el espacio o lugar de venta para obtener el mayor rendimiento en cada lineal o góndola.

      .col-xs-8.col-sm-8.col-md-7.col-lg-5.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/ch-3.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 <i>Merchandising</i> de seducción
              p.small Da un aspecto seductor, no solo al lineal, sino a la tienda en general. También se conoce como “tienda espectáculo” por el diseño especial que se crea para el impacto visual al cliente.


    h4.titulo-cuarto
      i.fas.fa-angle-double-right 
      | &nbsp; Según el tipo de cliente
    .row.mb-5.justify-content-center
      .col-xs-8.col-sm-8.col-md-7.col-lg-5.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/ch-4.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Para el cliente <i>shopper</i>
              p.small El cliente que requiere de un grupo de argumentos para visitar un establecimiento en lugar de otro.

      .col-xs-8.col-sm-8.col-md-7.col-lg-5.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/ch-5.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Para el cliente <i>buyer</i>
              p.small Se refiere al cliente que ya se encuentra dentro del establecimiento y que se basa en el precio, la calidad del producto, las promociones de venta, la gama de productos y la atención recibida para tomar una decisión de compra.    


    h4.titulo-cuarto
      i.fas.fa-angle-double-right 
      | &nbsp; Según el ciclo de vida del producto
    .row.mb-5.justify-content-center
      .col-xs-8.col-sm-8.col-md-6.col-lg-5.col-xl-3
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/ch-6.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Producto de lanzamiento
              p.small Cuando sale al mercado una nueva referencia, o un nuevo bien o servicio y se le debe definir el emplazamiento, ubicación y lineal donde será exhibido.
      .col-xs-8.col-sm-8.col-md-6.col-lg-5.col-xl-3
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/ch-7.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Producto de ataque
              p.small Cuando el producto crece rápidamente, se posiciona y es el mejor frente a los demás productos de la familia. En ese momento se puede darle un espacio más amplio en el lineal.
      .col-xs-8.col-sm-8.col-md-6.col-lg-5.col-xl-3
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/ch-8.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Producto de mantenimiento
              p.small Cuando el producto ya llegó a su madurez, está posicionado y tiene un buen lugar y espacio en el lineal. En este momento se debe tratar de que esta situación permanezca la mayor cantidad de tiempo posible.

      .col-xs-8.col-sm-8.col-md-6.col-lg-5.col-xl-3
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/ch-9.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Producto de defensa
              p.small Cuando el producto se encuentra en su fase de declive y es cuando el espacio puede disminuir o incluso desaparecer del lineal. El fabricante debe decidir si lo retira del mercado o si le inyecta un cambio que sea positivo para el cliente.

    .row.mb-5.justify-content-center
      .col-lg-8
        .h3.titulo-quinto Ciclo de vida del producto
        //--figcaption.customCaption.mb-2  Figura  Ciclo de vida del producto
        figure(data-aos="flip-up")
          img(src='@/assets/curso/t2-g1.svg', alt='imagen decorativa')  

    h3.titulo-tercero Funciones del <i>merchandising</i>   
    .row.mb-5
      .col-lg-8
        p.mb-3  La labor de crear <i>merchandising</i> es ubicar, apoyar, monitorear y actualizar los productos, además de tener la exhibición impecable y apoyar los productos con publicidad que los acompañe (Borja, 2021). 
        p.mb-4  Las principales funciones del <i>merchandising</i> son:
        ul.lista-ul
          li
            i.fas.fa-check  
            p.mb-0  Exposición lo más óptima posible de los artículos.
          li
            i.fas.fa-check  
            p.mb-0  Garantía de que los artículos se encuentran disponibles para el cliente. 
          li
            i.fas.fa-check  
            p.mb-0  Rectitud en el suministro de productos de la empresa comercial. 
          li
            i.fas.fa-check  
            p.mb-0  Planificación del espacio de exhibición.
          li
            i.fas.fa-check  
            p.mb-0  Impacto visual del producto destacándolo de los demás grupos de productos similares de la competencia. 
          li
            i.fas.fa-check  
            p.mb-0  Uso estratégico del espacio del lineal, góndola o estantería.

      .col-lg-4
        figure(data-aos="flip-up")
          img(src='@/assets/curso/t2-i16.png', alt='imagen decorativa')  


    Separador
    br
    br
    #t_2_6.titulo-segundo
      h2 2.7  Señalización comercial

    p.mb-5 Es una herramienta muy importante que ayuda a mejorar la información dentro del establecimiento, de tal forma que el visitante encuentre fácil el producto que necesita. Por lo tanto, ayuda a la circulación y la orientación dentro del recinto. Una buena implementación de un proyecto de señalización debe tener en cuenta los siguientes dos aspectos (Costa, 2007):

    .row.mb-5
      .col-lg-4
        figure(data-aos="flip-up")
          img(src='@/assets/curso/t2-i17.png', alt='imagen decorativa')  
      .col-lg-8
        TabsC.color-primario.mb-5.customTabs
          .py-3.py-md-4(titulo="Localización previa del sitio")
            .row.justify-content-center.align-items-center        
              .col-md-12.mb-4.mb-md-0
                h4 Localización previa del sitio
                p Diagnósticos del marco legal determinado y derroteros en el reconocimiento del punto de venta. Ayuda para comprender cuáles son los condicionantes que se deben tener en cuenta a la hora de diseñar la señalética. Por otro lado, se debe tener en cuenta qué tipo de signos se van a usar, para que el creativo entre en acción y diseñe las diferentes piezas, donde debe tener en cuenta el espacio disponible, tamaño de las piezas, colores, texturas, materiales. El diseño que desarrolle el creativo debe ser coherente a la identidad y personalidad de la marca, y debe ir de acuerdo con las normativas del sitio. Una vez el diseño esté listo y aprobado se pasa a la etapa de producción e instalación.

          .py-3.py-md-4(titulo="Señalización del establecimiento comercial")
            .row.justify-content-center.align-items-center        
              .col-md-12.mb-4.mb-md-0
                h4 Señalización del establecimiento comercial
                p.mb-3  El diseño de la señalización debe tener armonía con la arquitectura del establecimiento. El trabajo interdisciplinario, en este momento es fundamental, porque se debe tener en cuenta la opinión de arquitectos, diseñadores industriales y técnicos especialistas en el tema. Con esto se asegura un óptimo resultado en el cumplimiento de los objetivos de señalización en el punto de venta.
                p.mb-3  La finalidad de la señalización comercial es la de hacer un llamado de atención al público presente sobre algunas situaciones de riesgo de una manera simple, rápida y de fácil comprensión. Cuando la señalización de seguridad falta en el interior de un establecimiento incrementa las situaciones de riesgo, porque priva a empleados y visitantes de una elemental información básica que puede alertar sobre el riesgo y la forma en que se puede evitar (Costa, 2007).
    
    h3.titulo-tercero Tipos de señalización comercial
    .row.mb-5
      .col-lg-8
        p.mb-5  Para que las señales sean lo más efectivas posible, deben cumplir ciertas consideraciones que tienen que ver con la ubicación en el almacén, la forma, el color y el diseño. <b>Además, se debe tener en cuenta:</b>
        ul.lista-ul(data-aos="slide-up")
          li
            i.fas.fa-check
            p <b>El material</b>, que resista los choques.
          li
            i.fas.fa-check
            p <b>El tamaño</b>, que sea el adecuado de tal forma que garantice su visibilidad y comprensión.
          li
            i.fas.fa-check
            p <b>La ubicación</b>, que esté en una adecuada altura y en una apropiada posición. Se debe tener en cuenta los posibles obstáculos que interfieran su visibilidad y el ángulo con respecto a la visual del cliente.            
      
      .col-lg-4
        figure(data-aos="flip-up")
          img(src='@/assets/curso/t2-i18.png', alt='imagen decorativa')  

    p.mb-5  En Colombia, actualmente existen leyes y resoluciones que tienen que ver con las normas en señalización, que tienen como fin asegurar la integridad y salud del ser humano a nivel laboral y en lugares públicos, como se cita a continuación.
    .row.mb-5.justify-content-center
      .col-lg-3
        figure(data-aos="flip-up")
          img(src='@/assets/curso/t2-i19.png', alt='imagen decorativa')  
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-primario")
          .row.justify-content-center(titulo="Ley 9 de 1979: Título III. (Salud Ocupacional)")
            .col-md-11.mb-4.mb-md-0
              p Donde se estipulan normas para preservar, conservar y mejorar la salud de los individuos en sus ocupaciones.
          .row.justify-content-center(titulo="Resolución 2400 de mayo 22 de 1979")
            .col-md-11.mb-4.mb-md-0
              p Por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo.              
          .row.justify-content-center(titulo="Título V. Artículo 202. Código de Colores")
            .col-md-11.mb-4.mb-md-0
              p “En todos los establecimientos de trabajo en donde se lleven a cabo operaciones y/o procesos que integren aparatos, máquinas, equipos, ductos, tuberías, etc. Y demás instalaciones locativas necesarias para su funcionamiento que utilizarán los colores básicos recomendados por la <i>AMERICAN STANDARS ASSOCIATION (ASA)</i> y otros colores específicos, para identificar los elementos, materiales, etc., y demás elementos específicos que determinen o prevengan riesgos que puedan causar accidentes o enfermedades profesionales”.

          .row.justify-content-center(titulo="Decreto 1443 de 2014")
            .col-md-11.mb-4.mb-md-0
              p Por medio del cual se dictan disposiciones para la implementación del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).
          .row.justify-content-center(titulo="Decreto 1072 de 2015, especialmente la parte referida al SG-SST")
            .col-md-11.mb-4.mb-md-0
              p Está especialmente enfocada a OSHAS 18001, indicando cómo definir unos parámetros para lograr la mejora continua.

    p.mb-5  Además, existe una normativa que establece los parámetros que se deben cumplir en el diseño de las señales de seguridad. Se trata de la Norma Técnica Colombiana NTC 1461, que tiene como fin instaurar los colores y señales de seguridad que deben ser usados para prevenir accidentes y riesgos contra la salud e integridad de las personas, además de situaciones de emergencia. Esta norma se apoya en las normas internacionales ISO 3864-1 e ISO 16069:2004, que establecen varios criterios para el diseño de estas. A continuación, se exponen algunos de esos criterios:
    .tarjeta.bg-sliders.p-5.mb-5
      SlyderA
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Prohibición
            p Debe ser redonda, de fondo blanco y con el pictograma centrado de color negro. Debe tener una línea diagonal descendente de izquierda a derecha de color rojo que atraviese el pictograma. El borde debe tener el mismo grosor de la línea diagonal y también de color rojo.
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t2-b1.svg', alt='pareja caminando en un supermecado')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Advertencia
            p Debe ser de forma triangular de fondo amarillo y con el pictograma centrado de color negro. El borde del triángulo también debe ser negro. 
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t2-b2.svg', alt='pareja caminando en un supermecado')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Obligación
            p Debe ser de forma redonda de color azul con el pictograma centrado de color blanco. Por lo general, tiene un borde delgado de color azul seguido de otro borde más grueso de color blanco.
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t2-b3.svg', alt='pareja caminando en un supermecado')
              
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Salvamento o de socorro
            p Debe tener forma rectangular o cuadrada de fondo verde y con el pictograma centrado de color blanco. Puede tener un borde delgado de color verde seguido de otro blanco más grueso.
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t2-b4.svg', alt='imagen decorativa')

        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Relativas al material y equipo de lucha contra incendios 
            p Debe ser de forma rectangular o cuadrada de fondo rojo y con el pictograma centrado de color blanco.
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t2-b5.svg', alt='imagen decorativa')
    .spacer
    .row.mb-5.justify-content-center
      .col-lg-6
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t2-infog1.svg', alt='señaletica por colores')

          .tarjeta.color-acento-botones.p-3.shadow-box(x="2%" y="50%")
            p Condición de seguridad, su uso es principalmente para señales de ruta de evacuación y emergencia.
            p <b>Contraste:</b> Verde - Blanco <br> <b>Forma</b>: Rectangular<br> El color verde cubrirá por lo menos el 50% del área de la señal.

          .tarjeta.color-acento-botones.p-3.shadow-box(x="25%" y="12%")
            p Prohibición, prevención de fuego, equipo contra incendios, paradas de emergencia.
            p <b>Contraste:</b> Rojo - Blanco <br> <b>Forma</b>: Circular - Rectangular<br> El color rojo, cubrirá por lo menos el 35% del área de la señal.

          .tarjeta.color-acento-botones.p-3.shadow-box(x="75%" y="12%")
            p Acción del mando, obligación a usar equipo de protección. Es de seguridad cuando se usa en forma circular.
            p <b>Contraste:</b> Azul - Blanco <br> <b>Forma</b>: Circular <br> El color azul, cubrirá mínimo el 50% del área de la señal.

          .tarjeta.color-acento-botones.p-3.shadow-box(x="98%" y="50%")
            p Se usa para advertir precaución y riesgo de peligro.
            p <b>Contraste:</b> Amarillo - Negro <br> <b>Forma</b>: Triangular <br> El color amarillo, cubrirá mínimo el 50% del área de la señal.

    p.mb-5.text-bold  Por otro lado, existe la señalética propia de cada almacén, empresa o establecimiento.
    .row.mb-5.justify-content-center
      .col-lg-7
        h4.titulo-cuarto
          i.fas.fa-angle-double-right 
          | &nbsp; Señalética corporativa
        p.mb-3  Es la propia de cada empresa y sirve como guía a los presentes en un espacio público. Van más allá de solo cumplir con la función de orientar, porque, además, sirven para reforzar la identidad de la marca y ayuda a generar recordación en los clientes. En cuanto al diseño puede ser dispar porque depende del establecimiento, su tamaño y sus condiciones. Puede haber señales&nbsp;colgadas o pegadas en la pared, pero lo importante es que ejecute una labor comunicativa visual completa y eficaz. La señalética corporativa sirve para orientar a las personas para que se dirijan al lugar que necesiten, como, por ejemplo, una dependencia, los baños públicos, las rutas de evacuación, los botes de basura, la salida de emergencia, entre muchas otras (Costa, 2007).
      .col-lg-4
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t2-i20.png', alt='señaletica por colores')




    Separador
    br
    br
    #t_2_8.titulo-segundo
      h2 2.8  Dispositivos de seguridad

    .row.mb-5
      .col-lg-7
        p.mb-5  Son unos sistemas que usan los establecimientos, principalmente a la hora de exhibir los artículos, y sirven para avisar al personal en el preciso momento en el que pueda estar existiendo un robo con el fin de evitar el hurto del artículo, interponiendo medios físicos que tienen como función dificultar la acción de sustracción por parte del ladrón (Vidal, Mas y González, 2011).
        .cajon.color-primario.p-4
          p.mb-0  Un establecimiento puede dejar de tener rentabilidad a causa del hurto de artículos dentro del punto de venta. Es por esta razón que para la prevención de estos acontecimientos indeseados se aconseja lo siguiente:
      .col-lg-5
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t2-i21.png', alt='señaletica por colores')

    TabsA.color-primario.mb-5
      .tarjeta.color-acento-contenido.p-4(titulo="Organizar")
        .row
          .col-lg-6
            h4 Organizar el local para evitar los robos 
            p.mb-3  Tener ordenado el establecimiento es vital para evitar robos en el punto de venta, porque permite tener una visión clara de todo el espacio. Además de poder ver rápidamente si algo falta, puesto que el espacio donde se encuentra el artículo estaría vacío. Se debe conocer con lujo de detalles el punto de venta. 
            p.mb-3  <b>¿Dónde están las cajas situadas? ¿Se puede ver claramente la gente ingresando y saliendo del establecimiento?</b> Es importante tener estudiado y analizado el espacio para prevenir posibles robos. Finalmente, para evitar los puntos ciegos, se pueden instalar espejos y seleccionar el tipo de mobiliario adecuado que no interfiera con la visualización del punto de venta.  
          .col-lg-6
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn1.png', alt='imagen decorativa')     
    
      .tarjeta.color-acento-contenido.p-4(titulo="Aportar")
        .row
          .col-lg-6
            h4 Aportar formación a los empleados
            p.mb-3  Además de tener el punto de venta vigilado, se recomienda que los empleados se capaciten para prevenir los robos y saber cómo actuar en caso de un evento de esta magnitud.
            p.mb-3  Conociendo las técnicas más productivas de vigilancia, los protocolos de actuación en caso de hurto y los más sospechosos comportamientos por parte de los clientes, ayudan de una forma más efectiva a mantener el establecimiento seguro.  
          .col-lg-6
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn2.png', alt='imagen decorativa')     
      .tarjeta.color-acento-contenido.p-4(titulo="Prestar atención")
        .row
          .col-lg-6
            h4 Prestar atención a los puntos más indefensos y artículos atractivos
            p.mb-3  Se refiere a aquellos espacios como son los probadores o las salidas de emergencia. Son los lugares más comunes usados por los ladrones para poderse escapar con los productos robados. 
            p.mb-3  Se recomienda transitar por el local, lo cual va a permitir ver con claridad a los visitantes que entran y salen del negocio. De esta forma se pueden ver y analizar las acciones de los ladrones y reaccionar pronto en caso de que exista un robo. 
          .col-lg-6
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn3.png', alt='imagen decorativa')         

      .tarjeta.color-acento-contenido.p-4(titulo="Contar")
        .row
          .col-lg-6
            h4 Contar con un detector de metales 
            p.mb-3  El uso de bolsas envueltas con aluminio evita los sistemas de seguridad, por lo que es una técnica muy usada por parte de los ladrones. 
            p.mb-3  Pero, para ello, existen unos dispositivos que permiten detectar el ingreso de estos productos al establecimiento, siendo reconocidos fácilmente como ladrones, desde antes de ingresar al punto de venta.
          .col-lg-6
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn4.png', alt='imagen decorativa')        
      .tarjeta.color-acento-contenido.p-4(titulo="Saber identificar")
        .row
          .col-lg-6
            h4 Saber identificar los hábitos de robo más comunes
            p.mb-3  Los ladrones trabajan en equipo, porque así suelen distraer la atención del personal. Comportamientos extraños como, por ejemplo, observar detalladamente un producto o permanecer mucho tiempo al frente de un producto en especial, son actitudes que se deben identificar. 
            p.mb-3  Entre otros hábitos se destacan el uso de ropa amplia, como chaquetas o pantalones con varios bolsillos o tulas grandes.
          .col-lg-6
            figure.slideInLeft
              img(src='@/assets/curso/t3-nn5.png', alt='imagen decorativa')     

      .tarjeta.color-acento-contenido.p-4(titulo="Implantar")
        .row
          .col-lg-6
            h4 Implantar sistemas de seguridad 
            p.mb-3  Es vital proteger el punto de venta a través de diferentes sistemas que incrementen la seguridad del establecimiento. 
          .col-lg-6
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn6.png', alt='imagen decorativa')     

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0  Para evitar robos de artículos en el punto de venta se deben tener en cuenta los siguientes consejos, de esta forma, el negocio permanecerá seguro.
      
    h3.titulo-tercero Sistemas antihurto para tiendas de ropa
    .row.mb-5
      .col-lg-8
        p.mb-3  Para no tener gastos a causa de los robos se recomienda invertir en un sistema de seguridad instalado en el punto de venta. Son muy útiles porque registran a los ladrones en cuanto tengan la mínima oportunidad de realizar un robo. <b>Con estos sistemas se pueden exhibir los productos en lugares asequibles al cliente, sin necesidad de ubicarlos detrás de un exhibidor o en una vitrina cerrada y bajo llave.</b> Así, los clientes podrán ver los artículos sin problema alguno y, por ende, se puede evitar la molestia al empleado de estar sacando constantemente los artículos de la vitrina.
        p.mb-3  Para proteger los productos, los establecimientos pueden disponer de diferentes sistemas o equipos de seguridad, como, por ejemplo:
      .col-lg-4 
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t2-i22.png', alt='imagen decorativa')            
    .tarjeta.bg-sliders2.p-5.mb-5.shadow-box
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Alarmas
            p Sistema que no evita el hurto, pero sí advierte de su presencia a quien entra al punto de venta. Se conecta a una central receptora, en la que hay alguien pendiente de lo que sucede en el establecimiento. Su más importante función es disuadir cualquier intento de hurto. Si se quiere, pueden tener un diseño discreto y se pueden camuflar de forma estética en el entorno en el que se instalen.
          .col-md-6
            figure
              img(src='@/assets/curso/t2-mm1.png', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Vigilantes de seguridad
            p Personal dedicado a la vigilancia y seguridad en los establecimientos. Tienen funciones como, evitar cualquier acto delictivo en cualquier momento, denunciar ante infracciones administrativas y proteger los artículos y el negocio como tal.
          .col-md-6
            figure
              img(src='@/assets/curso/t2-mm2.png', alt='imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Vitrinas cerradas con llave
            p Escaparates en los que se exhiben los productos ofertados por el establecimiento. Se distinguen por tener una distinguida presentación y por exhibir productos de alto valor, dándoles una mejor protección. Ayudan a la conservación de los artículos porque los aíslan del polvo, la humedad, el aire y también de los ladrones. 
          .col-md-6
            figure
              img(src='@/assets/curso/t2-mm3.png', alt='imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Etiquetas antihurto adhesivas
            p Son uno de los sistemas antihurto más usados, porque cuenta con sensores de alarma que activan los arcos antihurto cuando se produce un intento de robo. En el momento de la compra del artículo se desactivan o se quitan. Algunos tipos de productos que pueden tener este sistema son joyas, gafas, ropa, perfumes, cosméticos, bebidas, pequeños electrodomésticos, cámaras de video y fotos, videojuegos y consolas, celulares, computadores, entre muchos otros.
          .col-md-6
            figure
              img(src='@/assets/curso/t2-mm4.png', alt='imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 CCTV (Circuitos Cerrados de Cámara de Televisión)
            p Sistema que usa tecnología de videovigilancia que se emplea para supervisar diversas zonas del establecimiento. Cubren un rango amplio y con muy buen detalle visual. Presenta imágenes de alta definición e identifica de forma efectiva a los ladrones. Por otro lado, tiene visión nocturna y detector de movimiento.
          .col-md-6
            figure
              img(src='@/assets/curso/t2-mm5.png', alt='imagen decorativa')
    .spacer
    .row.mb-5.justify-content-center 
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0  Tener estos sistemas de seguridad le permitirá al establecimiento tener mejores garantías de obtener la rentabilidad esperada, porque reducen notablemente los intentos de robo de mercancía (Vidal, Mas y González, 2011).





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
