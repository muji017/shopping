import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signupForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private toastr:ToastrService
  ){}
  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  onSubmit(){
    if (this.signupForm.valid) {
      this.toastr.warning(this.signupForm.value)
    } else {
    }
  }
}
