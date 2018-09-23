window.onload = function () {
    var getNavi = document.getElementById('m-navigation');
   //var getContainer = document.getElementById('page');
    var mobile = document.createElement("span");
    mobile.setAttribute("id", "mobile-navigation");
    getNavi.parentNode.insertBefore(mobile, getNavi);

    document.getElementById('mobile-navigation').onclick = function () {
        var a = getNavi.getAttribute('style');
        if (a) {
            getNavi.removeAttribute('style');
            document.getElementById('mobile-navigation').style.backgroundImage = 'url(assets/img/header/mobile-menu.png)';
        } else {
            getNavi.style.display = 'block';
            document.getElementById('mobile-navigation').style.backgroundImage = 'url(assets/img/header/mobile-close.png)';
        }
    };
    var getElm = getNavi.getElementsByTagName("LI");
    for (var i = 0; i < getElm.length; i++) {
        if (getElm[i].children.length > 1) {
            var smenu = document.createElement("span");
            smenu.setAttribute("class", "mobile-submenu");
            smenu.setAttribute("OnClick", "submenu(" + i + ")");
            getElm[i].appendChild(smenu);
        };
    };
    submenu = function (i) {
        var sub = getElm[i].children[1];
        var b = sub.getAttribute('style');
        if (b) {
            sub.removeAttribute('style');
            getElm[i].lastChild.style.backgroundImage = 'url(assets/img/header/mobile-expand.png)';
            getElm[i].lastChild.style.backgroundColor = 'rgba(121, 101, 102, 0.91)';
        } else {
            sub.style.display = 'flex';
            getElm[i].lastChild.style.backgroundImage = 'url(assets/img/header/mobile-collapse.png)';
            getElm[i].lastChild.style.backgroundColor = 'rgba(204, 60, 104, 0.91)';
        }
    };
};  
var touchsensitivty = 5;
$(".carousel").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > touchsensitivty) {
            $(this).carousel('next');
        } else if (Math.floor(xClick - xMove) < -(touchsensitivty)) {
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
});