player1_name= localStorage.getItem("player1name");
player2_name= localStorage.getItem("player2name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("palyer_question").innerHTML="Question turn: "+player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn: "+player2_name;

function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    first_char=word.charAt(1);
    last_char=word.charAt(word.length-1);
    middle_char=word.charAt(Math.floor(word.length/2));

    remove_first_char=word.replace(first_char,"_");
    remove_last_char =remove_first_char.replace(last_char,"_");
    remove_middle_char =remove_last_char.replace(middle_char,"_");

question_word=remove_middle_char;

question_tag="<h4 id='question'> Q. "+question_word+"</h4> <br>";
answer_tag="answer: <input type='text' id='input_answer '><br>";
button_tag="<button onclick='check()'>Check</button>";
row = question_tag+answer_tag+button_tag;
document.getElementById("output").innerHTML=row;
document.getElementById("word").innerHTML="";
}