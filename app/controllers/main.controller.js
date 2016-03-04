(function () {
    'use strict';
    angular.module('app').controller('MainController', MainController);

    function MainController($scope, MainService) {
        $scope.name = "";
        $scope.greetings = [];
        $scope.greet = function () {
            var msg = MainService.greet($scope.name)
            $scope.greetings.push(msg)
        };

        var question = {
            text: "What is an IIFE in JavaScript?",
            author: "Matt Overall",
            date: new Date(),
            tags: ["javascript", "function", "encapsulation", "crazy javascript stuff"],
            answers: [
                {
                    text: "An IIFE is something you create when you are not sure if you want a function to run.",
                    author: "Jim Bob",
                    date: new Date(),
                    score: -5,
                    accepted: false,
                    comments: [{
                        text: "That's not right sir...",
                        author: "Jimmy Joe",
                        flagged: false
                    }]
                }, {
                    text: "IIFE stands for Immediatly Invoked Function Expression.",
                    author: "Chim Chim",
                    date: new Date(),
                    score: 10,
                    accepted: false,
                    comments: [
                        {
                            text: "Awesome! I never knew that",
                            author: "Ken Wilcox",
                            flagged: false,
                        },
                        {
                            text: "I would like more info though....",
                            author: "Ken Wilcox",
                            flagged: false,
                        }, {
                            text: "@ken did you know you can edit.",
                            author: "Smart @$$",
                            flagged: true
                        }, {
                            text: "@Smart @$$ questions end with a QUESTIONMARK!",
                            author: "Grammar Nazi",
                            flagged: true
                        }
                    ]
                }, {
                    text: "Like @Chim Chim said, IIFE stands for Immediatly Invoked Function Expression. It is a function that is immediatly executed as soon as it is defined.",
                    author: "Anders Hasjdfkj",
                    date: new Date(),
                    score: 1024,
                    accepted: true,
                    comments: [{
                        text: "Smart! Just what I needed to know!",
                        author: "Matt Overall",
                        flagged: false,
                    }]
                }]
        };
        
//         Assign the following variables.
//         var questionText = question.text;
//         var questionAnswerCount = question.answers.length;
//         var question2ndAnswerScore = question.answers[1].score;
//         var question2ndAnswer1stCommentFlagged = question.answers[1].comments[0].flagged;
        
//         var hasAnAcceptedAnswer;
//         question.answers[i].accepted
        
        
//         for (var i = 0; i  < question.answers.length; i++) {
//             if (question.answers[i].accepted === true) {
              
//           }
//         }
                                 
         //var totalScoreofAllAnswers = question.answers.score[0]+[1]+[3]
        // console.log(totalScoreofAllAnswers)
//         var returnAllFlaggedComments =
//         var countTotalNumberofComments =
        
// ​       *homework:*​
//         add up total score of all `answers`
//         return all the `flagged` `comments`
//         count total number of `comments`
//         check to see if `question` has `tag` `javascript` 
//         bonus: create a function that accepts a `tag` and checks to see if `question` has that `tag`


        
    }
})();