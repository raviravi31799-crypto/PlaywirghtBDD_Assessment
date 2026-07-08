
// import{Given,When,Then} from "@cucumber/cucumber";
// import { CustomWorld } from "../world/world";
// import { readregisterdata,Register } from "../utils/csvReader";


// const datas: Register[] = readregisterdata();



// Given('the new user launched the register page of the application', async function (this:CustomWorld) {
//   await this.Registerpage.launchurl();
// });

// Given('the user enters the valid credentials', async function (this:CustomWorld) {
 
//   await this.Registerpage.enterregisterdetails(
//       datas[0].fname,
//       datas[0].lname,
//       datas[0].email,
//       datas[0].password,
//       datas[0].cpassword
//   );
// });

// When('the user clicks on the register button', async function (this:CustomWorld) {
//   await this.Registerpage.clickRegister();
// });

// Then('the user receives a success message on the application', async function (this:CustomWorld) {
//   await this.Registerpage.getsuccessMessage();
// });