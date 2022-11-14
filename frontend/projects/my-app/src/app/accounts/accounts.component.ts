import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AccountService} from "../account.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent implements OnInit {

  accounts: string[] = [];

  hasAccounts$!: Observable<boolean>;

  constructor(public accountService: AccountService) {
    this.hasAccounts$ = accountService.hasAccounts$;
  }

  ngOnInit(): void {
  }

}
