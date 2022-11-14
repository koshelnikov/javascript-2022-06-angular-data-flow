import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts: string[] = [];
  hasAccounts$ = new Subject<boolean>();

  addAccount(account: string) {
    this.accounts.push(account);
    this.hasAccounts$.next(true);
  }

  clear() {
    this.accounts = [];
    this.hasAccounts$.next(false);
  }

}
