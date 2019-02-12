# AngularArchitecture

This project aims to serve as a base / reference when considering a possible architecture in an Angular project.

Probably the proposed architecture is not the perfect solution for all projects.

I have mainly followed the recommendations proposed by the Angular documentation.

This project is based on the following fundamentals:

    * Consistency: simplicity (for small apps) and scalability (for big apps).
    * Reusability in different projects.
    * Optimization (consistent with or without lazy-loading).
    * Testability.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

Although design is not the main objective of this project I have decided to use [Angular Material](https://material.angular.io/).

## Project Architecture

// TODO: Complete architecture. Status: under development.

    * app/
    *   |- app-routing.module.ts
    *   |- app-component.css
    *   |- app-component.html
    *   |- app-component.ts
    *   |- app.module.ts
    *   |- core/
    *   |- ui/
    *       |- material/
    *           |- material.module.ts
    *   |- common/
    *       |- components/
    *           |- header/
    *               |- header.component.css
    *               |- header.component.html
    *               |- header.component.spec.ts
    *               |- header.component.ts
    *           |- footer/
    *               |- footer.component.css
    *               |- footer.component.html
    *               |- footer.component.spec.ts
    *               |- footer.component.ts
    *       |- shared-components.module.ts
    *   |- heroes/
    *       |- components/
    *           |- hero-details/
    *               |- hero-details.component.css
    *               |- hero-details.component.html
    *               |- hero-details.component.spec.ts
    *               |- hero-details.component.ts
    *           |- heroes-list/
    *               |- heroes-list.component.css
    *               |- heroes-list.component.html
    *               |- heroes-list.component.spec.ts
    *               |- heroes-list.component.ts
    *       |- pages/
    *           |- hero/
    *               |- hero.component.css
    *               |- hero.component.html
    *               |- hero.component.spec.ts
    *               |- hero.component.ts
    *               |- hero.module.ts
    *           |- heroes/
    *               |- heroes.component.css
    *               |- heroes.component.html
    *               |- heroes.component.spec.ts
    *               |- heroes.component.ts
    *               |- heroes.module.ts

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
