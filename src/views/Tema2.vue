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
        p.mb-3.text-bold(data-aos="slide-up")  Se refiere a los niveles, los cuales se dividen por departamentos, secciones, categorías, familias, subfamilias, artículos y referencias. Por ejemplo, la familia de los licores con productos de vinos comunes, vinos selectos, whisky, ron, aguardiente, brandy, etc.
        p.mb-3(data-aos="slide-up")  La cantidad de referencias que pone en venta un establecimiento está condicionada por el tamaño del local. Evidentemente, los establecimientos que posean más tamaño tendrán la posibilidad de poner en venta una mayor cantidad de referencias. 
        p.mb-3(data-aos="slide-up")  Los supermercados, que suelen tener más o menos entre 1.000 m² y 2,500 m², pueden poner en venta aproximadamente 5.300 referencias, y los autoservicios, que son más pequeños en tamaño, máximo 2.900 referencias. Otras variables que influyen en la cantidad de referencias que trabaja un local comercial, son los hábitos de compra del consumidor, la imagen que tenga el establecimiento y, por último, su política comercial.
        p.mb-3(data-aos="slide-up")  La clasificación o estructura del surtido radica en organizar este grupo de referencias en niveles. Tiene un doble propósito: el primero es diferenciar los niveles y el segundo es identificar cuáles niveles poseen mayor o menor rango. En cuanto a la gestión por categorías, la clasificación de referencias se puede distinguir comenzando en la totalidad del surtido y finalizando en las referencias de los artículos, y se puede ver en la siguiente figura.
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
              p A la hora de hacer una compra de un artículo común (pan, huevos, leche, mantequilla), no se suele comparar, por lo que no sería necesario poseer un surtido muy profundo en el establecimiento. En cambio, cuando se compran productos poco comunes, o no tan frecuentes, como por ejemplo electrodomésticos, textiles y muebles, sí se suele hacer una comparación, y es cuando el cliente requiere de analizar muy bien las diferentes posibilidades de precio, características, calidad, beneficios, etc. 

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
            p Permite una revisión más estricta del inventario al ordenar las estanterías y los facings (frentes) basándose en la rotación, lo que da como resultado una reducción de las roturas del stock (espacios vacíos).
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




    Separador
    br
    br
    #t_2_4.titulo-segundo
      h2 2.4  La exhibición de productos




    Separador
    br
    br
    #t_2_5.titulo-segundo
      h2 2.5 Vitrinismo o <i>visual merchandising</i>





    Separador
    br
    br
    #t_2_6.titulo-segundo
      h2 2.6  <i>Merchandising</i>





    Separador
    br
    br
    #t_2_6.titulo-segundo
      h2 2.7  Señalización comercial




    Separador
    br
    br
    #t_2_8.titulo-segundo
      h2 2.8  Dispositivos de seguridad








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
