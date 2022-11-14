import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {AccountService} from "../account.service";
import {AuthService} from "../auth.service";
import {debounceTime, fromEvent, map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit, AfterViewInit, OnDestroy {

  isAccountFree$!: Observable<boolean>

  @ViewChild('localAccount')
  localAccountRef!: ElementRef;

  private onAccountInput$!: Subscription;


  constructor(private accountService: AccountService, private authService: AuthService) { }

  ngOnDestroy(): void {
    this.onAccountInput$.unsubscribe();
  }

  ngOnInit(): void {}

  onAccountAdd(account: string) {
    this.accountService.addAccount(account);
  }

  ngAfterViewInit(): void {
    this.onAccountInput$ = fromEvent(this.localAccountRef.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        map((e: any) => e.target.value)
      )
      .subscribe(account => {
        this.isAccountFree$ = this.authService.httpClientVerifyAccount(account)
      })
  }
}
