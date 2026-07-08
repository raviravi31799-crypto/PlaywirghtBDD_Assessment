import { Loginpage } from './../pages/Loginpage';
import{Given,When ,Then} from "@cucumber/cucumber";
import { CustomWorld } from "../world/world";



Given('the user is on the register page of the application', async function (this:CustomWorld) {
 await  this.loginpage.launchapplication();
});

Given('clicks on the Login link', async function (this:CustomWorld) {
  await this.loginpage.clickloginlink();
});

Given('the user enters valid {string} and {string}', async function (email, password) {
  await this.loginpage.entervalidlogindata(email,password);
});

When('the user clicks on LoginButton', async function (this:CustomWorld) {
      await this.loginpage.clickloginbtn();
});

Then('the user is able to see logout option on the application', async function (this:CustomWorld) {
  await this.loginpage.Logout();
});

