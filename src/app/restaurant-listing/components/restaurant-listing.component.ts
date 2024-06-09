import { Component } from '@angular/core';

import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../../Shared/models/Restaurant';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
})
export class RestaurantListingComponent {
  public restaurantList: any[];

  ngOnInit() {
    this.getAllRestaurants();
  }

  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe((data) => {
      this.restaurantList = data;
      console.log(data);
    });
  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomImage(): string {
    const imageCount = 8; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`; // Replace with your image filename pattern
  }

  onButtonClick(id: number) {
    this.router.navigate(['/food-catalogue', id]);
  }
}
