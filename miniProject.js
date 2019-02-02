function temperatureBug()
{
    var temp = Number(document.project1.temp.value);

    if (temp == 10000) //EASTER EGG
    {
        return "Why are you on the sun?!";
    }
    else if (temp >= 98)
    {
        document.getElementById('weather').src = "img/summer3.jpg";
        return "Summer";
    }
    else if (temp >= 95)
    {
        document.getElementById('weather').src = "img/summer2.jpg";
        return "Summer";
    }
    else if (temp >= 90)
    {
        document.getElementById('weather').src = "img/beach.jpg";
        return "Summer";
    }
    else if (temp >= 86)
    {
        document.getElementById('weather').src = "img/spring.jpg";
        return "Spring";
    }
    else if (temp >= 83)
    {
        document.getElementById('weather').src = "img/spring2.jpg";
        return "Spring";
    }
    else if (temp >= 80) {
        document.getElementById('weather').src = "img/spring3.jpg";
        return "Spring";
    }
    else if (temp >= 76)
    {
        document.getElementById('weather').src="img/fall.jpg";
        return "Fall";
    }
    else if (temp >= 73)
    {
        document.getElementById('weather').src="img/fall2.jpg";
        return "Fall";
    }
    else if (temp >= 70)
    {
        document.getElementById('weather').src="img/fall3.jpg";
        return "Fall";
    }
    else if (temp >= 67)
    {
        document.getElementById('weather').src="img/winter.jpg";
        return "Winter";
    }
    else if (temp >= 64)
    {
        document.getElementById('weather').src="img/winter2.jpg";
        return "Winter";
    }
    else
    {
        document.getElementById('weather').src="img/winter3.jpg";
        return "Winter";
    }
}

function calorieCounter()
{
    var activity = document.project2.activities.value;
    var activity = activity.toLowerCase();
    var num1 = document.project2.num1.value;


    if (activity == 'bowling')
    {
       return 3 * num1;
    }
    else if (activity == 'soccer')
    {
        return 5 * num1;
    }
    else if (activity == 'football')
    {
        return 10 * num1;
    }
    else if (activity == 'swimming')
    {
        return 12 * num1;
    }
    else if (activity == 'egg') //EASTER EGG
    {
        return "You loser, go outside some more!"
    }
    else
    {
        return "Go out and do something!";
    }
}

function assignGrade()
{
    var grade = Number(document.project3.num1.value);

    if (grade >= 98)
    {
        return "A+";
    }
    else if (grade >= 93)
    {
        return "A";
    }
    else if (grade >= 90)
    {
        return "A-";
    }
    else if (grade >= 88)
    {
        return "B+";
    }
    else if (grade >= 83)
    {
        return "B";
    }
    else if (grade >= 80)
    {
        return "B-";
    }
    else if (grade >= 78)
    {
        return "C+";
    }
    else if (grade >= 73)
    {
        return "C";
    }
    else if (grade >= 70)
    {
        return "C-";
    }
    else if (grade >= 68)
    {
        return "D+";
    }
    else if (grade >= 63)
    {
        return "D";
    }
    else if (grade >= 60)
    {
        return "D-";
    }
    else if (grade >= 58)
    {
        return "F+";
    }
    else if (grade >= 53)
    {
        return "F";
    }
    else
    {
        return "F-";
    }
}

var list = [];
//var numLength =

function storyTime()
{
    list.push(document.story.input1.value.toLowerCase());
    list.push(document.story.input2.value.toLowerCase());
    list.push(document.story.input3.value.toLowerCase());
    list.push(document.story.input4.value.toLowerCase());
    list.push(document.story.input5.value.toLowerCase());
    list.push(document.story.input6.value);
    list.push(document.story.input7.value);
    list.push(document.story.input8.value);
    list.push(document.story.input9.value);
    list.push(document.story.input10.value);
    list.push(document.story.input11.value);
    list.push(document.story.input12.value.toLowerCase());
    list.push(document.story.input13.value);
    list.push(document.story.input14.value);
    list.push(document.story.input15.value);
    list.push(document.story.input16.value.toLowerCase());

    return "    Dear Principal,\n" +
        "    I am sorry to have to tell you that my " + list[0].bold() + " son/daughter\n" +
        "    " + list[12].bold() + " will be unable to attend your " + list[1].bold() +
        "    school this week as he/she has caught a case of the " + list[5].bold() + " pox.\n" +
        "\n" +
        "    The " + list[2].bold() + " doctor says that it will be " + list[10].bold() + " weeks before\n" +
        "    he/she is healthy and back on his/her " + list[15].bold() + " again.\n" +
        "\n" +
        "    Dear Math Teacher,\n" +
        "    I was driving " + list[13].bold() + " o school when the\n" +
        "    " + list[14].bold() + " failed and my car crashed into a " + list[6].bold() + ". By\n" +
        "    the time the tow " + list[7].bold() + " finally arrived and the " + list[3].bold() + "\n" +
        "    mechanic " + list[11].bold() + " the " + list[8].bold() + " and recharged the\n" +
        "    " + list[9].bold() + ", we had missed your " + list[4].bold() + " class.";
}

function checkAnswers()
{
    var feedback = [];
    var score = 0;



    if (document.myQuiz.a1B.checked === true && document.myQuiz.a1C.checked === true && document.myQuiz.a1D.checked === true)
    {
        if (document.myQuiz.a1A.checked === true)
        {
            feedback.push('Question one was WRONG! Im a good kid I dont sneak out. ');
        }
        else
        {
            feedback.push('Question one was Correct! I love to do all these things. ');
            score++;
        }
    }
    else if (document.myQuiz.a1A.checked === true)
    {
        feedback.push('Question one is WRONG! Why would you ever think I would sneak out :( ');
    }
    else
    {
        feedback.push('Question one was WRONG! Better luck next time bud. ');
    }

    if (document.myQuiz.a2.value === 'Romanian')
    {
        feedback.push(" Question two was correct! Good job buddy. ");
        score++
    }
    else
    {
        feedback.push(" Question two was wrong! Im disappointed in you. ");
    }

    var q3answer = document.myQuiz.name.value.toLowerCase();

    if (q3answer === 'erik sebastion galu')
    {
        feedback.push(' Question three is correct! No one usually gets that one right. ');
        score++;
    }
    if (q3answer === 'erik')
    {
        feedback.push(' Question three is WRONG! Thats only my first name. ');
    }
    if (q3answer === 'galu')
    {
        feedback.push(' Question three is WRONG! Thats only my last name. ');
    }
    if (q3answer === 'sebastion')
    {
        feedback.push(' Question three is WRONG! Thats only my middle name. ');
    }
    if (q3answer === 'erik galu')
    {
        feedback.push(' Question three is WRONG! Gotcha I got a middle name too. ');
    }


    var q4answer = document.myQuiz.age.value.toLowerCase();

    if (q4answer === '14' || q4answer === 'fourteen')
    {
        feedback.push(' Question four is correct! I am fourteen years old. ');
        score++;
    }
    else
    {
        feedback.push(' Question four was incorrect. I am fourteen years old. ');
    }

    if (document.myQuiz.b1A.checked === true && document.myQuiz.b1B.checked === true && document.myQuiz.b1C.checked === true && document.myQuiz.b1D.checked === true)
    {
        feedback.push(' Question five was correct! I play all of those instruments and some others. ');
        score++;
    }
    else
    {
        feedback.push(' Question five was incorrect! I play more than just the one(s) you chose. ');
    }

    if (document.myQuiz.b2.value === 'romania')
    {
        feedback.push(' Question six was correct! You guessed it my main man. ');
        score++;
    }
    else
    {
        feedback.push(' Question six was incorrect! Your not my main man. ');
    }


    return feedback + " Your score was: " + score;
}

