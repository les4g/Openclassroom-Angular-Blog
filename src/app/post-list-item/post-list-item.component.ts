import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../business/Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  plusUn() {
    this.post.loveIts++;
  }

  moinsUn() {
    this.post.loveIts--;
  }

  getClassLoveIt(): string {
    if (this.post.loveIts > 0) {
      return 'list-group-item-success';
    } else if (this.post.loveIts < 0) {
      return 'list-group-item-danger';
    }
    else {
      return '';
    }

  }
}
