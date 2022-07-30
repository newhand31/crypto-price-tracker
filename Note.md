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
