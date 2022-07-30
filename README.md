# CryptoPriceTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## 學習 angular 筆記

內容是看這 https://www.youtube.com/watch?v=vb6b67HiuC8

- (valueChange)="sendCurrency($event)"事件綁定

  ```typescript
  import { Component } from "@angular/core";

  @Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
  })
  export class AppComponent {
    title = "crypto-price-tracker";
    selectCurrency: string = "NTD";
    constructor() {}

    // valueChange=當值改變event=value
    sendCurrency(event: string) {
      console.log(event);
    }
  }
  ```

- ngModel 雙向綁定，要到

  ```typescript
  // app.module
  import { FormsModule } from "@angular/forms"; //import

  @NgModule({
    declarations: [AppComponent],
    imports: [FormsModule], //新增FormsModule
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  ```

- `<mat-form-field appearance="outline">`可變更樣式>https://material.angular.io/components/form-field/overview

-
