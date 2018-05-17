import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

interface selectOption {
  title: string;
  value: string;
}

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {

  @Input() options: selectOption[] = [];
  open: boolean = false;
  placeholder: string = 'Select';
  selectedOption: selectOption;

  private innerValue: string = '';

  set value(value: string) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.open = false;
    }
  }

  get value(): string {
    return this.innerValue;
  }

  constructor() {
   }

  ngOnInit() {
  }

  optionSelect(option: selectOption) {
    this.value = option.value;
    this.placeholder = option.title;
  }

  toggleOpen() {
    this.open = !this.open;
  }

  get isOpen(): boolean {
    return this.open;
  }

  writeValue(value) {
    if (!value || typeof value !== 'string') {
      return;
    }

    const selectedEl = this.options.find(el => el.value === value);
    if (selectedEl) {
      this.selectedOption = selectedEl;
      this.onChange(this.selectedOption.value);
    }
  }

  onChange: any = () => {}

  onTouched: any = () => {}

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
