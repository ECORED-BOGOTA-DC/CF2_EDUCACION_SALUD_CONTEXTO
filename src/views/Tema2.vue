<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Reconocimiento de capacidades en los sujetos y premisas de la EpS
    p.mb-5 Es necesario en los procesos de educación para la salud (EpS) partan de reconocer las capacidades, las prácticas de cuidado tradicionales, los saberes, las tradiciones y las particularidades, dando un lugar a los conocimientos y prácticas para entablar ese diálogo que permita reconocer la relación de estos con la salud, el bienestar y el desarrollo de los sujetos.

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
