if(document.querySelector("#back-to-top")){
    const btnToTop = document.querySelector("#back-to-top");
    
    btnToTop.addEventListener("click", function() {
        gallery.scrollTo(0, 0);
    });
}

if(document.querySelector("#to-footer")){
    const btnToFooter = document.querySelector("#to-footer")
    
    btnToFooter.addEventListener("click", function(){
        gallery.scrollTo(0, 999999999);
    })
}