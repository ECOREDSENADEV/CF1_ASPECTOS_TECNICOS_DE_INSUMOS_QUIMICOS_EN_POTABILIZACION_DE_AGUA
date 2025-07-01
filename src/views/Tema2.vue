<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de plantas de tratamiento de agua
    
    .row.mb-4.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 El tipo de planta de tratamiento de agua potable y sus procesos unitarios dependen de la calidad del agua cruda. Cuando esta proviene de fuentes hídricas con altos niveles de contaminación, la planta puede requerir procesos más complejos. Asimismo, si el agua presenta un pH bajo o altas concentraciones de hierro, se necesitan unidades adicionales, como aireadores y sistemas para la adición de sustancias químicas, con el fin de facilitar la remoción o estabilización de estos compuestos y permitir que los procesos de coagulación y floculación se desarrollen sin inconvenientes.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema2/1.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Planta de tratamiento de agua potable de tipo convencional
    
    p.mb-5 Este tipo de PTAP incluye unidades de coagulación-floculación, sedimentación y filtración convencional para la remoción de color, turbidez y microorganismos. Generalmente, no requieren unidades adicionales.

    .bg-full-width.bg-color-3.mb-5
      .p-4.py-lg-0.px-4.px-md-5
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Diagrama de flujo planta de tratamiento de agua potable de tipo convencional
            
            figure.mb-5
              img(src="@/assets/curso/temas/tema2/2.svg", data-aos="zoom-in", alt="El esquema representa los procesos unitarios de una planta de tratamiento de agua potable de tipo convencional.").mb-4.mb-lg-0
              figcaption Nota.  Romero (1999).
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Planta para suministro pequeño con agua cruda de buena calidad
        
        p.mb-5 Cuando la fuente abastecedora tiene agua cruda con bajos niveles de turbiedad y poca contaminación, es posible instalar o construir plantas de tratamiento con unidades de sedimentación, filtración y desinfección.

        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span Diagrama de flujo planta para suministro pequeño con agua cruda de buena calidad
            
            figure.mb-5
              img(src="@/assets/curso/temas/tema2/3.svg", data-aos="zoom-in", alt="El esquema muestra las unidades que componen una planta para suministro pequeño con agua cruda de buena calidad, lo cual permite reducir algunos procesos como la floculación.").mb-4.mb-lg-0
              figcaption Nota.  Romero (1999).
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Plantas de ablandamiento
    
    .row.mb-4.align-items-center
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p Cuando el agua presenta una alta concentración de dureza, es decir, elevados niveles de calcio y magnesio, se requiere una planta de tratamiento con una unidad de ablandamiento. Esta unidad tiene como objetivo reducir la dureza del agua para prevenir posibles afectaciones a la salud humana y evitar la formación de incrustaciones en las tuberías. En este tipo de plantas, puede ser necesario adicionar productos como cal u otros compuestos químicos, lo que complejiza el tratamiento.
          p.mb-0 En los dos diagramas que se incluyen a continuación se detallan las unidades de tratamiento involucradas, así como los productos que deben añadirse para que los procesos de coagulación, floculación y sedimentación se desarrollen de manera adecuada.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/4.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.bg-color-3.mb-5
      .p-4.py-lg-0.px-4.px-md-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Diagrama de flujo planta de ablandamiento con doble mezcla rápida
        
        figure.mb-5
          img(src="@/assets/curso/temas/tema2/5.svg", data-aos="zoom-in", alt="El diagrama muestra los procesos unitarios de una planta que requiere proceso de ablandamiento o disminución de la dureza del agua, en este caso puede requerirse doble punto de mezcla rápida.").mb-4.mb-lg-0
          figcaption Nota.  Romero (1999).
        
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 4.
              span Diagrama de flujo planta de ablandamiento con una unidad de mezcla rápida
            
            figure.mb-5
              img(src="@/assets/curso/temas/tema2/6.svg", data-aos="zoom-in", alt="EL diagrama representa los proceso de una de ablandamiento, donde se requiere adición de productos como la cal, que además contribuye a estabilizar el pH del agua.").mb-4.mb-lg-0
              figcaption Nota.  Romero (1999).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Plantas de remoción de hierro y magnesio

    .row.mb-4.align-items-center
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p Se trata de sistemas diseñados para remover los metales presentes en el agua. Su implementación es común cuando la fuente de abastecimiento es subterránea, ya que estas suelen contener concentraciones elevadas de hierro y manganeso. Estos metales pueden causar coloraciones intensas, deteriorar las redes de distribución y representar riesgos para la salud humana. Por ello, es fundamental disponer de plantas que aseguren su adecuada eliminación.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/7.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.bg-color-3.mb-5
      .p-4.py-lg-0.px-4.px-md-5
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 5.
              span Diagrama de flujo planta de remoción de hierro y magnesio
            
            figure.mb-5
              img(src="@/assets/curso/temas/tema2/8.svg", data-aos="zoom-in", alt="El esquema muestra los procesos unitarios que puede tener una planta donde el agua druda presenta altos contenidos de hierro y magnesio, por lo cual se necesita ajuste de pH y adición de oxidante químico.").mb-4.mb-lg-0
              figcaption Nota.  Romero (1999).
        
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 6.
              span Diagrama de flujo planta de remoción de hierro y magnesio con aireación
            
            figure.mb-5
              img(src="@/assets/curso/temas/tema2/9.svg", data-aos="zoom-in", alt="El diagrama muestra una planta donde el agua a tratar contiene hierro y magnesio, en este caso se encuentran varios puntos de cloración.").mb-4.mb-lg-0
              figcaption Nota.  Romero (1999).

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
