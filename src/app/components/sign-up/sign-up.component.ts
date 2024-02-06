import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signupForm!: FormGroup
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private service:ProductService 
  ) { }
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
  onSubmit() {
    if (!this.signupForm.valid) {
      this.toastr.warning("Field is empty")
      return
    } 
    const form:any=this.signupForm
    this.service.signUp(form).subscribe((res)=>{
      this.toastr.success('Successfully registered');
    })
  }
}
