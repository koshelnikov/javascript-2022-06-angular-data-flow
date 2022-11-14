import {AfterViewInit, ChangeDetectionStrategy, Component} from '@angular/core';
import {AccountService} from "./account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(public accountService: AccountService) {
  }


  ngAfterViewInit(): void {


  }
}
