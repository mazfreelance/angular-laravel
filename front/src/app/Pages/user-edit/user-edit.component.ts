import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {

  userId!: any
  user!: any

  isLoading: boolean = false;
  isLoadingTitle: string = 'Loading';
  errors: any = [];

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.isLoading = true
    this.userService.getUser(this.userId).subscribe((res: any) => {
      console.log("🚀 ~ file: user-edit.component.ts:24 ~ UserEditComponent ~ this.userService.getUser ~ res:", res)
      this.user = res.data
      this.isLoading = false
    })
  }

  updateUser() {

    var inputData = {
      name: this.user.name,
      phone: this.user.phone,
      email: this.user.email,
      age: this.user.age,
    }

    this.userService.updateUser(inputData, this.userId).subscribe({
      next: (res: any) => {
        console.log("🚀 ~ file: user-edit.component.ts:42 ~ UserEditComponent ~ this.userService.updateUser ~ res:", res)

        this.isLoading = false;
        alert(res.message);
        this.errors = []
      },
      error: (err: any) => {
        console.log("🚀 ~ file: user-edit.component.ts:52 ~ UserEditComponent ~ this.userService.updateUser ~ err:", err)
        this.errors = err.error.errors;
        this.isLoading = false;
        this.errors = []
      },
    })
  }
}
