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
  | email                  | password |
  | jothi123456@gmail.com  | joorao   |
  | testing@gmail.com      | joorao   |

