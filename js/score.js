function toggleHide() {
    $(".hidable").toggle();
};

AV.init({
    appId: "BmologYYnRqCv0SLHDeDdA17-gzGzoHsz",
    appKey: "w9mVebFMdCmY6Nh9vfcBGaGt",
    serverURL: "https://bmologyy.lc-cn-n1-shared.com/",
});

console.log("温馨提示：*成绩*一定不会上传到网络，但为了保证使用范围，可能会对其他信息进行记录。")

function decimal(x, n) {
    x = Math.round(x * 10 ** n) / 10 ** n;
    return x.toFixed(n);
}
var fileCount = 0, cur = 0, files = {};

function prevFile() {
    cur = (cur - 1 + fileCount) % fileCount;
    processFiles();
}

function nextFile() {
    cur = (cur + 1) % fileCount;
    processFiles();
}

function clearScreen() {
    var charts = document.getElementsByClassName("chart");
    for (i = 0; i < charts.length; i++)charts[i].style.display = 'none';
    document.getElementById("fileOutput").innerHTML = "";
    document.getElementById("fileInfo").innerHTML = "";
    document.getElementById("name").innerHTML = "";
}

function reset() {
    cur = 0;
    fileCount = 0;
    files = {};
    clearScreen();
    document.getElementById("message").innerHTML = "";
    document.getElementById("lbtn").classList.add("disabled");
    document.getElementById("rbtn").classList.add("disabled");
    document.getElementById("resetbtn").classList.add("disabled");
    var upBtn = document.getElementById('upbtn');
    var upIcon = document.getElementById('upicon');
    upBtn.classList.remove('btn-danger');
    upBtn.classList.add('btn-info');
    upIcon.classList.remove('glyphicon-exclamation-sign');
    upIcon.classList.add('glyphicon-open');
}

document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e) {
        if (e.key == "ArrowLeft" || e.key == "ArrowUp") {
            prevFile();
        }
        else if (e.key == "ArrowRight" || e.key == "ArrowDown") {
            nextFile();
        } else if ('1' <= e.key && e.key <= '9') {
            if (parseInt(e.key) <= fileCount) {
                cur = parseInt(e.key) - 1;
                processFiles();
            }
        }
    }
};

function getFiles(event) {
    files[fileCount] = event.target.files[0];
    cur = fileCount;
    fileCount++;
    document.getElementById("lbtn").classList.remove("disabled");
    document.getElementById("rbtn").classList.remove("disabled");
    document.getElementById("resetbtn").classList.remove("disabled");
    processFiles(1);
}

function processFiles(isFirstTime = 0) {
    console.log("Start processing No. " + cur);
    var file = files[cur];
    var message = document.getElementById("message");
    var upBtn = document.getElementById('upbtn');
    var upIcon = document.getElementById('upicon');
    message.innerHTML = (cur + 1) + "/" + (fileCount) + " - " + file.name + " - " + file.size + " 字节 - " + file.type + " - 正在读取...<br>>";
    upBtn.classList.remove('btn-danger');
    upBtn.classList.add('btn-info');
    upIcon.classList.remove('glyphicon-exclamation-sign');
    upIcon.classList.add('glyphicon-open');

    var reader = new FileReader();
    var content = "";
    reader.onload = function (event) {
        try {

            var output = document.getElementById("fileOutput");
            var info = document.getElementById("fileInfo");
            var name = document.getElementById("name");
            var object = eval("(" + event.target.result + ")");
            var classText = "", gradingText = "";

            var seIds = [], seNames = [];
            seIds = object.data.seIds;
            for (var i = 0; i < seIds.length; i++) {
                for (var j = 0; j < seIds.length; j++) {
                    if (object.data.multiExam.singleExams[i].seId == seIds[j]) {
                        seNames[j] = object.data.multiExam.singleExams[i].seCourseName;
                    }
                }
            }
            var seNameDic = {};
            for (var i = 0; i < seIds.length; i++) {
                seNameDic[seIds[i]] = seNames[i];
            }
            seNameDic["0"] = "总分";
            for (var i = 0; i < object.data.singleExamClassYsScores.length; i++) {
                seNameDic[object.data.singleExamClassYsScores[i].seId + "Ys"] = seNameDic[object.data.singleExamClassYsScores[i].seId] + " " + object.data.singleExamClassYsScores[i].ysClassId;
            }
            var seIdDic = {};
            for (var i = 0; i < seIds.length; i++) {
                for (var j = 0; j < seIds.length; j++) {
                    if (object.data.multiExamStudentScore.singleExamStudentScores[j].seId == seIds[i]) {
                        seIdDic[j] = i;
                    }
                }
            }
            var scoreP = {}, avgP = {}, rate0 = {}, rate25 = {}, rate50 = {}, rate75 = {}, rate100 = {}, rateFull = {};//表1用
            for (var i = 0; i < seIds.length; i++) {
                scoreP[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = object.data.multiExamStudentScore.singleExamStudentScores[i].essScore;
                avgP[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = object.data.singleExamClassScores[i].secsAvgScore;
                rate0[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = object.data.singleExamClassScores[i].secsMinScore;
                rate25[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = object.data.singleExamClassScores[i].secsQuarterScore;
                rate50[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = object.data.singleExamClassScores[i].secsHalfScore;
                rate75[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = object.data.singleExamClassScores[i].secs3quatrerScore;
                rate100[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = object.data.singleExamClassScores[i].secsMaxScore;
                rateFull[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = object.data.multiExam.singleExams[seIdDic[i]].seFullScore;
            }
            var scoreRate = {};
            for (var i = 0; i < seIds.length; i++) {
                scoreRate[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = decimal(object.data.multiExamStudentScore.singleExamStudentScores[i].essScore / object.data.multiExam.singleExams[seIdDic[i]].seFullScore, 3);
            }
            scoreRate["0"] = decimal(object.data.multiExamStudentScore.messScore / object.data.multiExam.meFullScore, 3);
            var classOrderP = {}, gradeOrderP = {};
            for (var i = 0; i < seIds.length; i++) {
                classOrderP[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = object.data.multiExamStudentScore.singleExamStudentScores[i].essClassOrder;
            }
            for (var i = 0; i < seIds.length; i++) {
                gradeOrderP[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = object.data.multiExamStudentScore.singleExamStudentScores[i].essGradeOrder;
            }
            classOrderP["0"] = object.data.multiExamStudentScore.messClassOrder;
            gradeOrderP["0"] = object.data.multiExamStudentScore.messGradeOrder
            var ysClassOrderP = {};
            for (var i = 0; i < object.data.singleExamClassYsScores.length; i++) {
                for (var j = 0; j < seIds.length; j++) {
                    if (object.data.singleExamClassYsScores[i].seId == object.data.multiExamStudentScore.singleExamStudentScores[j].seId) {
                        ysClassOrderP[object.data.singleExamClassYsScores[i].seId + "Ys"] = object.data.multiExamStudentScore.singleExamStudentScores[j].essYsClassOrder;
                    }
                }
            }
            var classOrder = {}, ysClassOrder = {};
            for (var i = 0; i < seIds.length; i++) {
                classOrder[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = decimal(1 - object.data.multiExamStudentScore.singleExamStudentScores[i].essClassOrder / object.data.singleExamClassScores[i].secsStudentCount, 3);
            }
            for (var i = 0; i < object.data.singleExamClassYsScores.length; i++) {
                for (var j = 0; j < seIds.length; j++) {
                    if (object.data.singleExamClassYsScores[i].seId == object.data.multiExamStudentScore.singleExamStudentScores[j].seId) {
                        ysClassOrder[object.data.singleExamClassYsScores[i].seId + "Ys"] = decimal(1 - object.data.multiExamStudentScore.singleExamStudentScores[j].essYsClassOrder / object.data.singleExamClassYsScores[i].secsStudentCount, 3);
                    }
                }
            }
            classOrder["0"] = decimal(1 - object.data.multiExamStudentScore.messClassOrder / object.data.multiExamClassScores[0].mecsStudentCount, 3); + "<br>"
            var gradeOrder = {};
            for (var i = 0; i < seIds.length; i++) {
                gradeOrder[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] = decimal(1 - object.data.multiExamStudentScore.singleExamStudentScores[i].essGradeOrder / object.data.multiExam.singleExams[seIdDic[i]].seStudentCount, 3);
            }
            gradeOrder["0"] = decimal(1 - object.data.multiExamStudentScore.messGradeOrder / object.data.multiExamSchoolScore.mecsStudentCount, 3); + "<br>"

            for (var i = 0; i < seIds.length; i++) {
                // object.data.multiExamStudentScore.singleExamStudentScores[i].seId
                // object.data.singleExamClassScores[i].seId
                // object.data.multiExam.singleExams[i].seId
                // seIds[i]
                // 前两个和后两个数据应该是能分别对上号的（1-2 3-4），用 seIdDic 连接
                // seIdDic {key(1-2): value(3-4),..}

                classText += "<h4>"
                    + seNameDic[object.data.multiExamStudentScore.singleExamStudentScores[i].seId] + "</h4>"
                    + "单科分数：" + object.data.multiExamStudentScore.singleExamStudentScores[i].essScore + "<br><br>"
                    + "单科分数班级排名：" + object.data.multiExamStudentScore.singleExamStudentScores[i].essClassOrder + "<br>"
                    + "单科班级参考人数：" + object.data.singleExamClassScores[i].secsStudentCount + "<br>"
                    + "单科班级年级排名：" + object.data.singleExamClassScores[i].secsClassOrder + "<br>"
                    + "单科班级："
                    + '<table class="table table-responsive" style="table-layout: fixed;"><tr><td>平均分</td><td>最高分</td><td>四分位数（75%）</td><td>中位数</td><td>四分位数（25%）</td><td>最低分</td></tr>'
                    + "<tr><td>" + object.data.singleExamClassScores[i].secsAvgScore + "</td><td>" + object.data.singleExamClassScores[i].secsMaxScore + "</td><td>" + object.data.singleExamClassScores[i].secs3quatrerScore + "</td><td>" + object.data.singleExamClassScores[i].secsHalfScore + "</td><td>" + object.data.singleExamClassScores[i].secsQuarterScore + "</td><td>" + object.data.singleExamClassScores[i].secsMinScore + "</td></tr></table>"
                    ;
                for (var j = 0; j < object.data.singleExamClassYsScores.length; j++) {
                    if (object.data.singleExamClassYsScores[j].seId == object.data.multiExamStudentScore.singleExamStudentScores[i].seId) {
                        classText += "<br><br>"
                            + "单科分层班级名称：" + object.data.singleExamClassYsScores[j].ysClassId + "<br>"
                            + "单科分数分层班级排名：" + object.data.multiExamStudentScore.singleExamStudentScores[i].essYsClassOrder + "<br>"
                            + "单科分层班级参考人数：" + object.data.singleExamClassYsScores[j].secsStudentCount + "<br>"
                            + "单科分层班级年级排名：" + object.data.singleExamClassYsScores[j].secsClassOrder + "<br>"
                            + "单科分层班级："
                            + '<table class="table table-responsive" style="table-layout: fixed;"><tr><td>平均分</td><td>最高分</td><td>四分位数（75%）</td><td>中位数</td><td>四分位数（25%）</td><td>最低分</td></tr>'
                            + "<tr><td>" + object.data.singleExamClassYsScores[j].secsAvgScore + "</td><td>" + object.data.singleExamClassYsScores[j].secsMaxScore + "</td><td>" + object.data.singleExamClassYsScores[j].secs3quatrerScore + "</td><td>" + object.data.singleExamClassYsScores[j].secsHalfScore + "</td><td>" + object.data.singleExamClassYsScores[j].secsQuarterScore + "</td><td>" + object.data.singleExamClassYsScores[j].secsMinScore + "</td></tr></table>"
                            ;
                    }
                }
                classText += "<br><br>"
                    + "单科分数年级排名：" + object.data.multiExamStudentScore.singleExamStudentScores[i].essGradeOrder + "<br>"
                    + "单科年级参考人数：" + object.data.multiExam.singleExams[seIdDic[i]].seStudentCount + "<br>"
                    + "单科年级："
                    + '<table class="table table-responsive" style="table-layout: fixed;"><tr><td>平均分</td><td>最高分</td><td>四分位数（75%）</td><td>中位数</td><td>四分位数（25%）</td><td>最低分</td></tr>'
                    + "<tr><td>" + object.data.multiExam.singleExams[seIdDic[i]].seAvgScore + "</td><td>" + object.data.multiExam.singleExams[seIdDic[i]].seMaxScore + "</td><td>" + object.data.multiExam.singleExams[seIdDic[i]].se3QuarterScore + "</td><td>" + object.data.multiExam.singleExams[seIdDic[i]].seHalfScore + "</td><td>" + object.data.multiExam.singleExams[seIdDic[i]].seQuarterScore + "</td><td>" + object.data.multiExam.singleExams[seIdDic[i]].seMinScore + "</td></tr></table><br><br>"
                    ;
            }

            function sheetOutput(title, dict) {
                gradingText += "<h4>" + title + "</h4>"
                gradingText += '<table class="table table-responsive" style="table-layout: fixed;"><tr>';
                if (dict != ysClassOrder) {
                    for (var i in dict) {
                        gradingText += "<td>" + seNameDic[i].substr(0, 2) + "</td>";
                    }
                }
                else {
                    for (var i in dict) {
                        gradingText += "<td>" + seNameDic[i] + "</td>";
                    }
                }
                gradingText += "</tr><tr>"
                for (var i in dict) {
                    gradingText += "<td>" + dict[i] + "</td>";
                }
                gradingText += "</tr></table><br><br>";
            }
        } catch (e) {
            console.log(e);
            clearScreen();
            message.innerHTML += "读取失败！";
            upBtn.classList.remove('btn-info');
            upBtn.classList.add('btn-danger');
            upIcon.classList.remove('glyphicon-open');
            upIcon.classList.add('glyphicon-exclamation-sign');
            return;
        }
        // sheetOutput("各科得分比例一览表", scoreRate);
        // sheetOutput("各科班级排名一览表", classOrder);
        // sheetOutput("各科分层班级排名一览表", ysClassOrder);
        // sheetOutput("各科年级排名一览表", gradeOrder);
        if (isFirstTime) {
            const up = AV.Object.extend('Score');
            const upload = new up();
            upload.set('name', object.data.multiExamStudentScore.studentName);
            upload.set('classId', parseInt(object.data.examStudents[0].classId));
            upload.save().then((upload) => {
                console.log("success" + upload);
            });
        }
        message.innerHTML += "读取成功！"
            + " - 注：实验中学 74 桌出品，因 2025 届高一开始大量使用，为防止原作者被追责，我便搬运下来略作修改并加上了图表功能。<br>";
        name.innerHTML = "姓名：" + object.data.multiExamStudentScore.studentName;
        info.innerHTML = "<h3>" + object.data.multiExam.meName + "</h3>"
            + "行政班级：" + object.data.examStudents[0].classId + "<br>"
            + "姓名：" + object.data.multiExamStudentScore.studentName + "<br>"
            + "<br><h4>班内一览表</h4>";
        output.innerHTML = "<br><h4>总分</h4>"
            + "全科分数：" + object.data.multiExamStudentScore.messScore + "<br><br>"
            + "全科分数班级排名：" + object.data.multiExamStudentScore.messClassOrder + "<br>"
            + "全科班级参考人数：" + object.data.multiExamClassScores[0].mecsStudentCount + "<br>"
            + "全科班级年级排名：" + object.data.multiExamClassScores[0].mecsClassOrder + "<br>"
            + "全科班级："
            + '<table class="table table-responsive" style="table-layout: fixed;"><tr><td>平均分</td><td>最高分</td><td>四分位数（75%）</td><td>中位数</td><td>四分位数（25%）</td><td>最低分</td></tr>'
            + "<tr><td>" + object.data.multiExamClassScores[0].mecsAvgScore + "</td><td>" + object.data.multiExamClassScores[0].mecsMaxScore + "</td><td>" + object.data.multiExamClassScores[0].mecs3quatrerScore + "</td><td>" + object.data.multiExamClassScores[0].mecsHalfScore + "</td><td>" + object.data.multiExamClassScores[0].mecsQuarterScore + "</td><td>" + object.data.multiExamClassScores[0].mecsMinScore + "</td></tr></table>"
            + "<br><br>全科分数年级排名：" + object.data.multiExamStudentScore.messGradeOrder + "<br>"
            + "全科年级参考人数：" + object.data.multiExamSchoolScore.mecsStudentCount + "<br>"
            + "全科年级："
            + '<table class="table table-responsive" style="table-layout: fixed;"><tr><td>平均分</td><td>最高分</td><td>四分位数（75%）</td><td>中位数</td><td>四分位数（25%）</td><td>最低分</td></tr>'
            + "<tr><td>" + object.data.multiExam.meAvgScore + "</td><td>" + object.data.multiExam.meMaxScore + "</td><td>" + object.data.multiExam.me3QuatrerScore + "</td><td>" + object.data.multiExam.meHalfScore + "</td><td>" + object.data.multiExam.meQuarterScore + "</td><td>" + object.data.multiExam.meMinScore + "</td></tr></table><br><br>"
            + classText
            + gradingText
            + "<h4>排名汇总</h4>";


        $("#fileOutput table").css("display", "inline-table");
        $("#fileOutput table").css("margin-bottom", "0px");
        // 路径配置

        var charts = document.getElementsByClassName("chart");
        for (i = 0; i < charts.length; i++)charts[i].style.display = '';

        sChart1 = echarts.init(document.getElementById("score1"));
        sChart2 = echarts.init(document.getElementById("score2"));
        oChart1 = echarts.init(document.getElementById("order1"));
        oChart2 = echarts.init(document.getElementById("order2"));
        oChart3 = echarts.init(document.getElementById("order3"));
        oChart4 = echarts.init(document.getElementById("order4"));


        seNameDicP = []; scorePP = []; avgPP = []; rate0P = []; rate25P = []; rate50P = []; rate75P = []; rate100P = []; rateFullP = [];
        scoreQ = []; avgQ = []; rate0Q = []; rate25Q = []; rate50Q = []; rate75Q = []; rate100Q = [];
        seNameDicP2 = []; classOrderPP = []; gradeOrderPP = []; classOrderQ = []; gradeOrderQ = [];
        seNameDicP3 = []; ysClassOrderPP = []; ysClassOrderQ = [];
        for (var i in scoreP) {
            if (seNameDic[i].substr(0, 2) == '总分') continue;
            seNameDicP.push(seNameDic[i].substr(0, 2));
            scorePP.push(scoreP[i]);
            avgPP.push(avgP[i]);
            rate0P.push(rate0[i]);
            rate25P.push(rate25[i]);
            rate50P.push(rate50[i]);
            rate75P.push(rate75[i]);
            rate100P.push(rate100[i]);
            rateFullP.push(rateFull[i]);
            scoreQ.push(decimal(scoreP[i] / rateFull[i] * 100, 1));
            avgQ.push(decimal(avgP[i] / rateFull[i] * 100, 1));
            rate0Q.push(decimal(rate0[i] / rateFull[i] * 100, 1));
            rate25Q.push(decimal(rate25[i] / rateFull[i] * 100, 1));
            rate50Q.push(decimal(rate50[i] / rateFull[i] * 100, 1));
            rate75Q.push(decimal(rate75[i] / rateFull[i] * 100, 1));
            rate100Q.push(decimal(rate100[i] / rateFull[i] * 100, 1));
        }
        for (var i in classOrderP) {
            seNameDicP2.push(seNameDic[i].substr(0, 2));
            classOrderPP.push(classOrderP[i]);
            gradeOrderPP.push(gradeOrderP[i]);
            classOrderQ.push(decimal(classOrder[i] * 100, 1));
            gradeOrderQ.push(decimal(gradeOrder[i] * 100, 1));
        }
        for (var i in ysClassOrderP) {
            seNameDicP3.push(seNameDic[i]);
            ysClassOrderPP.push(ysClassOrderP[i]);
            ysClassOrderQ.push(decimal(ysClassOrder[i] * 100, 1));
        }
        var sOp1 = { //具体细节的描述
            textStyle: {
                fontFamily: 'Noto Serif SC'
            },
            title: {
                text: '分数',
                textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                },
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['0%', '25%', '50%', '75%', '100%', '满分', '平均分', '我的分数']
            },
            toolbox: { //可以选择具体数据，柱状图，折线图，还原，保存图片的的切换选择
                show: true,
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar'] //可选折线图和柱状图
                    },
                    restore: {
                        show: true  //恢复默认
                    },
                    saveAsImage: {
                        show: true // 存储为图片的功能
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                //name: 'min_sup(%)'
                data: seNameDicP,
                name: '科目',
                position: 'left'
            }],
            yAxis: [{
                type: 'value',
                name: '分数',
                position: 'left'
            }],
            series: [{
                name: '0%',
                type: 'line',
                data: rate0P,
                color: '#99ab4e'
            }, {
                name: '25%',
                type: 'line',
                data: rate25P,
                color: '#c7dc68'
            }, {
                name: '50%',
                type: 'line',
                data: rate50P,
                color: '#c7dc68'
            }, {
                name: '75%',
                type: 'line',
                data: rate75P,
                color: '#c7dc68'
            }, {
                name: '100%',
                type: 'line',
                data: rate100P,
                color: '#99ab4e'
            }, {
                name: '满分',
                type: 'line',
                data: rateFullP,
                color: '#783c1d'
            }, {
                name: '平均分',
                type: 'line',
                data: avgPP,
                color: '#2792c3'
            }, {
                name: '我的分数',
                type: 'line',
                data: scorePP,
                color: '#e2041b'
            }

            ]
        };
        var sOp2 = { //具体细节的描述
            textStyle: {
                fontFamily: 'Noto Serif SC'
            },
            title: {
                text: '得分率',
                textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                },
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['0%', '25%', '50%', '75%', '100%', '平均得分率', '我的得分率']
            },
            toolbox: { //可以选择具体数据，柱状图，折线图，还原，保存图片的的切换选择
                show: true,
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar'] //可选折线图和柱状图
                    },
                    restore: {
                        show: true  //恢复默认
                    },
                    saveAsImage: {
                        show: true // 存储为图片的功能
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                //name: 'min_sup(%)'
                data: seNameDicP,
                name: '科目',
                position: 'left'
            }],
            yAxis: [{
                type: 'value',
                name: '得分率(%)',
                position: 'left'
            }],
            series: [{
                name: '0%',
                type: 'line',
                data: rate0Q,
                color: '#99ab4e'
            }, {
                name: '25%',
                type: 'line',
                data: rate25Q,
                color: '#c7dc68'
            }, {
                name: '50%',
                type: 'line',
                data: rate50Q,
                color: '#c7dc68'
            }, {
                name: '75%',
                type: 'line',
                data: rate75Q,
                color: '#c7dc68'
            }, {
                name: '100%',
                type: 'line',
                data: rate100Q,
                color: '#99ab4e'
            }, {
                name: '平均得分率',
                type: 'line',
                data: avgQ,
                color: '#2792c3'
            }, {
                name: '我的得分率',
                type: 'line',
                data: scoreQ,
                color: '#e2041b'
            }

            ]
        };

        var oOp1 = {
            textStyle: {
                fontFamily: 'Noto Serif SC'
            }, title: {
                text: '行政排名位次',
                textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'bold'
                },
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['班级排名', '年级排名']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                //name: 'min_sup(%)'
                data: seNameDicP2,
                name: '科目',
                position: 'left'
            }],
            yAxis: [{
                type: 'value',
                name: '排名',
                position: 'left'
            }],
            series: [{
                name: '班级排名',
                type: 'bar',
                data: classOrderPP,
                color: '#343090'
            }, {
                name: '年级排名',
                type: 'bar',
                data: gradeOrderPP,
                color: '#5f59f7'
            }
            ]
        };

        var oOp2 = {
            textStyle: {
                fontFamily: 'Noto Serif SC'
            }, title: {
                text: '行政排名比例',
                textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'bold'
                },
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['班级排名(%)', '年级排名(%)']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                //name: 'min_sup(%)'
                data: seNameDicP2,
                name: '科目',
                position: 'left'
            }],
            yAxis: [{
                type: 'value',
                name: '排名(%)',
                position: 'left'
            }],
            series: [{
                name: '班级排名(%)',
                type: 'bar',
                data: classOrderQ,
                color: '#343090'
            }, {
                name: '年级排名(%)',
                type: 'bar',
                data: gradeOrderQ,
                color: '#5f59f7'
            }
            ]
        };

        var oOp3 = {
            textStyle: {
                fontFamily: 'Noto Serif SC'
            }, title: {
                text: '分班排名位次',
                textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'bold'
                },
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['分班排名']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                //name: 'min_sup(%)'
                data: seNameDicP3,
                name: '科目',
                position: 'left'
            }],
            yAxis: [{
                type: 'value',
                name: '排名',
                position: 'left'
            }],
            series: [{
                name: '分班排名',
                type: 'bar',
                data: ysClassOrderPP,
                color: '#44c2fd'
            }
            ]
        };

        var oOp4 = {
            textStyle: {
                fontFamily: 'Noto Serif SC'
            }, title: {
                text: '分班排名比例',
                textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'bold'
                },
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['分班排名(%)']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                //name: 'min_sup(%)'
                data: seNameDicP3,
                name: '科目',
                position: 'left'
            }],
            yAxis: [{
                type: 'value',
                name: '排名(%)',
                position: 'left'
            }],
            series: [{
                name: '分班排名(%)',
                type: 'bar',
                data: ysClassOrderQ,
                color: '#44c2fd'
            }
            ]
        };

        // 为echarts对象加载数据 
        sChart1.setOption(sOp1);
        sChart2.setOption(sOp2);
        oChart1.setOption(oOp1);
        oChart2.setOption(oOp2);
        oChart3.setOption(oOp3);
        oChart4.setOption(oOp4);
    }
    reader.readAsText(file);
}