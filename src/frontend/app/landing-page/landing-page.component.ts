import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'ng-landing-page',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  createAccount() {
    // Open the dialog when the button is clicked
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '400px', // Adjust the width as needed
      // You can add more configuration options here
    });

    // Optionally, you can handle dialog events
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any actions after the dialog is closed
    });
  }


}
