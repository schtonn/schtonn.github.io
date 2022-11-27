AV.init({
    appId: "BmologYYnRqCv0SLHDeDdA17-gzGzoHsz",
    appKey: "w9mVebFMdCmY6Nh9vfcBGaGt",
    serverURL: "https://bmologyy.lc-cn-n1-shared.com/",
});

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

var tryTime = 0

function tryClear() {
    if (tryTime == 0) alert('你干嘛')
    else if (tryTime == 1) alert('哎呦')
    else if (tryTime == 2) alert('不会让你清空的')
    else if (tryTime == 3) {
        alert('按钮都给你禁用咯')
        $('#clear').addClass('disabled');
    } else if (tryTime == 10) {
        alert('...')
    } else if (tryTime > 10) {
        alert('闹呢')
    }
    tryTime++;
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
    var username = getCookie("name");
    if (username != "") {
        var result = confirm(username + "，确认上传？");
        if (result) return username
        else return false
    }
    else {
        username = prompt("同一设备一天内的编辑将会保存在一个版本中，并对所有人可见。\n可设置昵称：", "-");
        if (username != "" && username != null) {
            setCookie("name", username, 1);
            return username
        } else {
            return false
        }
    }
}

function getId() {
    var cookieId = getCookie('id')
    if (cookieId != '') return parseInt(cookieId)
    else {
        var newId = Math.ceil(Math.random() * 1000000)
        setCookie('id', newId, 1)
        return newId
    }
}

var curVer = 0, maxVer = -1, stopVer = 1000, stopped = false, working = false;
var maxResult = {}, maxDate = {}, maxNick = {};

function saveMap() {
    var map = []
    for (let i = 0; i < box.length; i++) {
        map[i] = box[i].style.backgroundColor
    }
    maxResult[curVer] = map;
}

function getMap() {
    if (working) {
        console.log("Too frequent!");
        return;
    }
    working = true;
    if (curVer >= 3) $('#upload').addClass('disabled');
    else $('#upload').removeClass('disabled');
    if (curVer != 0) $('#rbtn').removeClass('disabled');
    else $('#rbtn').addClass('disabled');
    if (curVer >= stopVer) {
        if (!stopped) $('#lbtn').addClass('disabled'), stopped = true;
        else {
            curVer = stopVer;
            working = false;
            return;
        }
    }
    else $('#lbtn').removeClass('disabled'), stopped = false;
    $('#version')[0].innerHTML = "当前版本：" + (curVer == 0 ? '' : '-') + curVer + ' by ';
    console.log('GetMap: currentVersion: ' + curVer)
    if (maxVer >= curVer) {
        console.log('Data loaded from cache')
        var map = maxResult[curVer], date = maxDate[curVer]
        console.log(maxResult)
        console.log(maxVer)
        console.log(curVer)
        $('#version')[0].title = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.toString().split(' ')[4];
        $('#version')[0].innerHTML += maxNick[curVer];
        for (let i = 0; i < box.length; i++) {
            box[i].style.backgroundColor = map[i]
        }
        working = false;
    } else {
        const query = new AV.Query('paint');
        query.descending('updatedAt')
        query.limit(curVer + 6)
        query.find().then((result) => {
            if (result.length > curVer) {
                console.log('Data loaded from LeanCloud')
                var map = result[curVer].get('data'), date = result[curVer].get('updatedAt')
                console.log(date)
                $('#version')[0].title = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.toString().split(' ')[4];
                $('#version')[0].innerHTML += result[curVer].get('nickName');
                for (let i = 0; i < box.length; i++) {
                    box[i].style.backgroundColor = map[i]
                }
                maxVer = Math.min(result.length - 1, curVer + 6)
                for (let i = curVer; i < result.length ; i++)maxResult[i] = result[i].get('data')
                for (let i = curVer; i < result.length ; i++)maxDate[i] = result[i].get('updatedAt')
                for (let i = curVer; i < result.length ; i++)maxNick[i] = result[i].get('nickName')
            } else {
                console.log('Found no data!')
                curVer = result.length - 1;
                stopVer = result.length - 1;
                working = false;
                getMap()
            }
            working = false;
        })
    }
}

function reset() {
    curVer = 0;
    maxVer = -1;
    stopVer = 1000;
    getMap()
}

function prevVer() {
    if (working) {
        console.log("Too frequent!");
        return;
    }
    curVer++, getMap();
}

function nextVer() {
    if (working) {
        console.log("Too frequent!");
        return;
    }
    curVer == 0 ? true : (curVer--, getMap());
}

document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e) {
        if (e.key == "a") {
            prevVer()
        }
        else if (e.key == "d") {
            nextVer()
        } else if ("0" <= e.key && e.key <= "9") {

        }
    }
};

let box = []
$(document).ready(function () {
    let color = '#000'

    let lcolor = '#000'

    function updateCol() {
        lcolor = 'rgb('
            + $('#box-r-text')[0].value + ', '
            + $('#box-g-text')[0].value + ', '
            + $('#box-b-text')[0].value + ')'
        nowColor.style.backgroundColor = lcolor
    }

    function slider(obj, num) {
        var box = document.getElementById(obj);
        var hd = box.children[0];
        var hdt = box.children[1];
        var mouseMoved = false;
        hd.onmousedown = function (event) {
            mouseMoved = false;
            var event = event || window.event;
            var leftval = event.clientX - this.offsetLeft;
            document.onmousemove = function (event) {
                mouseMoved = true;
                var event = event || window.event;
                hd.style.left = event.clientX - leftval + "px";
                var far = parseInt(hd.style.left);
                if (far < 0) hd.style.left = 0;
                else if (far > 180) hd.style.left = 180 + "px";
                hdt.style.width = hd.style.left;
                var result = parseInt(parseInt(hdt.style.width) / 180 * num);
                document.getElementById(obj + '-text').value = result;
                updateCol()
            }
            document.onmouseup = function () {
                document.onmousemove = null;
            }

        }
        box.onclick = function (event) {
            var event = event || window.event;
            if (mouseMoved) { mouseMoved = false; return false; }
            mouseMoved = false;
            var boxWidth = event.clientX - this.offsetLeft - $('#tools')[0].offsetLeft;
            if (boxWidth > 180) boxWidth = 180;
            if (boxWidth < -10) return;
            if (boxWidth < 0) boxWidth = 0;
            hdt.style.width = hd.style.left = boxWidth + 'px';
            var result = parseInt(parseInt(hdt.style.width) / 180 * num);
            document.getElementById(obj + '-text').value = result;
            updateCol()
        }
    }

    function changeSlider(obj, num, newVal) {
        if (newVal < 0) newVal = 0;
        if (newVal > 255) newVal = 255;
        var box = document.getElementById(obj);
        var hd = box.children[0];
        var hdt = box.children[1];
        hd.style.left = newVal / num * 180 + 'px';
        hdt.style.width = hd.style.left;
        document.getElementById(obj + '-text').value = newVal;
    }

    slider('box-r', 255);
    slider('box-g', 255);
    slider('box-b', 255);

    $(".box-text").bind('input porpertychange', function () {
        console.log("e");
        updateCol();
        changeSlider('box-r', 255, $('#box-r-text')[0].value)
        changeSlider('box-g', 255, $('#box-g-text')[0].value)
        changeSlider('box-b', 255, $('#box-b-text')[0].value)
    });

    var id = getId()
    console.log('id: ' + id)
    var draw = document.getElementById('draw')
    draw.draggable = false

    var colorList = document.getElementById('color-list')
    var resetButton = document.getElementById('reset')
    var zoomButton = document.getElementById('zoom')
    var toggleButton = document.getElementById('toggle')
    var nowColor = document.getElementById('now-color')
    var isdown = 0;

    draw.onmousedown = function () {
        isdown = 1;
    }
    draw.onmouseup = function () {
        saveMap();
        isdown = 0;
    }

    let zoom = false
    let showTools = false

    draw.draggable = false
    for (let i = 0; i < 128; i++) {
        for (let j = 0; j < 128; j++) {
            box.push(document.createElement("div"))
        }
    }

    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = "#fff"
        box[i].className = 'pixel'
        box[i].onmousedown = function (e) {
            if (e.button == 0) color = lcolor
            else color = '#fff'
            box[i].style.backgroundColor = color
        }
        box[i].onmouseover = function () {
            if (isdown) box[i].style.backgroundColor = color
            else if (box[i].style.backgroundColor == 'rgb(255, 255, 255)') {
                box[i].style.backgroundColor = 'rgb(235, 235, 235)'
            }
        }
        box[i].onmouseleave = function () {
            if (!isdown && box[i].style.backgroundColor == 'rgb(235, 235, 235)') box[i].style.backgroundColor = ('#ffffff')
        }
        draw.appendChild(box[i])
    }

    reset();

    resetButton.onclick = function () {
        reset()
    }

    toggleButton.onclick = function () {
        var tool = $('#tools')
        var controls = $('#controls')
        if (showTools) {
            tool[0].style.setProperty('transform', '');
            controls[0].style.setProperty('transform', '');
            showTools = 0;
        } else {
            tool[0].style.setProperty('transform', 'scale(80%) translate(170px,530px)');
            controls[0].style.setProperty('transform', 'rotate(-30deg) translate(-370px,50px)');
            showTools = 1;
        }
    }

    zoomButton.onclick = function () {
        if (zoom == 0) {
            $(draw).css('transform', 'scale(200%) translate(-' + draw.offsetLeft / 4 + 'px,16px)')
            zoom = 1
        } else if (zoom == 1) {
            $(draw).css('transform', 'scale(400%) translate(-' + draw.offsetLeft / 4 + 'px,8px)')
            zoom = 2
            this.children[0].classList.remove('glyphicon-zoom-in')
            this.children[0].classList.add('glyphicon-zoom-out')
        } else {
            $(draw).css('transform', '')
            zoom = 0
            this.children[0].classList.remove('glyphicon-zoom-out')
            this.children[0].classList.add('glyphicon-zoom-in')
        }
    }

    let colors = ['#FFF', '#000', '#7f7f7f', '#c3c3c3', '#880015', '#ed1c24', '#ff7f27', "#fff200", "#22b14c", "#00a2e8", "#3f48cc", "#a349a4"]
    for (let i = 0; i < colors.length; i++) {
        let colorItem = document.createElement("li")
        colorItem.className = 'color-item'
        colorItem.style.backgroundColor = colors[i]
        colorItem.onclick = function () {
            lcolor = colors[i]
            nowColor.style.backgroundColor = colors[i]
            changeSlider('box-r', 255, parseInt(colorItem.style.backgroundColor.split(',')[0].split('(')[1]))
            changeSlider('box-g', 255, parseInt(colorItem.style.backgroundColor.split(',')[1]))
            changeSlider('box-b', 255, parseInt(colorItem.style.backgroundColor.split(',')[2]))
            updateCol();
        }
        if (i === 0) {
            colorItem.style.border = '1px solid #000000'
        }
        colorList.appendChild(colorItem)
    }

    upload.onclick = function () {
        if (curVer >= 3) {
            alert('过于久远，无法上传！')
            return false;
        }
        var nick = checkCookie()
        console.log('nickName: ' + nick)
        if (nick) {
            const query = new AV.Query('paint');

            console.log('id: ' + id)
            query.equalTo('id', id)
            query.find().then((result) => {
                var map = []
                for (let i = 0; i < box.length; i++) {
                    map[i] = box[i].style.backgroundColor
                }
                if (result.length) {
                    result[0].set('data', map)
                    result[0].set('nickName', nick)
                    result[0].save()
                    console.log('Updated')
                }
                else {
                    const up = new AV.Object('paint');
                    up.set('data', map)
                    up.set('id', id)
                    up.set('nickName', nick)
                    up.save()
                    console.log('Created new instance')
                }
            })
            $('#version')[0].innerHTML = "当前版本：" + (curVer == 0 ? '' : '-') + curVer + ' by ' + nick;
        }
    }
})