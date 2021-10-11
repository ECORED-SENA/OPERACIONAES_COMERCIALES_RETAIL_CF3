<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Muebles en el punto de venta

    #t_3_1.titulo-segundo
      h2 3.1  Tipos de muebles



    Separador
    br
    br
    #t_3_2.titulo-segundo
      h2 3.2  Rotación de las categorías




    Separador
    br
    br
    #t_3_2.titulo-segundo
      h2 3.3  Codificación de productos




    Separador
    br
    br
    #t_3_4.titulo-segundo
      h2 3.4  El precio




    Separador
    br
    br
    #t_3_5.titulo-segundo
      h2 3.5 Activación de marca



</template>

<script>
export default {
  name: 'Tema3',
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
