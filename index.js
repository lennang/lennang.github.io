var student_1 = "Lenna";
var student_2 = "Andrew";

var welcome_msg = "Hey, Lets be friends.." + student_1 + "," + student_2;

function greet(name) {
    console.log ("Hello " + name);
}

greet ("Lenna");

greet ("clarrisa")

greet ("mum")

function welcome(firstName, lastName) {
    var msg = "Hello " + firstName + " " + lastName;
    return msg;
     }


     console.log ( welcome ("Loo", "Lenna") );


     var days = 5;
     var fullTime = false;
     // 1.1  Write an if statement to determine if lesson is full time.
     //      Part time lesson consists of 8 days.
     // 1.2  To create an if statement, write:
     //      if(days < 8){ ...code to fill...  }
     // 1.3  To changee fullTime to true, in the if statement within the { curly braces } write:
     //      fullTime = true;
     // 1.4  Print the value of fullTime in the console by writing after 1.2:
     //      console.log(fullTime);
     // WRITE THE CODE FOR STEP 1 BELOW THIS LINE:

     if (days >8 ) {fullTime = true;
         
     }

     console.log (fullTime);