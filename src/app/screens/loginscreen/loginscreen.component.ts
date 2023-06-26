import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css'],
})
export class LoginscreenComponent implements OnInit {
  name: any;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  imagePath: string = 'assets/Logo.svg';
  loading: boolean = false;

  type = 'password';
  constructor(
    private authservice: AuthserviceService // formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm;
    console.log(this.form.value);
  }
  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  loginProcess() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.authservice.login(this.form.value).subscribe((result) => {
        if (result.success) {
          console.log(result);
          alert(result.message);
        } else alert(result.message);
      });
    }
  }
}
