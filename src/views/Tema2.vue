<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Surtido

    #t_2_1.titulo-segundo
      h2 2.1  Estructura del surtido




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
