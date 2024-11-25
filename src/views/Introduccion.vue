<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(
      :titulo="'Unidad 2. Capacidad jurídica y personalidad'"
      :subTitulo="'INTRODUCCIÓN'"
    )
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p(data-aos="fade-right") En el derecho, la capacidad jurídica, la personalidad y el estado civil, constituyen pilares del Derecho Civil que determinan quiénes pueden ser sujetos de derechos y obligaciones, y cómo se relacionan con el sistema legal. Estos conceptos son esenciales para comprender el rol del individuo en la estructura jurídica de la sociedad, dado que regulan tanto la aptitud para adquirir derechos, como la capacidad de ejercerlos.

      .row.mb-5
        .col-lg-7
          p(data-aos="fade-right") La personalidad jurídica hace referencia a la aptitud que tienen tanto las personas físicas (seres humanos) como las personas jurídicas (entidades como asociaciones, empresas, etc.), para ser reconocidas como sujetos de derecho, es decir, para ser titulares de derechos y obligaciones. Por su parte, la capacidad jurídica y la capacidad de obrar hacen referencia a la facultad de una persona para realizar actos jurídicos por sí misma. La capacidad jurídica es inherente a todo ser humano, mientras que la capacidad de obrar, puede estar sujeta a limitaciones dependiendo de circunstancias como: la edad, el estado mental o la situación legal de la persona. Y, finalmente, el Estado Civil es la condición jurídica de una persona en relación con su familia.    
          p(data-aos="fade-right") Para el desarrollo de esta unidad, se hará énfasis en la importancia tanto teórica, como en la vida cotidiana, de estos tres temas, puesto que determinan las decisiones que las personas pueden tomar, los contratos que pueden firmar, los derechos que tienen en el marco de sus vínculos con otras, y las obligaciones con esos vínculos y otras relacionadas a su capacidad de obrar. Dicho en palabras más sencillas, la capacidad jurídica, de obrar y el Estado Civil, determinan el rol que desempeña cada persona en el sistema jurídico y, con ello, los derechos y obligaciones que tiene. 
        .col-lg-5
          figure
            img(src="@/assets/curso/intro/1.png", data-aos="zoom-in").mt-4.mt-lg-0


      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/intro/2.png", data-aos="zoom-in").mt-4.mt-lg-0
        .col-lg-7
          p(data-aos="fade-right") Al finalizar esta unidad del curso, el estudiante estará en capacidad de:
          ol.lista-ol--cuadro(data-aos="fade-up")
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Definir los conceptos de capacidad jurídica, personalidad jurídica y estado civil.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Describir las implicaciones legales de la capacidad jurídica y el estado civil, en el Derecho Civil.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Distinguir entre capacidad jurídica y capacidad de obrar.


      .bg-color-1(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Es entonces, de esta manera, que la unidad Capacidad jurídica y la personalidad, proporcionará a los estudiantes una comprensión integral de conceptos esenciales para la estructura del derecho moderno. A través del análisis de la personalidad jurídica, la capacidad de obrar y el estado civil, los estudiantes estarán en condiciones de aplicar estos conocimientos a situaciones prácticas y reales, reconociendo la adquisición de derechos, las obligaciones de personas naturales y jurídicas, y los vínculos familiares que los sujetos establecen con otros.
          .col-lg-auto
            figure
              img(src='@/assets/curso/intro/3.png', alt='')
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
