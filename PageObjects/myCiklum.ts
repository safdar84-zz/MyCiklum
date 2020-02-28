import { ElementFinder, element, by, ElementHelper, ElementArrayFinder, WebElement } from "protractor";

export class myCiklum{

    planner:ElementFinder;
    email:ElementFinder;
    password:ElementFinder;
    signinBtn:ElementFinder;
    logo:ElementFinder;
    myRequests:ElementFinder;
    openPlannerBtn:ElementFinder;
    pendingSickDays:ElementFinder;
    createRequest: ElementFinder;
    requestDropdown:ElementArrayFinder;
    requestSubmitBtn:ElementFinder;
    requestDD : ElementFinder;
    sickDayOption : ElementFinder;
    requestConfirmation : ElementFinder;
    updatedSickDays : ElementFinder;
    //overlappingRequestOkBtn : ElementFinder;
   // sickDayText : ElementFinder;
    overlappingDialog : ElementFinder;
    vacationImage : WebElement;

    constructor(){

        this.planner=element(by.className("header__menu header__menu_planner"));
        this.email = element(by.id("login-field"));
        this.password = element(by.id("password-field"));
        this.signinBtn = element(by.id("sign-in-button"));
        this.logo = element(by.className("header__logo"));
        this.myRequests = element(by.className("sidebar__menu sidebar__menu_active sidebar__menu_vacation"));
        this.openPlannerBtn = element(by.id("vacation_widget_item_planner"));
        this.pendingSickDays = element(by.id("sick_documented_pending"));
        this.createRequest = element(by.id("61"));
        this.requestDropdown = element.all(by.id("main_request"));
        this.requestDD = element(by.id("main_request"));
        this.requestSubmitBtn = element(by.id("submit"));
        this.sickDayOption = element(by.cssContainingText('option','Sick Day'));
        this.requestConfirmation = element(by.xpath("//button[@class='positive ui__dialog__button']"));
        this.updatedSickDays = element(by.xpath("//div[@class='vacation__summary__control'and @id='sick_documented_pending']"));
        //this.sickDayText = element(by.xpath("//div[@class='ui__dialog__text    ']"));
      //  this.overlappingRequestOkBtn = element(by.className("overlappingRequestOkBtn"));
        this.overlappingDialog = element(by.xpath("//div[@class='ui__dialog' and @class='ui__dialog__block   ']"));
        this.vacationImage = element(by.css('input[type=file]'));

    }

}