import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { VoiceRecognitionService } from '../service/voice-recognition.service'

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss'],
  providers: [VoiceRecognitionService]
})
export class SpeechToTextComponent implements OnInit {

  text: string;
  test: any;
  name = 'Angular 6';
  email="";
  aa:boolean=false;

  users=[{
    id:'Pranav',
    email:'abc@gmail.com'
  },{
    id:'Veeramani',
    email:'xyz@hotmail.com'
  },{
    id:'Aravind',
    email:'aravind@citi.com'
  },{
    id:'Citibank',
    email:'test@gmail.com'
  }]

  setIndex(ii){
    this.aa=ii;
    console.log
  }


  constructor(
    public service : VoiceRecognitionService
  ) {
    this.service.init()
   }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   // changes.prop contains the old and the new value...
  //   this.test = changes;
  //   alert(changes)
  // }

}
