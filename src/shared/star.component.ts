import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  starWidth: number;
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5
  }

  onClick() {
    this.ratingClicked.emit(`This rating ${this.rating} was clicked!`)
  }

}
