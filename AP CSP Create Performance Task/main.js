
<!DOCTYPE html>
<html>
<head>
<title> Translator </title>
<!--This controls the text and makes sure all the accents and characters show up the way they are written-->  
<meta charset="UTF-8">
<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
<style>     
 /* This sets the background color to purple */   
body {background-color: black;} 

 /* This sets the attributes for the English button*/   
#english {
    background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
 /* This sets the attributes for the Chinese button*/   
#chinese {
    background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

 /* This sets the attributes for the French button*/   
#french{
    background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

 /* This sets the attributes for the Spanish button*/   
#spanish{
    background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
#phrase1{
  background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
}
#phrase2{
  background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
}
#phrase3{
  background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
}
#phrase4{
  background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
}
#phrase5{
  background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
}
#phrase6{
  background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
}
#phrase7{
  background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
}
#phrase8{
  background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
}
#phrase9{
  background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
}

/* Create three unequal columns that floats next to each other */
.column {
    float: left;
    padding: 10px;
}

/* Left and right column */
.column.side {
    width: 25%;
}

/* Middle column */
.column.middle {
    width: 50%;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}


</style> 

<center>
<!--This header shows the purpose of this page-->
<h1><font color = white>Become a Global Citizen</font></h1>
</center> 
<!--This header gives you instructions on how to use the program-->
<h2><font color = white>Select a flag then click a phrase to begin learning the chosen language</font></h2>


<!--This allows for the following buttons to be placed on the side column-->
<div class="row">
<div class="column side">

<h3 id="languagesheader"> <font color = white>Languages: </font></h3>

<!--This button allow you to select the English language-->  
<button id="english"> <img src="http://flags.fmcdn.net/data/flags/h80/us.png" style="width:120px;height:84px;"><br> <center> English </center> </button>
<br>
<button id="chinese"> <img src="http://flags.fmcdn.net/data/flags/w580/cn.png" style="width:120px;height:84px;"><br> <center> Chinese/中文 </center> </button>
<br>
<!--This button allow you to select the French language-->
<button id="french"> <img src="http://flags.fmcdn.net/data/flags/w580/fr.png" style="width:120px;height:84px;"><br> <center> French/Français </center> </button>
<br>
<!--This button allow you to select the Spanish language-->
<button id="spanish"> <img src="http://flags.fmcdn.net/data/flags/w580/es.png" style="width:120px;height:84px;"><br> <center> Spanish/Español </center> </button>
<br>
</div>
</div>

<!--This header seperates the Languages from the phrases-->
<h3 id="phrasesheader"> <font color = white> Phrases: </font> </h3>

<!--These buttons allow you to select a phrase-->  
<button id="phrase1"> Hello! </button>
<button id="phrase2"> What is your name? </button>
<button id="phrase3"> My name is... </button>
<button id="phrase4">  Nice to meet you! </button>
<button id="phrase5"> How are you? </button>
<button id="phrase6"> I am doing well. </button>
<button id="phrase7"> I am doing bad. </button>
<button id="phrase8"> Have a nice day! </button>
<button id="phrase9"> Goodbye! </button>


<!--This displays the phrase in the chosen language-->  
<center>
<font color = white> <h1 id="displayText"></h1> </font> 
</center>

<!--This is the beginning of JavaScript part of the program-->
<script> 
// this allows for the program to 'speak'
var synth = window.speechSynthesis;
var msg = new SpeechSynthesisUtterance();

//this is the variable that will determine language
var language;

//when the english button is clicked then this will set the language to english
document.getElementById("english").addEventListener("click", () => {
  language = 'english';
});
//when the chinese button is clicked then this will set the language to chinese
document.getElementById("chinese").addEventListener("click", () => {
  language = 'chinese';
});
//when the french button is clicked then this will set the language to french
document.getElementById("french").addEventListener("click", () => {
  language = 'french';
});
//when the spanish button is clicked then this will set the language to spanish
document.getElementById("spanish").addEventListener("click", () => {
  language = 'spanish';
});


//when the language is clicked then it will trigger the function 'trigger'
function trigger() {
  //when the function 'trigger' is triggered and language is chinese then...
  if (language === 'chinese') {
    
    //when the 'hello' button is clicked and language is set to chinese then it will say 'hello' in chinese and change the phrase from english to chinese
    document.getElementById("phrase1").addEventListener("click", function() {
      document.getElementById("phrase1").innerHTML = "Nǐ hǎo!";
      startTalking("Nǐ hǎo", "zh-Hans");
    }); 
    //when the 'what is your name?' button is clicked and language is set to chinese then it will say 'what is your name' in chinese and change the phrase from english to chinese
    document.getElementById("phrase2").addEventListener("click", function() {
      document.getElementById("phrase2").innerHTML = "Nǐ jiào shénme míngzì?";
      startTalking("Nǐ jiào shénme míngzì?", "zh-Hans");
    }); 
    //when the 'my name is' button is clicked and language is set to chinese then it will say 'my name is' in chinese and change the phrase from english to chinese
    document.getElementById("phrase3").addEventListener("click", function() {
      document.getElementById("phrase3").innerHTML = "Wǒ de míngzì shì...";
      startTalking("Wǒ de míngzì shì...", "zh-Hans");
    });
    //when the 'nice to meet you' button is clicked and language is set to chinese then it will say 'nice to meet you' in chinese and change the phrase from english to chinese
    document.getElementById("phrase4").addEventListener("click", function() {
      document.getElementById("phrase4").innerHTML = "Hěn gāoxìng jiàn dào nǐ!";
      startTalking("Hěn gāoxìng jiàn dào nǐ!", "zh-Hans");
    });
    //when the 'how are you' button is clicked and language is set to chinese then it will say 'how are you' in chinese and change the phrase from english to chinese
    document.getElementById("phrase5").addEventListener("click", function() {
      document.getElementById("phrase5").innerHTML = "Nǐ hǎo ma?";
      startTalking("Nǐ hǎo ma?", "zh-Hans");
    }); 
    //when the 'i am doing well' button is clicked and language is set to chinese then it will say 'i am doing well' in chinese and change the phrase from english to chinese
    document.getElementById("phrase6").addEventListener("click", function() {
      document.getElementById("phrase6").innerHTML = "Wǒ zuò dé bùcuò.";
      startTalking("Wǒ zuò dé bùcuò.", "zh-Hans");
    }); 
   //when the 'i am doing bad' button is clicked and language is set to chinese then it will say 'i am doing bad' in chinese and change the phrase from english to chinese
    document.getElementById("phrase7").addEventListener("click", function() {
      document.getElementById("phrase7").innerHTML = "Wǒ zuò dé bù hǎo.";
      startTalking("Wǒ zuò dé bù hǎo.", "zh-Hans");
    }); 
    //when the 'have a nice day' button is clicked and language is set to chinese then it will say 'have a nice day' in chinese and change the phrase from english to chinese
    document.getElementById("phrase8").addEventListener("click", function() {
      document.getElementById("phrase8").innerHTML = "Zhù nǐ jīntiān yúkuài!";
      startTalking("Zhù nǐ jīntiān yúkuài!", "zh-Hans");
    }); 
    //when the 'goodbye' button is clicked and language is set to chinese then it will say 'goodbye' in chinese and change the phrase from english to chinese
    document.getElementById("phrase9").addEventListener("click", function() {
      document.getElementById("phrase9").innerHTML = "Zàijiàn!";
      startTalking("Zàijiàn", "zh-Hans");
    }); 
    
  
  }else if (language === 'french') {
    document.getElementById("phrase1").addEventListener("click", function() {
      document.getElementById("phrase1").innerHTML = "Bonjour";
      startTalking("Bonjour", "fr");
    });
    //when the 'what is your name?' button is clicked and language is set to french then it will say 'what is your name' in french and change the phrase from english to french
    document.getElementById("phrase2").addEventListener("click", function() {
      document.getElementById("phrase2").innerHTML = "Comment vous appelez-vous?";
      startTalking("Comment vous appelez-vous?", "fr");
    });
    //when the 'my name is' button is clicked and language is set to french then it will say 'my name is' in french and change the phrase from english to french
    document.getElementById("phrase3").addEventListener("click", function() {
      document.getElementById("phrase3").innerHTML = "Mon nom est...";
      startTalking("Mon nom est...", "fr");
    });
//when the 'nice to meet you' button is clicked and language is set to french then it will say 'nice to meet you' in french and change the phrase from english to french
        document.getElementById("phrase4").addEventListener("click", function() {
      document.getElementById("phrase4").innerHTML = "Ravi de vous rencontrer!";
      startTalking("Ravi de vous rencontrer!", "fr");
    });
    document.getElementById("phrase5").addEventListener("click", function() {
      document.getElementById("phrase5").innerHTML = "Comment allez-vous?";
      startTalking("Comment allez-vous?", "fr");
    }); 
    //when the 'i am doing well' button is clicked and language is set to chinese then it will say 'i am doing well' in chinese and change the phrase from english to chinese
    document.getElementById("phrase6").addEventListener("click", function() {
      document.getElementById("phrase6").innerHTML = "Je me débrouille bien.";
      startTalking("Je me débrouille bien.", "fr");
    }); 
    document.getElementById("phrase7").addEventListener("click", function() {
      document.getElementById("phrase7").innerHTML = "Je vais mal.";
      startTalking("Je vais mal.", "fr");
    }); 
    document.getElementById("phrase8").addEventListener("click", function() {
      document.getElementById("phrase8").innerHTML = "Bonne journée!";
      startTalking("Bonne journée!", "fr");
    }); 
    document.getElementById("phrase9").addEventListener("click", function() {
      document.getElementById("phrase9").innerHTML = "Au revoir!";
      startTalking("Au revoir", "fr");
    }); 
    
    
    
  } else if (language === 'spanish') {
    document.getElementById("phrase1").addEventListener("click", function() {
      document.getElementById("phrase1").innerHTML = "¡Hola!";
      startTalking("Hola!", "es");
    }); 
    //when the 'what is your name?' button is clicked and language is set to spanish then it will say 'what is your name' in spanish and change the phrase from english to spanish
    document.getElementById("phrase2").addEventListener("click", function() {
      document.getElementById("phrase2").innerHTML = "¿Cómo te llamas?";
      startTalking("¿Cómo te llamas?", "es");
    });
    document.getElementById("phrase3").addEventListener("click", function() {
      document.getElementById("phrase3").innerHTML = "Me llamo...";
      startTalking("Me llamo...", "es");
    });
    //when the 'nice to meet you' button is clicked and language is set to spanish then it will say 'nice to meet you' in spanish and change the phrase from english to spanish
        document.getElementById("phrase4").addEventListener("click", function() {
      document.getElementById("phrase4").innerHTML = "¡Mucho gusto!";
      startTalking("¡Mucho gusto!", "es");
    });
    document.getElementById("phrase5").addEventListener("click", function() {
      document.getElementById("phrase5").innerHTML = "¿Cómo estás?";
      startTalking("¿Cómo estás?", "es");
    }); 
    document.getElementById("phrase6").addEventListener("click", function() {
      document.getElementById("phrase6").innerHTML = "Estoy bien.";
      startTalking("Estoy bien.", "es");
    }); 
    document.getElementById("phrase7").addEventListener("click", function() {
      document.getElementById("phrase7").innerHTML = "Estoy mal.";
      startTalking("Estoy mal.", "es");
    }); 
    document.getElementById("phrase8").addEventListener("click", function() {
      document.getElementById("phrase8").innerHTML = "¡Que tengas un buen día!";
      startTalking("¡Que tengas un buen día!", "es");
    }); 
    document.getElementById("phrase9").addEventListener("click", function() {
      document.getElementById("phrase9").innerHTML = "Adiós";
      startTalking("¡Adiós!", "es");
    }); 
    
    
    
  } else {
  }
}
document.addEventListener("click", () => {
  trigger();
});

function startTalking(phrase, lang)
{
  msg.text = phrase; // tells it what to say
  msg.lang = lang;
  synth.speak(msg); // makes it talk
  document.getElementById("displayText").innerHTML=phrase;
  msg.text = '';
}

</script>
</body>
</html>
