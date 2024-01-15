window.addEventListener("load", function () {
    //���뵭���ֲ�ͼ��������
    var num = 0;
    var timer = setInterval(function () {
        num++;
        if (num > $(".banner li").length - 1) {
            num = 0;
        }
        $('.banner li').eq(num).fadeIn();
        $('.banner li').eq(num).siblings().fadeOut();
    }, 5000)
    //��ȡ���Ҽ�ͷͼ��
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var focus = document.querySelector(".menu-float-box");
    //������Ƶ��ֲ�ͼ��
    focus.addEventListener("mouseenter", function () {
        prev.style.display = "block";
        next.style.display = "block";
        //��ͣ��ʱ��
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
