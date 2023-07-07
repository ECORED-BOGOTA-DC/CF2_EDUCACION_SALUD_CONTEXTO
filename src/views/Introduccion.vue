<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-12.bg-c1.shadow.mb-5(data-aos="fade-right")
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/intro/img1.png', style="width: 350px" ,alt='Texto que describa la imagen').m-auto
            .col-lg-8
              .row
                .col-auto
                  figure
                    img(src='@/assets/curso/intro/img2.svg', style="width: 40px" ,alt='Texto que describa la imagen')
                .col
                  p.mb-0 La atención centrada en las personas, familias y comunidades parte por reconocer que los sujetos individuales y los colectivos son titulares de derechos, por ello se retoma lo planteado en la Ley Estatutaria que define la salud como un derecho humano fundamental, que en su interdependencia con los demás derechos requiere la gestión para incidir en determinantes sociales, así como la gestión para la atención integral en salud a nivel individual, colectivo y poblacional. Realice un recorrido de introducción a través del siguiente video:
      .col-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/YfNMsgU1cW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
