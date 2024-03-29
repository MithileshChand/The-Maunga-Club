//Change Navbar and Its Element Color When Scrolling
let navbar = document.getElementById('navigBar')
let alink = document.getElementsByClassName('change')
let check = document.getElementById('checkBtn')

window.onscroll = function () {

    if (window.pageYOffset > 100) {
        navbar.style.background = "#c6edf8"
        check.style.color = "#282f8f"
        alink[0].style.color = "#282f8f"

        if (window.innerWidth > 952) {
            for (x = 0, leng = alink.length; x < leng; x++) {
                alink[x].style.color = "#282f8f"
            }
        }
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.295)"
        check.style.color = "#f2f2f2"

        for (x = 0, leng = alink.length; x < leng; x++) {
            alink[x].style.color = "rgb(190, 190, 190)"
        }
    }
}

//Change Menu Active When Scrolling
jQuery(document).ready(function (jQuery) {
    var topMenu = jQuery("#nav-ul"),
        offset = 40,
        topMenuHeight = topMenu.outerHeight() + offset,

        // All list items
        menuItems = topMenu.find('a[href*="#"]'),

        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var href = jQuery(this).attr("href"),
                id = href.substring(href.indexOf('#')),
                item = jQuery(id);

            //console.log(item)
            if (item.length) {
                return item;
            }
        });

    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = jQuery(this).attr("href"),
            id = href.substring(href.indexOf('#'));
        offsetTop = href === "#" ? 0 : jQuery(id).offset().top - topMenuHeight + 1;
        jQuery('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    jQuery(window).scroll(function () {

        // Get container scroll position
        var fromTop = jQuery(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if (jQuery(this).offset().top < fromTop)
                return this;
        });

        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        menuItems.parent().removeClass("active");
        if (id) {
            menuItems.parent().end().filter("[href*='#" + id + "']").parent().addClass("active");
        }

    })
})


var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}