<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Lineamientos técnicos de agua potable y saneamiento
    
    .bg-full-width.bg-color-3
      .p-4.py-lg-0.px-4.px-md-5
        .row.mb-4.align-items-center
          .col-lg-9.mb-3.mb-lg-0
            .bg-color-1.p-4(data-aos="fade-left").mb-4
              p.mb-0 En Colombia, la regulación del sector de potabilización del agua y saneamiento básico se rige por el Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS). Este instrumento, elaborado por el Ministerio de Vivienda, tiene como objetivo mejorar la calidad en la prestación de estos servicios esenciales, proporcionando criterios técnicos para el diseño, construcción, operación y mantenimiento de los sistemas involucrados.
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/tema1/1.png", data-aos="zoom-in").mb-4.mb-lg-0
        
        p.mb-5 El uso de las guías y manuales del RAS es de carácter obligatorio, conforme a lo establecido en la Resolución 0330 de 2017. Esta normativa aplica para los sistemas de captación, conducción, almacenamiento y tratamiento tanto de agua potable como residual.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Manuales y guías disponibles
        
        p.mb-5 Hasta la fecha, el Gobierno colombiano ha desarrollado:

        .row.justify-content-center
          .col-lg-10
            .bg-color-4.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/2.png', alt='')
                .col-lg.p-4.p-lg-0
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 <b>14 manuales</b> con recomendaciones de buenas prácticas en el sector de agua potable y saneamiento básico.
                    li.mb-3.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 <b>8 guías</b> dirigidas a profesionales y entidades encargadas del desarrollo de proyectos en este sector, con el fin de orientar su correcta implementación.
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 #[span 1.1] Resolución 0330 de 2017: Contenido y alcance
    
    p.mb-5 Esta resolución reglamenta los requisitos técnicos obligatorios para todas las etapas de los proyectos de infraestructura en acueducto, alcantarillado y aseo, incluyendo:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-around.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema1/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Condiciones generales del RAS
                p.text-center Se establecen los principios y lineamientos técnicos para los sectores de agua potable y saneamiento básico.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Requisitos técnicos específicos
                p.text-center Define las normas técnicas para el diseño, construcción, puesta en marcha, operación, mantenimiento y rehabilitación de los sistemas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Control y sanciones
                p.text-center Se establece el régimen de seguimiento, supervisión y sanciones en caso de incumplimiento del reglamento técnico.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema1/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Certificaciones y permisos
                p.text-center Se detallan las licencias, certificaciones y permisos requeridos para ejecutar proyectos dentro del marco del RAS.
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema1/3.png', alt='')

        separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 #[span 1.2] Normatividad calidad de agua

    .row.mb-4.align-items-center
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 En Colombia, la calidad del agua está regulada por diversas normas y decretos que establecen los parámetros y características que debe cumplir para ser apta para el consumo humano y animal. El Decreto 1575 de 2007 define el agua potable como aquella que reúne las condiciones físicas, químicas y microbiológicas estipuladas en las normas de calidad del agua vigentes en el país. A continuación se presentan las tablas con los parámetros establecidos para el control de calidad del agua en Colombia, clasificados según sus características físicas, químicas y microbiológicas. Estos valores permiten identificar posibles riesgos para la salud humana y deben ser cumplidos por los prestadores del servicio, conforme a lo dispuesto en la Resolución 2115 de 2007.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/8.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Características físicas
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Característica
                th Unidad
                th Valor máximo aceptable
            tbody
              tr
                td Color aparente
                td UPC
                td 15
              tr
                td Turbiedad
                td NTU
                td 2
        
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Características químicas
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Característica
                th Unidad
                th Valor máximo aceptable
            tbody.bg-color-white
              tr
                td Cloro residual
                td mg/L
                td 0,3 - 2,0
              tr
                td pH
                td pH
                td 6,5 - 9,0
              tr
                td Nitratos
                td mg/L
                td 10
              tr
                td Nitritos
                td mg/L
                td 0,1
              tr
                td Dureza total
                td mg/L
                td 300
              tr
                td Sulfatos
                td mg/L
                td 250
              tr
                td Carbono orgánico total
                td mg/L
                td 5,0
              tr
                td Manganeso
                td mg/L
                td 0,1
              tr
                td Hierro total
                td mg/L
                td 0,3
              tr
                td Alcalinidad total
                td mg/L
                td 200
              tr
                td Aluminio
                td mg/L
                td 0,2
              tr
                td Mercurio
                td mg/L
                td 0,001
              tr
                td Calcio
                td mg/L
                td 60
              tr
                td Cloruros
                td mg/L
                td 250
              tr
                td Magnesio
                td mg/L
                td 36
              tr
                td Molibdeno
                td mg/L
                td 0,07
              tr
                td Zinc
                td mg/L
                td 3
              tr
                td Fosfatos
                td mg/L
                td 0,5

        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Características microbiológicas
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Característica
                th Unidad
                th Valor máximo aceptable
            tbody.bg-color-white
              tr
                td Coliformes totales
                td UFC/100 mL
                td 0
              tr
                td Escherichia coli
                td UFC/100 mL
                td 0
              tr
                td Mesófilos
                td UFC/100 mL
                td 100

    .bg-full-width.bg-color-3
      .px-4.px-md-5.pb-md-3  
        separador

        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 #[span 1.3] Normatividad calidad de agua
        
        p.mb-5 Según lo establecido en la Resolución 0330 de 2017, la selección de tecnologías y procesos unitarios de tratamiento en los sistemas de potabilización debe basarse en estudios técnicos integrales que consideren los siguientes aspectos fundamentales:

        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/9.png", data-aos="zoom-in")
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
              div(titulo="Caracterización del agua cruda").justify-content-center
                p Evaluación físico-química y microbiológica del recurso hídrico en su estado natural, como insumo para determinar los tratamientos necesarios.
                
              div(titulo="Reconocimiento sanitario y evaluación del riesgo").justify-content-center
                p Inspección en campo de la microcuenca para determinar el nivel de riesgo sanitario asociado al abastecimiento de agua.
                
              div(titulo="Nivel tecnológico adecuado").justify-content-center
                p La selección de tecnologías debe considerar la capacidad técnica y administrativa de la empresa de servicios públicos o la junta administradora del sistema.
                
              div(titulo="Parámetros de diseño sostenibles").justify-content-center
                p Los diseños deben incluir alternativas viables de tratamiento, garantizando eficiencia operativa y sostenibilidad económica.
              div(titulo="Análisis de vulnerabilidad del sistema").justify-content-center
                p Evaluación del comportamiento de la Planta de Tratamiento de Agua Potable (PTAP) ante variaciones extremas en la calidad del agua cruda, como episodios de alta turbiedad por fenómenos climáticos.
                


      
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
