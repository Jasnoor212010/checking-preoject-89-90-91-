function add_user(){
    player1_name=document.getElementById("player1_name_input");
    player2_name=document.getElementById("player2_name_input");
    localStorage.setItem("player1name",player1_name);
    localStorage.setItem("player2name",player2_name);
    window.location="quiz_game_pageindex.html";
    }
    
