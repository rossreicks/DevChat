import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'chatStatus',
    templateUrl: './chatStatus.component.html'
})

export class ChatStatus {
    names: string[] = ['Ross', 'Lexi', 'Paul', 'Matt']
}
