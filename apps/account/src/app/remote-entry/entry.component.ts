import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'mfe-angular-account-entry',
  template: `<mfe-angular-nx-welcome></mfe-angular-nx-welcome>`,
})
export class RemoteEntryComponent {}
