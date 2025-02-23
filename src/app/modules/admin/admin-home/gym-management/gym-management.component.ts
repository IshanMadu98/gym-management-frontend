import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddUpdateGymDialogComponent } from './add-update-gym-dialog/add-update-gym-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gym-management',
  templateUrl: './gym-management.component.html',
  styleUrl: './gym-management.component.scss'
})
export class GymManagementComponent {
  gyms: any[] = [];
  isLoading = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadGyms();
  }

  loadGyms(): void {
    this.isLoading = true;
    // this.gymService.getGyms().subscribe(
    //   (data) => {
    //     this.gyms = data;
    //     this.isLoading = false;
    //   },
    //   (error) => {
    //     console.error('Error loading gyms:', error);
    //     this.isLoading = false;
    //   }
    // );
  }

  onAddGym(): void {
    const dialogRef = this.dialog.open(AddUpdateGymDialogComponent, {
      width: '60%',
      data: {
        title: 'Add Gym',
        btnTitle: 'Add',
      },
    });
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value != true) {
          this.loadGyms();
        }
      },
    });
  }

  onUpdateGym(gymData: any): void {
    const dialogRef = this.dialog.open(AddUpdateGymDialogComponent, {
      width: '60%',
      data: {
        title: 'Update Gym',
        btnTitle: 'Update',
        gymData: gymData,
      },
    });
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value != true) {
          this.loadGyms();
        }
      },
    });
  }

  deleteGym(id: number): void {
    // this.gymService.deleteGym(id).subscribe(
    //   () => {
    //     this.loadGyms();
    //   },
    //   (error) => {
    //     console.error('Error deleting gym:', error);
    //   }
    // );
  }
}
