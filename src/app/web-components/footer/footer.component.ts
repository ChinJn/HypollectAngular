import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var jQuery:any
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    jQuery.getScript('src/assets/css/style.css');
  }

}
