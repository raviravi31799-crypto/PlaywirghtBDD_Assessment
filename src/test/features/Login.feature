Feature:Login functionality

Description:This feature is to describe the login scenarios of the application

Background:
Given the user is on the register page of the application
And clicks on the Login link

Scenario Outline:Validlogin
And the user enters valid "<email>" and "<password>"
When the user clicks on LoginButton 
Then the user is able to see logout option on the application

Examples:
|email                |password|
|jothi123456@gmail.com|joorao  |


Scenario Outline: Invalid login
And user passes invalid "<email>" and "<password>"
When the user clicks on LoginButton
Then the user receives warning "<message>"

Examples:
|email                |password|message                                                                            |
|testing@gmail.com    |joorao  |Login was unsuccessful. Please correct the errors and try again.Customer is deleted| 
|jothi123456@gmail.com|123456  |Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect
