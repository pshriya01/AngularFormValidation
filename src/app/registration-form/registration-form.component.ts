import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      // Form controls and their initial values and validators go here
    }, { validators: this.passwordMatchValidator });
  }



  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  };

  formSubmitted = false;
  
  onSubmit() {
    
    // Handle form submission logic here
    // You can access form data using this.user object
    // Perform validation and other actions as needed

    // For example, you can display the form data in the console:
    console.log('Form Submitted:', this.user);

    // Set formSubmitted to true to show the success message
    this.formSubmitted = true;
  }

}



