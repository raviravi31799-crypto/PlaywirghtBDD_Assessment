import {Basepage} from "../pages/Basepage";
import { Page } from "@playwright/test";
import{logger} from "../utils/winstonLogger";
import{expect} from "@playwright/test";



export class registerpage extends Basepage{
    constructor(page:Page){
        super(page);
    }

   private gender=this.page.locator("//input[@id='gender-female']");
   private fname=this.page.locator("//input[@id='FirstName']");
   private lname=this.page.locator("//input[@id='LastName']");
   private email=this.page.locator("//input[@id='Email']");
   private password=this.page.locator("//input[@id='Password']");
   private cpassword=this.page.locator("//input[@id='ConfirmPassword']");
   private registerbtn=this.page.locator("//input[@id='register-button']");
   private successtext=this.page.getByText("Your registration completed");
   


   async launchurl(){
    await this.launch("https://demowebshop.tricentis.com/register");
    logger.info("Application launched successfully");

   }
   async enterregisterdetails(fname:string,lname:string,email:string,password:string,cpassword:string){
    await this.gender.check();
    await this.fill(this.fname,fname);
    await this.fill(this.lname,lname);
    await this.fill(this.email,email);
    await this.fill(this.password,password);
    await this.fill(this.cpassword,cpassword);
    logger.info("Entered valid details");

   }
   async clickRegister(){
    await this.click(this.registerbtn);
    logger.info("clicked on register button");
   }
   async getsuccessMessage(){
    const message=(await this.successtext.textContent())?.trim();
    await expect(message).toContain("Your registration completed")
    logger.info("Registered successfully");

   }
}
