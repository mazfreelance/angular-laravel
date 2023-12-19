import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage = 1;
  @Input() totalPages = 1;

  pages: number[] = [];

  @Output() pageChange = new EventEmitter<number>();

  ngOnChanges() {
    this.generatePagesArray();
  }

  generatePagesArray() {
    // Adjust the logic based on your requirements
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }


  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }
}
