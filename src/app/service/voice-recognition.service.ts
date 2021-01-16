import { Injectable } from '@angular/core';


declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

 recognition =  new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords;

  constructor() { }

  init() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', (condition) => {
      // if (this.isStoppedSpeechRecog) {
      //   this.recognition.stop();
      //   console.log("End speech recognition")
      // } else {
      //   this.wordConcat()
      //   this.recognition.start();
      // }
      this.isStoppedSpeechRecog = true;
      this.formatOutput()
      this.recognition.stop();
      console.log("End speech recognition");
    });
  }
  stop() {
    this.isStoppedSpeechRecog = true;
    this.formatOutput()
    this.recognition.stop();
    console.log("End speech recognition")
  }

  formatOutput() {
    // this.text = this.text + ' ' + this.tempWords + '.';
    this.text = this.tempWords;
    //this.tempWords = '';
  }
}
