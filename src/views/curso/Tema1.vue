<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(
    :titulo="'Unidad 2. Capacidad jurídica y personalidad'"
    :subTitulo="'1. Personalidad jurídica: inicio y fin'"
  )
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    p(data-aos="fade-up").mb-5 La personalidad jurídica permite a las personas y entidades, ser sujetos de derechos y obligaciones. Este principio es esencial para la estructura de las relaciones sociales y legales, porque establece quiénes pueden participar en la vida jurídica, cómo pueden ejercer sus derechos y cuándo se extinguen. La personalidad jurídica aplica tanto a personas naturales (referente a los individuos), como jurídicas (referente a organizaciones, sociedades y empresas, entre otros). Esta capacidad permite que los individuos y las organizaciones actúen en el ámbito legal, participando en contratos, relaciones laborales, litigios y más. La personalidad jurídica es un concepto que refleja la capacidad de actuar en la vida jurídica y está en la base de la organización social y económica.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición de personalidad jurídica

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-right") La personalidad jurídica se define como la capacidad de una entidad para ser titular de derechos y obligaciones, en el ordenamiento jurídico. 

        p(data-aos="fade-right") #[strong Diferencias entre personas físicas y personas jurídicas:] el ordenamiento civil reconoce la existencia de dos tipos de personas: la natural y la jurídica. La diferencia principal radica en cómo se concibe el momento de inicio de la existencia de cada uno, y la finalización.  

        p(data-aos="fade-right") A continuación, se presentan las consideraciones para cada tipo de personas.

      .col-lg-4.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in").mb-4.mb-lg-0


    h2(data-aos="fade-right") Personalidad jurídica de personas naturales

    p(data-aos="fade-right") Cada individuo, al nacer, adquiere derechos y obligaciones que lo caracterizan como persona en el ámbito legal. Desde este momento, las personas pueden ejercer sus derechos, como el derecho a la vida, a la propiedad y a la libre expresión. 

    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/2.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        p(data-aos="fade-left") Sin embargo, la capacidad para ejercer estos derechos, puede estar sujeta a ciertas limitaciones:

        AcordionA(tipo="b")
          .div(titulo="Adquisición de personalidad jurídica")
            p La personalidad jurídica de una persona natural se adquiere al momento del nacimiento. En la mayoría de los sistemas legales, se reconoce que el individuo debe nacer vivo para ser considerado una persona jurídica. En este sentido, el derecho reconoce a los fetos, ciertos derechos, como el derecho a la herencia, en virtud de su eventual nacimiento.

          .div(titulo="Limitaciones a la capacidad de ejercicio")
            p Aunque todos los seres humanos tienen personalidad jurídica, no todos pueden ejercer sus derechos de manera plena. Existen limitaciones para menores de edad, personas con discapacidad y otras categorías que requieren de la protección de sus derechos a través de tutores o representantes legales.


    h2(data-aos="fade-right") Personas jurídicas

    p(data-aos="fade-right") Las personas jurídicas son entidades creadas por el ordenamiento jurídico, como sociedades, asociaciones y fundaciones. Estas entidades pueden actuar como sujetos de derechos y obligaciones de manera similar a los individuos, lo que les permite participar en el tráfico jurídico.

    .row.align-items-center.mb-5
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Creación de personas jurídicas")
            p La creación de una persona jurídica, implica un acto de voluntad, generalmente a través de la formalización de su constitución mediante un contrato o escritura. Este proceso puede requerir la aprobación de las autoridades competentes y el cumplimiento de requisitos legales específicos.

          .div(titulo="Tipos de entidades jurídicas")
            p Existen diversos tipos de entidades con personalidad jurídica, las cuales incluyen sociedades anónimas, sociedades limitadas, cooperativas, asociaciones sin fines de lucro, y fundaciones. Cada una de estas entidades tiene características específicas, que regulan su funcionamiento y responsabilidad.

      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").mt-4.mt-lg-0



    p(data-aos="fade-right") Los elementos fundamentales de la personalidad jurídica, son:

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-xl-3.col-lg-6.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/icon-1.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center La personalidad jurídica se aplica a todos los seres humanos, sin distinción de raza, nacionalidad, género o condición social. Esto establece un principio de igualdad ante la ley, garantizando que todos los individuos tienen acceso a derechos y obligaciones.
      
      div.col-xl-3.col-lg-6.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/icon-2.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center La personalidad jurídica no puede ser dividida. Cada persona física tiene una única personalidad jurídica, que no puede ser fragmentada ni compartida. En el caso de las personas jurídicas, cada entidad tiene su propia personalidad, independiente de sus miembros.
      
      div.col-xl-3.col-lg-6.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/icon-3.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center La personalidad jurídica no se extingue por el transcurso del tiempo. Mientras exista el sujeto, su personalidad jurídica persiste. En el caso de las personas físicas, la extinción ocurre únicamente por muerte. Para las entidades jurídicas, la extinción puede ocurrir por disolución o fusión, entre otros motivos.

      div.col-xl-3.col-lg-6.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/icon-4.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center La personalidad jurídica no puede ser transferida. Una persona física no puede ceder su personalidad jurídica a otra persona, ni una entidad puede transferir su existencia legal a otra. Esto asegura que cada sujeto tenga su propia identidad y responsabilidad.


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Inicio de la personalidad jurídica

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4(data-aos="fade-right") El estudio de la personalidad jurídica es fundamental para comprender cómo los individuos y las entidades adquieren la capacidad de ser sujetos de derechos y obligaciones en el ámbito legal. Este concepto, que varía en su aplicación para personas naturales y jurídicas, se encuentra profundamente arraigado en los códigos civiles y en la jurisprudencia de muchos países, incluido Colombia. En el caso de las personas físicas, la personalidad jurídica se reconoce desde el nacimiento, momento en el que la ley otorga derechos y establece obligaciones, mientras que, para las personas jurídicas, la adquisición de personalidad se formaliza a través de un acto jurídico específico que marca su constitución. Además, los recientes desarrollos jurisprudenciales han ampliado el entendimiento de la personalidad jurídica al incluir a la naturaleza como sujeto de derechos, como lo ilustra la emblemática sentencia T-622 de 2016 de la Corte Constitucional colombiana. A continuación, en el PDF Inicio de la personalidad jurídica, explorará en detalle estos conceptos, destacando los marcos legales y las implicaciones en la práctica jurídica.

        a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_inicio_de_la_personalidad_juridica.pdf')" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo. </strong> Inicio de la personalidad jurídica

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/4.png', alt='')


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Fin de la personalidad jurídica

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        p.mb-4(data-aos="fade-right") El fin de la personalidad jurídica es un proceso fundamental en el ámbito del Derecho Civil, ya que marca el término de la capacidad de un sujeto, sea una persona natural o una entidad jurídica, para ejercer derechos y asumir obligaciones. En el caso de las personas naturales, este momento está claramente definido por la muerte, mientras que, para las personas jurídicas, puede ser consecuencia de procesos como la disolución, la liquidación o la fusión. Estos procedimientos implican una serie de actos legales y administrativos destinados a garantizar el cumplimiento de obligaciones y la distribución de derechos, preservando así el orden y la justicia en el marco legal. En el PDF Fin de la personalidad jurídica, se explorarán con detalle estos procedimientos, abarcando los aspectos relacionados con las causas de extinción de la personalidad jurídica, el proceso de sucesión en caso de fallecimiento, y los pasos de disolución y liquidación en entidades jurídicas, así como las implicaciones de la fusión. La comprensión de cómo y por qué se extingue la personalidad jurídica no solo es clave para los profesionales del derecho, sino también para cualquier persona que participe en relaciones civiles, dado que la extinción de la personalidad jurídica conlleva implicaciones en la sucesión de derechos y responsabilidades, afectando a herederos, socios y terceros relacionados.

        a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_fin_de_la_personalidad_juridica.pdf')" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo. </strong> Fin de la personalidad jurídica

      .col-lg-5.order-1
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/5.png', alt='').mb-4.mb-lg-0



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
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
