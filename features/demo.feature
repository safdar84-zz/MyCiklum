Feature: I am going to validate my Ciklum leaves scenarios 


   @calculatortesting
   Scenario: Calculator Add functionality testing 

   Given I will navigate to Calc Site
   When I add two numbers "3" and "5"
   Then the output should be "8"

@calculatortesting
  Scenario: Calculator Add functionality testing 

   Given I will navigate to "calc" Site
   When I add two numbers "2" and "7"
   Then the output should be "9"


   #tagging 
#  @Angulartesting
#   Scenario Outline: Angular validations

#    Given I will navigate to "AngularJs" Site
#    When I clicked on header link
#    And you will navigate to angular page
#    Then you will enter "<key>" in search box

#    Examples:
#    | key |
#    | hello |
#    | hey   |
@amazonlogin
Scenario: Amazon Login

Given Amazon login page is opening
When I input username, password and click on login button
Then I should logout and redirect to homepage and I logout

@amazonaddtocart
Scenario: Amazon adding item to card

Given I will navigate to departments section amazon site 
When I will navigate to Electronics section
And will select the Headphones tab
Then I will select the first item and i will add it to cart

@myCiklum
Scenario: My Ciklum Documented leaves process
Given I will login to my ciklum site
And I will navigate to My Requests section in Planner module
And I will collect value of my pending sick Days
When I will click on new Request and select sick day and create Request
Then Count of pending leaves should be increamented