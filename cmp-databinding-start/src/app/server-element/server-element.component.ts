import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy {
  @Input() element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
  constructor() {
    console.log('ServerElementComponent constructor');
  }
  ngOnDestroy(): void {
    console.log('ServerElementComponent ngOnDestroy');
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log('ServerElementComponent ngAfterViewInit');
    console.log(this.header.nativeElement.textContent);
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log('ServerElementComponent ngAfterContentInit');
    console.log(this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log('ServerElementComponent ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ServerElementComponent ngOnChanges');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ServerElementComponent ngOnInit');
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }
}
