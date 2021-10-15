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
                

    Separador
    br
    br
    #t_2_2.titulo-segundo
      h2 2.2  Planograma o planimetría




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
