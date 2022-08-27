function hide(){
    var showWeb = 'show-web';
    var hideWeb = 'hide-web';
    
    if(document.getElementById(showWeb)){
        var id  = document.getElementById(showWeb).id;
        var btn = document.getElementById('btn-hider').id;

    }

    if(document.getElementById(hideWeb)){
        var idHide = document.getElementById(hideWeb).id;
        var btn = document.getElementById('btn-show').id;
    }


    if(id == showWeb){
        document.getElementById(showWeb).id = hideWeb;
        document.getElementById('btn-hider').id = 'btn-show';
    };
    

    if(idHide == hideWeb){
        document.getElementById(hideWeb).id = showWeb;
        document.getElementById('btn-show').id = 'btn-hider';
    };
};