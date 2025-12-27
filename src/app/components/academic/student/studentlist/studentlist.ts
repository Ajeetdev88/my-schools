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

  results = [
    {
      term: 'First Term',
      class: 'SS3A',
      subject: 'Mathematics',
      students: 42,
      date: '2025-01-15',
      by: 'Mr. Adeyemi',
      status: 'completed'
    }
  ]
}
