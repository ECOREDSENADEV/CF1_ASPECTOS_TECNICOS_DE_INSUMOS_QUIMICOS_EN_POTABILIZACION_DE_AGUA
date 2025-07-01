<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.mb-4.align-items-center
      .col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 El acceso a agua potable es un derecho fundamental y una necesidad esencial para la salud pública. Garantizar la calidad del agua requiere una comprensión precisa de los procesos técnicos que intervienen en su tratamiento, especialmente aquellos relacionados con la aplicación de insumos químicos. Estos productos, como los coagulantes, desinfectantes y sustancias reguladoras de pH, son indispensables para transformar el agua cruda en un recurso seguro para el consumo humano. 
      .col-lg-3.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in").mb-4.mb-lg-0


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El presente componente formativo ofrece un recorrido por los fundamentos técnicos que rigen la selección y el uso de insumos químicos en las plantas de tratamiento de agua potable. Se abordan temas como las características fisicoquímicas del agua, los procesos unitarios involucrados en la potabilización, la normativa colombiana vigente y los criterios técnicos para determinar las dosis adecuadas de los productos utilizados. Además, se incluyen los procedimientos de ensayo y medición que permiten diagnosticar las condiciones del agua y ajustar los tratamientos en función de sus propiedades específicas. 


    p(data-aos="fade-left") #[b Objetivo general:] Aplicar procedimientos técnicos y normativos para realizar ensayos como la prueba de jarras para determinar las dosis de coagulantes, interpretar resultados y proponer ajustes en los procesos de tratamiento de agua potable.
    

</template>

<script>
export default {
  name: 'Introduccion',
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
