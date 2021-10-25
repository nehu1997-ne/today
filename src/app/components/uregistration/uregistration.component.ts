import { Component, OnInit } from '@angular/core';
// import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { NgForm } from '@angular/forms';
var PhoneNumber = require( 'awesome-phonenumber' );

@Component({
  selector: 'app-uregistration',
  templateUrl: './uregistration.component.html',
  styleUrls: ['./uregistration.component.css']
})
export class UregistrationComponent implements OnInit {
  mask: string;
  example: string;
  Employees=[];
  formdata:FormGroup;
  submitted = false;
  btnText="Submit"
   constructor( private formBuilder:FormBuilder) { 
    this.formdata = this.formBuilder.group(
      {
        phone: '',
        regionCode: 'IN',
        number: '',
        // countryCode:[null, [Validators.required, Validators.pattern("[0-9 ]{10}")]],
        name: ['', Validators.required],
        email: ['', Validators.required],
        age: ['', Validators.required],
        address: ['', Validators.required],
      },);






    this.setMaskAndExample('IN');

    this.formdata.get('regionCode').valueChanges.subscribe((value) => {
      if (value && value !== 'ZZ') {
        this.setMaskAndExample(value);
        this.formdata.get('countryCode').setValue(this.getCountryCodeForRegionCode(value), {
        emitEvent: false,});
      }
    });

    this.formdata.get('countryCode').valueChanges.subscribe((value) => {
      if (value) {
      this.formdata.get('regionCode').setValue(this.getRegionCodeForCountryCode(value));
      }
    });
   }

   ngOnInit(): void {
    if(localStorage.getItem("employees")==null)
    {
    this.Employees=[
      {"id":1,"name":"sumit","dept":"IT","gender":"MALE"},
    
      localStorage.setItem("employees",JSON.stringify(this.Employees)),
    ]
  }
else{
  let data:any;
  data=localStorage.getItem("employees")
  this.Employees=JSON.parse(data)
}


 
   }
   get f() {
    return this.formdata.controls;
  }
   submit(){
    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    }
     console.log(this.formdata.value)
     
   //  let emp=Object.assign({},this.formdata.value);
    
   let emp={...this.formdata.value}
   if(emp.id=='')
   {
   emp["id"]=this.Employees.length+1
     this.Employees.push(emp)
     localStorage.setItem("employees",JSON.stringify(this.Employees))
   }
   else{
     this.Employees.splice(emp.id-1,1,emp)
     localStorage.setItem("employees",JSON.stringify(this.Employees))
     this.btnText="Submit"
   }
     this.formdata.reset()
   }
 
   DeleteEmployee(id:number){
     event?.preventDefault()
     this.Employees.splice(id-1,1)
     localStorage.setItem("employees",JSON.stringify(this.Employees))
 
   }
 
   EditEmployee(emp:any){
     event?.preventDefault()
     this.formdata.setValue({...emp})
     this.btnText="Update"
   }
 
   getCountryCodeForRegionCode(regionCode: string): string {
    return PhoneNumber.getCountryCodeForRegionCode(regionCode);
  }

  getExample(regionCode: string, format = 'national'): string {
    const example = PhoneNumber.getExample(regionCode);
    const countryCode = PhoneNumber.getCountryCodeForRegionCode(regionCode);

    return example.getNumber(format);
  }

  getMask(regionCode: string, format = 'national'): string {
    return this.getExample(regionCode, format).replace(/\d/g, '0');
  }

  getRegionCodeForCountryCode(regionCode: string): string {
    return PhoneNumber.getRegionCodeForCountryCode(regionCode);
  }

  setMaskAndExample(regionCode: string) {
    this.example = this.getExample(regionCode);
    this.mask = this.getMask(regionCode);
  }
  
  stringify(json: any): string {
    return JSON.stringify(json, null, 2);
  }
 }
 