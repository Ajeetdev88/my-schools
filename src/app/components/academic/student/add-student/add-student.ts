import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.css']
})
export class AddStudent {

  admissionForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.admissionForm = this.fb.group({

      // PERSONAL
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      // PARENT
      fatherName: ['', Validators.required],
      fatherMobile: ['', Validators.required],
      motherName: [''],
      guardianName: [''],
      guardianRelation: [''],

      // ADMISSION
      admissionNo: ['', Validators.required],
      admissionDate: ['', Validators.required],
      class: ['', Validators.required],
      section: [''],
      academicYear: ['', Validators.required],

      // ADDRESS
      addressLine: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required]

    });
  }

  submitForm() {
    if (this.admissionForm.invalid) {
      this.admissionForm.markAllAsTouched();
      return;
    }

    console.log('Student Admission Data:', this.admissionForm.value);
    alert('Student Admission Saved Successfully');

    this.admissionForm.reset();
  }
  activeTabIndex = 0;
tabs = ['personalTab', 'parentTab', 'admissionTab', 'addressTab'];

get isLastTab() {
  return this.activeTabIndex === this.tabs.length - 1;
}

nextTab() {
  if (this.activeTabIndex < this.tabs.length - 1) {
    this.activeTabIndex++;
    this.activateTab();
  }
}

prevTab() {
  if (this.activeTabIndex > 0) {
    this.activeTabIndex--;
    this.activateTab();
  }
}

activateTab() {
  const tabId = this.tabs[this.activeTabIndex];
  const tabButton = document.querySelector(`[data-bs-target="#${tabId}"]`) as HTMLElement;
  tabButton?.click();
}

}
