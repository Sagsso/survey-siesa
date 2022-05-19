import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'survey-sg';

  surveyState = {
    started: false,
    ended: false
  }
  questions = [
    {
      introduction: "Ahora mismo me comunicaré con el Área de Soporte porque necesito facturar y el sistema no me lo permite; en mi tienda no me es posible vender. Puedes colaborarme, por favor.",
      question: "¿Conoces cuál es la prioridad de mi caso?",
      icon: "shopping-app",
      options: [
        { id: 1, option: "Alta", isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! La prioridad es urgente; al ser un caso crítico, requiere atención inmediata. Representa parálisis total del negocio." },
        { id: 2, option: "Urgente", isCorrect: true, feedback: "¡Muy bien! La prioridad es urgente; al ser un caso crítico, requiere atención inmediata. Representa parálisis total del negocio." },
        { id: 3, option: "Media", isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! La prioridad es urgente; al ser un caso crítico, requiere atención inmediata. Representa parálisis total del negocio." },
        { id: 4, option: "Baja", isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! La prioridad es urgente; al ser un caso crítico, requiere atención inmediata. Representa parálisis total del negocio." },
      ]
    },
    {
      introduction: "Hoy también me contactaré porque no sé cómo liquidar el contrato de un empleado que acaba de renunciar y requiero que me indiquen el paso a paso para poder realizar este proceso de manera correcta.",
      question: "Podrías indicarme, por favor, ¿cuál canal es el más adecuado para que mi necesidad sea solucionada?",
      icon: "terms",
      options: [
        { id: 1, option: "Canal virtual – Página web de soporte (Manuales y videos)", isCorrect: true, feedback: "¡Muy bien! El canal adecuado para Juanito es el virtual, específicamente la opción ‘Manuales’, dado que es uno de los mecanismos proporcionados por Siesa para capacitar con respecto a la realización de un proceso dentro del sistema. Recuerda que otros métodos de aprendizaje son los cursos virtuales en vivo o la solicitud de horas facturables de consultoría." },
        { id: 2, option: "Canal virtual – Página web de soporte (Chat de nómina)", isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! El canal adecuado para Juanito sí es el virtual, pero específicamente la opción ‘Manuales’. Recuerda que mediante el chat se atienden dudas puntuales o errores del sistema, pero no se capacita con respecto a la realización de un proceso." },
        { id: 3, option: "Canal telefónico", isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! El canal adecuado para Juanito es el virtual, específicamente la opción ‘Manuales’. Recuerda que mediante el canal telefónico se atienden novedades presentadas con el sistema, pero no se capacita con respecto a la realización de un proceso." },
      ]
    },
    {
      introduction: "De igual manera, me contactaré con Siesa porque tengo un descuadre del mes anterior entre el módulo comercial y el módulo financiero, lo que me impide hacer el cierre contable de este mes y presentar un informe a la gerencia.",
      question: "¿Sabes cuál canal es el más adecuado para que mi necesidad sea solucionada?",
      icon: "visual-data",
      options: [
        { id: 1, option: "Canal virtual – Página web de soporte (Manuales y videos)", isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! El canal adecuado para Juanito sí es el virtual, pero específicamente la opción ‘Chat 8.5, Enterprise y SBS’. Recuerda que los manuales y los videos son de autogestión y el caso expuesto por Juanito requiere la intervención de un agente de servicio." },
        { id: 2, option: "Canal virtual – Página web de soporte (Chat 8.5, Enterprise y SBS)", isCorrect: true, feedback: "¡Muy bien! El canal adecuado para Juanito es el virtual, específicamente la opción ‘Chat 8.5, Enterprise y SBS’, dado que es el mejor mecanismo proporcionado por Siesa para atender novedades con prioridad alta." },
        { id: 3, option: "Canal telefónico", isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! El canal adecuado para Juanito sí es el virtual, pero específicamente la opción ‘Chat 8.5, Enterprise y SBS’. Recuerda que los manuales y los videos son de autogestión y el caso expuesto por Juanito requiere la intervención de un agente de servicio." },
      ]
    },
    {
      introduction: "Adicionalmente, tengo un ticket creado hace algunos días y no tengo información al respecto. Requiero saber cómo va el proceso de solución.",
      question: "¿Sabes cuál canal es el más adecuado para que mi necesidad sea solucionada?",
      icon: "designer",
      options: [
      {id:1, option: "Canal virtual – Página web de soporte (Chat de seguimiento)", isCorrect: true, feedback: "¡Muy bien! El canal adecuado para Juanito es el virtual, específicamente la opción ‘Chat de seguimiento’, dado que es el único mecanismo proporcionado por Siesa para solicitar información y/o gestión de un ticket ya reportado a las áreas de Soporte y Soluciones IT."},
      {id:2, option: "Canal telefónico",isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! El canal que mejor se ajusta a la necesidad de Juanito es el virtual, específicamente la opción ‘Chat de seguimiento’. Recuerda que el canal telefónico es el más indicado para atención de novedades urgentes con el sistema, las cuales representan parálisis total de la operación del negocio."},
      {id:3, option: "Canal virtual – Página web de soporte (Manuales y videos)", isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! El canal que mejor se ajusta a la necesidad de Juanito es el virtual, específicamente la opción ‘Chat de seguimiento’. Recuerda que el canal telefónico es el más indicado para atención de novedades urgentes con el sistema, las cuales representan parálisis total de la operación del negocio."},
      
      ]
      },      
    {
      introduction: "Finalmente, debo solicitar un requerimiento porque necesito que me desarrollen una nueva funcionalidad en el sistema. Sé que debo crear un ticket mediante la página web de soporte y que es el único canal de atención disponible para este tipo de servicios, pero desconozco la prioridad de estos casos. Puedes colaborarme, por favor.",
      question: "¿Cuál es la prioridad de mi caso?",
      icon: "pair-programming",
      options: [
        { id: 1, option: "Alta", isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! La prioridad es baja. Crear requerimientos y suplir nuevas necesidades requiere planeación. Por lo anterior, el ticket se crea con prioridad baja, el cual tiene un tiempo de primera respuesta de 3 días hábiles." },
        { id: 2, option: "Urgente", isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! La prioridad es baja. Crear requerimientos y suplir nuevas necesidades requiere planeación. Por lo anterior, el ticket se crea con prioridad baja, el cual tiene un tiempo de primera respuesta de 3 días hábiles." },
        { id: 3, option: "Media", isCorrect: false, feedback: "Oh, oh… ¡Puedes mejorar! La prioridad es baja. Crear requerimientos y suplir nuevas necesidades requiere planeación. Por lo anterior, el ticket se crea con prioridad baja, el cual tiene un tiempo de primera respuesta de 3 días hábiles." },
        { id: 4, option: "Baja", isCorrect: true, feedback: "¡Muy bien! La prioridad es baja. Crear requerimientos y suplir nuevas necesidades requiere planeación. Por lo anterior, el ticket se crea con prioridad baja, el cual tiene un tiempo de primera respuesta de 3 días hábiles." },
      ]
    },
  ]


  ngOnInit() {

  }

  startSurvey() {
    this.surveyState.started = true;
  }
  finishSurvey(event: boolean) {
    this.surveyState.ended = event;
  }
}
