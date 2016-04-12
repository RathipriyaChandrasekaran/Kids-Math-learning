import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/page1/page1.html'
})

export class Page1 {
  constructor() {
    this.score = 0;
    this.inProgress = false;
    this.speed = 10;

    this.questions = [
      {q:"5 + 3", ans:"8", opts:["9", "7", "2", "8"]},
      {q:"9 + 1", ans:"10", opts:["10", "5", "11", "8"]},
      {q:"3 + 3", ans:"6",  opts:["9", "5", "6", "0"]},
      {q:"4 + 2", ans:"6", opts:["2" , "7" , "5" , "9"]}
    ];

    this.reset();
  }

  reset () {
    this.doneCount = 0;
    this.qIdx = 0;
    this.remaining = this.speed;
  }

  onStart() {
    this.inProgress = true;
    this.reset();

    this.timer = setInterval(() => {
      this.remaining -= 1;
      if (this.remaining == 0) {
        this.doneCount ++;
        if (this.doneCount == this.questions.length) {
          clearInterval(this.timer);
          this.inProgress = false;
          return;
        }
        this.remaining = this.speed;
        this.qIdx++;
      }
    }, 1000);
  }

  onCancel() {
    this.inProgress = false;
  }

  onValue() {
    this.score = 0;
  }
}
