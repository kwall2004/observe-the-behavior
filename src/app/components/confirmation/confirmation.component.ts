import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BookingHomeMessengerService } from '../../services/booking-home-messenger.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationComponent implements OnInit {
  constructor(private messengerService: BookingHomeMessengerService) { }

  ngOnInit() { }

  onCommitClick() {
    this.messengerService.commitClick();
  }
}
