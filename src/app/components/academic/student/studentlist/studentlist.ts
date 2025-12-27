import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-student-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './studentlist.html'
})
export class Studentlist {

  students = [
    {
      id: 1,
      admissionNo: 'ADM001',
      name: 'Rahul Sharma',
      class: '10',
      section: 'A',
      mobile: '9876543210'
    },
    {
      id: 2,
      admissionNo: 'ADM002',
      name: 'Anjali Verma',
      class: '9',
      section: 'B',
      mobile: '9876543222'
    }
  ];
}
