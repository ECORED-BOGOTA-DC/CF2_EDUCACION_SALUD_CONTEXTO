<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Reconocimiento de capacidades en los sujetos y premisas de la EpS
    p.mb-5 Es necesario en los procesos de educación para la salud (EpS) partan de reconocer las capacidades, las prácticas de cuidado tradicionales, los saberes, las tradiciones y las particularidades, dando un lugar a los conocimientos y prácticas para entablar ese diálogo que permita reconocer la relación de estos con la salud, el bienestar y el desarrollo de los sujetos.
    .row
      .col-12.bg-c1.shadow.mb-5
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img1.png', style="width: 300px" ,alt='Texto que describa la imagen').m-auto
            .col-lg-8
              .row
                .col-auto
                  figure
                    img(src='@/assets/curso/intro/img2.svg', style="width: 40px" ,alt='Texto que describa la imagen')
                .col
                  p.mb-0 Los resultados en salud definidos en relación con los procesos de educación para la salud reconocen un espectro amplio de apuestas en término del ejercicio de derechos (por ejemplo, en relación con derechos sexuales y derechos reproductivos); establecimiento de relaciones sanas y constructivas, capacidades de cuidado, de agencia (como capacidad transformadora), de empoderamiento para afrontar sucesos vitales; habilidades sociales y emocionales; y modificación de entornos.  Es importante tener presente las siguientes premisas definidas a partir del enfoque epistemológico y pedagógico:
    .row.bg-c7.mb-4
      .col-12
        .row
          .col-12.bg-c8
            .p-4
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema2/img2.svg', style="width: 20px" ,alt='Texto que describa la imagen')
                .col
                  p.mb-0 Como dinamizador o facilitador de estos procesos es necesario partir de reconocer:
          .col-12.py-5
            figure
              img(src='@/assets/curso/tema2/img3.svg', style="width: 950px" ,alt='Texto que describa la imagen').m-auto
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img4.svg', style="width: 450px" ,alt='Texto que describa la imagen').m-auto
      .col-lg-7
        .row
          .col-12.bg-c8
            .p-3
              .row
                .col-auto
                  figure.mt-1
                    img(src='@/assets/curso/tema2/img2.svg', style="width: 20px" ,alt='Texto que describa la imagen')
                .col
                  p.mb-0 Para facilitar el diálogo de saberes, el respeto por los mismos y la generación de confianza con los grupos con quien se realiza el proceso de educación para la salud hay que iniciar con la conexión de los contenidos con las experiencias cotidianas o significativas de las personas con las que se está interlocutando.  Los siguientes apartados hacen parte de la reflexión de Kaplun (2002) para potenciar el diálogo de saberes:
    .row.bg-c9
      .col-12
        .p-5
          .row
            .col-12.bg-c10
              .p-4
                .row.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    .tarjeta.tarjeta--white.p-4
                      SlyderA(tipo="b")
                        .row
                          .col-12
                            .p-5
                              p.text-center.mb-0 Antes de intentar comunicar un hecho o una idea, el facilitador/comunicador tiene que conocer cuál es la experiencia previa de la población destinataria en relación con esa materia o ese hecho.
                        .row
                          .col-12
                            .p-5
                              p.text-center.mb-0 Partir siempre de situaciones que sean conocidas y experimentadas por ellos; encontrar qué elementos de su ámbito experiencial pueden servir de punto de partida, de imagen generadora para realizar el proceso de EpS, de modo que ellos puedan asociar el nuevo conocimiento con situaciones y percepciones que ya han experimentado y vivido (Kaplun, 2002).
                        .row
                          .col-12
                            .p-5
                              p.text-center.mb-0 Se requiere incluir procesos que impliquen que los otros investiguen, pregunten, indaguen sobre lo que pasa en su comunidad, cómo se perciben los temas, los prejuicios y concepciones.
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema2/img3.png', style="width: 550px" ,alt='Texto que describa la imagen').m-auto
        .row.mb-4
          .col-12.bg-c8
            .p-4
              .row
                .col-auto.pe-0
                  figure.mt-1
                    img(src='@/assets/curso/tema2/img2.svg', style="width: 20px" ,alt='Texto que describa la imagen')
                .col
                  p.mb-0 Durante el proceso de fortalecimiento de capacidades es importante iniciar los procesos desde la escucha, ¿qué esperan, qué quieren, qué saben?, eso es un verdadero proceso de comunicación dialógica; es importante permitir que la gente hable de sus experiencias y testimonios, donde sean tomados en cuenta como punto base de la implementación de la EpS.
        .row
          .col-12
            .p-5
              figure
                img(src='@/assets/curso/tema2/img7.svg', style="width: 950px" ,alt='Texto que describa la imagen').m-auto
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        .row
          .col-12
            ul.lista-ul--separador.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color: #4ADBD1")
                |
                p.mb-0 Si se va a presentar un video no colocar el final, permitir que las personas se inquieten, se pregunten, y a partir de allí crear el diálogo, igualmente, no dar respuestas inmediatas, se propone buscarla juntos.
              li.d-flex
                i.fas.fa-check-circle(style="color: #4ADBD1")
                |
                p.mb-0 En el proceso de EpS se debe tener en cuenta que el habla popular prefiere lo concreto y el habla científica lo abstracto; por esto  hay que buscar la forma en que el mensaje sea realmente entendido por las comunidades, por ejemplo:
    .row.justify-content-center.mb-5
      .col-md-8.col-lg.m-2
        figure.fig-p2
          img(src='@/assets/curso/tema1/img6.svg', style="width: 100px" ,alt='Texto que describa la imagen').m-auto
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img5.png', style="width: 610px" ,alt='Texto que describa la imagen').m-auto
          .col-12.bg-c11
            .p-4
              p.mb-0 En lugar de decir incremento demográfico se puede decir aumento de la población, que es lo mismo pero comprensible para todos.
      .col-md-8.col-lg.m-2
        figure.fig-p2
          img(src='@/assets/curso/tema1/img6.svg', style="width: 100px" ,alt='Texto que describa la imagen').m-auto
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img6.png', style="width: 610px" ,alt='Texto que describa la imagen').m-auto
          .col-12.bg-c12
            .p-4
              p.mb-0 Saber dar cifras de manera que se entiendan, decodificarlas lo más posible, por porcentajes o de manera cotidiana con algo cercano, por ejemplo, en vez de decir el 10% de los niños de este municipio tiene parasitosis.
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img7.png', style="width: 450px" ,alt='Texto que describa la imagen').m-auto
      .col-lg-8
        .row.mb-4
          .col-auto
            figure.mt-1
              img(src='@/assets/curso/tema2/img2.svg', style="width: 20px" ,alt='Texto que describa la imagen')
          .col
            p.mb-0 Durante el proceso de fortalecimiento de capacidades es importante iniciar los procesos desde la escucha, ¿qué esperan, qué quieren, qué saben?, eso es un verdadero proceso de comunicación dialógica; es importante permitir que la gente hable de sus experiencias y testimonios, donde sean tomados en cuenta como punto base de la implementación de la EpS.
        .row
          .col-12.bg-c3
            .p-4
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/img8.svg', style="width: 100px" ,alt='Texto que describa la imagen').m-auto
                .col
                  p.mb-0 #[b Los juicios, prejuicios y estereotipos deben convertirse en objeto de análisis para su deconstrucción.]
    .row.bg-c13.mb-5
      .col-12
        .px-5.py-4
          .row
            .col-md-auto.mb-4.mb-md-0
              figure.mt-1
                img(src='@/assets/curso/tema2/img2.svg', style="width: 20px" ,alt='Texto que describa la imagen')
            .col
              p.mb-0 Recuperar la memoria colectiva del  pueblo o comunidad  con respecto a las luchas y logros que han permitido el mejoramiento de sus condiciones de vida e incluso de aquellas creencias que han permitido dinamizar cambios en sus familias, grupos y comunidades;  se pueden incluir las luchas independentistas, las luchas de liberación, las luchas de autonomía, dependiendo de los pueblos;  se sugiere rescatar esas historias que implican no una ruptura, sino una continuidad de procesos libertarios y de transformaciones sociales.
    .row.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris.shadow
            .p-4
              p.mb-0 #[b Una forma es terminar con una frase sugerente o problematizadora o con un silencio largo que permita que las personas piensen qué es lo que se les quiso decir.]
      .col-lg-6
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris.shadow
            .p-4
              p.mb-0 #[b Cuando se da un mensaje que no precisa la colaboración del oyente, este se olvida y se diluye rápidamente.]
              br
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        .row.mb-4
          .col-auto
            figure.mt-1
              img(src='@/assets/curso/tema2/img2.svg', style="width: 20px" ,alt='Texto que describa la imagen')
          .col
            p.mb-0 Usar los signos (imágenes, canciones, representaciones territoriales, representaciones fenotípicas) adecuados para la exposición, que sean coherentes, pertinentes, con sentido regional, que permita la identificación y la contextualización en el marco del proceso de EpS.  Cuidar que aquello que se haga, se diga o se muestre no sea un vehículo para consolidar prejuicios, exclusiones o normalizaciones de injusticias.
        .row
          .col-12.bg-c3
            .p-4
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/img11.svg', style="width: 100px" ,alt='Texto que describa la imagen').m-auto
                .col
                  p.mb-0 #[b Los signos deben ser coherentes con lo que se quiere mostrar; las imágenes deben ser coherentes con la población a la cual está dirigida, por ejemplo, afrodescendiente o indígena, o si es zona rural o urbana, entre otros.]
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img8.png', style="width: 450px" ,alt='Texto que describa la imagen').m-auto
    .row.bg-c14.mb-5
      .col-12
        .px-5.py-4
          .row
            .col-md-auto.mb-4.mb-md-0
              figure.mt-1
                img(src='@/assets/curso/tema2/img2.svg', style="width: 20px" ,alt='Texto que describa la imagen')
            .col
              p.mb-0 Utilizar contenidos que permitan ser decodificados libremente, que sean relacionados con la vida cotidiana, que permitan visualizar diversas opciones, esto no lo brinda una charla magistral hay que valerse de otras formas, por ejemplo, una obra de teatro, extractos de películas, una lectura, una historia, una fotografía, etc.
    .row
      .col-12.bg-c1.shadow.mb-5
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img9.png', style="width: 300px" ,alt='Texto que describa la imagen').m-auto
            .col-lg-8
              .row
                .col-auto
                  figure
                    img(src='@/assets/curso/intro/img2.svg', style="width: 40px" ,alt='Texto que describa la imagen')
                .col
                  p “A nivel asociativo o interpretativo es conveniente estimular el trabajo de decodificación por parte del destinatario. No es aconsejable darle las cosas ya totalmente interpretadas y «masticadas». Es mejor codificar el mensaje de tal modo que él tenga que poner algo de su parte, que participe para decodificarlo: asociar situaciones, compararlas, interpretarlas, vivirlas intelectual y emocionalmente, extraer conclusiones. Es mejor sugerir que decir; es más rico el símbolo que alude y que se abre a ser interpretado, que el análisis que el emisor presenta ya elaborado y cristalizado”.
                  .row.justify-content-end.align-items-center
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema2/img12.svg', style="width: 20px" ,alt='Texto que describa la imagen')
                    .col-auto
                      p.mb-0 #[b (Kaplan 2002, p. 146)]
    .row.bg-c13.mb-5
      .col-12
        .px-5.py-4
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              .row
                .col-md-auto.mb-4.mb-md-0
                  figure.mt-1
                    img(src='@/assets/curso/tema2/img2.svg', style="width: 20px" ,alt='Texto que describa la imagen')
                .col
                  p.mb-0 Considerar la incorporación de elementos que sean significativos, que aporten nuevos significados y que conecten con la estructura cognitiva de los sujetos, orientando el proceso de aprendizaje desde la potencialidad que tiene la experiencia, donde los sujetos participen desde un inicio para definir el proceso mismo; a partir de un análisis que problematice la realidad, retome necesidades y expectativas y permita plantear unos puntos de llegada; de tal manera que los participantes se involucren directamente en cómo el proceso se refleja en apuestas y ajustes a nivel personal, colectivo; cambios en los entornos y  articulación con otros escenarios de respuesta, lo que permite a los participantes encontrar sentido al proceso, desde la perspectiva que como sujetos de derecho se pueden construir posibilidades de cambio que van más allá de estos escenarios.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/img10.png', style="width: 450px" ,alt='Texto que describa la imagen').m-auto
    .row.mb-5
      .col-12.bg-c3
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img13.svg', style="width: 100px" ,alt='Texto que describa la imagen').m-auto
            .col
              p.mb-0 #[b Es necesario incorporar los ejes dinamizadores transversales, que permiten incorporar diálogos y reflexiones necesarias en relación con el cuidado, la salud, el desarrollo y desde allí su relación con diferenciales que perpetúan inequidades en salud.]
    .row.bg-c15.mb-5
      .col-12
        .px-5.py-4
          .row
            .col-md-auto.mb-4.mb-md-0
              figure.mt-1
                img(src='@/assets/curso/tema2/img2.svg', style="width: 20px" ,alt='Texto que describa la imagen')
            .col
              p.mb-0 En los procesos de educación para la salud el cuidado es el centro de la acción pedagógica; contribuye de manera directa a los resultados en salud desde una mirada promocional, apuesta al desarrollo y la capacidad transformadora de los sujetos.
    .row.justify-content-center
      .col-md-8.col-lg.m-2
        figure.fig-p2
          img(src='@/assets/curso/tema1/img6.svg', style="width: 100px" ,alt='Texto que describa la imagen').m-auto
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img11.png', style="width: 610px" ,alt='Texto que describa la imagen').m-auto
          .col-12.bg-c16
            .p-4
              p.mb-0 La adecuación de los procesos de educación para la salud de acuerdo con los sujetos, el territorio y la cultura, identificando esos puntos de encuentro entre las prácticas cotidianas y lo que desde el sector salud se propone, en perspectiva de los resultados deseables en salud; que en un marco intercultural amplio permiten establecer nuevos conocimientos y prácticas.
      .col-md-8.col-lg.m-2
        figure.fig-p2
          img(src='@/assets/curso/tema1/img6.svg', style="width: 100px" ,alt='Texto que describa la imagen').m-auto
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img12.png', style="width: 610px" ,alt='Texto que describa la imagen').m-auto
          .col-12.bg-c17
            .p-4
              p.mb-0 Abordar las redes de apoyo y a la familia como red primaria de cuidado, permite reconocer esa trama que se teje alrededor de la salud, el cuidado y los riesgos, donde evidentemente la familia es un escenario fundamental de transferencia intergeneracional en relación con las tradiciones, las costumbres y las prácticas.

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

<style lang="sass"></style>
