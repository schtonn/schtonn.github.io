

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

var tryTime=0

function tryClear(){
    if(tryTime==0)alert('你干嘛')
    else if(tryTime==1)alert('哎呦')
    else if(tryTime==2)alert('不会让你清空的')
    else if(tryTime==3){
        alert('按钮都给你禁用咯')
        document.getElementById('clear').classList.add('disabled');
    }
    tryTime++;
}

function reset() {
    const query = new AV.Query('paint');
    query.descending('updatedAt')
    query.limit(1)
    query.find().then((result) => {
        if (result.length) {
            var map = result[0].get('data')
            for (let i = 0; i < box.length; i++) {
                box[i].style.backgroundColor = map[i]
            }
        } else {
            console.log('Reset found no data!')
        }
    })
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
        //鼠标按下事件  只要鼠标按下时是在hd上触发就可以
        hd.onmousedown = function (event) {
            var event = event || window.event;
            var leftval = event.clientX - this.offsetLeft;
            //滑动事件 作用在document上，因为如果是作用在hd.onmousemove，滑动时可能会出现鼠标脱离hd范围（范围太小）而停止滑动，但是此时鼠标按下还没有弹起还处于滑动状态，所以就产生了bug
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
            var boxWidth = event.clientX - this.offsetLeft;
            if (boxWidth > 180) {
                boxWidth = 180;
            }
            hdt.style.width = hd.style.left = boxWidth + 'px';
            var result = parseInt(parseInt(hdt.style.width) / 180 * num);
            document.getElementById(obj + '-text').innerHTML = result;
            updateCol()
        }
    }

    slider('box-r', 255)
    slider('box-g', 255)
    slider('box-b', 255);
    var id = Math.ceil(Math.random() * 1000000);
    var draw = document.getElementById('draw')
    draw.draggable = false

    var lineButton = document.getElementById('show-hide-line')
    var colorList = document.getElementById('color-list')
    var resetButton = document.getElementById('reset')
    var nowColor = document.getElementById('now-color')
    var isdown = 0;

    draw.onmousedown = function () {
        isdown = 1;
    }
    draw.onmouseup = function () {
        isdown = 0;
    }

    let showLine = true

    draw.draggable = false
    for (let i = 0; i < 64; i++) {      //创建像素点16*16
        for (let j = 0; j < 64; j++) {
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
        if (showLine) {
            changeClass(box, 'pixel')
            showLine = false
        } else {
            changeClass(box, 'pixel-line')
            showLine = true
        }
    }
    resetButton.onclick = function () {
        reset()
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
        const query = new AV.Query('paint');

        console.log(id)
        query.equalTo('id', id)
        query.find().then((result) => {
            var map = []
            for (let i = 0; i < box.length; i++) {
                map[i] = box[i].style.backgroundColor
            }
            if (result.length) {
                result[0].set('data', map)
                result[0].save()
                console.log('Updated')
            }
            else {
                const up = new AV.Object('paint');
                up.set('data', map)
                up.set('id', id)
                up.save()
                console.log('Created new instance')
            }
        })
    }
})