import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.scss']
})
export class JourneyListComponent implements OnInit {

  @Input()
  trip: object;

  constructor(
    private modalService: NgbModal, 
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content);
  }

  sell(journeyKey: string, fareAvailabilityKey: string) {
    this.dataService
      .sellTrip(journeyKey, fareAvailabilityKey)
      .subscribe((json) => {
        console.log(json);
      }, (error) => {
        console.error(error);
      });
  }

}
