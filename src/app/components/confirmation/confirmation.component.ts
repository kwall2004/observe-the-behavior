import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: [ './confirmation.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationComponent implements OnInit {
  @Input() data$: Observable<object>;

  @Output() commitClick = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onCommitClick() {
    this.commitClick.emit();
  }
}
