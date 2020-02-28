import { ElementFinder, element, by } from "protractor";

export class addtocart{

    deptMenu:ElementFinder;
    Electronics:ElementFinder;

    constructor(){

         this.deptMenu = element(by.id("nav-hamburger-menu"));
         this.Electronics = element(by.className("hmenu-item")).element(by.tagName("Electronics"));
    }
}