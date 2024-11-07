import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RestService } from "./rest.service";
import { CategoryRepository } from "./category.repository";
import { ProductRepository } from "./product.repository";

@NgModule({
    imports: [HttpClientModule],
    providers: [RestService, CategoryRepository, ProductRepository]
})

export class ModelModule {

}