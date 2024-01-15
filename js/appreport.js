window.addEventListener("load", function () {
    //淡入淡出轮播图基本方案
    var num = 0;
    var timer = setInterval(function () {
        num++;
        if (num > $(".banner li").length - 1) {
            num = 0;
        }
        $('.banner li').eq(num).fadeIn();
        $('.banner li').eq(num).siblings().fadeOut();
    }, 5000)
    //获取左右箭头图标
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var focus = document.querySelector(".menu-float-box");
    //当鼠标移到轮播图上
    focus.addEventListener("mouseenter", function () {
        prev.style.display = "block";
        next.style.display = "block";
        //暂停定时器
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        prev.style.display = "none";
        next.style.display = "none";
        timer = setInterval(function () {
            num++;
            if (num > $(".banner li").length - 1) {
                num = 0;
            }
            $('.banner li').eq(num).fadeIn();
            $('.banner li').eq(num).siblings().fadeOut();
        }, 5000)
    })
    prev.addEventListener("mouseenter", function () {
        prev.style.display = "block";
        next.style.display = "block";
        //clearInterval(timer);
        clearInterval(timer);
        timer = null;
    })
    prev.addEventListener("mouseleave", function () {
        prev.style.display = "none";
        next.style.display = "none";
    })
    next.addEventListener("mouseenter", function () {
        prev.style.display = "block";
        next.style.display = "block";
        clearInterval(timer);
        timer = null;
    })
    next.addEventListener("mouseleave", function () {
        prev.style.display = "none";
        next.style.display = "none";
    })
    prev.addEventListener("click", function () {
        num++;
        if (num > $(".banner li").length - 1) {
            num = 0;
        }
        $('.banner li').eq(num).fadeIn();
        $('.banner li').eq(num).siblings().fadeOut();
    })
    next.addEventListener("click", function () {
        num--;
        if (num == -1) {
            num = $('.banner li').length - 1;
        }
        $('.banner li').eq(num).siblings().fadeOut();
        $('.banner li').eq(num).fadeIn();
    })
})
