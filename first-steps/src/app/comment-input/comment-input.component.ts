import { Component } from '@angular/core';

@Component({
    selector: 'app-comment-input',
    templateUrl: './comment-input.component.html',
    styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent {
    text = '';
    maxChars = 160;
    label = 'Commentaire';

    addComment(text: string) {
        console.log(text);
    }

    checkMaxChars(): boolean {
        return this.text.length === this.maxChars;
    }
}
