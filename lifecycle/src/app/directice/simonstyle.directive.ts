import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSimonstyle]'
})
export class SimonstyleDirective {

  @Input() appSimonstyle: string | undefined;
  constructor(public ref: ElementRef) { }

  ngOnChanges() {
    console.log(this.appSimonstyle);
    console.log(this.ref);
    this.ref.nativeElement.className = this.appSimonstyle;
    this.ref.nativeElement.innerHTML = this.appSimonstyle;
    this.ref.nativeElement.addEventListener('click', () => {
      this.ref.nativeElement.style.backgroundColor = 'red';
    })
  }
}
