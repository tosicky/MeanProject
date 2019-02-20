import {Component, Input} from '@angular/core';

import { Post } from '../post-model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  /*posts = [
    {title: 'First Post', content: 'Our First Post'},
    {title: 'Second Post', content: 'Our Second Post'},
    {title: 'Third Post', content: 'Our Third Post'}
  ];*/
  @Input() posts: Post[] = [];
}
