<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(
    :titulo="'Unidad 2. Capacidad jurídica y personalidad'"
    :subTitulo="'2. Capacidad jurídica y capacidad de obrar'"
  )
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    p(data-aos="fade-right").mb-5 Antes de hacer la distinción entre capacidad jurídica y capacidad de obrar, ambos conceptos se agrupan bajo la idea de la capacidad. Medina (2014), señala que la capacidad es una atribución socio-jurídica que habilita al sujeto para tener derechos y contraer obligaciones. Estos conceptos son esenciales para comprender la estructura del ordenamiento jurídico y las interacciones entre los individuos y la ley. La capacidad jurídica se refiere al reconocimiento de la personalidad jurídica de una persona, mientras que la capacidad de obrar se refiere a la habilidad de una persona para actuar y tomar decisiones en el ámbito legal. 

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Diferencias entre la capacidad jurídica y la capacidad de obrar

    p(data-aos="fade-right") La capacidad jurídica es la aptitud de una persona para ser sujeto de derechos y obligaciones en el ámbito jurídico; en ese sentido, está estrechamente ligada al reconocimiento de la personalidad jurídica. Se considera que todos los seres humanos poseen capacidad jurídica desde el momento de su nacimiento, lo que implica que tienen la facultad de adquirir derechos y contraer obligaciones.

    .row.mb-5.align-items-center
      .col-lg-8
        ol.lista-ol--cuadro(data-aos="fade-up")
          li 
            .lista-ol--cuadro__vineta
              span 1
            | La capacidad jurídica, así como la personalidad jurídica, se adquiere al nacer y, en el caso de las personas jurídicas, con su creación. Sin embargo, el pleno ejercicio de estos derechos está condicionado a la capacidad de obrar.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | La capacidad jurídica es un derecho fundamental que no depende de la nacionalidad, el género o la condición social. Esto garantiza que todas las personas tengan acceso a la justicia y puedan ser sujetos de derechos en el ordenamiento jurídico.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | De acuerdo con Media (2014), el concepto de capacidad jurídica, o capacidad de goce, está implícita en el concepto de personalidad, puesto que, en la ley colombiana, es la idea de personalidad jurídica la que especifica la adquisición de derechos desde el nacimiento, en el caso de las personas naturales, o desde su creación, en el caso de las personas jurídicas.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in").mt-4.mt-lg-0


    p(data-aos="fade-right") La capacidad jurídica es crucial en la organización social y en el funcionamiento del sistema jurídico, dado que permite:

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/icon-1.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Que cada persona pueda ser titular de derechos y obligaciones.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/icon-2.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Que los sujetos participen de la vida jurídica y puedan emprender la firma de contratos, la presentación de demandas y el ejercicio de derechos civiles.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/icon-3.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Promueve la igualdad ante la ley puesto que reconoce a todas las personas como sujetos de derechos.



    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/2.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        p(data-aos="fade-left") La capacidad de obrar se refiere a la aptitud de una persona para ejercer sus derechos y cumplir con sus obligaciones de manera efectiva. A diferencia de la capacidad jurídica, que es inherente a todas las personas, la capacidad de obrar puede estar sujeta a limitaciones en función de la edad, el estado mental o las circunstancias personales de cada individuo.

        AcordionA(tipo="b")
          .div(titulo="Implica")
            p Que una persona puede realizar actos jurídicos, como celebrar contratos, presentar demandas y ejercer derechos patrimoniales. Esta capacidad es esencial para la efectividad de la personalidad jurídica.

          .div(titulo="Limitaciones")
            p Que pueden afectar la capacidad de obrar, tales como la minoría de edad, la incapacidad mental y otras circunstancias que impidan a una persona actuar de manera consciente y responsable.


    p(data-aos="fade-right") La capacidad de obrar permite:

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/icon-4.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Otorgar a las personas la autonomía necesaria para tomar decisiones en su vida, lo que es esencial para el desarrollo personal y social.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/icon-5.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Proteger a aquellas personas que, debido a su situación, podrían ser explotadas o tomar decisiones perjudiciales.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/icon-6.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Establecer un marco de responsabilidad en el ejercicio de derechos y obligaciones, asegurando que las personas asuman las consecuencias de sus actos.


    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Limitaciones de la capacidad de obrar

    p(data-aos="fade-right") Puede estar sujeta a limitaciones, dependiendo de la edad, el estado mental o situaciones específicas que puedan afectar la capacidad de una persona para tomar decisiones informadas. Medina (2014), explica que la ley establece presunción de capacidad para toda persona, no obstante, identifica sujetos a los cuales la ley ha declarado como incapaces.

    p(data-aos="fade-right") Siguiendo con lo anterior, es posible distinguir:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slider-1.png")
            .col-lg-7.order-1
              .pe-5
                h5 Plena capacidad de obrar
                p Se refiere a aquellas personas que tienen la capacidad de ejercer plenamente sus derechos y obligaciones, sin ninguna restricción. Generalmente, esto se aplica a los adultos que no están sujetos a ninguna limitación legal. Las personas con plena capacidad de obrar pueden celebrar contratos, ejercer derechos políticos, realizar actos patrimoniales y participar en la vida civil sin restricciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slider-2.png")
            .col-lg-7.order-1
              .pe-5
                h5 Incapacidad relativa
                p Se refiere a aquellas personas que, por su edad, estado mental o circunstancias personales, tienen limitaciones en su capacidad para ejercer ciertos derechos. Los menores suelen tener una capacidad de obrar limitada, lo que significa que no pueden realizar ciertos actos, sin la autorización de sus padres o tutores. Este grupo también incluye a aquellas personas que sufren de alguna condición que afecta su capacidad mental y que han sido declaradas judicialmente como inhábiles, lo que implica que podrían necesitar un tutor para actuar en su nombre.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slider-3.png")
            .col-lg-7.order-1
              .pe-5
                h5 Incapacidad absoluta
                p La incapacidad total se refiere a aquellas personas que, debido a su estado mental o físico, no pueden ejercer ninguna capacidad de obrar. Esto incluye a individuos en estado de coma, con enfermedades mentales graves o discapacidades severas. En este grupo, Medina (2014) incluye también a los impúberes y personas en estado de demencia. Las personas con incapacidad total, no pueden realizar actos jurídicos por sí mismas, y sus derechos son ejercidos por un tutor o curador, designado por la ley.


    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") Para tener en cuenta:

        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p(data-aos="fade-left").mb-0 Respecto a las consideraciones de la ley sobre la incapacidad relativa y absoluta, vale la pena mencionar que estos no son criterios estáticos, y que han sido modificados a partir de las necesidades sociales sobre la práctica del derecho. 

        p(data-aos="fade-left") Ejemplo de esto es la noción de impúber, que, en el pasado, según Medina (2014), establecía que las mujeres eran impúberes hasta los 12 años, mientras que los hombres lo eran hasta los 14. 

        p(data-aos="fade-left") La sentencia C-534 de 2005 unificó la edad a 14 años, y posteriormente la ley 1306 de 2009 reconoció la edad de pubertad a los 12 años teniendo en cuenta la precocidad psicológica e intelectual.

    h2(data-aos="fade-right").mb-5 Adquisición y pérdida de la capacidad de obrar

    .row.mb-5
      .col-lg-7
        p(data-aos="fade-right") La capacidad de obrar se adquiere, principalmente, a través de la mayoría de edad, que varía según las leyes de cada país, pero generalmente se establece en los 18 años.

        p(data-aos="fade-right") Al alcanzar la mayoría de edad, una persona adquiere plena capacidad de obrar, lo que le permite ejercer sus derechos y obligaciones, sin restricciones. Este cambio legal suele coincidir con un aumento en la responsabilidad social y jurídica del individuo.

        p(data-aos="fade-right") Además de alcanzar la mayoría de edad, existen situaciones en las que una persona puede adquirir capacidad de obrar anticipadamente, como en el caso de matrimonios de menores con autorización o en situaciones de emancipación.

      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in").mt-4.mt-lg-0


    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        p(data-aos="fade-left") La capacidad de obrar puede perderse total o parcialmente, debido a diversas circunstancias.

        AcordionA(tipo="b")
          .div(titulo="Circunstancia 1")
            p La capacidad de obrar de los menores de edad es limitada, lo que significa que no pueden realizar ciertos actos, sin la autorización de sus representantes legales. Esto incluye la firma de contratos, la toma de decisiones sobre bienes y la responsabilidad en actos jurídicos.

          .div(titulo="Circunstancia 2")
            p Las personas que sufren de incapacidades mentales o físicas que impiden su capacidad para tomar decisiones informadas, pueden perder su capacidad de obrar. En estos casos, es común que se designe un tutor o curador para ejercer los derechos en su nombre.

          .div(titulo="Circunstancia 3")
            p La ley puede establecer prohibiciones específicas que limiten la capacidad de obrar de ciertos individuos, como en el caso de personas condenadas por delitos graves o en situaciones de quiebra.

    h2(data-aos="fade-right").mb-5 Para concluir
    .row.mb-5
      .col-lg-7
        p(data-aos="fade-right") La capacidad jurídica y la capacidad de obrar, determinan la aptitud de las personas para ser titulares de derechos y obligaciones, así como su capacidad para ejercer esos derechos. La capacidad jurídica es universal y se adquiere al nacer, mientras que la capacidad de obrar puede estar sujeta a limitaciones, según la edad, el estado mental o las circunstancias personales.

        p La comprensión de estos conceptos es crucial para la protección y reconocimiento de los derechos y obligaciones en el marco del sistema legal de los derechos individuales y colectivos, así como para el funcionamiento del sistema legal. Ambas afectan desde la celebración de contratos hasta la representación legal y la protección de derechos. La jurisprudencia y los casos prácticos, destacan la importancia de garantizar que todas las personas, independientemente de su capacidad, tengan acceso a la justicia y puedan ejercer sus derechos de manera efectiva. 
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in").mt-4.mt-lg-0

    .bg-full-width.border-top.color-primario.d-none
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=saXfavo1OQo" target="_blank" rel="noopener noreferrer") Charlas TEDx ( 8 de enero de 2016). El poder de escuchar | William Ury | TEDx San Diego
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Coser, LA (1956). Las funciones del conflicto social. Fondo de Cultura Económica.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span González Rey, F. (2016). Introducción a la teoría de la cooperación en conflictos. Ediciones Humanistas.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span La Rosa, M., & Rivas, P. (2017). Métodos alternativos de resolución de conflictos. Ediciones Jurídicas.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Marx, K. (1867). El capital. Siglo XXI Editores.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Mirabal, O. (2003). Fundamentos de negociación y mediación en conflictos. Editorial Universitaria.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Programa de las Naciones Unidas para el Desarrollo (PNUD). (2018). Herramientas para la resolución pacífica de conflictos. PNUD.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Universidad Tecnológica de México (UNITEC). (2016). Manual de comunicación efectiva y resolución de conflictos. UNITEC.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Weber, M. (1922). Economía y sociedad: Esbozo de sociología comprensiva. Fondo de Cultura Económica.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
