import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-comment-input',
    templateUrl: './comment-input.component.html',
    styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent {
    @Input('maxLen') maxChars = 160;
    @Input() label = 'Commentaire';

    @Output('onComment') textEvent: EventEmitter<string> = new EventEmitter<string>();

    text = '';

    addComment(text: string) {
        this.textEvent.emit(text);
        this.text = '';
    }

    checkMaxChars(): boolean {
        return this.text.length === Number(this.maxChars);
    }
}
