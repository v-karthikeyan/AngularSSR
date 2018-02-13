import { Component, Inject } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'angular-meterial-controls',
  templateUrl: './angular-meterial-controls.component.html',
  styleUrls: ['./angular-meterial-controls.component.scss']
})

export class AngularMeterialControlsComponent {
  myControl: FormControl = new FormControl();
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  options = [
    'One',
    'Two',
    'Three'
   ];

   foods = [
    {value: 'steak-0', viewValue: 'Option 1'},
    {value: 'pizza-1', viewValue: 'Option 2'},
    {value: 'tacos-2', viewValue: 'Option 3'}
  ];

  food: string;
  name: string;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, food: this.food }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.food = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
