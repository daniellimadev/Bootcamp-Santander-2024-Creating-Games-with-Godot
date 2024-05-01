//Hero Level Sorter Challenge

console.log("Enter your hero's name")

let nickname = "Daniel "

console.log("Now let's find out your hero's level!")


const XP = 6000

if (XP < 1001)
    console.log("The Hero named " + nickname + "is at the Iron level");



    else if (XP < 2001)
    console.log("The Hero named " + nickname + "is at Bronze level");
    
else if (XP < 3001)
    console.log("The Hero named " + nickname + "is at Silver level");
    

else if (XP < 4001)
     console.log("The Hero named " + nickname + "is at Gold level");

else if (XP < 5001)
    console.log("The Hero named " + nickname + "is at Platinum level");

    else if (XP < 6001)
    console.log("The Hero named " + nickname + "is at Ascendant level");

    else if (XP < 7001)
    console.log("The Hero named " + nickname + "is at the level of Immortal");

else if (XP > 7001)
    console.log("The Hero named " + nickname + "is at the level of Radiant");
    

console.log("Thank you for checking your hero's level!")