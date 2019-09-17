import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-comentario',
  templateUrl: './dialog-comentario.component.html',
  styleUrls: ['./dialog-comentario.component.scss']
})
export class DialogComentarioComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComentarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
