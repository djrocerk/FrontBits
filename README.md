# AngularBanco

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Descripcion 

The system must allow:
• The creation, modification, consultation and deletion of Clients and
Accounts.

• Record movements in an account. The system must validate that no
It will be allowed to record movements that leave a negative balance in the
account.

• Generate a report that, specifying a date range and a
customer, view the associated accounts with their respective balances and
the total debits and credits made during the dates.

• The training notes should be displayed at the top of the screens.
Chuck Norris (The idea is to simulate an advertising component):
o Chuck Norris' notes can be found in the following api
public, https://api.chucknorris.io/
or https://api.chucknorris.io/jokes/random
 test description


## Installation NODE-MODULES

- npm I

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Procedure

Customer CRUD Operations (http://localhost:4200/cliente):

This functionality allows users to perform CRUD (Create, Read, Update, Delete) operations related to bank customers.
Create Customer: Allows the user to add a new customer to the system by providing their name, address, and phone number.
Modify Customer: Allows the user to modify the information of an existing customer, such as their name, address, or phone number.
View Customer: Allows the user to view detailed information about a customer, including their name, address, and phone number.
Delete Customer: Allows the user to delete an existing customer from the system, which involves removing all associated data for that customer.

Account CRUD Operations (http://localhost:4200/cuenta):

This functionality allows users to perform CRUD operations related to customer bank accounts.
Create Account: Allows the user to add a new account for an existing customer by providing the account number and initial balance.
Modify Account: Allows the user to modify the information of an existing account, such as the account number or balance.
View Account: Allows the user to view detailed information about an account, including its account number and current balance.
Delete Account: Allows the user to delete an existing account from the system, which involves removing all associated data for that account.

Recording Movements (http://localhost:4200/movimiento):

This functionality allows users to record movements (debit or credit) in a specific bank account.
Debit Recording: Allows the user to record a debit movement in an account, which involves reducing the account balance.
Credit Recording: Allows the user to record a credit movement in an account, which involves increasing the account balance.
Balance Validation: The system validates that movements that would leave a negative balance in the account are not allowed to be recorded.

Report Generation (http://localhost:4200/reporte):

This functionality allows users to generate a detailed report showing accounts with their respective balances and the total debits and credits made during a specified date range.
Customer and Date Range Selection: Allows the user to select a specific customer and specify a date range to filter movements.
Report Display: The system generates a report showing accounts with their balances, as well as the total debits and credits made during the specified period.
Display Chuck Norris Notes:

On all screens of the application, Chuck Norris notes are displayed randomly obtained from a public API.
These notes serve as an advertising or entertainment component for users while using the application.


