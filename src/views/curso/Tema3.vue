<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(
    :titulo="'Unidad 2. Capacidad jurídica y personalidad'"
    :subTitulo="'3. Estado civil y sus efectos jurídicos'"
  )
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    p(data-aos="fade-right").mb-5 El estado civil se  refiere a la situación personal de un individuo (persona natural) en relación con la familia y la sociedad. Este estado se traduce en el reconocimiento legal de las relaciones familiares y sus implicaciones en el ámbito jurídico y determina no solo la posición de una persona en el contexto social, sino también sus derechos y obligaciones legales. 

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Definición de estado civil     

    .row.mb-5
      .col-lg-7
        p(data-aos="fade-left") El estado civil se define como la situación jurídica que determina la posición de una persona en la sociedad, en función de sus relaciones familiares y personales. Este concepto es esencial para el reconocimiento de derechos y la regulación de obligaciones entre individuos. El estado civil está relacionado con factores como el matrimonio, la soltería, la viudez, el divorcio y la unión de hecho. En otras palabras, se compone de diversos elementos que afectan la vida personal y social de una persona, como la capacidad para contraer matrimonio, los derechos de sucesión y la responsabilidad parental.

        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/icon-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El artículo 1 del Decreto 1260 de 1970 lo define así: “el estado civil de una persona es su situación jurídica en la familia y la sociedad, determina su capacidad para ejercer ciertos derechos y contraer ciertas obligaciones, es indivisible, indisponible e imprescriptible, y su asignación corresponde a la ley”. 
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")


    p(data-aos="fade-right") La formalización del estado civil se lleva a cabo a través del registro civil, que es la institución encargada de llevar un registro oficial de los hechos y actos que afectan la vida de las personas, como nacimientos, matrimonios y defunciones, y a registrar hechos jurídicos de carácter convencional, como el matrimonio. Este registro es fundamental para garantizar la seguridad jurídica y la protección de los derechos individuales. Además, permite:

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema3/icon-2.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Determinar los derechos y obligaciones de las personas en diferentes ámbitos, como el familiar, el patrimonial y el sucesorio.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema3/icon-3.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Garantizar la protección de los derechos de los individuos, especialmente en lo que respecta a la familia y las relaciones personales.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema3/icon-4.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Contribuir a la organización social al establecer normas y regulaciones sobre la convivencia familiar, la herencia y la responsabilidad parental.

    p(data-aos="fade-right") A continuación, conozca los diferentes tipos de estado civil:

    .bg-full-width.bg-color-3.mb-0
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10.pt-4.d-none.d-lg-block
            ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/infografia/info1.png', alt='', style="max-width: 1170px;").mx-auto

                .bg-color-bordered.p-3(x="10.5%" y="72%" numero="+")
                  h5 Soltería
                  p La soltería se refiere al estado de una persona que no ha contraído matrimonio. Este estado implica que el individuo no tiene ninguna obligación legal asociada a una unión matrimonial. Las personas solteras tienen la libertad de elegir con quién desean formar una relación de pareja y pueden contraer matrimonio en cualquier momento, siempre que cumplan con los requisitos legales. Además, tienen plena capacidad para gestionar sus bienes y tomar decisiones patrimoniales, sin necesidad de consentimiento de un cónyuge.

                .bg-color-bordered.p-3(x="30%" y="28%" numero="+")
                  h5 Matrimonio
                  p El matrimonio es un estado civil que surge de la unión legal y formal de dos personas, creando un vínculo jurídico que implica derechos y obligaciones mutuas. Genera derechos y deberes entre los cónyuges, como el deber de cohabitación, el deber de asistencia y el derecho a la administración conjunta de los bienes, además puede tener un impacto significativo en la gestión de los bienes y la herencia, así como en la creación de un patrimonio familiar conjunto. Los cónyuges tienen derechos sucesorios, lo que significa que, en caso de fallecimiento de uno de ellos, el otro tiene derecho a heredar parte o la totalidad de los bienes del difunto.

                .bg-color-bordered.p-3(x="50%" y="72%" numero="+")
                  h5 Unión marital
                  p En la ley no está previsto que la unión marital de hecho, pueda generar un estado civil. Según Medina (2014), esto responde principalmente a la época en la que se redactó el código. Actualmente, la Constitución reconoce la unión libre y la unión marital de hecho; no obstante, estos tipos de uniones aún no pertenecen a la tipología del estado civil, que reconoce entre solteros y casados. Sin embargo, cabe resaltar que existen instrumentos que permiten la constitución y liquidez de una sociedad en conjunto de hecho, que otorga derechos y obligaciones a las partes.

                .bg-color-bordered.p-3(x="70%" y="28%" numero="+")
                  h5 Viudez
                  p La viudez es el estado civil que se adquiere cuando una persona pierde a su cónyuge, debido a su fallecimiento. Este estado puede tener efectos significativos en la vida personal y jurídica del viudo o la viuda. Los viudos o viudas tienen derechos de sucesión sobre los bienes del cónyuge fallecido, lo que les otorga una posición privilegiada, en comparación con otros herederos. También tienen la libertad de volver a contraer matrimonio.

                .bg-color-bordered.p-3(x="90%" y="72%" numero="+")
                  h5 Divorcio
                  p El divorcio es el estado civil que se produce cuando se disuelve un matrimonio mediante un proceso legal. Este estado puede ser solicitado por uno o ambos cónyuges y puede tener diferentes modalidades, como el divorcio de mutuo acuerdo o el divorcio contencioso; implica la disolución de las obligaciones conyugales, como la cohabitación y el deber de asistencia. En este proceso se deben tomar decisiones sobre la custodia y la patria potestad, lo que puede tener un impacto significativo en la vida familiar. Además, conlleva la necesidad de dividir los bienes adquiridos durante el matrimonio, lo que puede resultar en disputas legales.

          .col-lg-10.pt-4.d-lg-none
            ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/infografia/info1_mobile.png', alt='', style="max-width: 360px;").mx-auto

                .bg-color-bordered.p-3(x="85%" y="10%" numero="+")
                  h5 Soltería
                  p La soltería se refiere al estado de una persona que no ha contraído matrimonio. Este estado implica que el individuo no tiene ninguna obligación legal asociada a una unión matrimonial. Las personas solteras tienen la libertad de elegir con quién desean formar una relación de pareja y pueden contraer matrimonio en cualquier momento, siempre que cumplan con los requisitos legales. Además, tienen plena capacidad para gestionar sus bienes y tomar decisiones patrimoniales, sin necesidad de consentimiento de un cónyuge.

                .bg-color-bordered.p-3(x="14%" y="30%" numero="+")
                  h5 Matrimonio
                  p El matrimonio es un estado civil que surge de la unión legal y formal de dos personas, creando un vínculo jurídico que implica derechos y obligaciones mutuas. Genera derechos y deberes entre los cónyuges, como el deber de cohabitación, el deber de asistencia y el derecho a la administración conjunta de los bienes, además puede tener un impacto significativo en la gestión de los bienes y la herencia, así como en la creación de un patrimonio familiar conjunto. Los cónyuges tienen derechos sucesorios, lo que significa que, en caso de fallecimiento de uno de ellos, el otro tiene derecho a heredar parte o la totalidad de los bienes del difunto.

                .bg-color-bordered.p-3(x="85%" y="50%" numero="+")
                  h5 Unión marital
                  p En la ley no está previsto que la unión marital de hecho, pueda generar un estado civil. Según Medina (2014), esto responde principalmente a la época en la que se redactó el código. Actualmente, la Constitución reconoce la unión libre y la unión marital de hecho; no obstante, estos tipos de uniones aún no pertenecen a la tipología del estado civil, que reconoce entre solteros y casados. Sin embargo, cabe resaltar que existen instrumentos que permiten la constitución y liquidez de una sociedad en conjunto de hecho, que otorga derechos y obligaciones a las partes.

                .bg-color-bordered.p-3(x="14%" y="70%" numero="+")
                  h5 Viudez
                  p La viudez es el estado civil que se adquiere cuando una persona pierde a su cónyuge, debido a su fallecimiento. Este estado puede tener efectos significativos en la vida personal y jurídica del viudo o la viuda. Los viudos o viudas tienen derechos de sucesión sobre los bienes del cónyuge fallecido, lo que les otorga una posición privilegiada, en comparación con otros herederos. También tienen la libertad de volver a contraer matrimonio.

                .bg-color-bordered.p-3(x="85%" y="90%" numero="+")
                  h5 Divorcio
                  p El divorcio es el estado civil que se produce cuando se disuelve un matrimonio mediante un proceso legal. Este estado puede ser solicitado por uno o ambos cónyuges y puede tener diferentes modalidades, como el divorcio de mutuo acuerdo o el divorcio contencioso; implica la disolución de las obligaciones conyugales, como la cohabitación y el deber de asistencia. En este proceso se deben tomar decisiones sobre la custodia y la patria potestad, lo que puede tener un impacto significativo en la vida familiar. Además, conlleva la necesidad de dividir los bienes adquiridos durante el matrimonio, lo que puede resultar en disputas legales.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Efectos jurídicos del estado civil

    p(data-aos="fade-right") El estado civil impacta:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Derechos personales
              .row.justify-content-center.align-items-start(data-aos="fade-up").mb-3
                .col-auto
                  figure
                    img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;").mt-2
                .col
                  p.mb-0 Influye en los derechos patrimoniales de las personas. Por ejemplo, los cónyuges tienen derechos sobre los bienes adquiridos durante el matrimonio y pueden tener derechos de usufructo sobre la herencia.

              .row.justify-content-center.align-items-start(data-aos="fade-up").mb-3
                .col-auto
                  figure
                    img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;").mt-2
                .col
                  p.mb-0 La relación entre los cónyuges también puede afectar la responsabilidad civil, porque ambos pueden ser responsables de las deudas contraídas durante el matrimonio, dependiendo del régimen patrimonial elegido.

            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/slider-1.png")
          .row.align-items-center.p-4.p-md-5

            .col-lg-7
              h5 Derechos de familia
              .row.justify-content-center.align-items-start(data-aos="fade-up").mb-3
                .col-auto
                  figure
                    img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;").mt-2
                .col
                  p.mb-0 En caso de separación o divorcio, el estado civil influye en la determinación de la custodia de los hijos y los derechos de visita. Las decisiones se basan en el interés superior del niño y la capacidad de los padres para cuidar de ellos.

              .row.justify-content-center.align-items-start(data-aos="fade-up").mb-3
                .col-auto
                  figure
                    img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;").mt-2
                .col
                  p.mb-0 El estado civil también impacta en la obligación de proporcionar alimentos a los hijos y, en algunos casos, a los cónyuges. Las personas divorciadas pueden tener derecho a recibir pensiones alimenticias, dependiendo de las circunstancias.

            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/slider-2.png")

          .row.justify-content-center.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Derechos sucesorios
              .row.justify-content-center.align-items-start(data-aos="fade-up").mb-3
                .col-auto
                  figure
                    img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;").mt-2
                .col
                  p.mb-0 Determina la posición de una persona en la sucesión. Los cónyuges tienen derechos preferentes en la herencia, mientras que los solteros o aquellos en unión de hecho, pueden estar en una posición menos privilegiada.

              .row.justify-content-center.align-items-start(data-aos="fade-up").mb-3
                .col-auto
                  figure
                    img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;").mt-2
                .col
                  p.mb-0 También afecta la capacidad para realizar testamentos y la forma en que se distribuyen los bienes, en caso de fallecimiento.

            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/slider-3.png")

          .row.justify-content-center.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Implicaciones laborales
              .row.justify-content-center.align-items-start(data-aos="fade-up").mb-3
                .col-auto
                  figure
                    img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;").mt-2
                .col
                  p.mb-0 Puede influir en la elegibilidad para ciertos beneficios sociales, como seguros de vida o pensiones. Por ejemplo, un cónyuge puede ser beneficiario en caso de fallecimiento.


              .row.justify-content-center.align-items-start(data-aos="fade-up").mb-3
                .col-auto
                  figure
                    img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;").mt-2
                .col
                  p.mb-0 En algunos países, el estado civil puede afectar el derecho a permisos laborales, como licencias de paternidad o maternidad. En el caso colombiano, la ley 2114 de 2021, establece 2 semanas para la licencia de paternidad “se reconoce por los hijos nacidos del cónyuge o compañera permanente”, para la madre se reconocen 12 semanas después del parto y seis adicionales que pueden ser distribuidas entre el padre y la madre.

            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/slider-4.png")

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] El estado civil en la evolución del derecho

    p(data-aos="fade-right") Para conocer sobre esta temática, lo invitamos a ver el siguiente video:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        iframe(width="100%" height="600" src="https://www.youtube.com/embed/jW5KN4Kvpw0?si=9_EnInll1AtKbmvq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)


    h2(data-aos="fade-right") Para concluir

    p(data-aos="fade-right") El estado civil impacta significativamente la vida personal y social de los individuos. A través de sus diferentes tipos determina una variedad de derechos y obligaciones legales que afectan no solo a los individuos involucrados, sino también a sus familias y a la sociedad en general.

    .row.mb-5
      .col-lg-7
        p(data-aos="fade-right") La comprensión de los efectos jurídicos del estado civil, es esencial para la protección de los derechos de las personas y para garantizar que se respeten las normas legales en las relaciones familiares. Además, es crucial abordar las consideraciones legales y éticas relacionadas con el estado civil, especialmente en un mundo en constante cambio.

        p A medida que la sociedad evoluciona, es fundamental que las leyes y regulaciones se adapten para reflejar las realidades contemporáneas y garantizar la equidad y la justicia para todos. La jurisprudencia y los casos prácticos son herramientas valiosas para ilustrar la aplicación de estos conceptos en la vida real y para impulsar reformas que beneficien a la sociedad en su conjunto. 
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in").mt-4.mt-lg-0

    .bg-full-width.border-top.color-acento-contenido
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>


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
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sistemas numéricos y álgebra de Boole',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El estado civil debe acreditarse mediante ______ oficiales, como el acta de nacimiento o matrimonio.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Contratos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Declaraciones juradas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'El fallecimiento de una persona natural causa el ______ de su personalidad jurídica.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cese.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incremento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Una persona con capacidad de obrar plena puede ______ sus derechos sin restricciones.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'transferir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ceder.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'ejercer.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'renunciar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una empresa de consultoría en Derecho revisa los atributos de personalidad de las personas jurídicas en comparación con las naturales. Al estudiar los derechos, encuentra uno aplica a los dos tipos de persona. ¿Cuál de los siguientes es compartido tanto por personas naturales como jurídicas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La nacionalidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La posibilidad de poseer bienes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacidad de obrar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La responsabilidad limitada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Fernando está revisando los documentos de su empresa puesto que junto con sus socios se disponen a cambiar de domicilio. Ante la situación se pregunta si habrán repercusiones e los derechos y obligaciones que ostenta su organización. ¿El cambio de domicilio afecta la personalidad jurídica de una persona jurídica en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No, el cambio de domicilio no afecta la personalidad jurídica, pero debe ser actualizado ante las autoridades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sí, el cambio de domicilio implica la creación de una nueva persona jurídica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El domicilio solo puede ser cambiado si lo aprueba una autoridad judicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las personas jurídicas no pueden cambiar de domicilio sin disolverse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Felicidades! Has superado la prueba con éxito.',
      mensaje_final_reprobado:
        'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
    },
  }),
}
</script>
