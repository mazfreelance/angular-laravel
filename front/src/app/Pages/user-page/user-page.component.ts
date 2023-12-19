import { Component } from '@angular/core';
import { UserResponse, UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  constructor(private userService: UserService) { }

  users!: UserResponse[]
  currentPage = 1;
  totalPages = 1; // Declare the totalPages property

  isLoading: boolean = false;

  ngOnInit() {
    this.getUserLists();
  }

  getUserLists() {
    this.isLoading = true
    this.userService.getUsers(this.currentPage).subscribe((res: any) => {

      this.users = res.data.records
      this.totalPages = res.data.pagination.last_page
      this.isLoading = false
    })
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getUserLists();
  }

  delUser(event: any, userId: Number) {
    if(confirm('Are you sure want to delete this data?')) {
      event.target.innerText = 'Deleting...'

      this.userService.destroyUser(userId).subscribe((res: any) => {
        this.getUserLists();
        alert(res.message);
      })
    }
  }
}
