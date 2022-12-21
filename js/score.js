function toggleHide() {
    $(".hidable").toggle(1000);
};

var knownExams = ''

for (let i = 3000; i < 3400; i++)knownExams += i.toString() + ','
knownExams = knownExams.slice(0, knownExams.length - 1)

function decimal(x, n) {
    x = Math.round(x * 10 ** n) / 10 ** n;
    return x.toFixed(n);
}
var fileCount = 0, cur = 0, files = {};
var stuId = {}, examId = {}

function prevFile() {
    cur = (cur - 1 + fileCount) % fileCount;
    processFiles();
}

function nextFile() {
    cur = (cur + 1) % fileCount;
    processFiles();
}

function clearScreen() {
    $(".chart").hide(300)
    $("#fileOutput").html('');
    // $("#fileInfo").html('');
    $("#name").html('');
}

document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e) {
        if (e.key == "ArrowLeft") {
            prevFile();
        }
        else if (e.key == "ArrowRight") {
            nextFile();
        }
    }
};

function getFiles(e) {
    files[fileCount] = e.target.files[0];
    cur = fileCount;
    fileCount++;
    $("#controls").removeClass("disabled");
    $("#lbtn").removeClass("disabled");
    $("#rbtn").removeClass("disabled");
    processFiles(1);
}

//原理：string<->cipherparams.ciphertext
const key = CryptoJS.enc.Utf8.parse("abcdefgabcdefg12");
function aesDecrypt(encrypted) {
    var cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Hex.parse(encrypted) })
    var decrypted = CryptoJS.AES.decrypt(cipherParams, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
function aesEncrypt(encrypted) {
    return CryptoJS.AES.encrypt(encrypted, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).ciphertext.toString();
}

function stringToByte(str) {
    var bytes = new Array();
    var len, c;
    len = str.length;
    for (let i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c >= 0x010000 && c <= 0x10FFFF) {
            bytes.push(((c >> 18) & 0x07) | 0xF0);
            bytes.push(((c >> 12) & 0x3F) | 0x80);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if (c >= 0x000800 && c <= 0x00FFFF) {
            bytes.push(((c >> 12) & 0x0F) | 0xE0);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if (c >= 0x000080 && c <= 0x0007FF) {
            bytes.push(((c >> 6) & 0x1F) | 0xC0);
            bytes.push((c & 0x3F) | 0x80);
        } else {
            bytes.push(c & 0xFF);
        }
    }
    return bytes;
}

function fetchDo(id) {
    var bd = '{"meId":' + $('#Id').val() + ',"seIds":"' + knownExams + '","schoolId":19707,"studentId":"' + id + '"}';
    // console.log(bd)
    bd = aesEncrypt(bd)
    // console.log(bd)
    fetch('http://36.112.23.77/analysis/api/student/exam/getStudentReportMEVO', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: bd
    }).then(res => {
        res.text().then(resj => {
            files[fileCount] = new Blob([resj], {
                type: 'text/plain'
            });;
            cur = fileCount;
            fileCount++;
            $("#controls").removeClass("disabled");
            $("#lbtn").removeClass("disabled");
            $("#rbtn").removeClass("disabled");
            processFiles(1);
        });
    })
}

function fetchMe(id) {
    if (!parseInt(id)) {
        fetch('/js/e.json', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        }).then(res => {
            res.json().then(resj => {
                var queryData = resj.data.filter(function (e) {
                    return e.name == id
                });
                fetchDo(queryData[0].no)
            });
        })
    } else fetchDo(id)
}

var datSe

function imageLoaded(p) {
    var imgObj = $('img')[p]
    var por = imgObj.width / imgObj.naturalWidth;
    if (por == 1) por = ($('.tab-content')[0].clientWidth - 12) / imgObj.naturalWidth;
    $('.cover' + p).empty()
    for (var i = 0; i < datSe.displayIndexDetails.length; i++) {
        var di = datSe.displayIndexDetails[i]
        var s = di.eqAnswerIpxywh
        var sp = s.split('#')
        for (let j = 0; j < sp.length; j++) {
            var spp = sp[j].split(',')
            if (spp.length == 6) {
                if (parseInt(spp[1]) - 1 == p) {
                    var opt = $('<span class="minus" style="transform:translate(' + (spp[2] * por).toFixed(6) + 'px,' + (spp[3] * por).toFixed(6) + 'px)">'
                        + ((di.eqScore == di.eqFullScore) ? (di.eqFullScore.toString()) : ((di.eqScore == 0) ? ((di.eqScore - di.eqFullScore).toString()) : (di.eqScore.toString() + '/' + di.eqFullScore.toString()))) + '</span>').appendTo('.cover' + p)
                    if (di.eqScore == di.eqFullScore) opt.addClass('full')
                    else wriggle(opt)
                }
            } else {
                if (p == 0) {
                    var opt = $('<span class="sp" style="transform:translate(' + (spp[1] * por).toFixed(6) + 'px,' + (spp[2] * por).toFixed(6) + 'px);width:' + (spp[3] * por).toFixed(6) + 'px;height:' + (spp[4] * por).toFixed(6) + 'px"></span>').appendTo('.cover' + p)
                    if (j == 0 && di.eqFullScore != di.eqScore)
                        wriggle($('<span class="minus" style="transform:translate(' + (spp[1] * por - 20).toFixed(6) + 'px,' + (spp[2] * por - 5).toFixed(6) + 'px)">'
                            + (di.eqScore - di.eqFullScore).toString() + '</span>').appendTo('.cover' + p))
                    if (di.eqCorrectAnswer.match("ABCD"[j])) opt.addClass('cor')
                    else if (di.eqAnswer.match("ABCD"[j])) opt.addClass('err')
                }
            }
        }
    }
}

var curSe, shown

function getSe(id, force, force2) {
    if (!force && !$('.nav-tabs>li')[2].classList[0]) return
    if (!force2 && id == curSe && shown) return
    shown = 1
    curSe = id
    fontSize = 14
    if (!stuId[cur]) stuId[cur] = prompt('数字校园号？')
    if (!examId[cur]) examId[cur] = prompt('考试编号？（心意答点击考试标题后，切换考试的列表里可见）')
    var bd = '{"schoolId":19707,"seId":' + id + ',"studentId":"' + stuId[cur] + '"}';
    bd = aesEncrypt(bd)
    fetch('http://36.112.23.77/analysis/api/student/exam/getStudentReportSEVO', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: bd
    }).then(res => {
        res.json().then(() => {
            // $('#singleDat').html(aesDecrypt(resj.data))
        });
    })
    bd = '{"schoolId":19707,"meId":' + examId[cur] + ',"seId":' + id + ',"studentId":"' + stuId[cur] + '"}';
    bd = aesEncrypt(bd)
    fetch('http://36.112.23.77/analysis/api/student/exam/getStuExamDetailInfo', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: bd
    }).then(res => {
        res.json().then(resj => {
            // $('#singleDat').html(aesDecrypt(resj.data))
            $('#singleDat').empty()
            var f = JSON.parse(aesDecrypt(resj.data))
            for (let i = 1; i <= f.pageCount; i++) {
                $('#singleDat').append('<br><span class="cover' + (i - 1) + '"></span><img src="http://36.112.23.77' + f.examUrl + 'page_' + i + '.jpg" onload="imageLoaded(' + (i - 1) + ')">')
                $('img')[i - 1].style.width = '100%'
            }
            datSe = f;
        });
    })
}

var timer = []

function clearWriggle() {
    for (let i = 0; i < timer.length; i++)clearInterval(timer[i])
    timer = []
}

function wriggle(el) {
    var last = 0, now = 10
    timer.push(setInterval(function () {
        now = Math.random() * 100 - 50
        $(el).css('transform', $(el).css('transform').split('rotate')[0] + 'rotate(' + (now - last) + 'deg)')
        last = now
    }, Math.random() * 600 + 300))
}


function getCol(rate) {
    if (90 <= rate) return 'success'
    if (75 <= rate) return 'info'
    if (60 <= rate) return 'warning'
    else return 'danger'
}

var time, fontSize

function resizeChart() {
    clearTimeout(time)
    time = setTimeout(function () {
        clearWriggle()
        if ($('.nav-tabs>li')[0].classList[0] == 'active') {
            console.log('reload chart')
            sc1.resize()
            sc2.resize()
            oc1.resize()
            oc2.resize()
            oc3.resize()
            oc4.resize()
            if ($('#score1>div').css('width') == '0px') $('#resizeBtn').show()
            else $('#resizeBtn').hide(300)
        } else if ($('.nav-tabs>li')[2].classList[0] == 'active') {
            console.log('reload image')
            for (let i = 0; i < datSe.pageCount; i++)imageLoaded(i)
            $('.minus').css('font-size', fontSize)
        }
    }, 300)
}

function getClassCount() {
    if (examId[cur] == 1021 || examId[cur] == 972 || examId[cur] == 957 || examId[cur] == 951) return '15'
    else if (examId[cur] == 970) return '13'
    else return '?'
}

var link = document.createElement('a'), url

function down() {
    link.href = url;
    link.setAttribute('download', "data.txt")
    link.click();
}

function processFiles(isFirstTime = 0) {
    console.log("Start processing No. " + cur);
    var file = files[cur];
    url = window.URL.createObjectURL(file)

    var message = $("#message")[0];
    var tableLayout = '<table class="table table-responsive" style="table-layout: fixed;"><tr><td>平均分</td><td>最高分</td><td>75%</td><td>中位数</td><td>25%</td><td>最低分</td></tr>'
    message.innerHTML = (cur + 1) + "/" + (fileCount) + " - " + file.name + " - " + file.size + " 字节 - " + file.type + " - 正在读取...<br>>";
    $("#upbtn").removeClass('btn-danger');
    $("#upbtn").addClass('btn-info');
    $("#upicon").removeClass('glyphicon-exclamation-sign');
    $("#upicon").addClass('glyphicon-open');

    var reader = new FileReader();
    reader.onload = function (event) {
        try {

            var output = $("#fileOutput")[0];
            var info = $("#fileInfo")[0];
            var name = $("#name")[0];
            var object = eval("(" + event.target.result + ")");
            var classText = "", ohText = "";
            $('#single').empty();

            var dat = eval("(" + aesDecrypt(object.data).toString() + ")");

            examId[cur] = dat.meId.toString();
            stuId[cur] = dat.studentId;

            info.innerHTML = "<h3>" + dat.multiExam.meName + "</h3>"
            var seIds = [], seNames = [];
            var mulStu = dat.multiExamStudentScore, mulClass=dat.multiExamClassScores,datSingle = mulStu.singleExamStudentScores, datClass = dat.singleExamClassScores, datYs = dat.singleExamClassYsScores, datMulti = dat.multiExam.singleExams;
            seIds = dat.seIds;
            var n = seIds.length
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (datMulti[i].seId == seIds[j]) {
                        seNames[j] = datMulti[i].seCourseName;
                    }
                }
            }
            // console.log(seIds)
            // console.log(seNames)
            var seNameDic = {};
            for (let i = 0; i < n; i++) {
                seNameDic[seIds[i]] = seNames[i];
            }
            seNameDic["0"] = "总分";
            for (let i = 0; i < datYs.length; i++) {
                seNameDic[datYs[i].seId + "Ys"] = seNameDic[datYs[i].seId] + " " + datYs[i].ysClassId;
            }
            var seIdDic = {}, seIdRev = {}, hasId = {};
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (!datSingle[j]) continue;
                    if (datSingle[j].seId == seIds[i]) {
                        hasId[i] = true;
                        seIdDic[j] = i;
                    }
                }
            }
            for (let i = 1; i < n; i++) {
                if (!hasId[i]) seIds[i] = -1
            }
            for (let i = 0; i < n; i++)seIdRev[seIdDic[i]] = i;
            var scoreP = {}, avgP = {}, rate0 = {}, rate25 = {}, rate50 = {}, rate75 = {}, rate100 = {}, rateFull = {};//表1用
            var classOrderP = {}, ysClassOrderP = {}, gradeOrderP = {};
            var classOrder = {}, ysClassOrder = {}, gradeOrder = {};
            for (let i = 0; i < n; i++) {
                if (!datSingle[i]) continue;

                var dId = datSingle[i].seId;
                scoreP[dId] = datSingle[i].essScore;
                avgP[dId] = datClass[i].secsAvgScore;
                rate0[dId] = datClass[i].secsMinScore;
                rate25[dId] = datClass[i].secsQuarterScore;
                rate50[dId] = datClass[i].secsHalfScore;
                rate75[dId] = datClass[i].secs3quatrerScore;
                rate100[dId] = datClass[i].secsMaxScore;
                rateFull[dId] = datMulti[seIdDic[i]].seFullScore;
                classOrderP[dId] = datSingle[i].essClassOrder;
                gradeOrderP[dId] = datSingle[i].essGradeOrder;
                classOrder[dId] = decimal(1 - datSingle[i].essClassOrder / datClass[i].secsStudentCount, 3);
                gradeOrder[dId] = decimal(1 - datSingle[i].essGradeOrder / datMulti[seIdDic[i]].seStudentCount, 3);
            }
            classOrder["0"] = decimal(1 - mulStu.messClassOrder / mulClass[0].mecsStudentCount, 3);
            gradeOrder["0"] = decimal(1 - mulStu.messGradeOrder / dat.multiExamSchoolScore.mecsStudentCount, 3);
            classOrderP["0"] = mulStu.messClassOrder;
            gradeOrderP["0"] = mulStu.messGradeOrder
            for (let i = 0; i < datYs.length; i++) {
                for (let j = 0; j < n; j++) {
                    if (!datSingle[j]) continue;

                    if (datYs[i].seId == datSingle[j].seId) {
                        ysClassOrder[datYs[i].seId + "Ys"] = decimal(1 - datSingle[j].essYsClassOrder / datYs[i].secsStudentCount, 3);
                        ysClassOrderP[datYs[i].seId + "Ys"] = datSingle[j].essYsClassOrder;
                    }
                }
            }
            var classCount = getClassCount()
            for (let i = 0; i < n; i++) {
                // dat.multiExamStudentScore.singleExamStudentScores[i].seId    ---datSingle
                // dat.singleExamClassScores[i].seId                            ---datClass
                // dat.multiExam.singleExams[i].seId                            ---datMulti
                // seIds[i]
                // 前两个和后两个数据应该是能分别对上号的（1-2 3-4），用 seIdDic 连接
                // seIdDic {key(1-2): value(3-4),..}
                var g = seIdRev[i];
                if (!datSingle[g]) continue;
                $('#single').append('<button class="btn btn-' + getCol(decimal(gradeOrder[seIds[i]] * 100, 1)) + ' btn-how" onclick="getSe(' + seIds[i] + ');$(\'.btn-how\').removeClass(\'active\');$(this).addClass(\'active\')">' + seNameDic[datSingle[g].seId] + '</button>')

                classText += "<h3 class='bg-" + getCol(decimal(gradeOrder[seIds[i]] * 100, 1)) + " text-" + getCol(decimal(gradeOrder[seIds[i]] * 100, 1)) + "'>"
                    + seNameDic[datSingle[g].seId] + " <small>" + datSingle[g].essScore + "</small></h3>"
                    + "<h4>" + dat.examStudents[0].classId + " 班内 <small>"
                    + datSingle[g].essClassOrder + " / " + datClass[g].secsStudentCount + "</small></h4>"
                    + tableLayout
                    + "<tr><td>" + datClass[g].secsAvgScore + "</td><td>" + datClass[g].secsMaxScore + "</td><td>" + datClass[g].secs3quatrerScore + "</td><td>" + datClass[g].secsHalfScore + "</td><td>" + datClass[g].secsQuarterScore + "</td><td>" + datClass[g].secsMinScore + "</td></tr></table>";
                ohText = "，" + dat.examStudents[0].classId + " 班 " + datClass[g].secsClassOrder + " / " + classCount
                for (let j = 0; j < datYs.length; j++) {
                    if (datYs[j].seId == datSingle[g].seId) {
                        classText += "<h4>" + datYs[j].ysClassId + " 层内 <small>"
                            + datSingle[g].essYsClassOrder + " / " + datYs[j].secsStudentCount + "</small></h4>"
                            + tableLayout
                            + "<tr><td>" + datYs[j].secsAvgScore + "</td><td>" + datYs[j].secsMaxScore + "</td><td>" + datYs[j].secs3quatrerScore + "</td><td>" + datYs[j].secsHalfScore + "</td><td>" + datYs[j].secsQuarterScore + "</td><td>" + datYs[j].secsMinScore + "</td></tr></table>";
                        ohText += "，" + datYs[j].ysClassId + " 层 " + datYs[j].secsClassOrder + " / ?"
                    }
                }
                classText += "<h4>年级 <small>"
                    + datSingle[g].essGradeOrder + " / " + datMulti[seIdDic[g]].seStudentCount + ohText + "</small></h4>"
                    + tableLayout
                    + "<tr><td>" + datMulti[seIdDic[g]].seAvgScore + "</td><td>" + datMulti[seIdDic[g]].seMaxScore + "</td><td>" + datMulti[seIdDic[g]].se3QuarterScore + "</td><td>" + datMulti[seIdDic[g]].seHalfScore + "</td><td>" + datMulti[seIdDic[g]].seQuarterScore + "</td><td>" + datMulti[seIdDic[g]].seMinScore + "</td></tr></table>";
            }
            if (!curSe) curSe = seIds[0]
            getSe(curSe, 0, 1)
        } catch (e) {
            console.log(e);
            clearScreen();
            message.innerHTML += "读取失败！";
            $("#upbtn").removeClass('btn-info');
            $("#upbtn").addClass('btn-danger');
            $("#upicon").removeClass('glyphicon-open');
            $("#upicon").addClass('glyphicon-exclamation-sign');
            return;
        }
        $('#single').append('<button class="btn btn-default btn-how" onclick="fontSize+=3;$(\'.minus\').css(\'font-size\',fontSize+\'px\');for (let i = 0; i < datSe.pageCount; i++)$(\'img\')[i].style.width=parseInt($(\'img\')[i].style.width)+20+\'%\';resizeChart()"><span class="glyphicon glyphicon-zoom-in"></span></button>')
        $('#single').append('<button class="btn btn-default btn-how" onclick="fontSize-=3;$(\'.minus\').css(\'font-size\',fontSize+\'px\');for (let i = 0; i < datSe.pageCount; i++)$(\'img\')[i].style.width=parseInt($(\'img\')[i].style.width)-20+\'%\';resizeChart()"><span class="glyphicon glyphicon-zoom-out"></span></button>')
        $('#single').append('<span id="singleDat" style="word-wrap: break-word; white-space: normal"></span><br><br><br>')
        if (isFirstTime) {
            var bd = JSON.stringify({
                content: mulStu.studentName + ' ' + parseInt(dat.examStudents[0].classId),
            })
            fetch('/score/log', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: bd
            })
        }
        message.innerHTML += "读取成功！<br>";
        name.innerHTML = "姓名：" + mulStu.studentName;
        info.innerHTML = "<h3>" + dat.multiExam.meName
            + " <small>" + dat.examStudents[0].classId + "班 "
            + mulStu.studentName + "</small></h3>"
        if (n > 1) output.innerHTML = "<h3>总分 <small>" + mulStu.messScore + "</small></h3>"
            + "<h4>" + dat.examStudents[0].classId + " 班内 <small>"
            + mulStu.messClassOrder + " / " + mulClass[0].mecsStudentCount + "</small></h4>"
            + tableLayout
            + "<tr><td>" + mulClass[0].mecsAvgScore + "</td><td>" + mulClass[0].mecsMaxScore + "</td><td>" + mulClass[0].mecs3quatrerScore + "</td><td>" + mulClass[0].mecsHalfScore + "</td><td>" + mulClass[0].mecsQuarterScore + "</td><td>" + mulClass[0].mecsMinScore + "</td></tr></table>"
            + "<h4>年级 <small>"
            + mulStu.messGradeOrder + " / " + dat.multiExamSchoolScore.mecsStudentCount + "，" + dat.examStudents[0].classId + "班 " + mulClass[0].mecsClassOrder + " / " + classCount + "</small></h4>"
            + tableLayout
            + "<tr><td>" + dat.multiExam.meAvgScore + "</td><td>" + dat.multiExam.meMaxScore + "</td><td>" + dat.multiExam.me3QuatrerScore + "</td><td>" + dat.multiExam.meHalfScore + "</td><td>" + dat.multiExam.meQuarterScore + "</td><td>" + dat.multiExam.meMinScore + "</td></tr></table>"
            + classText
        else output.innerHTML = classText;


        $("#fileOutput table").css("display", "inline-table");
        $("#fileOutput table").css("margin-bottom", "0px");

        $('.chart').show();

        sc1 = echarts.init($("#score1")[0]);
        sc2 = echarts.init($("#score2")[0]);
        oc1 = echarts.init($("#order1")[0]);
        oc2 = echarts.init($("#order2")[0]);
        oc3 = echarts.init($("#order3")[0]);
        oc4 = echarts.init($("#order4")[0]);


        seNameDicP = []; scorePP = []; avgPP = []; rateFullP = [];
        // rate0P = []; rate25P = []; rate50P = []; rate75P = []; rate100P = [];
        scoreQ = []; avgQ = [];
        // rate0Q = []; rate25Q = []; rate50Q = []; rate75Q = []; rate100Q = [];
        seNameDicP2 = []; classOrderPP = []; gradeOrderPP = []; classOrderQ = []; gradeOrderQ = [];
        seNameDicP3 = []; ysClassOrderPP = []; ysClassOrderQ = [];
        seIds[n] = 0
        var boxP = [], boxQ = [];
        for (let i = 0; i < n; i++) {
            var g = seIds[i];
            if (g == -1) continue;
            if (seNameDic[g].substr(0, 2) == '总分') continue;
            seNameDicP.push(seNameDic[g].substr(0, 2));
            scorePP.push(scoreP[g]);
            avgPP.push(avgP[g]);
            // rate0P.push(rate0[g]);
            // rate25P.push(rate25[g]);
            // rate50P.push(rate50[g]);
            // rate75P.push(rate75[g]);
            // rate100P.push(rate100[g]);
            rateFullP.push(rateFull[g]);
            boxP.push({ value: [rate0[g], rate25[g], rate50[g], rate75[g], rate100[g]] })
            scoreQ.push(decimal(scoreP[g] / rateFull[g] * 100, 1));
            avgQ.push(decimal(avgP[g] / rateFull[g] * 100, 1));
            // rate0Q.push(decimal(rate0[g] / rateFull[g] * 100, 1));
            // rate25Q.push(decimal(rate25[g] / rateFull[g] * 100, 1));
            // rate50Q.push(decimal(rate50[g] / rateFull[g] * 100, 1));
            // rate75Q.push(decimal(rate75[g] / rateFull[g] * 100, 1));
            // rate100Q.push(decimal(rate100[g] / rateFull[g] * 100, 1));
            boxQ.push({
                value: [decimal(rate0[g] / rateFull[g] * 100, 1),
                decimal(rate25[g] / rateFull[g] * 100, 1),
                decimal(rate50[g] / rateFull[g] * 100, 1),
                decimal(rate75[g] / rateFull[g] * 100, 1),
                decimal(rate100[g] / rateFull[g] * 100, 1)]
            })
        }
        for (let i = 0; i <= n; i++) {
            var g = seIds[i];
            if (g == -1) continue;
            if (seNameDic[g].substr(0, 2) == '总分' && n == 1) continue;
            seNameDicP2.push(seNameDic[g].substr(0, 2));
            classOrderPP.push(classOrderP[g]);
            gradeOrderPP.push(gradeOrderP[g]);
            classOrderQ.push(decimal(classOrder[g] * 100, 1));
            gradeOrderQ.push(decimal(gradeOrder[g] * 100, 1));
        }
        for (let i in ysClassOrderP) {
            seNameDicP3.push(seNameDic[i]);
            ysClassOrderPP.push(ysClassOrderP[i]);
            ysClassOrderQ.push(decimal(ysClassOrder[i] * 100, 1));
        }

        var opBase = {
            textStyle: { fontFamily: 'Noto Serif SC' },
            tooltip: { trigger: 'axis' },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: { show: true },
                    dataView: {
                        show: true,
                        readOnly: false
                    }
                },
                orient: 'vertical'
            },
            emphasis: {
                focus: 'series',
            },
            calculable: true,
        }
        var sOp1 = { ...opBase }, sOp2 = { ...opBase }, oOp1 = { ...opBase }, oOp2 = { ...opBase }, oOp3 = { ...opBase }, oOp4 = { ...opBase };
        sOp1.title = {
            text: '分数',
            textStyle: {
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 'bold',
            },
        }
        sOp1.legend = { data: ['四分位', /*'0%', '25%', '50%', '75%', '100%',*/ '满分', '平均分', '我的分数'] }
        sOp1.xAxis = [{
            axisTick: {
                alignWithLabel: true
            },
            type: 'category', data: seNameDicP,
            name: '科目',
            position: 'left'
        }]
        sOp1.yAxis = [{
            type: 'value', name: '分数', position: 'left'
        }]
        sOp1.series = [
            {
                name: '四分位',
                type: 'boxplot', data: boxP, color: '#5bc0de',
                itemStyle: {
                    color: 'transparent'
                }
            },
            // { name: '0%', type: 'line', data: rate0P, color: '#5cb85c' },
            // { name: '25%', type: 'line', data: rate25P, color: '#c7dc68' },
            // { name: '50%', type: 'line', data: rate50P, color: '#f0ad4e' },
            // { name: '75%', type: 'line', data: rate75P, color: '#c7dc68' },
            // { name: '100%', type: 'line', data: rate100P, color: '#5cb85c' },
            { name: '满分', type: 'scatter', data: rateFullP, color: '#b6b6b6' },
            { name: '平均分', type: 'line', data: avgPP, color: '#337ab7' },
            { name: '我的分数', type: 'line', data: scorePP, color: '#e2041b' },
        ]

        sOp2.title = {
            text: '得分率',
            textStyle: {
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 'bold',
            },
        }
        sOp2.legend = { data: ['四分位', /*'0%', '25%', '50%', '75%', '100%', */'平均得分率', '我的得分率'] }
        sOp2.xAxis = [{
            axisTick: {
                alignWithLabel: true
            },
            type: 'category',
            data: seNameDicP,
            name: '科目',
            position: 'left'
        }]
        sOp2.yAxis = [{
            type: 'value',
            name: '得分率(%)',
            position: 'left'
        }]
        sOp2.series = [
            {
                name: '四分位', type: 'boxplot', data: boxQ, color: '#5bc0de',
                itemStyle: {
                    color: 'transparent'
                }
            },
            // { name: '0%', type: 'line', data: rate0Q, color: '#5cb85c' },
            // { name: '25%', type: 'line', data: rate25Q, color: '#c7dc68' },
            // { name: '50%', type: 'line', data: rate50Q, color: '#f0ad4e' },
            // { name: '75%', type: 'line', data: rate75Q, color: '#c7dc68' },
            // { name: '100%', type: 'line', data: rate100Q, color: '#5cb85c' },
            { name: '平均得分率', type: 'line', data: avgQ, color: '#337ab7' },
            { name: '我的得分率', type: 'line', data: scoreQ, color: '#d9534f' }
        ]


        oOp1.title = {
            text: '行政排名位次',
            textStyle: {
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 'bold',
            },
        }
        oOp1.legend = { data: ['班级排名', '年级排名'] }
        oOp1.xAxis = [{
            axisTick: {
                alignWithLabel: true
            },
            type: 'category', data: seNameDicP2,
            name: '科目',
            position: 'left'
        }]
        oOp1.yAxis = [{
            type: 'value',
            name: '排名',
            position: 'left'
        }]
        oOp1.series = [
            { name: '班级排名', type: 'bar', data: classOrderPP, color: '#5bc0de' },
            { name: '年级排名', type: 'bar', data: gradeOrderPP, color: '#337ab7' }
        ]

        oOp2.title = {
            text: '行政排名比例',
            textStyle: {
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 'bold',
            },
        }
        oOp2.legend = { data: ['班级排名(%)', '年级排名(%)'] }
        oOp2.xAxis = [{
            axisTick: {
                alignWithLabel: true
            },
            type: 'category', data: seNameDicP2,
            name: '科目',
            position: 'left'
        }]
        oOp2.yAxis = [{
            type: 'value',
            name: '排名(%)',
            position: 'left',
            max: 100,
        }]
        oOp2.series = [
            { name: '班级排名(%)', type: 'bar', data: classOrderQ, color: '#5bc0de' },
            { name: '年级排名(%)', type: 'bar', data: gradeOrderQ, color: '#337ab7' }
        ]

        oOp3.title = {
            text: '分班排名位次',
            textStyle: {
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 'bold',
            },
        }
        oOp3.legend = { data: ['分班排名'] }
        oOp3.xAxis = [{
            axisTick: {
                alignWithLabel: true
            },
            type: 'category', data: seNameDicP3,
            name: '科目',
            position: 'left'
        }]
        oOp3.yAxis = [{
            type: 'value',
            name: '排名',
            position: 'left'
        }]
        oOp3.series = [{
            name: '分班排名', type: 'bar', data: ysClassOrderPP, color: '#5cb85c'
        }]

        oOp4.title = {
            text: '分班排名比例',
            textStyle: {
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 'bold',
            },
        }
        oOp4.legend = { data: ['分班排名(%)'] }
        oOp4.xAxis = [{
            axisTick: {
                alignWithLabel: true
            },
            type: 'category', data: seNameDicP3,
            name: '科目',
            position: 'left'
        }]
        oOp4.yAxis = [{
            type: 'value',
            name: '排名(%)',
            position: 'left',
            max: 100,
        }]
        oOp4.series = [{
            name: '分班排名(%)', type: 'bar', data: ysClassOrderQ, color: '#5cb85c'
        }]


        // 为echarts对象加载数据 
        sc1.setOption(sOp1);
        sc2.setOption(sOp2);
        oc1.setOption(oOp1);
        oc2.setOption(oOp2);
        oc3.setOption(oOp3);
        oc4.setOption(oOp4);
        window.onresize = resizeChart
    }
    reader.readAsText(file);
}

$().ready(function () {
    $(".chart").hide()
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
    $("#Input").keydown(function (e) {
        if (e.keyCode == 13) {
            $("#fetchBtn")[0].click();
        }
    })
})

//uglifyjs public/js/score.js -c -m eval,toplevel,reserved=[nextFile,prevFile,fetchMe,resizeChart,getSe,imageLoaded,toggleHide,fontSize,curSe,datSe] -o public/js/score.min.js