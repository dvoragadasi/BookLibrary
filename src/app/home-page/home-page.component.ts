import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';

//error of the editor of visual studio code
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private srv: BookServiceService) { }

  ngOnInit() {
  }
}
