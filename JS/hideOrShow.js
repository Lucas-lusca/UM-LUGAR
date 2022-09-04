function hide(btn){
    
    switch (btn) {
        case 'btn-web':
            var showWeb = 'show-web';
            var hideWeb = 'hide-web';

                if(document.getElementById(showWeb)){
                    document.getElementById(showWeb).id = hideWeb;
                    document.getElementById('btn-hider').id = 'btn-show';
                }
                else if(document.getElementById(hideWeb)){
                    document.getElementById(hideWeb).id = showWeb;
                    document.getElementById('btn-show').id = 'btn-hider';
                };

            break;

        case 'btn-game':
            var showGame = 'show-games';
            var hideGame = 'hide-games';

                if(document.getElementById(showGame)){
                    document.getElementById(showGame).id = hideGame;
                    document.getElementsByName('btn-hider-game').id = 'btn-show';
                }
                else if(document.getElementById(hideGame)){
                    document.getElementById(hideGame).id = showGame;
                    document.getElementsByName('btn-hider-game').id = 'btn-hider';
                };

            break;
    
        default:
            alert("ERRO");
            break;
    }
};