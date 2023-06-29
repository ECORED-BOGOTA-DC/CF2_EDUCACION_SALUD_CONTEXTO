<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Premisas para la planeación de procesos y diseño de herramientas
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width: 450px" ,alt='Texto que describa la imagen').m-auto
      .col-lg-7
        p.mb-0 Se parte de reconocer quiénes son los sujetos según el entorno o el momento de curso de vida (o en el caso de los procesos de educación para la salud de riesgo, considerando las características de los sujetos y lo propio de los riesgos que requieren ser acompañados). Esto permite ubicar unas propuestas de núcleos temáticos, un llamado a los  ejes dinamizadores transversales y, finalmente el establecimiento de acuerdos con los grupos o comunidades que permitan definir esos resultados que se quieren proponer vinculados a un ciclo o sesiones de encuentro.
    .row.mb-5
      .col-12.bg-c2
        .py-4.pe-4
          .row.align-items-center
            .col-auto.px-0
              figure
                img(src='@/assets/curso/tema1/img7.svg', style="width: 60px" ,alt='Texto que describa la imagen').m-auto
            .col
              p.mb-0 Ese primer momento de encuentro permite planear el proceso, las sesiones de EpS a desarrollar y  proponer algunas situaciones que se quieren reafirmar o aquellas donde se quiere cambiar la lógica de cuidado de sí mismo, del otro y del entorno; lo que permite ubicar la dinámica de trabajo, compromisos y derroteros.
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p De esta manera la EpS se plantea como un camino establecido de manera concertada, que permite reconocer a los sujetos, sus redes y vínculos, sus situaciones, sus derechos, sus prácticas de cuidado y su capacidad transformadora a partir de unos momentos de reflexión. De acuerdo con las definiciones de los resultados o los puntos de llegada en el proceso se podrá hacer uso de herramientas didácticas que permitan valorar la incorporación o resignificación de prácticas, la ampliación de contextos e información para la toma de decisiones y, finalmente los mecanismos para avanzar en la garantía de derechos.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img1.svg', style="width: 450px" ,alt='Texto que describa la imagen').m-auto

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

<style lang="sass"></style>
