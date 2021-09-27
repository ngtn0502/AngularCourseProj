import {
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnChanges, DoCheck {
  @ViewChild('productName', { static: true }) nameRef: ElementRef;

  @ViewChild('productQuality', { static: true }) qualityRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngDoCheck(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  onAddShoppingItem() {
    console.log('run');
    const name = this.nameRef.nativeElement.value;
    const quality = this.qualityRef.nativeElement.value;
    this.shoppingListService.addItem({
      name,
      quality,
    });
  }
}
