<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Coagulantes
    
    .row.mb-4.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 En Colombia, los procesos de potabilización del agua emplean principalmente coagulantes inorgánicos de origen metálico. Su función principal es aglutinar las partículas o sólidos suspendidos presentes en el agua, facilitando su precipitación o flotación, y contribuyendo así a la clarificación del agua. Entre los floculantes más utilizados en las plantas de tratamiento se encuentran los siguientes (Murillo et al., 2020): 
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema6/1.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema6/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Sulfato de aluminio
              p Sal compuesta por aluminio, azufre y oxígeno. La floculación es más efectiva en rangos de pH entre 5,5 y 7,5. Puede combinarse con polímeros o con insumos como la cal para ajustar el pH.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema6/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Hidroxicloruro de aluminio (Policloruro de aluminio - PAC)
              p Permite la formación de flóculos más grandes y actúa en un rango de pH amplio (5 a 9). Su estado líquido lo hace más estable y facilita su aplicación directa o diluida.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema6/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Sulfato férrico
              p Compuesto de hierro, azufre y oxígeno. Se emplea ampliamente en procesos de floculación para aguas con alta turbiedad, especialmente cuando hay contaminación por actividades industriales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema6/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Sulfato ferroso
              p Sal de color verde que requiere aireación para oxidarse correctamente. Genera mayor cantidad de lodos que otros coagulantes y su uso no es común en potabilización, limitándose a casos específicos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema6/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cloruro férrico
              p Sólido altamente volátil, empleado principalmente en el tratamiento de aguas residuales industriales y aguas ligeramente básicas. Su uso presenta inconvenientes por ser corrosivo y por aportar color al agua.

</template>

<script>
export default {
  name: 'Tema6',
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
