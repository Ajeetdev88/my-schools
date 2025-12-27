import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
  
  ],
  templateUrl: './student.html',
  styleUrls: ['./student.css'],
})
export class StudentComponent {

  admissionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.admissionForm = this.fb.group({

      // PERSONAL
      personal: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dob: ['', Validators.required],
        gender: ['', Validators.required],
        mobile: ['', Validators.required],
        email: ['', Validators.email]
      }),

      // PARENT
      parent: this.fb.group({
        fatherName: ['', Validators.required],
        fatherMobile: ['', Validators.required],
        motherName: [''],
        guardianName: [''],
        guardianRelation: ['']
      }),

      // ADMISSION
      admission: this.fb.group({
        admissionNo: ['', Validators.required],
        admissionDate: ['', Validators.required],
        class: ['', Validators.required],
        section: [''],
        academicYear: ['', Validators.required]
      }),

      // ADDRESS
      address: this.fb.group({
        addressLine: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pincode: ['', Validators.required]
      })
    });
  }

  submitForm() {
    if (this.admissionForm.valid) {
      console.log(this.admissionForm.value);
      alert('Student Admission Saved Successfully');
      this.admissionForm.reset();
    }
  }
}
