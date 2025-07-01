<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Desinfectantes
    
    .row.mb-4.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 La desinfección del agua, como se mencionó anteriormente, permite eliminar microorganismos patógenos presentes en el recurso hídrico. Durante el proceso de potabilización, esta etapa puede realizarse mediante diversos productos químicos, siendo el cloro el insumo más utilizado en las plantas de tratamiento de agua, gracias a su eficacia y disponibilidad. A continuación, se describen los principales desinfectantes empleados en la potabilización:
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema7/1.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Cloro
    
    p.mb-5 Es el desinfectante químico más utilizado debido a su efectividad para eliminar la carga microbiológica en el agua destinada al consumo humano. Se comercializa en distintas presentaciones, entre las que se destacan:

    
    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema7/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cloro gaseoso (Cl₂)
              p Gas de olor picante y color amarillo verdoso. Es poco soluble en agua y soluble en álcalis. Presenta riesgo de explosión debido a su alto poder oxidante, por lo cual se almacena en cilindros a presión bajo condiciones de seguridad estrictas. Se aplica mediante cloradores de gas que permiten ajustar la dosificación. Su uso es común por la alta residualidad que ofrece en redes de distribución. Requiere personal capacitado para su manipulación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema7/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cloro líquido (hipoclorito de sodio - NaClO)
              p Líquido de color amarillo o verdoso, con olor fuerte. Es más seguro que el cloro gaseoso, aunque también es corrosivo y sensible a la luz y al calor. Se dosifica mediante bombas dosificadoras, aplicándose en solución o de forma directa según el caudal. Su residualidad es menor en comparación con el cloro gaseoso.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema7/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cloro granulado (hipoclorito de calcio - Ca(ClO)₂)
              p Compuesto sólido granular de color blanco o grisáceo, con un contenido de cloro activo entre 65 % y 70 %. Es común en sistemas rurales, piscinas y plantas pequeñas. No se recomienda para sistemas con altos caudales, ya que puede generar incrustaciones en tuberías y equipos de dosificación.
          
</template>

<script>
export default {
  name: 'Tema7',
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
