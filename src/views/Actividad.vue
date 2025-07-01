<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Aspectos técnicos de insumos químicos en potabilización de agua',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Comprender los fundamentos prácticos y normativos necesarios para la selección de insumos químicos requeridos en procesos de potabilización de agua.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función de un coagulante en el proceso de potabilización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ajustar el pH del agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar microorganismos patógenos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Desestabilizar partículas coloidales para formar flóculos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar la alcalinidad del agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué parámetro físico se mide en NTU y se relaciona directamente con los sólidos suspendidos en el agua?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color aparente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Turbiedad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'pH.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conductividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el rango de pH ideal para que el sulfato de aluminio sea efectivo como coagulante?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '4,0 a 6,0.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '6,5 a 7,5.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '7,0 a 9,0.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '6,5 a 8,5.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el desinfectante más comúnmente utilizado en el proceso de potabilización?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ozono.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Peróxido de hidrógeno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rayos ultravioleta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cloro.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué compuesto se usa comúnmente para elevar el pH del agua en plantas de potabilización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cal hidratada (Ca(OH)₂).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sulfato de aluminio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ácido sulfúrico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cloro líquido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de planta de tratamiento se recomienda cuando el agua tiene alta concentración de hierro?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Planta convencional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planta con aireadores y oxidantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Planta de ablandamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planta compacta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué presentación de cloro ofrece mayor residualidad en redes de distribución?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cloro gaseoso (Cl₂).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cloramina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cloro granulado (hipoclorito de calcio).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cloro líquido (hipoclorito de sodio).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Según la Resolución 2115 de 2007, ¿cuál es el valor máximo aceptable de coliformes totales en agua potable?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0 UFC/100 mL.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '10 UFC/100 mL.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '1 UFC/100 mL.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '100 UFC/100 mL.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué riesgo implica mezclar hipoclorito de sodio con un ácido?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formación de flóculos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pérdida de eficacia del cloro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Liberación de gas cloro tóxico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disminución del pH.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes coagulantes requiere aireación para oxidarse adecuadamente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sulfato férrico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sulfato de aluminio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cloruro férrico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sulfato ferroso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
