function spr() {
    var wart1;

    wart1 = parseInt(document.getElementById("e1").value);
    

    if (isNaN(wart1)) {
        if (!confirm("czy wiesz co masz wpisac?")) alert("potrzebuje liczbe a nie znaki!");
    }
    else {
        if (wart1 == 22) {
            var newDiv = $(document.createElement('div'));
            $(newDiv).css("background-color", "white");
            $(newDiv).html('Gratulacje, odpowiedziales prawidlowo!');
            $(newDiv).dialog();
            
        }
        else {
            var newDiv = $(document.createElement('div'));
            $(newDiv).css("background-color", "white");
            $(newDiv).html('Zle, sprobuj ponownie');
            $(newDiv).dialog();
           
        }
    }
}
