import { Component, trigger, style, state,transition, animate, keyframes, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
     state('active', style({
       transform: 'scale(1.04)'
     })),
     transition('inactive => active', animate('500ms ease-in')),
     transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('note', [
      state('inactive', style({
        opacity:'0'
      })),
      state('active', style({
        opacity:'1'
      })),
      transition('inactive => active',[
        animate(300, keyframes([
          style({opacity:0, transform: 'translateY(0)', offset:0}),
          style({opacity:1, transform: 'translateY(-15px)', offset:0.6}),
          style({opacity:1, transform: 'translateY(0)', offset:0}),
        ]))
      ]),
      transition('active => inactive',[
        animate(300, keyframes([
          style({opacity:1, transform: 'translateY(0)', offset:0}),
          style({opacity:1, transform: 'translateY(-15px)', offset:0.7}),
          style({opacity:0, transform: 'translateY(100%)', offset:0}),
        ]))
      ])
    ]),
    trigger('itemEnter',[
      state('in', style({transform: 'translateY(0)'})),
      
      transition('void => *' , [
        style({opacity:'0', transform: 'translateY(-100%)'}),
        animate('300ms ease-in')
      ]),
      transition('* => void' , [
        
        animate('300ms ease-in', style({opacity:'0', transform: 'scaleY(0) translateY(200px)'}))
      ])
    ])
  ]
})
export class AppComponent {
  state: string = 'inactive';

  ourItems : string[] =[
    'Angular animations'
  ];

  toggleFocus(){
    console.log('inside toggle focus');
    this.state = (this.state ==='inactive' ? 'active' : 'inactive');
  };

  submitItem(event){
    this.ourItems.push(event.target.value);
  };

  removeItem(event,i){
    console.log('inside remove item', i)
      this.ourItems.splice(i,1);
  };

}
