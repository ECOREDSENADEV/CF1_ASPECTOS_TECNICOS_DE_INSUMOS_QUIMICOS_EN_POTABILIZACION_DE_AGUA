<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Sustancias para ajuste de pH
    
    .row.mb-4.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 Para que los procesos de coagulación, floculación y sedimentación se desarrollen de manera óptima, el agua cruda debe presentar un pH adecuado. Cuando el pH es inferior a 6, la formación de flóculos se ve comprometida. En estos casos, el producto más utilizado para ajustar el pH es la cal, que puede aplicarse en dos formas:
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema8/1.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .row.justify-content-center
      .col-lg-8
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema8/2.png', alt='')
            .col-lg
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Cal viva (CaO)
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Cal hidratada o apagada (Ca(OH)₂)
    
    p.mb-5 La cal hidratada es más efectiva en términos de ajuste de pH, aunque requiere una preparación previa y debe almacenarse en forma de lechada antes de su aplicación (Noreña, 2002). La cantidad de cal a dosificar depende de las características específicas del agua a tratar. Si estas se mantienen constantes durante el proceso, el cálculo es más sencillo. Sin embargo, cuando hay variaciones en las propiedades del agua, el operario, con base en su experiencia, estima la cantidad requerida y construye una base de datos que relaciona el volumen de lechada con el ajuste de pH alcanzado. Con esta información, basta conocer el pH de entrada para determinar la cantidad de cal necesaria, la cual se aplica mediante un dosificador que regula el volumen administrado (Noreña, 2002).

</template>

<script>
export default {
  name: 'Tema8',
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
