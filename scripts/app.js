$(document).ready(function() {

  var p1a = false;
  var p1b = false;
  var p2a = false;
  var p2b = false;
  var p3a = false;
  var p4a = false;


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEaJ0ba379L8lfXuq-wSKv8x8NKtOOpH4",
    authDomain: "int3p3.firebaseapp.com",
    databaseURL: "https://int3p3.firebaseio.com",
    projectId: "int3p3",
    storageBucket: "int3p3.appspot.com",
    messagingSenderId: "608039936849"
  };
  firebase.initializeApp(config);
  //Send Data to firebase

  //Establish to identify which branch of our Firebase Database
  var mainBranch = firebase.database().ref();

  //P1 = A or B
  var p1, p2, p3;


  $('#phase-1 .answer').click(function() {
    var userAnswer = $(this).attr('data-action');
    $(this).siblings('.answer').removeClass('active');
    $(this).addClass('active');
    p1 = userAnswer;
    console.log(p1);
  })
  $('#phase-2 .answer').click(function() {
    var userAnswer = $(this).attr('data-action');
    $(this).siblings('.answer').removeClass('active');
    $(this).addClass('active');
    p2 = userAnswer;
    console.log(p2);
  })
  $('#phase-3 .answer').click(function() {
      var userAnswer = $(this).attr('data-action');
      $(this).siblings('.answer').removeClass('active');
      $(this).addClass('active');
      p3 = userAnswer;
      console.log(p3);
    })
    //This is the function that updates database when submit is clicked.
  $('#submit').click(function() {
    if (p1 == 'a') {
      mainBranch.child('p1-a').push({
        something: 'x',
      });
    } else if (p1 == 'b') {
      mainBranch.child('p1-b').push({
        something: 'x',
      });
    }
    if (p2 == 'a') {
      mainBranch.child('p2-a').push({
        something: 'x',
      });
    } else if (p2 == 'b') {
      mainBranch.child('p2-b').push({
        something: 'x',
      });
    }
    if (p3 == 'a') {
      mainBranch.child('p3-a').push({
        something: 'x',
      });
    } else if (p3 == 'b') {
      mainBranch.child('p3-b').push({
        something: 'x',
      });
    }
  });
  var getDataFromFirebase = function() {

    var p1aCount = 0;
    var p1bCount = 0;
    var p2aCount = 0;
    var p2bCount = 0;
    var p3aCount = 0;
    var p3bCount = 0;

    mainBranch.child('p1-a').on("child_added", function(MyFirebaseItem) {
      p1aCount++;
      $('#p1-a').text(p1aCount + ' warmed.'); // Run 20 times if there are 20 votes for it
    });

    mainBranch.child('p1-b').on("child_added", function(MyFirebaseItem) {
      p1bCount++;
      $('#p1-b').text(p1bCount + ' washed.');
    });

    mainBranch.child('p2-a').on("child_added", function(MyFirebaseItem) {
      p2aCount++;
      $('#p2-a').text(p2aCount + ' submerged.');
    });

    mainBranch.child('p2-b').on("child_added", function(MyFirebaseItem) {
      p2bCount++;
      $('#p2-b').text(p2bCount + ' decorated.');
    });

    mainBranch.child('p3-a').on("child_added", function(MyFirebaseItem) {
      p3aCount++;
      $('#p3-a').text(p3aCount + ' grown.');
    });

    mainBranch.child('p3-b').on("child_added", function(MyFirebaseItem) {
      p3bCount++;
      $('#p3-b').text(p3bCount + ' killed.');
    });
  }

  getDataFromFirebase();
  

});
