import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.signUpForm = this.fb.group(
      {
        displayName: [
          null,
          [
            Validators.required,
            Validators.pattern('[A-Za-z]'),
            Validators.minLength(4),
          ],
        ],
        email: [
          null,
          [Validators.required, Validators.email, , Validators.minLength(4)],
        ],
        password: [null, [Validators.required, Validators.minLength(4)]],
      },
      { updateOn: 'blur' }
    );
  }

  handleRegistration(): void {}
}
