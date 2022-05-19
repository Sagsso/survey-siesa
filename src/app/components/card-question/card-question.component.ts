import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Toast } from 'bootstrap';


@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.scss']
})
export class CardQuestionComponent implements OnInit {

  @Input() questions: any;
  @Output() emitFinish = new EventEmitter<boolean>();
  feedback = null;
  isCorrect = null;
  currentQuestion = 0;
  surveyFinished = false;
  responses: any[] = [];

  @ViewChild('myToast',{static:true}) toastEl!: ElementRef<HTMLDivElement>;
  toast: Toast | null = null;
  constructor(private db: AngularFirestore) { }
  ngOnInit(): void {
    this.toast = new Toast(this.toastEl.nativeElement,{});
  }

  selectAnswer(opt: any) {
    this.feedback = opt.feedback;
    this.isCorrect = opt.isCorrect;
    this.toast!.show();
    this.responses.push(opt);
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  finish() {
    console.log('FINISHED');
    this.surveyFinished = true;
    this.emitFinish.emit(true);
    // this.db.collection()
  }

}
