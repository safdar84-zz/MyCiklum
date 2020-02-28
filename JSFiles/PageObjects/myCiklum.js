"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class myCiklum {
    constructor() {
        this.planner = protractor_1.element(protractor_1.by.className("header__menu header__menu_planner"));
        this.email = protractor_1.element(protractor_1.by.id("login-field"));
        this.password = protractor_1.element(protractor_1.by.id("password-field"));
        this.signinBtn = protractor_1.element(protractor_1.by.id("sign-in-button"));
        this.logo = protractor_1.element(protractor_1.by.className("header__logo"));
        this.myRequests = protractor_1.element(protractor_1.by.className("sidebar__menu sidebar__menu_active sidebar__menu_vacation"));
        this.openPlannerBtn = protractor_1.element(protractor_1.by.id("vacation_widget_item_planner"));
        this.pendingSickDays = protractor_1.element(protractor_1.by.id("sick_documented_pending"));
        this.createRequest = protractor_1.element(protractor_1.by.id("61"));
        this.requestDropdown = protractor_1.element.all(protractor_1.by.id("main_request"));
        this.requestDD = protractor_1.element(protractor_1.by.id("main_request"));
        this.requestSubmitBtn = protractor_1.element(protractor_1.by.id("submit"));
        this.sickDayOption = protractor_1.element(protractor_1.by.cssContainingText('option', 'Sick Day'));
        this.requestConfirmation = protractor_1.element(protractor_1.by.xpath("//button[@class='positive ui__dialog__button']"));
        this.updatedSickDays = protractor_1.element(protractor_1.by.xpath("//div[@class='vacation__summary__control'and @id='sick_documented_pending']"));
        this.overlappingDialog = protractor_1.element(protractor_1.by.xpath("//div[@class='ui__dialog' and @class='ui__dialog__block   ']"));
        this.vacationImage = protractor_1.element(protractor_1.by.css('input[type=file]'));
    }
}
exports.myCiklum = myCiklum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlDaWtsdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9teUNpa2x1bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF1RztBQUV2RyxNQUFhLFFBQVE7SUFzQmpCO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLDJEQUEyRCxDQUFDLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDLENBQUM7UUFHeEgsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBRTdELENBQUM7Q0FFSjtBQTlDRCw0QkE4Q0MifQ==