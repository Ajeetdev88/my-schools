import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  imports: [CommonModule],
  templateUrl: './view-student.html',
  styleUrl: './view-student.css',
})
export class ViewStudent {
studentId!: number;

  student = {
    admissionNo: 'ADM001',
    name: 'Rahul Sharma',
    class: '10',
    section: 'A',
    gender: 'Male',
    mobile: '9876543210',
    email: 'rahul@gmail.com',
    address: 'Delhi, India'
  };

  constructor(private route: ActivatedRoute) {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
