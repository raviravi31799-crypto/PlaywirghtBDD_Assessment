
import{Given,When,Then} from "@cucumber/cucumber";
import { CustomWorld } from "../world/world";
import { readregisterdata,Register } from "../utils/csvReader";


const datas: Register[] = readregisterdata();



Given('the new user launched the register page of the application',{timeout:50000} ,async function (this:CustomWorld) {
  await this.Registerpage.launchurl();
});

Given('the user enters the valid credentials', async function (this:CustomWorld) {
 for(const user of datas){
  await this.Registerpage.enterregisterdetails(
      user.fname,
      user.lname,
      user.email,
      user.password,
      user.cpassword
  );
 }
});


When('the user clicks on the register button', async function (this:CustomWorld) {
  await this.Registerpage.clickRegister();
});

Then('the user receives a success message on the application', async function (this:CustomWorld) {
  await this.Registerpage.getsuccessMessage();
});