import { Component, OnInit } from '@angular/core';
import { Post } from '../business/Post';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Array<Post>

  constructor() {
    this.posts=new Array<Post>();
    this.posts.push(new Post(
      'Mon premier post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat, elit nec malesuada maximus, sem turpis aliquam magna, quis pretium purus nisl eget quam. Maecenas et tristique magna. Suspendisse potenti. Curabitur sodales odio nec sagittis tempor. Maecenas semper ex at ligula lacinia sollicitudin',
      3
    ));
    this.posts.push(new Post(
      'Mon second post',
      'Maecenas semper ex at ligula lacinia sollicitudin',
      -2
    ));
    this.posts.push(new Post(
      'Encore un post',
      'Suspendisse potenti. Curabitur sodales odio nec sagittis tempor.',
      0
    ));

  }

  ngOnInit() {
  }

}
