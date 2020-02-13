# Pipe angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

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

## test code patchValue form control
this.patchValueFormControl({code, title, position_app}, {code: '1234', position_app: '200', title: 'title'});
  }
  patchValueFormControl(field, value) {
    
   for (const key in field) {
     if (field.hasOwnProperty(key)) {
      let val = field[key];
        for (const key1 in value) {
          if (value.hasOwnProperty(key1)) {
            const element = value[key1];
            if(key === key1) {
              val.patchValue(element);
            }
            if(key1 === 'default') {
              val.patchValue(element);
            }
          }
        }
     }
   }
  
  }
