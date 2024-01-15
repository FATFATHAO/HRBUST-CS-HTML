window.addEventListener("load", function () {
    var focus_img = document.querySelector(".main1-img");
    var prev_img = document.getElementById("main1-next");
    var next_img = document.getElementById("main1-prev");
    var title_img = document.getElementsByClassName("main1-container-ttl")
    focus_img.addEventListener("mouseenter", function () {
        prev_img.style.display = "block";
        next_img.style.display = "block";
        clearInterval(timer_img);
        timer_img = null;
    })
    focus_img.addEventListener("mouseleave", function () {
        prev_img.style.display = "none";
        next_img.style.display = "none";
        timer_img = setInterval(function () {
            next_img.click();
        },5000)
    })

    var piclist_img = focus_img.getElementsByClassName("main1-img");
    var ul_img = focus_img.querySelector(".main1-img-list");
    for (var i = 0; i < piclist_img.length; i++) {
        var li_img = document.createElement("li");
        li_img.setAttribute("index", i);
        ul_img.appendChild(li_img);
        li_img.addEventListener('click', function () {
            //初始化节点
            for (var i = 0; i < ul_img.children.length; i++) {
                ul_img.children[i].className = '';
            }
            //被点击的节点触发事件
            this.className = 'visited';
            //动画插件
            var index = this.getAttribute('index');
            num_li_index = index;
            circle = index;
            $(".main1-img-container li").eq(num_li_index).fadeIn();
            $(".main1-img-container li").eq(num_li_index).siblings().fadeOut();
            num_img = num_li_index;
            title_img[num_img].style.display = "block";
            for (var i = 0; i < title_img.length; i++) {
                if (i != num_img) {
                    title_img[i].style.display = "none";
                }
            }
        })
    }

    ul_img.children[0].className = 'visited';
    var num_img = 0;
    var circle = 0;
    next_img.addEventListener('click', function () {
        if (ul_img.children[circle].className == 'visited') {
            
        }
        if (num_img == $(".main1-img-container li").length - 1) {
            num_img = -1;
        }
        num_img++;
        $(".main1-img-container li").eq(num_img).fadeIn();
        $(".main1-img-container li").eq(num_img).siblings().fadeOut();
        title_img[num_img].style.display = "block";
        for (var i = 0; i < title_img.length; i++) {
            if (i != num_img) {
                title_img[i].style.display = "none";
            }
        }
        circle++;
        //特判节点
        if (circle == $(".main1-img-container li").length) {
            circle = 0;
        }
        //格式化节点
        for (var i = 0; i < ul_img.children.length; i++) {
            ul_img.children[i].className = '';
        }
        //节点变动
        //console.log(circle);
        ul_img.children[circle].className = 'visited';
    })
    prev_img.addEventListener('click', function () {
        num_img--;
        if (num_img == -1) {
            num_img = $(".main1-img-container li").length - 1;
        }
        $(".main1-img-container li").eq(num_img).fadeIn();
        $(".main1-img-container li").eq(num_img).siblings().fadeOut();
        title_img[num_img].style.display = "block";
        for (var i = 0; i < title_img.length; i++) {
            if (i != num_img) {
                title_img[i].style.display = "none";
            }
        }
        console.log(num_img);
        circle--;
        //特判节点
        if (circle == -1) {
            circle = $(".main1-img-container li").length - 1;
        }
        //格式化节点
        for (var i = 0; i < ul_img.children.length; i++) {
            ul_img.children[i].className = '';
        }
        //节点变动
        ul_img.children[circle].className = 'visited';
    })
    prev_img.addEventListener("mouseenter", function () {
        prev_img.style.display = "block";
        next_img.style.display = "block";
        clearInterval(timer_img);
        timer_img = null;
    })
    prev_img.addEventListener("mouseleave", function () {
        prev_img.style.display = "none";
        next_img.style.display = "none";
        timer_img = setInterval(function () {
            next_img.click();
        }, 5000)
    })
    next_img.addEventListener("mouseenter", function () {
        prev_img.style.display = "block";
        next_img.style.display = "block";
        clearInterval(timer_img);
        timer_img = null;
    })
    next_img.addEventListener("mouseleave", function () {
        prev_img.style.display = "none";
        next_img.style.display = "none";
        timer_img = setInterval(function () {
            next_img.click();
        }, 5000)
    })
    var timer_img = setInterval(function () {
        next_img.click();
    }, 5000);
})