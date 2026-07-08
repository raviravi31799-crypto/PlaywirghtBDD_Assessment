import {Basepage} from "../pages/Basepage";
import { Page } from "@playwright/test";
import{logger} from "../utils/winstonLogger";
import{expect} from "@playwright/test";



export class Loginpage extends Basepage{
    constructor(page:Page){
        super(page);
    }

    private loginlink=this.page.locator("//a[@class='ico-login']");
    private email=this.page.locator("//input[@id='Email']");
    private password=this.page.locator("//input[@id='Password']");
    private loginbtn=this.page.locator("//input[@value='Log in']");
    private logout=this.page.locator("//a[@class='ico-logout']");
    private warningtext=this.page.locator("//div[@class='validation-summary-errors']");


    async launchapplication(){
        await this.launch("https://demowebshop.tricentis.com/register");
    }

    async clickloginlink(){
        await this.click(this.loginlink);
    }
    async entervalidlogindata(email:string,password:string){
        await this.fill(this.email,email),
        await this.fill(this.password,password)
    }
    async clickloginbtn(){
        await this.click(this.loginbtn);
        logger.info("clicked on login button");

    }
    async Logout(){
        const logout=await this.logout.textContent();
        await expect(logout).toBe("Log out");
        logger.info("Logged in successfully");
    }
    async invaliddatas(email:string,password:string){
        await this.fill(this.email,email),
        await this.fill(this.password,password);
    }
    async getwarningtext(message:string){
        await this.warningtext.textContent();
        
    }

}

