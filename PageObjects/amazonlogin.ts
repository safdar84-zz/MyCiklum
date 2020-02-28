import { ElementFinder, element, by } from "protractor";

export class amazonlogin{

    signinLink:ElementFinder;
    emailField:ElementFinder;
    emailContinueBtn:ElementFinder;
    passwordField:ElementFinder;
    signinBtn:ElementFinder;
    signoutLink:ElementFinder;




    constructor(){
        this.signinLink=element(by.id("nav-link-accountList"));
        this.emailField=element(by.id("ap_email"));
        this.emailContinueBtn=element(by.id("continue"));
        this.passwordField=element(by.name("password"));
        this.signinBtn=element(by.id("signInSubmit"));
        this.signoutLink=element(by.id("nav-item-signout"));
        
    }
}