import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signupForm!: FormGroup
  private dataSubscription: Subscription | undefined;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private service: ProductService
  ) { }
  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName:this.fb.control('', Validators.required),
      lastName:this.fb.control('', Validators.required),
      age:this.fb.control('', Validators.required),
      gender:this.fb.control('', Validators.required),
      email:this.fb.control('', [Validators.required, Validators.email]),
      username:this.fb.control('', Validators.required),
      password:this.fb.control('', Validators.required),
      phone:this.fb.control('', Validators.required)
    });
  }
  onSubmit() {
    if (!this.signupForm.valid) {
      this.toastr.warning("Field is empty")
      return
    }
    const form=this.signupForm.value
    this.dataSubscription=this.service.signUp(form).subscribe((res) => {
      console.log(res);

      this.toastr.success('Successfully registered');
    })
  }
  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
