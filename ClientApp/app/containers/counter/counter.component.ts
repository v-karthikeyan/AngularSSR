import { Component } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    options = [
        'One',
        'Two',
        'Three'
       ];

    public incrementCounter() {
        this.currentCount++;
    }
}
