import { Component } from "@angular/core";
import { first } from "rxjs/operators";

import { UserService, AuthenticationService } from "../_services";

@Component({ templateUrl: "home.component.html", styleUrls: ["./home.css"] })
export class HomeComponent {
  users: any = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }
}
