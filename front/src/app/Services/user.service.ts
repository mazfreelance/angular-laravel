import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UserResponse {
  "id": Number,
  "name": string,
  "email": string,
  "phone": string,
  "age": Number,
  "created_at": string
}

export interface PaginationResponse {
  "current_page": Number,
  "last_page": Number,
  "total_record": Number,
  "page_size": Number,
  "has_more_page": boolean
}

export interface UserResponseType {
  code: Number,
  message: string,
  data: any
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private httpClient: HttpClient) { }

  saveUser(inputData: object) {

    return this.httpClient.post(`${this.apiUrl}/api/users`, inputData);
  }

  getUsers(page: number) {

    return this.httpClient.get<UserResponseType>(`${this.apiUrl}/api/users?page=${page}`);
  }

  getUser(userId: Number) {
    return this.httpClient.get<UserResponseType>(`${this.apiUrl}/api/users/${userId}`);
  }

  updateUser(inputData: object, userId: Number) {
    return this.httpClient.put(`${this.apiUrl}/api/users/${userId}`, inputData);
  }

  destroyUser(userId: Number) {
    return this.httpClient.delete(`${this.apiUrl}/api/users/${userId}`);
  }
}
