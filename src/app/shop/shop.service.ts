import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/Models/Pagination';
import { ShopParams } from '../shared/Models/shopParams';
import { map } from 'rxjs';
import { ICategory } from '../shared/Models/Category';
import { IProducts } from '../shared/Models/Products';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'http://localhost:5250/api/';

  constructor(private http: HttpClient) {}

  getProduct(shopParams: ShopParams) {
    let params = new HttpParams();
    if (shopParams.categoryId !== 0) {
      params = params.append('categoryId', shopParams.categoryId.toString());
    }
    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }
    params = params.append('sort', shopParams.sort);

    params = params.append('pageNumber', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());
    return this.http
      .get<IPagination>(this.baseUrl + 'Products/get-all-products', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }
  getCategory() {
    return this.http.get<ICategory[]>(
      this.baseUrl + 'Categories/get-all-categories'
    );
  }
  getProdut(id: number) {
    return this.http.get<IProducts>(
      this.baseUrl + 'Products/get-product-by-id/' + id
    );
  }
}
