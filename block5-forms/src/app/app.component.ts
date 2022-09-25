import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  answers = [{
    type:  'yes',
    text: 'TAK'
  }, 
  {
    type: 'no',
    text: 'NI'
  }]

  existedEmails = [
    'email1@g.com',
    'email2@g.com',
    'email3@g.com',
    'email4@g.com',
  ]

  form = new FormGroup({
    user: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email], this.createValidator()),
      pass: new FormControl('', [Validators.required, this.checkOfLength])
    }),
    country: new FormControl('ua'),
    answer: new FormControl('no')
  })

  ngOnInit(): void {
   
  }

  onSubmit() {
    if(this.form.valid){
      console.log('Submitted', this.form)
    }
  }

  checkOfLength(control: FormControl) {
    if(control.value.length <= 4) {
      return {
        'lengthError': true
      }
    } else return null
  }

  checkIfEmailExists(value: any) {
    return of(this.existedEmails.some((a) => a === value)).pipe(
      delay(1000)
    )
  }

  createValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> => {
      return this.checkIfEmailExists(control.value).pipe(
        map((res: boolean) => res ? {emailUsed: true} : null)
      )
    }
  }

  get userForm() {
    return this.form.controls.user.controls
  }
}
