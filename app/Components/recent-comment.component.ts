import { Component, Input, ElementRef, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'recent-comments',
  templateUrl: './app/Views/recentComment.html',
})
export class RecentCommentsComponent {
    @Input() model;
}