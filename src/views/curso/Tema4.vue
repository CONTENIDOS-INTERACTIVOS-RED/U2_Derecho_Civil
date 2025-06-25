<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(
      :titulo="'Unidad 2. Capacidad jurídica y personalidad'"
      :subTitulo="'SÍNTESIS'"
    )
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 La Unidad 2: Capacidad jurídica y personalidad, proporciona un análisis detallado de los conceptos de capacidad jurídica, personalidad jurídica y estado civil, elementos esenciales en el Derecho Civil que determinan quiénes pueden ser sujetos de derechos y obligaciones, y cómo interactúan con el sistema legal. Esta unidad permite a los estudiantes comprender la importancia de la capacidad de obrar, distinguiendo entre la aptitud general para tener derechos (capacidad jurídica) y la facultad de ejercerlos (capacidad de obrar), así como los efectos del estado civil en la vida personal y social. Los estudiantes estarán preparados para aplicar estos conocimientos a situaciones prácticas, comprendiendo sus implicaciones legales y reconociendo las limitaciones y protecciones que el sistema jurídico otorga en función de estas capacidades.


      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis/sintesis.png', alt='')
  </template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
