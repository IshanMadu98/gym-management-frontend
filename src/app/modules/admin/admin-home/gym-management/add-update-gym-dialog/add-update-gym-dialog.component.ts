import { Component, Inject } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-update-gym-dialog',
  templateUrl: './add-update-gym-dialog.component.html',
  styleUrl: './add-update-gym-dialog.component.scss'
})
export class AddUpdateGymDialogComponent {
  title!: string;
  btnTitle!: string;
  gymData = {} as any;
  gymForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { title: string; btnTitle: string; gymData: any; },
    private dialogRef: MatDialogRef<AddUpdateGymDialogComponent>,
  ) {
    this.title = this.data.title;
    this.btnTitle = this.data.btnTitle;
    this.gymData = this.data.gymData;
  }

  ngOnInit(): void {
    this.formInitializer();
  }

  private formInitializer(): void {
    this.gymForm = new FormGroup({
      id: new FormControl(this.data?.gymData?.id, null),
      name: new FormControl(this.data?.gymData?.name, [Validators.required]),
      ownerName: new FormControl(this.data?.gymData?.ownerName, [Validators.required]),
      email: new FormControl(this.data?.gymData?.email, [Validators.required, Validators.email]),
      telephoneNumber: new FormControl(this.data?.gymData?.telephoneNumber, [Validators.required]),
      location: new FormControl(this.data?.gymData?.location, [Validators.required]),
      anyDeskId: new FormControl(this.data?.gymData?.anyDeskId, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.gymForm.valid) {
      const data = this.gymForm.value;
      if (this.btnTitle === 'Add') {
        this.addGym(data);
      } else {
        this.updateGym(data);
      }
    }
  }

  private addGym(data: any) {
    // this.apiBaseService
    //   .DotNetPOST(['Gyms'], data)
    //   .subscribe({
    //     next: (value) => {
    //       this.dialogRef.close(value);
    //     },
    //   });
  }

  private updateGym(data: any) {
    // this.apiBaseService
    //   .DotNetUPDATE_API(['Gyms'], data)
    //   .subscribe({
    //     next: (value) => {
    //       this.dialogRef.close(value);
    //     },
    //   });
  }
}
