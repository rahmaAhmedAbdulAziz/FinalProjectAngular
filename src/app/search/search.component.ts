import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = "";
  @ViewChild('searchInput') searchInput!: ElementRef;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.params);
  }
  search(): void {
    this.searchTerm = this.searchInput.nativeElement.value;
    console.log(this.searchTerm);
    this.router.navigateByUrl('/search/' + this.searchTerm);
  }
}
