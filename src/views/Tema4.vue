<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Caracterización del agua cruda: ensayos <em>in situ</em> y de laboratorio.
    
    .row.mb-4.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 Para conocer las propiedades del agua que se va a tratar, es fundamental realizar mediciones tanto in situ como en laboratorio. Estas evaluaciones permiten identificar parámetros clave que influyen directamente en el proceso de potabilización y en la selección de los insumos químicos necesarios.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema4/1.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    separador

    .bg-full-width.bg-color-3.mb-5
      .p-4.py-lg-0.px-4.px-md-5
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 #[span 4.1] Ensayos <em>in situ</em> 
        
        p.mb-5 Los análisis <em>in situ</em> permiten evaluar de forma inmediata ciertas variables del agua cruda, las cuales son determinantes para establecer la tratabilidad y garantizar una potabilización adecuada. Entre las pruebas recomendadas se encuentra:

        .titulo-con-imagen.mb-3(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Determinación de turbiedad
        .row.mb-4.align-items-center
          .col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
            p.mb-0 La turbiedad indica la presencia de sólidos suspendidos en el agua. Su medición se realiza mediante turbidímetros, ya sean portátiles o de laboratorio, y los resultados se expresan en NTU (unidades nefelométricas de turbiedad). En las plantas de tratamiento de agua potable, este parámetro se controla diariamente para ajustar la dosis óptima de coagulante. Durante la fase de arranque del sistema, la turbiedad, junto con el color aparente, se considera esencial para definir la viabilidad del tratamiento.
          .col-lg-3.order-1.order-lg-2
            figure
              img(src="@/assets/curso/temas/tema4/2.png", data-aos="zoom-in").mb-4.mb-lg-0
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Cuando la turbiedad del agua supera los niveles contemplados en el diseño y operación de la planta de tratamiento, se recomienda suspender temporalmente el proceso, ya que esto puede comprometer el funcionamiento de las unidades, generar el colapso del sistema y llevar al incumplimiento de los parámetros de calidad establecidos para el agua potable.

        .row.mb-4.align-items-center
          .col-lg-11.mb-3.mb-lg-0
            p.mb-0 Para medir la turbiedad, se toma una muestra de agua en un recipiente limpio, evitando agitarla en exceso, ya que esto podría alterar la concentración de partículas y generar lecturas incorrectas. Luego, se llena una celda del turbidímetro con la muestra. El equipo proyecta un haz de luz a través del agua y mide la cantidad de luz dispersada por las partículas presentes. El resultado se expresa en NTU (Unidades Nefelométricas de Turbidez).
          .col-lg-1
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/temas/tema4/4.svg", data-aos="zoom-in").mb-4.mb-lg-0
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Determinación de color aparente
    
    p.mb-5 El color aparente del agua influye directamente en el proceso de potabilización. Su medición es fundamental en las pruebas de tratabilidad, especialmente cuando el agua cruda presenta coloraciones visibles. En estos casos, es necesario calcular la dosis de coagulante que permita remover tanto la turbiedad como el color, garantizando así el cumplimiento de los estándares de calidad y reduciendo los riesgos para la salud humana.


    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/5.png', alt='')
            .col-lg.order-lg-1.p-5
              p.mb-0 La medición se realiza con un colorímetro, ya sea portátil o de laboratorio, o con equipos multiparámetro. Los resultados se reportan en Unidades de Platino-Cobalto (UPC). Para su medición, se coloca la muestra en una celda del equipo. El instrumento mide la absorbancia de luz a una longitud de onda específica y compara el resultado con una serie estándar de soluciones de platino-cobalto.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Medición de pH
    
    p.mb-5 El pH es una característica fisicoquímica clave, ya que influye directamente en la acción del coagulante. Cuando se trata agua con pH bajo (menor a 7), el proceso de floculación puede verse afectado, por lo que es necesario estabilizar el pH mediante la adición de insumos como la cal. Esto permite favorecer el aglutinamiento de partículas y avanzar en el proceso de potabilización.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/6.png', alt='')
            .col-lg.p-5
              p.mb-0 La medición del pH se realiza con equipos portátiles o de laboratorio que deben estar calibrados y en buen estado. Se toma la muestra en un recipiente o <em>beaker</em> limpio y se introduce la sonda del medidor. Un rango óptimo para facilitar la floculación está entre 6,5 y 8,0 unidades de pH.
    
    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 #[span 4.2] Ensayos de laboratorio
    
    p.mb-5 Para definir el tipo de tratamiento que requiere el agua para su potabilización, es indispensable realizar análisis en laboratorio que permitan identificar características fisicoquímicas específicas. Estos resultados pueden evidenciar la necesidad de incorporar unidades adicionales en la planta de tratamiento. Entre los parámetros más relevantes se encuentran:

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bg-color-9.p-5.text-white
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/temas/tema4/7.png', alt='Texto que describa la imagen')
          
        h2 Hierro
        p Concentraciones elevadas de hierro pueden provocar sabores y olores indeseados en el agua. Ante esta situación, la planta de tratamiento debe incluir unidades de aireación antes del proceso de floculación, con el fin de oxidar el hierro y facilitar su remoción.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bg-color-10.p-5
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/temas/tema4/8.png', alt='Texto que describa la imagen')
          
        h2 Calcio y magnesio
        p Altos niveles de calcio y magnesio indican la presencia de agua dura, la cual puede generar incrustaciones en las redes de conducción y afectar el rendimiento de las unidades de tratamiento. En estos casos, es necesario implementar medidas que permitan reducir la dureza del agua para proteger la infraestructura del sistema.
    
    p Una vez potabilizada el agua se deben cumplir con los valores máximos permisibles establecidos en la tabla 1, garantizando que el agua es apta para consumo humano.




    


</template>

<script>
export default {
  name: 'Tema4',
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
