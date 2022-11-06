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
})

var tryTime = 0

function tryClear() {
    if (tryTime == 0) alert('你干嘛')
    else if (tryTime == 1) alert('哎呦')
    else if (tryTime == 2) alert('不会让你清空的')
    else if (tryTime == 3) {
        alert('按钮都给你禁用咯')
        document.getElementById('clear').classList.add('disabled');
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
        alert("Hi, " + username);
        return username
    }
    else {
        username = prompt("同一设备一天内的编辑将会保存在一个版本中，并对所有人可见。可设置昵称：", "-");
        if (username != "" && username != null) {
            setCookie("name", username, 1);
            return username
        } else {
            return false
        }
    }
}

function getId(){
    var cookieId=getCookie('id')
    if(cookieId!='')return parseInt(cookieId)
    else{
        var newId=Math.ceil(Math.random() * 1000000)
        setCookie('id',newId,1)
        return newId
    }
}

var curVer = 0

function getMap() {
    if (curVer != 0) document.getElementById('upload').classList.add('disabled')
    else document.getElementById('upload').classList.remove('disabled')
    const query = new AV.Query('paint');
    document.getElementById('version').innerHTML = "当前版本：" + (curVer == 0 ? '' : '-') + curVer + ' by ';
    query.descending('updatedAt')
    query.limit(curVer + 1)
    console.log('currentVersion: '+curVer)
    query.find().then((result) => {
        if (result.length > curVer) {
            var map = result[curVer].get('data')
            document.getElementById('version').title = result[curVer].get('updatedAt');
            document.getElementById('version').innerHTML += result[curVer].get('nickName');
            for (let i = 0; i < box.length; i++) {
                box[i].style.backgroundColor = map[i]
            }
        } else {
            console.log('Found no data!')
            curVer = result.length - 1;
            getMap()
        }
    })
}

function reset() {
    curVer = 0;
    getMap()
}

let box = []
$(document).ready(function () {
    let color = '#000'

    let lcolor = '#000'

    function updateCol() {
        lcolor = 'rgb('
            + document.getElementById('box-r-text').innerHTML + ', '
            + document.getElementById('box-g-text').innerHTML + ', '
            + document.getElementById('box-b-text').innerHTML + ')'
        nowColor.style.backgroundColor = lcolor
    }

    function slider(obj, num) {
        var box = document.getElementById(obj);
        var hd = box.children[0];
        var hdt = box.children[1];
        hd.onmousedown = function (event) {
            var event = event || window.event;
            var leftval = event.clientX - this.offsetLeft;
            document.onmousemove = function (event) {
                var event = event || window.event;
                hd.style.left = event.clientX - leftval + "px";

                var far = parseInt(hd.style.left);

                if (far < 0) {
                    hd.style.left = 0;
                }
                else if (far > 180) {
                    hd.style.left = 180 + "px";
                }

                hdt.style.width = hd.style.left;
                var result = parseInt(parseInt(hdt.style.width) / 180 * num);
                document.getElementById(obj + '-text').innerHTML = result;
                updateCol()
            }
            document.onmouseup = function () {
                document.onmousemove = null;
            }

        }
        box.onclick = function (event) {
            var event = event || window.event;
            var boxWidth = event.clientX - this.offsetLeft - document.getElementById('tools').offsetLeft;
            if (boxWidth > 180) boxWidth = 180;
            if (boxWidth < 0) boxWidth = 0;
            hdt.style.width = hd.style.left = boxWidth + 'px';
            var result = parseInt(parseInt(hdt.style.width) / 180 * num);
            document.getElementById(obj + '-text').innerHTML = result;
            updateCol()
        }
    }

    slider('box-r', 255)
    slider('box-g', 255)
    slider('box-b', 255);
    var id=getId()
    console.log('id: '+id)
    var draw = document.getElementById('draw')
    draw.draggable = false

    var lineButton = document.getElementById('show-hide-line')
    var colorList = document.getElementById('color-list')
    var resetButton = document.getElementById('reset')
    var zoomButton = document.getElementById('zoom')
    var nowColor = document.getElementById('now-color')
    var isdown = 0;

    draw.onmousedown = function () {
        isdown = 1;
    }
    draw.onmouseup = function () {
        isdown = 0;
    }

    let showGrid = false
    let zoom = false

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

    lineButton.onclick = function () {
        if (showGrid) {
            changeClass(box, 'pixel')
            showGrid = false
        } else {
            changeClass(box, 'pixel-line')
            showGrid = true
        }
    }
    resetButton.onclick = function () {
        reset()
    }

    zoomButton.onclick = function () {
        if (zoom == 0) {
            draw.style.setProperty('transform', 'scale(200%) translate(-' + draw.offsetLeft / 4 + 'px,16px)')
            zoom = 1
        } else if (zoom == 1) {
            draw.style.setProperty('transform', 'scale(400%) translate(-' + draw.offsetLeft / 4 + 'px,8px)')
            zoom = 2
            this.children[0].classList.remove('glyphicon-zoom-in')
            this.children[0].classList.add('glyphicon-zoom-out')
        } else {
            draw.style.setProperty('transform', '')
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
        }
        if (i === 0) {
            colorItem.style.border = '1px solid #000000'
        }
        colorList.appendChild(colorItem)
    }

    function changeClass(arr, className) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].className = className
        }
    }

    upload.onclick = function () {
        if (curVer != 0) {
            alert('对历史版本的编辑无法保存！')
            return false;
        }
        var nick = checkCookie()
        console.log('nickName: '+nick)
        if (nick) {
            const query = new AV.Query('paint');

            console.log('id: '+id)
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
            document.getElementById('version').innerHTML = "当前版本：" + (curVer == 0 ? '' : '-') + curVer + ' by ' + nick;
        }
    }
})