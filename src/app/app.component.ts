import { Component, OnInit } from '@angular/core';
import { detectAnyAdblocker } from 'just-detect-adblock';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { from } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AdblockNotificationDialogComponent } from './shared/components/adblock-notification-dialog/adblock-notification-dialog.component';
import { filter } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AdRecipes';

  isAdBlockerDetected = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    from(detectAnyAdblocker())
      .pipe(
        untilDestroyed(this),
        filter((isAdBlockerDetected) => !!isAdBlockerDetected)
      )
      .subscribe(() => {
        this.isAdBlockerDetected = true;
        this.openAdblockDialog();
      });
  }

  private openAdblockDialog(): void {
    this.dialog.open(AdblockNotificationDialogComponent, {
      disableClose: true,
    });
  }
}
