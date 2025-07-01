<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Criterios técnicos para la selección de insumos

    .bg-full-width.bg-fondo-3.mb-5
      .p-4.p-md-5
        .row.mb-4.align-items-center
          .col-lg-9.mb-3.mb-lg-0
            .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
              p.mb-0 La elección de los insumos químicos en los procesos de potabilización debe basarse en criterios técnicos que garanticen la eficiencia del tratamiento, la seguridad del personal y la calidad del agua tratada. Entre los principales criterios se encuentran:
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/tema9/1.png", data-aos="zoom-in").mb-4.mb-lg-0
    
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8.justify-content-center.d-flex
                img(src='@/assets/curso/temas/tema9/2.svg', style="max-width: 110px" alt='AvatarTop')
            p.text-center Calidad del agua cruda
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8.justify-content-center.d-flex
                img(src='@/assets/curso/temas/tema9/3.svg', style="max-width: 110px" alt='AvatarTop')
            p.text-center Eficiencia del insumo químico
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8.justify-content-center.d-flex
                img(src='@/assets/curso/temas/tema9/4.svg', style="max-width: 110px" alt='AvatarTop')
            p.text-center Compatibilidad con otros insumos químicos, de tal forma que no altere otrso procesos unitarios.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8.justify-content-center.d-flex
                img(src='@/assets/curso/temas/tema9/5.svg', style="max-width: 110px" alt='AvatarTop')
            p.text-center Cumplimiento de normativa
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8.justify-content-center.d-flex
                img(src='@/assets/curso/temas/tema9/6.svg', style="max-width: 110px" alt='AvatarTop')
            p.text-center Cumplimiento de límites máximos permisibles de los parámetros fisicoquímicos y microbiológicos
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8.justify-content-center.d-flex
                img(src='@/assets/curso/temas/tema9/7.svg', style="max-width: 110px" alt='AvatarTop')
            p.text-center Facilidad para su dosificación en planta.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8.justify-content-center.d-flex
                img(src='@/assets/curso/temas/tema9/8.svg', style="max-width: 110px" alt='AvatarTop')
            p.text-center Condiciones de uso seguro en planta de tratamiento.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8.justify-content-center.d-flex
                img(src='@/assets/curso/temas/tema9/9.svg', style="max-width: 110px" alt='AvatarTop')
            p.text-center Costos de transporte y almacenamiento
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8.justify-content-center.d-flex
                img(src='@/assets/curso/temas/tema9/10.svg', style="max-width: 110px" alt='AvatarTop')
            p.text-center Personal capacitado para su manejo
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8.justify-content-center.d-flex
                img(src='@/assets/curso/temas/tema9/2.svg', style="max-width: 110px" alt='AvatarTop')
            p.text-center Impactos ambientales asociados a su uso.
    
        .row.justify-content-center
          .col-lg-10
            .bg-full-width.bg-color-7.mb-5
              .px-4.px-md-5.py-4
                p.mb-0 Es importante tener en cuenta que en aguas con alta turbiedad pueden requerir coagulantes más potentes.
    
    div.p-3.bg-color-8.tarjeta
      h3.mb-0 Riesgos asociados al uso de insumos químicos
    
    p.mb-5 El uso de insumos químicos en las plantas de tratamiento de agua implica una serie de riesgos para el personal y el entorno. Entre los principales se encuentran:

    .row.justify-content-center
      .col-lg-10
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema9/11.png', alt='')
            .col-lg
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Inhalación, ingestión o contacto con sustancias como cloro gaseoso, cal viva o ácidos puede ocasionar lesiones graves o incluso la muerte.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Quemaduras en la piel, irritación ocular y afectaciones en las vías respiratorias.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Manipulación prolongada sin elementos de protección personal puede derivar en enfermedades respiratorias o dermatológicas.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Contaminación del entorno por derrames accidentales de coagulantes o cloro.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Riesgos por mezclas de insumos químicos incompatibles, que pueden generar reacciones peligrosas.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Formación de subproductos tóxicos, como los trihalometanos (THMs), resultantes de la reacción del cloro con la materia orgánica presente en el agua.
    
    p.mb-5 Para prevenir afectaciones a la salud o al medio ambiente, es indispensable consultar y seguir las indicaciones contenidas en las hojas de seguridad de cada insumo químico utilizado en la planta de tratamiento. Estas hojas ofrecen información esencial sobre almacenamiento, manipulación segura, primeros auxilios y control de emergencias.


  


</template>

<script>
export default {
  name: 'Tema9',
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
