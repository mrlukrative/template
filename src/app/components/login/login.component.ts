import {Component, OnInit} from '@angular/core';
import {Indentity} from '../../models/indentity';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: Indentity;
  hasError: boolean;
  errorMessage: string;

  submitted = false;

  // TODO: make animation

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.user = new Indentity();
  }

  login() {

    // TODO: start loader

    sessionStorage.clear();


    this.authService.login(this.user)
      .subscribe(
        () => {
          // TODO: stop loader

          this.router.navigate(['/overview']);
        },
        (error) => {

          // TODO: stop loader

          this.hasError = true;
          // TODO: present that there was an error
          this.errorMessage = 'Something went wrong - Message needs to meaning full';

          console.log('Here your error: ', error);
          // alert("Unfortunately we could not find your account.");
        }
      );
  }


  onSubmit() {
    this.submitted = true;
    this.login();
  }


}
