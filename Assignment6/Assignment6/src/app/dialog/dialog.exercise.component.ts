import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'exercise-dialog',
    templateUrl: 'dialog.exercise.component.html',
  })
  export class DialogComponent {
  
    constructor(
      public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
      }
  
    public onNoClick(): void {
      this.dialogRef.close();
    }
  }