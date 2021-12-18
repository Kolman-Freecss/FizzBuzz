# FIZZBUZZ GAME
Fizzbuzz is a simple game, played by two or more people. Rules are simple: a person starts the count by saying "one" then the next person needs to say the following number and so on. The trick is that every multiple of 3 needs to be replaced by FIZZ and every multiple of 5 needs to be replaced by BUZZ.

So, let's say that it's being played by you and your friend, you start the count:

- You: one
- Them: two
- You: FIZZ
- Them: four
- You: BUZZ
- Them: FIZZ
- You: seven
- Them: eight
- You: FIZZ
- Them: BUZZ
- You: eleven
- Them: fizz
- You: thirteen
- Them: fourteen
- You: FIZZBUZZ
and so on.

## Our drill
We want to simulate this game. The project will have 2 screens, one of them a form with a single input which will only receive numbers. The number will indicate the limit of the iterations.
The next screen will simulate the game, between 2 people. The simulation will go on until the indicated maximum and can be represented however you see fits.

## Enviroment
We are going to use Angular and Ionic to work on a proof of concept. A basic Ionic project should be good. The scope will be Web desktop and Web mobile.

## Features
 - Small form that will determine how long the game will go. I.E.: we choose a maximum of 10, the simulation will output 
      - You: one
      - Them: two
      - You: FIZZ
      - Them: four
      - You: BUZZ
      - Them: FIZZ
      - You: seven
      - Them: eight
      - You: FIZZ
      
 - A screen where we'll show the result of the fizzbuzz game using the input number as the maximum number the game will reach. This means the simulation itself.

## Notes
- Remember that the form and the result should be on two different routing directions
- Remember to take into account that the app should look good on mobile as well!!
## Links of interest
- [Start a new project](https://ionicframework.com/docs/cli/commands/start) 
- [Place the code where it belongs!](https://angular.io/guide/lifecycle-hooks)
- Where you can try to dive into animations, if you're into it [CSS TRICKS](https://css-tricks.com/almanac/properties/a/animation/) and [W3 School](https://www.w3schools.com/css/css3_animations.asp)
- [Model Binding](https://angular.io/guide/property-binding-best-practices) and [Template driven forms](https://angular.io/guide/forms) although you are free to use reactive forms if you want!!!
- [Navigation on angular](https://ionicframework.com/docs/api/nav)
- [Get node](https://nodejs.org/en/download/) and remember you're free to use any package

## Workflow
Please be considerate with the commit messages, try to make them self explanatory. Although if you do a single commit with all of the project working, that's ok! 

What I mean is: just don't make messy commits to the code.
