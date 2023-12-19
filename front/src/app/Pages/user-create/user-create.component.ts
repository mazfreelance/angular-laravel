import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
})
export class UserCreateComponent {
  constructor(private router: Router, private userService: UserService) {}

  name!: string;
  email!: string;
  phone!: string;
  age!: string;

  isLoading: boolean = false;
  isLoadingTitle: string = 'Loading';
  errors: any = [];

  saveUser() {
    this.isLoading = true;
    this.isLoadingTitle = 'Saving';

    var inputData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      age: this.age,
    };
    console.log(
      '🚀 ~ file: user-create.component.ts:22 ~ UserCreateComponent ~ saveUser ~ inputData:',
      inputData
    );

    this.userService.saveUser(inputData).subscribe({
      next: (res: any) => {
        console.log(
          '🚀 ~ file: user-create.component.ts:30 ~ UserCreateComponent ~ this.userService.saveUser ~ res:',
          res
        );
        this.isLoading = false;
        alert(res.message);
        this.name = ''
        this.email = ''
        this.phone = ''
        this.age = ''
        this.errors = []
        this.router.navigate(['/users']);
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        this.isLoading = false;
        this.errors = []
        console.log(
          '🚀 ~ file: user-create.component.ts:33 ~ UserCreateComponent ~ this.userService.saveUser ~ err:',
          this.errors
        );
      },
    });
  }
}
