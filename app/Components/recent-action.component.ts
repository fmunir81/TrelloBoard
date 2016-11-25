import { Component, Input, ElementRef, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'recent-actions',
  templateUrl: './app/Views/recentActions.html',
})
export class RecentActionsComponent {
    @Input() model;
}