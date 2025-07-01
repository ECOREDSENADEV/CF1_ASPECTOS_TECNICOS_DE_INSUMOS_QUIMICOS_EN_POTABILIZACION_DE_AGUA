<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Procesos unitarios de potabilización
    
    .row.mb-4.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb- Las plantas de tratamiento de agua potable están conformadas por distintos procesos unitarios. La selección y disposición de estos procesos depende directamente de la calidad del agua cruda. Según sus características, puede ser necesario incorporar desde unidades de aireación hasta sistemas de desinfección y tanques de contacto. A continuación, se describen las principales características de cada uno de estos procesos unitarios.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema5/1.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    separador

    .bg-full-width.bg-color-3.mb-5
      .p-4.py-lg-0.px-4.px-md-5
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 #[span 5.1] Aireación
        
        p.mb-5 Cuando el agua cruda presenta concentraciones elevadas de hierro u otros metales, puede ser necesario incorporar unidades de aireación en la planta de tratamiento. Estas unidades permiten el contacto del agua con el aire, con el objetivo de modificar la concentración de sustancias volátiles presentes. Entre las principales ventajas de la aireación se encuentran:

        .row.justify-content-center
          .col-lg-10
            .bg-color-4.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema5/2.png', alt='')
                .col-lg
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Incrementar el contenido de oxígeno disuelto en el agua.
                    li.mb-3.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Reducir las concentraciones de dióxido de carbono (CO₂) y sulfuro de hidrógeno (H₂S).
                    li.mb-3.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Favorecer la oxidación del hierro y el manganeso.
                    li.mb-3.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Remover compuestos orgánicos volátiles.
        p A continuación, se presentan las figuras que ilustran los tipos de aireadores utilizados en los procesos de potabilización:
    
    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 7.              
              figure.mb-5
                img(src="@/assets/curso/temas/tema5/3.png", data-aos="zoom-in", alt="La imagen presenta los tipos de unidades de aireación que puede requerirse en plantas de tratamiento de agua potable. Por lo general esta unidad se instala antes de iniciar proceso de floculación.").mb-4.mb-lg-0
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aireador tipo escalera
              p Sistema de aireación que utiliza una serie de escalones para oxigenar el agua.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 8.              
              figure.mb-5
                img(src="@/assets/curso/temas/tema5/4.png", data-aos="zoom-in", alt="En este tipo de aireador de cascada tipo escalera, el agua inicialmente choca con la pared causando un efecto de turbulencia, lo cual permite ser generar mayor aireación y remoción de olores y demás componentes que afectan la calidad del agua cruda a tratar.").mb-4.mb-lg-0
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aireador cascada tipo escalera
              p Variante del aireador en escalera donde el agua desciende en forma de cascada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 9.              
              figure.mb-5
                img(src="@/assets/curso/temas/tema5/5.png", data-aos="zoom-in", alt="Esta imagen representa otro tipo de aireador en cascada, donde el agua cae por ambos extremos de los escalones, esto facilita la eficiencia de la aireación y remoción de olores y concentraciones de ciertos componentes que pueden afectar los siguientes procesos en la potabilización del agua.").mb-4.mb-lg-0
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aireador de cascadas
              p Aireador donde el agua cae libremente en varios niveles para mejorar la oxigenación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 10.              
              figure.mb-5
                img(src="@/assets/curso/temas/tema5/6.png", data-aos="zoom-in", alt="La imagen representa un aireador conocido como cascadas de aireación, en éstos el agua se deja caer  en láminas o capas delgadas sobre uno o mas escalones de concreto.").mb-4.mb-lg-0
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aireador de cascadas de aireación
              p Estructura diseñada para maximizar el contacto del agua con el aire mediante múltiples caídas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 11.              
              figure.mb-5
                img(src="@/assets/curso/temas/tema5/7.png", data-aos="zoom-in", alt="Esquema de aireador de bandejas compuesto por una estructura vertical con varias bandejas escalonadas que contienen material de contacto, una tubería de distribución superior y una salida inferior para el agua aireada.").mb-4.mb-lg-0
            .col-lg-9.order-1.mb-3.mb-lg-0
              h5 Aireador tipo bandeja
              p Aireador que distribuye el agua sobre bandejas perforadas para facilitar la oxigenación.
    
    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 #[span 5.2] Mezcla rápida
    
    .row.mb-4.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        p.mb-0 Unidad de tratamiento en la que se inicia el contacto del coagulante con el agua cruda (proceso de coagulación). Su función principal es permitir la dispersión rápida y uniforme del coagulante en el flujo de agua. La mezcla puede generarse mediante turbulencia, utilizando mecanismos hidráulicos o mecánicos. Entre los mezcladores hidráulicos más comunes se encuentran: mezcladores con pantalla, de aquietamiento, de resalto y estáticos. Este tipo de sistemas son ampliamente utilizados en plantas municipales, ya que su operación es menos exigente en comparación con los mezcladores mecánicos.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema5/8.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 12.
          span Mezcladores hidráulicos             
        figure.bg-color-1.p-3
          img(src="@/assets/curso/temas/tema5/9.png", data-aos="zoom-in", alt="La imagen representa ejemplos de mezcladores hidráulicos que por lo general utilizan resaltos hidráulicos para disipar energía en turbulencia y aprovecharla para la mezcla del coagulante.").mb-4.mb-lg-0
        figcaption Nota.  Romero (1999).

    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 #[span 5.3] Floculación
    
    p.mb-5 Este proceso se lleva a cabo después de la mezcla rápida. En esta etapa, se aplica una mezcla lenta que favorece el incremento en la tasa de colisión entre partículas, lo cual permite la formación de flóculos. Para lograr una floculación eficiente, deben considerarse tres características fundamentales:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/24.svg', style="max-width: 54px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .h-100.bg-color-10.text-center
            .p-4
              p.mb-0 El tipo de agitación aplicada.
      .col-md-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/25.svg', style="max-width: 54px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .h-100.bg-color-10.text-center
            .p-4
              p.mb-0 El gradiente de velocidad (G).

      .col-md-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/26.svg', style="max-width: 54px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .h-100.bg-color-10.text-center
            .p-4
              p.mb-0 El tiempo de retención hidráulica

    p La floculación puede realizarse en unidades de tratamiento de tipo vertical u horizontal, dependiendo del diseño específico de la planta. El floculador vertical, por ejemplo, está compuesto por tanques fabricados en concreto u otros materiales como la fibra de vidrio, y se encuentra dividido internamente por tabiques, baffles o pantallas.

    h5.mb-5 A continuación, se presentan imágenes que ilustran distintos tipos de floculadores.

    .row.justify-content-center.mb-5
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 13.
          span Tipos de floculadores             
        figure.bg-color-1.p-3
          img(src="@/assets/curso/temas/tema5/10.png", data-aos="zoom-in", alt="La imagen presenta  ejemplos de floculadores hidráulicos y mecánicos, estes permiten realizar la mezcla lenta para que se el aglutinamiento de las partículas e iniciar con la clarificación del agua.").mb-4.mb-lg-0
        figcaption Nota.  Romero (1999).

    separador

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 #[span 5.4] Sedimentación
    
    p.mb-5 Este proceso se lleva a cabo después de la mezcla rápida. En esta etapa, se aplica una mezcla lenta que favorece el incremento en la tasa de colisión entre partículas, lo cual permite la formación de flóculos. Para lograr una floculación eficiente, deben considerarse tres características fundamentales:

    .row.justify-content-center
      .col-lg-10
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema5/11.svg', alt='')
            .col-lg
              p En esta etapa se retienen los sólidos que no fueron separados en la unidad de floculación. Generalmente, se trata de partículas de menor tamaño. Aunque el agua clarificada comienza a visualizarse en esta fase, aún es necesario que pase por la unidad de filtración para eliminar las partículas más finas. Los sedimentadores convencionales se diseñan teniendo en cuenta dos parámetros clave:
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 <b>Tiempo de retención hidráulica</b>, que debe estar entre 2 y 4 horas.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 <b>Velocidad de flujo</b>, comprendida entre 0,25 y 1,5 cm/s.
    
    p Los sedimentadores pueden tener geometría rectangular o circular. En ambos casos, es fundamental que las zonas de sedimentación estén configuradas para permitir una remoción eficiente de la turbiedad y el color.
    h5.mb-5 A continuación, se presentan figuras que ilustran los distintos tipos de sedimentadores utilizados en plantas de tratamiento de agua potable.

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 14.              
              figure.mb-5
                img(src="@/assets/curso/temas/tema5/12.png", data-aos="zoom-in", alt="Representación de un tanque sedimentador con geometría rectangular, donde se evidencian cuatro zonas permitiendo la sedimentación de partículas discretas y conducir el agua hacia la zona de salida hacia unidades de filtración.").mb-4.mb-lg-0
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tanque de sedimentación rectangular
              p Estructura hidráulica con forma rectangular en la que el agua circula lentamente, permitiendo que los sólidos suspendidos se depositen en el fondo por efecto de la gravedad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 15.              
              figure.mb-5
                img(src="@/assets/curso/temas/tema5/13.png", data-aos="zoom-in", alt="La imagen muestra un sedimentador circular de dosificación central, donde el agua fluye radialmente desde el centro al perímetro externo.").mb-4.mb-lg-0
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Sedimentador rectangular
              p Unidad que cumple la misma función que el tanque de sedimentación, diseñada para separar partículas sólidas del agua mediante el proceso de sedimentación en un canal rectangular.

    separador

    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 #[span 5.5] Filtración
    
    p.mb-5 Las unidades de filtración en las plantas de tratamiento de agua potable pueden ser de geometría circular o rectangular. En las plantas municipales, predominan los filtros rectangulares, mientras que en instalaciones para pequeñas comunidades es común el uso de filtros circulares.

    .row.justify-content-center
      .col-lg-10
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema5/14.svg', alt='')
            .col-lg
              p Estas unidades requieren un control técnico riguroso. Si el operario no gestiona adecuadamente los niveles de turbiedad en las etapas anteriores del tratamiento, existe el riesgo de que los filtros colapsen, lo que afectaría directamente la calidad del agua suministrada. Los filtros están compuestos por lechos filtrantes conformados por capas de grava, gravilla, arena y antracita o carbón activado. La disposición y tipo de materiales pueden variar según el diseño del filtro y la calidad del agua a tratar.
    
    p.mb-5 El proceso de filtración puede realizarse mediante flujo ascendente o descendente, como se ilustra en la figura a continuación.

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 16.              
              figure.mb-5
                img(src="@/assets/curso/temas/tema5/15.png", data-aos="zoom-in", alt="La imagen representa ejemplos de unidades de filtración donde el agua puede tener flujo ascendente o descendente, lo cual se define con el diseño de la planta de tratamiento.").mb-4.mb-lg-0
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tipos de filtros
              p Conjunto de dispositivos que eliminan partículas suspendidas en el agua mediante materiales como arena, grava o antracita, mejorando su claridad y potabilidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 17.              
              figure.mb-5
                img(src="@/assets/curso/temas/tema5/16.png", data-aos="zoom-in", alt="Fotografía de filtros compactos en una planta de agua potable, conformados por cuatro tanques cilíndricos azules conectados entre sí mediante tuberías, ubicados al aire libre.").mb-4.mb-lg-0
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Filtros compactos en planta de agua potable
              p Sistemas de filtración diseñados para operar en espacios reducidos, eficientes en la remoción de impurezas sin requerir instalaciones de gran tamaño.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 18.              
              figure.mb-5
                img(src="@/assets/curso/temas/tema5/17.png", data-aos="zoom-in", alt="Imagen aérea de unidades de filtración y sedimentación en una planta de tratamiento de agua potable, con tres estructuras rectangulares que contienen compartimientos y canales internos para el proceso de purificación. ").mb-4.mb-lg-0
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Unidades de filtración y sedimentación planta de tratamiento de agua potable 
              p Conjunto de estructuras que permiten separar sólidos mediante sedimentación por gravedad y eliminar partículas finas a través de filtración, asegurando un tratamiento completo del agua.
    
    p.mb-5 Como medida de operación para las unidades de filtración, se debe realizar retro lavados de manera diaria o semanal, dependiendo del tipo de agua a tratar, esto garantiza el adecuado funcionamiento de los filtros y evita que el lecho filtrante se sature por acumulación de partículas.

    separador

    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 #[span 5.6] Desinfección
    
    p.mb-5 La función principal de la desinfección es la eliminación de microorganismos patógenos como los coliformes totales, E. Colli, mesófilos, entro otros que pueden ocasionar enfermedades, el proceso de desinfección se encuentra como etapa final de la potabilización, dicho proceso puede realizarse mediante cloración o con otro tipo de desinfectante, sin embargo, el mas usado es la cloración, por lo cual en el presente curso se describen las características principales con la aplicación de cloro.

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-6.p-4.h-100
          figure.mb-3
            img(src='@/assets/curso/temas/tema5/18.png', alt='Texto que describa la imagen')

          h3.text-center Definición
          p.text-small Consiste básicamente en introducir productos clorados en el agua para eliminar todos aquellos microorganismos patógenos que se encuentren presentes.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-6.p-4.h-100
          figure.mb-3
            img(src='@/assets/curso/temas/tema5/19.png', alt='Texto que describa la imagen')

          h3.text-center Tiempo del proceso
          p.text-small Usualmente el proceso tarda alrededor de unos 20 a 30 minutos y gracias al efecto remanente que tiene el cloro, el efecto continuo durante horas o incluso días.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-6.p-4.h-100
          figure.mb-3
            img(src='@/assets/curso/temas/tema5/20.png', alt='Texto que describa la imagen')

          h3.text-center Aplicación
          p.text-small Este procedimiento se utiliza en las grandes redes de distribución de agua potable desde hace ya varias décadas añadiendo cloro al agua para que durante su distribución y consumo no se contamine por microorganismos patógenos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Cloración del agua
    
    .bg-full-width.bg-color-3
      .p-4.p-md-5
        p.mb-5 El proceso de cloración del agua destinada al consumo humano consta de tres etapas, cada una con procedimientos y equipos específicos. Estas etapas permiten garantizar la desinfección y mantener niveles adecuados de cloro residual a lo largo del sistema de distribución:

        .row.mb-5.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema5/21.png", data-aos="zoom-in")
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
              div(titulo="Precloración").justify-content-center
                p En esta etapa se adiciona cloro en el punto de interrupción, con el fin de asegurar que el nivel de cloro residual sea suficiente para alcanzar zonas más alejadas del sistema de distribución. Esta fase prepara el agua para una desinfección más eficaz.
                
              div(titulo="Desinfección en planta").justify-content-center
                p Esta fase ocurre en el depósito de almacenamiento, donde el agua ya ha sido tratada. Es fundamental determinar el tiempo de contacto adecuado para mantener el nivel residual de cloro, garantizando así la eliminación de microorganismos y la calidad microbiológica del agua.
                
              div(titulo="Postcloración").justify-content-center
                p Luego de que el agua ha salido del último tanque, se puede aplicar una dosis adicional de cloro para asegurar que los niveles residuales sean adecuados al momento del consumo. Esta tarea debe ser supervisada y controlada por el equipo operativo de la planta.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Curva de cloro

        p Cuando se aplica cloro al agua que contiene agentes reductores como amoníaco y aminas orgánicas, es posible graficar el comportamiento de su concentración mediante una curva conocida como curva de demanda de cloro. Esta representación permite identificar cómo varía la concentración de cloro residual a medida que se incrementa la dosis de cloro aplicada.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Inicialmente, se observa un aumento progresivo en la demanda de cloro, seguido por una caída en la concentración de cloro residual. Posteriormente, se presenta un nuevo aumento, conocido como punto de quiebre o punto de ruptura, el cual indica que se ha satisfecho la demanda de cloro y comienza a acumularse cloro libre en el agua.
    
    p.mb-5 Estos cambios se deben a que, en una primera fase, el cloro reacciona con compuestos como el amoníaco, formando monocloraminas y dicloraminas. Aunque estas concentraciones pueden disminuir temporalmente, el segundo incremento en la curva se debe a la presencia de cloro libre, que actúa como desinfectante residual.

    .titulo-sexto.color-acento-contenido
      h5 Figura 19.
      span Curva cloración
    
    figure.mb-5
      img(src="@/assets/curso/temas/tema5/23.png", data-aos="zoom-in", alt="Gráfica sobre la relación entre cloro agregado y cloro residual, que incluye las fases de destrucción por compuestos reductores, formación y destrucción de cloraminas y compuestos orgánicos de cloro, así como la aparición de cloro libre.").mb-4.mb-lg-0
      figcaption Nota. Orenda Technologies (2023).
    
    p.mb-5 Es importante destacar que la demanda de cloro varía según cada muestra de agua, ya que depende de factores como la dosis aplicada, su magnitud, el tiempo de contacto, el pH y la temperatura del agua. En términos generales, a mayor tiempo de contacto y mayor temperatura, más eficiente será el proceso de desinfección.
     
     


    


</template>

<script>
export default {
  name: 'Tema5',
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
