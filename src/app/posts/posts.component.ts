import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class PostsComponent implements OnInit {

  posts: Object;
  rForm: FormGroup;
  product: Object;
  name: string = '';
  brand: string = '';
  uin: string = '';
  grade: string = '';
  prodArr = { name: '',};



  constructor(private data: DataService, private fb: FormBuilder) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'brand': [null, Validators.required],
      'uin': [null, Validators.required],
      'grade': [null, Validators.required]
    }
    );
  }

  ngOnInit() {
    this.data.getPosts().subscribe(
      postData => this.posts = postData
    );
  }

  addPost(product) {
    console.log(this.rForm);
    console.log(product);
    this.brand = product.brand;
    this.name = product.name;
    this.grade = product.grade;
    this.uin = product.uin;
  }

  addProduct(product) {
    this.data.addProduct(product).subscribe(
      
    );
  }

}
