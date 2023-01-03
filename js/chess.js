$(window).on({
    contextmenu: function () {
        return false;
    },
    dragstart: function () {
        return false;
    },
    beforeunload: function () {
        return true;
    }
})

var curCol = 0, myCol = 2, cur, messages = [0, 0, 0];

function isMobile() {
    let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // alert(navigator.userAgent + '\n' + flag)
    return flag;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    myCol = parseInt(getCookie('color'))
    if (myCol != 0 && myCol != 1) myCol = 2;
}

function updateCurLight() {
    if (curCol == 1) {
        $('.light').removeClass("black");
        $('.light').addClass("white");
    } else {
        $('.light').removeClass("white");
        $('.light').addClass("black");
    }
}

function updateMyLight() {
    if (myCol == 1) {
        $('.mylight').removeClass("black");
        $('.mylight').addClass("white");
    } else if (myCol == 0) {
        $('.mylight').removeClass("white");
        $('.mylight').addClass("black");
    } else {
        $('.mylight').removeClass("black white");
    }
}

function updateMessages() {
    if (messages[0]) $('.message1').addClass("red");
    else $('.message1').removeClass("red");
    if (messages[1]) $('.message2').addClass("red");
    else $('.message2').removeClass("red");
    if (messages[2]) $('.message3').addClass("red");
    else $('.message3').removeClass("red");
    if (messages[3]) $('.message4').addClass("red");
    else $('.message4').removeClass("red");
    $("#messageText")[0].value = messages[4];
    $("#messageServer")[0].innerHTML = messages[5];    
}

var timer, st = 1;
function uploadMessages() {
    timer && clearTimeout(timer);
    timer = setTimeout(function () { st = 1; }, 100);
    //FUUUULL BRiDGE RECtiFyer!!!
    if (st) {
        console.log('Messages updated.')
        sendMessage()
    }
    st = 0;
}

function updateCol() {
    updateCurLight();
    if (curCol) {
        $('.pointer').removeClass("black");
        $('.pointer').addClass("white");
    } else {
        $('.pointer').removeClass("white");
        $('.pointer').addClass("black");
    }
}

class Chess {
    constructor(ele) {
        this.ele = ele;
        this.init();
    }
    init() {
        this.arr = [];
        this.render();
        $('.pointer')[0].style.display = 'block'
        $('.pointer').animate({
            left: $('#game')[0].offsetLeft - 50,
            top: $('#game')[0].offsetTop + 30,
        }, 0);
        if (isMobile()) $('.pointer').hide();
        $('.pos').on('mouseenter', function () {
            if ($(this).hasClass("black") || $(this).hasClass("white") || (myCol != 2 && myCol != curCol)) return;
            document.onmousemove = null
            $('.pointer').animate({
                left: this.parentNode.parentNode.parentNode.parentNode.offsetLeft + this.parentNode.offsetLeft + 3,
                top: this.parentNode.parentNode.parentNode.parentNode.offsetTop + this.parentNode.offsetTop + 3,
                opacity: 0.7,
            }, 0)
            $('.pointer')[0].style.boxShadow = '3px 3px 7px rgba(15,15,15,0.5)'
            $('.pointer')[0].style.transform = 'scale(100%)'
        })
        $('.pos').mouseleave(function (e) {
            updateCol();
            document.onmousemove = function (e) {
                $('.pointer').animate({
                    left: e.pageX - 14,
                    top: e.pageY - 14,
                    opacity: 0.3,
                    scale: 1
                }, 0)
            }
            $('.pointer')[0].style.boxShadow = ''
            $('.pointer')[0].style.transform = ''
        })
        this.span = $("#tbodys span");
        let that = this
        $("#tbodys").on('click', 'tr td span', function () {
            that.click(this);
        });
        $("#regret").on('click', function () {
            that.regret();
        })
        $("#agin").on('click', function () {
            that.agin();
        })
        $("#check").on('click', function () {
            that.check();
        })
        $(".message1").on('click', function () {
            messages[0] = !messages[0];
            updateMessages();
            uploadMessages();
        })
        $(".message2").on('click', function () {
            messages[1] = !messages[1];
            updateMessages();
            uploadMessages();
        })
        $(".message3").on('click', function () {
            messages[2] = !messages[2];
            updateMessages();
            uploadMessages();
        })
        $(".message4").on('click', function () {
            messages[3] = !messages[3];
            messages[4] = $("#messageText")[0].value;
            updateMessages();
            uploadMessages();
        })
        $("#messageText").on('input blur', function () {
            messages[4] = $("#messageText")[0].value;
            updateMessages();
            uploadMessages();
        })
    }
    render() {
        let div = $("<div id='xq-tips'>").appendTo($(this.ele))
        $("<div class='xq-txt'>").appendTo($(div))
        let table2 = $("<table><tbody id='tbodys'>").addClass("tables").attr("border", "0").appendTo($(this.ele));
        for (let i = 0; i < 16; i++) {
            let tr2 = $("<tr>").appendTo($("#tbodys"));
            for (let j = 0; j < 16; j++) {
                $("<td><span class='pos' id=" + (i * 16 + j) + ">").appendTo($(tr2));
            }
        }
    }
    click(_this) {
        console.log(_this)
        this.ifs(_this)
        this.win();
    }
    upd() {
        $(this.span).each((index, item) => {
            this.arr.forEach((arrItem, arrIndex) => {
                if (index == arrItem) {
                    if (arrIndex % 2 == 0) $(item).addClass("black");
                    else $(item).addClass("white");
                }
            })
        })
        let num = this.arr.length;
        curCol = num % 2;
        updateCurLight();
    }
    ifs(_this) {
        if (myCol == 2) {
            myCol = curCol;
            setCookie('color', myCol, 1)
        }
        if ($(_this).hasClass("black") || $(_this).hasClass("white") || myCol != curCol) return;
        myCol = curCol;
        updateMyLight();
        let num = this.arr.length;
        console.log(this.arr)
        $(this.span).each((index, item) => {
            $(item).removeClass("highlight");
            if (item === _this) {
                this.arr.push(index);
                curCol = (num + 1) % 2;
                updateCurLight();
                if (num % 2 == 0) {
                    $(_this).addClass("black");
                }
                else {
                    $(_this).addClass("white");
                }
                // return;
            }
        })
        sendMessage(this.arr)
    }
    win() {
        let this_ = this;
        let brr = [], wrr = [];
        $(this_.arr).each((index, item) => {
            if ($(this_.span[item]).hasClass("black")) {
                brr.push(item);
            }
            else {
                wrr.push(item);
            }
        })
        brr = brr.sort(function (a, b) {
            return a - b;
        })
        wrr = wrr.sort(function (a, b) {
            return a - b;
        })
        if (this.isInclude(brr, 1) || this.isInclude(brr, 16) || this.isInclude(brr, 17) || this.isInclude(brr, 15)) {
            this.arr = [];
            $("#xq-tips").show();
            $(".xq-txt").html("Black Wins!");
            $("#regret").hide();
        }
        if (this.isInclude(wrr, 1) || this.isInclude(wrr, 16) || this.isInclude(wrr, 17) || this.isInclude(wrr, 15)) {
            this.arr = [];
            $("#xq-tips").show();
            $(".xq-txt").html("White Wins!");
            $("#regret").hide();
        }
    }
    isInclude(brr, x) {
        for (let i = 0; i < brr.length; i++) {
            if (brr.includes(brr[i]) && brr.includes(brr[i] + x * 1) && brr.includes(brr[i] + x * 2) && brr.includes(brr[i] + x * 3) && brr.includes(brr[i] + x * 4)) {
                return true;
            }
        }
    }
    regret() {
        if (this.arr.length == 0 || curCol == myCol) {
            return false;
        }
        let len = this.arr.length - 1;
        let num = this.arr[len]
        $(this.span[num]).removeClass("black white");
        curCol = num % 2;
        updateCol();
        this.arr.pop();
        sendMessage(this.arr)
    }
    reset() {
        this.arr = [];
        for (let i = 0; i < this.span.length; i++) {
            $(this.span[i]).removeClass("black white");
        }
    }
    agin() {
        $('.pointer').removeClass("white");
        $('.pointer').addClass("black");
        checkCookie();
        var exp = new Date();
        exp.setTime(exp.getTime() - 1)
        setCookie('color', myCol, exp)
        myCol = 2;
        updateMyLight();
        this.reset();
        $("#xq-tips").hide();
        $(".xq-txt").html("");
        $("#regret").show();
        sendMessage(this.arr)
    }
    check() {
        $(this.span).each((index, item) => {
            if (index == this.arr[this.arr.length - 1]) {
                $(item).addClass("highlight");
                return;
            }
        })
    }
}
var game = new Chess($("#game"));

checkCookie();

var conversation = document.getElementById('conversation');
var sendBtn = document.getElementById('sendBtn');
var socket = null;
var createSocket = function () {
    if (socket) {
        socket.close();
    }
    var url = 'wss://' + window.location.host + '/ws/chess';
    socket = new WebSocket(url);
    socket.onopen = function () {
        console.log('connected to ' + url);
    }
    socket.onmessage = function (event) {
        var map = JSON.parse(event.data).content;
        messages = JSON.parse(event.data).message
        console.log(messages)
        updateMessages();
        game.reset();
        game.arr = map;
        game.upd();
        curCol = map.length % 2;
        if (map.length) {
            game.win()
        } else {
            $('.pointer').removeClass("white");
            $('.pointer').addClass("black");
            checkCookie();
            var exp = new Date();
            exp.setTime(exp.getTime() - 1)
            setCookie('color', myCol, exp)
            myCol = 2;
            $("#xq-tips").hide();
            $(".xq-txt").html("");
            $("#regret").show();
        }
        console.log('Updated')
    }
    socket.onclose = function () {
        console.log('close connect to' + url);
    }
};
var sendMessage = function (map = game.arr, msg = messages, type = '') {
    var bd = JSON.stringify({
        from: myCol,
        content: map,
        message: msg,
        type: type
    })
    console.log(bd)
    fetch('/chess/setboard', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: bd
    }).then(res => {
        return res.json();
    })
};

createSocket();
checkCookie();
game.upd();
updateCol();
updateMessages();
$("#begin").hide();
$("#regret").show();
$("#agin").show();
$("#game").show();
