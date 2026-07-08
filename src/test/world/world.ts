import{Browser,BrowserContext,Page} from "@playwright/test";
import { Basepage } from "../pages/Basepage";
import { registerpage } from "../pages/Registerpage";
import { Loginpage } from "../pages/Loginpage";

export class CustomWorld{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;

    basepage!:Basepage;
    Registerpage!:registerpage;
    loginpage!:Loginpage;

}