var list = ['',
    'H', 'He',
    'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne',
    'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar',
    'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr',
    'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe',
    'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn',
    'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'
]
var weighList = {
    H: 1, He: 4,
    Li: 7, Be: 9, B: 11, C: 12, N: 14, O: 16, F: 19, Ne: 20,
    Na: 23, Mg: 24, Al: 27, Si: 28, P: 31, S: 32, Cl: 35.5, Ar: 40,
    K: 39, Ca: 40, Sc: 45, Ti: 48, V: 51, Cr: 52, Mn: 55, Fe: 56, Co: 59, Ni: 59, Cu: 64, Zn: 65.5, Ga: 70, Ge: 72.5, As: 75, Se: 79, Br: 80, Kr: 84,
    Rb: 85.5, Sr: 87.5, Y: 89, Zr: 91, Nb: 93, Mo: 96, Tc: 99, Ru: 101, Rh: 103, Pd: 106.5, Ag: 108, Cd: 112.5, In: 115, Sn: 118.5, Sb: 122, Te: 127.5, I: 127, Xe: 131,
    Cs: 133, Ba: 137, La: 139, Ce: 140, Pr: 141, Nd: 144, Pm: 147, Sm: 150.5, Eu: 152, Gd: 157, Tb: 159, Dy: 162.5, Ho: 165, Er: 167, Tm: 169, Yb: 173, Lu: 175, Hf: 178.5, Ta: 181, W: 184, Re: 186, Os: 190, Ir: 192, Pt: 195, Au: 197, Hg: 200.5, Tl: 204.5, Pb: 207, Bi: 209, Po: 209, At: 210, Rn: 222,
    Fr: 223, Ra: 226, Ac: 227, Th: 232, Pa: 231, U: 238, Np: 237, Pu: 244, Am: 243, Cm: 247, Bk: 247, Cf: 251, Es: 252, Fm: 257, Md: 258, No: 259, Lr: 260, Rf: 261, Db: 262, Sg: 263, Bh: 262, Hs: 265, Mt: 266, Ds: 269, Rg: 272, Cn: 285, Nh: 284, Fl: 289, Mc: 288, Lv: 293, Ts: 291, Og: 294
}
var weighList2 = {
    H: 1.008, He: 4.003,
    Li: 6.941, Be: 9.012, B: 10.81, C: 12.01, N: 14.01, O: 16.00, F: 19.00, Ne: 20.18,
    Na: 22.99, Mg: 24.31, Al: 26.98, Si: 28.09, P: 30.97, S: 32.07, Cl: 35.45, Ar: 49.95,
    K: 39.10, Ca: 40.08, Sc: 44.96, Ti: 47.87, V: 50.94, Cr: 52.00, Mn: 54.94, Fe: 55.85, Co: 58.93, Ni: 58.69, Cu: 63.55, Zn: 65.39, Ga: 79.72, Ge: 72.61, As: 74.92, Se: 78.96, Br: 79.90, Kr: 83.80,
    Rb: 85.47, Sr: 87.62, Y: 88.91, Zr: 91.22, Nb: 92.91, Mo: 95.94, Tc: 99, Ru: 101.1, Rh: 102.9, Pd: 106.4, Ag: 107.9, Cd: 112.4, In: 114.8, Sn: 118.7, Sb: 121.8, Te: 127.6, I: 126.9, Xe: 131.3,
    Cs: 132.9, Ba: 137.3, La: 138.9, Ce: 140.1, Pr: 140.9, Nd: 144.2, Pm: 147, Sm: 150.4, Eu: 152.0, Gd: 157.3, Tb: 158.9, Dy: 162.5, Ho: 164.9, Er: 167.3, Tm: 168.9, Yb: 173.0, Lu: 175.0, Hf: 178.5, Ta: 180.9, W: 183.8, Re: 186.2, Os: 190.2, Ir: 192.2, Pt: 195.1, Au: 197.0, Hg: 200.6, Tl: 204.4, Pb: 207.2, Bi: 209.0, Po: 209, At: 210, Rn: 222,
    Fr: 223, Ra: 226.0, Ac: 227.0, Th: 232.0, Pa: 231.0, U: 238.0, Np: 237.0, Pu: 244, Am: 243, Cm: 247, Bk: 247, Cf: 251, Es: 252, Fm: 257, Md: 258, No: 259, Lr: 260, Rf: 261, Db: 262, Sg: 263, Bh: 262, Hs: 265, Mt: 266, Ds: 269, Rg: 272, Cn: 285, Nh: 284, Fl: 289, Mc: 288, Lv: 293, Ts: 291, Og: 294
}

var bracket = {}, preview = 1, precise = 0, collapse = 0, useIon = 0, useIonId = 0

function getco(str) {
    var n = str.length, ret = 0
    for (var i = 0; i < n; i++) {
        var ch = str.charAt(i)
        if (isNaN(ch)) break;
        ret *= 10;
        ret += ch - 0;
    }
    str = str.slice(i, n)
    return [ret, str, i]
}

function workMolecule(str, st) {
    // console.log(str, st)
    var n = str.length, ans = {};
    for (let i = 0; i < n; i++) {
        var ch = str.charAt(i)
        var f = {}
        if (ch == '(') {
            f = workMolecule(str.slice(i + 1, bracket[i + st] - st), st + i + 1)
            i = bracket[i + st] - st;
        } else if ('A' <= ch && ch <= 'Z') {
            if (i + 1 < n) {
                let nch = str.charAt(i + 1)
                if ('a' <= nch && nch <= 'z') i++, ch += nch
            }
            if (f[ch]) f[ch]++;
            else f[ch] = 1;
        } else return {}
        let g = getco(str.slice(i + 1, n))
        if (g[0]) {
            for (key in f) {
                f[key] *= g[0]
            }
        }
        for (key in f) {
            if (ans[key]) ans[key] = ans[key] + f[key]
            else ans[key] = f[key]
        }
        i += g[2]
    }
    // console.log('ans', ans)
    return ans;
}

function parseMolecule(str) {
    str = str.replace(/[\[{]/g, "(").replace(/[\]}]/g, ")")
    str = str.replace(/<\d*e[\+\-]>*/g, "");
    // console.log('Parsing molecule', str)
    var n = str.length, co = 1, stack = [], top = 0;
    for (let i = 0; i < n; i++) {
        var ch = str.charAt(i);
        if (ch == '(') stack[top] = i, top++;
        else if (ch == ')') bracket[stack[top - 1]] = i, bracket[i] = stack[top - 1], top--;
        if (top < 0) return {}
    }
    if (top != 0) return {};
    var g = getco(str)
    if (g[0]) co = g[0]
    var f = workMolecule(g[1], g[2])
    for (key in f) {
        f[key] *= co;
    }
    return f;
}

function eps(a, mode = 0) {
    if (mode) {
        var s = a.toString().split('e')
        if (s.length == 1) return parseFloat(parseFloat(a).toFixed(4))
        return Math.round(parseFloat(s[0]) * 10000) / 10000 + 'e' + s[1];
    } else return a
}

function weigh(hash, mode = 0) {
    var ans = 0
    if (mode) {
        for (key in hash) {
            if (weighList2[key]) ans += hash[key] * weighList2[key]
        }
    } else {
        for (key in hash) {
            if (weighList[key]) ans += hash[key] * weighList[key]
        }
    }
    return eps(ans, mode);
}
function weighEquation(str, mode = 0) {
    str = str.replace(/<\d*e[\+\-]>*/g, "").replace(/[^\dA-Za-z<>\(\)\+\-=\.;]/g, "");
    var q = str.split(/[=\+\-\.;]/g)
    var p = str.replace(/[^=\+\-\.;]/g, "").replace(/\./g, '*')
    var ans = ""
    if (str == "") return ""
    var n = p.length, sum = 0, gsum = "";
    for (let i = 0; i <= n; i++) {
        var k = weigh(parseMolecule(q[i]), mode)
        sum += k
        if (p.charAt(i) == '=') gsum += eps(sum, mode) + '=', sum = 0;
        ans = ans + k + p.charAt(i)
    }
    if (n) ans += '<br>' + gsum + eps(sum, mode)
    return ans.replace(/\*/g, "\\cdot");
}

function parseEquation(str) {
    str = str.replace(/ /g, '').replace(/<\d*e[\+\-]>*/g, "")
    var q = str.split(/[=\+\-\.]/g)
    var p = str.replace(/[^=\+\-\.]/g, "")
    var ans = {}
    var n = p.length;
    for (let i = 0; i <= n; i++) {
        var f = parseMolecule(q[i])
        for (key in f) {
            if (ans[key]) ans[key] = ans[key] + f[key]
            else ans[key] = f[key]
        }
    }
    return ans
}

function getCondition(e) {
    if (e == '加热') return '\\Delta'
    return e
}

function renderEquation(str, condition = '') {
    // if (!preview) return str;
    str = str
        .replace(/[\[{]/g, "(")
        .replace(/[\]}]/g, ")")
        .replace(/([\+\=\.;])\1+/g, '$1')
        .replace(/[^\dA-Za-z<>\(\)\+\-=\.;~]/g, "")
        .replace(/([A-Za-z]+)/g, "\\text{$1}")
        .replace(/<(\d*)\\text\{e\}([\+\-])>/g, "^{$1$2}")
        .replace(/([\}\)])(\d+)/g, "$1_{$2}")
        .replace(/\./g, "\\cdot")
        .replace(/~/g, '\\times')
    if (condition) str = str.replace(/=/g, `\\stackrel{${getCondition(condition)}}{=}`)
    str = "\\(" + str + "\\)"
    return str
}

//PROCESS-------------------------------

var mode = 'bal', balInput, balText = '', inputText, case1 = 'CrI3+Cl2+KOH=K2CrO4+KIO4+KCl+H2O', case2 = 'CH3CHO+2Ag(NH3)2OH=CH3COONH4+2Ag+3NH3+H2O'
$().ready(function () {
    balInput = $("#balInput")[0]
    setBal();
    setQry();
    $("#balInput").keydown(function (e) {
        if (e.keyCode == 13 && mode == 'bal') {
            $("#balBtn")[0].click();
        }
    });
    $("#qryInput").keydown(function (e) {
        if (e.keyCode == 13) {
            $("#qryBtn")[0].click();
        }
    });
    $("#preview").tooltip()
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
    $(".has").on('click', e => {
        if (!$(e.currentTarget).children().hasClass('active')) {
            $(e.currentTarget).children('span').click()
        }
    })
})
function setBal() {
    $('#precise').hide()
    $('.frame')[0].innerHTML = renderEquation(balText);
    $('#balBtn').html('配平 <span class="glyphicon glyphicon-transfer"></span>')
    $('#balInput').attr('placeholder', case1 + '（输入化学式以配平）')
    $('#balBtn').attr('href', '/chem?' + case1)
    $('#balBtn').removeClass('disabled')
    mode = 'bal'
    input()
    MathJax.typeset()
}
function setWeigh() {
    $('#precise').show()
    $('#balBtn').text('相对质量')
    $('#balInput').attr('placeholder', case2 + '（输入化学式以计算相对质量）')
    $('#balBtn').attr('href', '')
    $('#balBtn').addClass('disabled')
    mode = 'weigh'
    input()
}
function input() {
    inputText = balInput.value.replace(/[\[\{]/g, '(').replace(/[\]\}]/g, ')')
    if (mode == 'bal') {
        $('.frame')[0].innerHTML = renderEquation((inputText == '') ? case1 : inputText) + '<br>'
            + '<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span><br>' + ((balText != '') ? (renderEquation(balText)) : ('...'));
    } else if (mode == 'weigh') {
        $('.frame')[0].innerHTML = renderEquation((inputText == '') ? case2 : inputText) + '<br>'
            + weighEquation((inputText == '') ? case2 : inputText, precise);
    }
    if (preview) MathJax.typeset()
    if (inputText.match('!')) {
        balUp()
    }
}
var running;
function balance() {
    input()
    if (running || mode != 'bal') return;
    $('#balBtn').text('配平...')
    $('#balBtn').addClass('disabled')
    $('.frame').addClass('text-muted')
    running = 1;
    fetch('/alog', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: '{"content":"' + ((inputText == '') ? case1 : inputText) + '"}'
    })
    return fetch('https://43.143.233.184:7989/chem', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: '{"q":"' + ((inputText == '') ? case1 : inputText) + '"}'
    }).then(
        res => res.text()
    ).then(e => {
        if (e == '{}') e = '"!Description: Invalid Character."'
        e = e.split('"')[1].replace(/\\n/g, '\n')
        $('.frame')[0].innerHTML = (e.charAt(0) == '!') ? ('<pre class="text-danger bg-danger">' + e.slice(1, e.length) + '</pre>') : (renderEquation((inputText == '') ? case1 : inputText)
            + '<br><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span><br>' + renderEquation(e));
        if (e.charAt(0) != '!') balText = e
        MathJax.typeset()
        $('#balBtn').html('配平 <span class="glyphicon glyphicon-transfer"></span>')
        $('#balBtn').removeClass('disabled')
        $('.frame').removeClass('text-muted')
        running = 0;
        return new Promise(res => res(e))
    })
}

function balUp() {
    if (mode != 'bal') return;
    $('#balInput').val(balText);
    input()
}

//QUERY-------------------------------

var modeq = 'query', nameq = 'eq', strict = false, matchMode = 'mole', namels = ['eq', 'mo', 'io', 'el'], ionRegex = ''
function toggl(str, is = 0) {
    $('#qryBtn').html(str)
    $('.op').hide()
    $('.op-' + modeq + '-' + nameq).show()
    if (modeq == 'add' || modeq == 'upd') {
        $('.add:not(.add-' + nameq + ',#addId)').hide()
        $('.add-' + nameq).show(500)
        if (modeq == 'upd') $('#addId').show(300)
        else $('#addId').hide(300)
    } else $('.add').hide()
    if (is) $('.qryInputHidable').show()
    else $('.qryInputHidable').hide()
}
function setQry() {
    $('.qry-group>label').removeClass('active')
    $('.frame').removeClass('active')
    $('.frame')[0].classList.add('active')
    if (modeq == 'query') toggl('查询 <span class="glyphicon glyphicon-search"></span>', nameq == 'eq' && strict)
    else if (modeq == 'add') toggl('上传 <span class="glyphicon glyphicon-plus"></span>')
    else toggl('修改 <span class="glyphicon glyphicon-pencil"></span>')
    if (nameq == 'eq') {
        $('.frame')[1].classList.add('active')
        $('.qry-group>label')[0].classList.add('active')
        if (modeq == 'query') $('#qryInput').attr('placeholder', 'O2=H2O' + '（查询数据库中的化学式，也可输入 id）')
        else if (modeq == 'add') $('#qryInput').attr('placeholder', 'H2+O2=H2O' + '（将化学式上传至数据库）')
        else $('#qryInput').attr('placeholder', '（修改已有化学式）')
    } else if (nameq == 'mo') {
        $('.qry-group>label')[1].classList.add('active')
        $('.frame')[2].classList.add('active')
        if (modeq == 'query') {
            if (useIon) {
                if (!useIonId) $('#qryInput').attr('placeholder', 'Fe<3e+>' + '（输入离子查询数据库中的分子，也可输入 id）')
                else {
                    $('#qryInput').attr('placeholder', '2,3' + '（输入离子编号查询数据库中的分子，也可输入 id）')
                    $('.qry-group>label')[2].classList.add('active')
                    $('.frame')[3].classList.add('active')
                }
            } else $('#qryInput').attr('placeholder', 'Fe' + '（查询数据库中的分子，也可输入 id）')
        }
        else if (modeq == 'add') {
            $('#qryInput').attr('placeholder', 'Fe3O4' + '（将分子上传至数据库）')
            $('#addTitle').attr('placeholder', '四氧化三铁')
        } else {
            $('#qryInput').attr('placeholder', '（修改已有分子）')
            $('#addTitle').attr('placeholder', '四氧化三铁')
        }
        if (useIon) $('.op-ionid').show()
    } else if (nameq == 'io') {
        $('.qry-group>label')[2].classList.add('active')
        $('.frame')[3].classList.add('active')
        if (modeq == 'query') {
            $('#qryInput').attr('placeholder', 'Fe' + '（查询数据库中的离子，也可输入 id）')
        }
        else if (modeq == 'add') {
            $('#qryInput').attr('placeholder', 'Fe<3e+>' + '（将离子上传至数据库）')
            $('#addTitle').attr('placeholder', '三价铁')
        } else {
            $('#qryInput').attr('placeholder', '（修改已有离子）')
            $('#addTitle').attr('placeholder', '三价铁')
        }
    } else {
        $('.qry-group>label')[3].classList.add('active')
        $('.frame')[4].classList.add('active')
    }
    input2()
    if (modeq == 'upd') inputId()
    if (collapse) $('.frame:not(.active)').parent().hide(300), $('.frame.active:not(#balFrame)').parent().show(200);
    else $('.frame:not(#balFrame)').parent().show(300)
}
function replaceRegex(s) {
    return s.replace(/([\+\=\.;])+/g, '$1').replace(/([\(\)])/g, '\\\\$1').replace(/(<\d*)e\+/g, '$1%')
}
function getRegex() {
    var ret = ''
    if (nameq == 'eq') {
        if (strict) {
            var acont = $('#qryInput').val(), bcont = $('#qryInput2').val();
            if (!acont && !bcont) acont = $('#qryInput').attr('placeholder').split('（')[0]
            acont = replaceRegex(acont)
            bcont = replaceRegex(bcont)
            ret = '^'
            if (acont) {
                var as = acont.split('+')
                for (let i = 0; i < as.length; i++) {
                    if (matchMode == 'mole') ret += '(?=([^=]*\\+|)[0-9]?' + as[i] + '([+=]|$))'
                    else ret += '(?=[^=]*' + as[i] + '([^a-z]|$))'
                }
            }
            if (bcont) {
                var bs = bcont.split('+');
                for (let i = 0; i < bs.length; i++) {
                    if (matchMode == 'mole') ret += '(?=.*=(.*\\+|)[0-9]?' + bs[i] + '([+=]|$))'
                    else ret += '(?=.*=.*' + bs[i] + '([^a-z]|$))'
                }
            }
            ret += '.*'
        } else {
            ret = $('#qryInput').val()
            if (ret && !ret.match(/[^\d]/g)) return ret
            if (!ret) ret = $('#qryInput').attr('placeholder').split('（')[0]
            ret = replaceRegex(ret)
            var scont = ret.split('=')
            if (scont.length > 2) return;
            var as = scont[0].split('+');
            ret = matchMode == 'mole' ? '^' : ''
            for (let i = 0; i < as.length; i++) {
                if (matchMode == 'mole') ret += "(?=(.*[+=]|)[0-9]?" + as[i] + "([+=]|$))"
                else ret += '(?=.*' + as[i] + '([^a-z]|$))'
            }
            if (scont.length > 1) {
                var bs = scont[1].split('+')
                for (let i = 0; i < bs.length; i++) {
                    if (matchMode == 'mole') ret += "(?=(.*[+=]|)[0-9]?" + bs[i] + "([+=]|$))"
                    else ret += '(?=.*' + bs[i] + '([^a-z]|$))'
                }
            }
            ret += '.*'
        }
        return ret.replace(/%/g, 'e+')
    } else return replaceRegex($('#qryInput').val() ? $('#qryInput').val() : $('#qryInput').attr('placeholder').split('（')[0]).replace(/%/g, 'e+') + '([^a-z]|$)'
}

function procClass(e) {
    e[0].class = JSON.parse(e[0].class)
    let c = e[0].class
    for (let j = 0; j < c.length; j++) {
        let t = JSON.stringify(c[j]).split(':')[0].split('"')[1]
        let str = ''
        c.filter(e => {
            if (JSON.stringify(e).split(':')[0].split('"')[1] == t) str += ',' + JSON.stringify(e).split(':')[1].split('}')[0].replace(/"/g, '')
        })
        curClass[t] = str.slice(1)
    }
    getClass(1)
}
function renderResult(bd, e, isId, replace, insAfter) {
    let qin = $('#qryInput').val()
    if (e[0] == '!') {
        $('.frame')[getC(nameq)].innerHTML = '<pre class="text-danger bg-danger">' + e + '</pre>';
        return
    }
    e = JSON.parse(e)
    if (nameq == 'eq') {
        if (insAfter != -1) {
            if (isId) {
                if (replace) $('#qryInput').val(e[0].content)
                $('#addCondition').val(e[0].conditions)
                $('#addIdText').val(JSON.parse(bd).content)
                $('#addDescription').val(e[0].descriptions)
            }
            var str = ''
            str += '<div class="result" style="margin-left: 50px;margin-top: -20px;">' + renderEquation(e[0].content, e[0].conditions) + '<br>';
            if (e[0].conditions) str += '（' + e[0].conditions + '）';
            str += e[0].descriptions + '<br>';
            str += '</div>'
            $('.res-' + insAfter).append(str)
        } else {
            if (!isId || !replace) {
                $('.frame')[1].innerHTML = '<span id="qryInputRender">' + renderEquation(strict ? (qin + '=' + $('#qryInput2').val()) : qin) + ' - 匹配到 ' + e.length + ' 个</span><br><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span><br>';
            } else $('.frame')[1].innerHTML = ''
            var str = ''
            for (let i = 0; i < e.length; i++) {
                str += `<div class="result res-${i}">${renderEquation(e[i].content, e[i].conditions)}<br><span class="label label-${e[i].rel ? (e[i].rel > 0 ? 'warning' : 'success') : 'default'}" onclick="doQuery(JSON.stringify({content:'${e[i].id}'}),'id',2,-2)">${e[i].id}</span> `;
                if (e[i].conditions) str += '（' + e[i].conditions + '）';
                str += e[i].descriptions + '<br>';
                if (e[i].rel > 0) {
                    str += `<span class="glyphicon glyphicon-share-alt"></span> <span class="label label-sub label-success" onclick="$(this).siblings('.result').length||doQuery(JSON.stringify({content:'${e[i].rel}'}),'id',2,${i})">${e[i].rel}</span><br>`;
                }
                if (e[i].rel < 0) {
                    str += `<span class="glyphicon glyphicon-share-alt"></span> <span class="label label-sub label-warning" onclick="$(this).siblings('.result').length||doQuery(JSON.stringify({content:'${-e[i].rel}'}),'id',2,${i})">${-e[i].rel}</span><br>`;
                }
                if (isId) {
                    if (replace) $('#qryInput').val(e[0].content)
                    $('#addCondition').val(e[0].conditions)
                    $('#addIdText').val(JSON.parse(bd).content)
                    $('#addDescription').val(e[0].descriptions)
                }
                if (qin.match('!') || replace == 2) $('#qryInput').val(e[0].content)
                str += '</div>'
            }
            $('.frame')[1].innerHTML += str
        }
    } else if (nameq == 'mo') {
        if (insAfter == -1) {
            if (!isId) $('.frame')[2].innerHTML = '<span id="qryInputRender-mo">' + renderEquation(qin) + ' - 匹配到 ' + e.length + ' 个</span><br><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span><br>';
            else $('.frame')[2].innerHTML = ''
        }
        var str = ''
        for (let i = 0; i < e.length; i++) {
            str += `<div class="result">${renderEquation(e[i].content)}<br><span class="label label-default" onclick="doQuery(JSON.stringify({content:'${e[i].id}'}),'id',2,-2)">${e[i].id}</span> `;
            str += `${e[i].title}${e[i].descriptions ? ' - ' + e[i].descriptions : ''}<span class="pull-right">${e[i].type}</span><br>`
            let ions = JSON.parse(e[i].ions)
            for (let j = 0; j < ions.length; j++) {
                str += `<span class="ion"><span class="label label-ion label-sub">${ions[j].id}</span> ${renderEquation(ions[j].c + '~' + ions[j].v)}</span>`
                if (j < ions.length - 1) str += '/'
            }
            if (ions.length) str += '<br>'
            if (isId) {
                if (replace) $('#qryInput').val(e[0].content)
                $('#addTitle').val(e[0].title)
                $('#addIdText').val(JSON.parse(bd).content)
                $('#addDescription').val(e[0].descriptions)
                procClass(e)
                type = e[0].type
                $('.type').removeClass('active')
                $('.type-' + type).addClass('active')
                ionList = JSON.parse(e[0].ions)
                updateIon()
            }
            if (qin.match('!') || replace == 2) $('#qryInput').val(e[0].content)
            str += '</div>'
        }
        if (insAfter == -1) $('.frame')[2].innerHTML += str
    } else if (nameq == 'io') {
        if (insAfter == -1) {
            if (!isId) $('.frame')[3].innerHTML = '<span id="qryInputRender-io">' + renderEquation(qin) + ' - 匹配到 ' + e.length + ' 个</span><br><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span><br>';
            else $('.frame')[3].innerHTML = ''
        }
        var str = '', okstr = ''
        ionRegex = ''
        for (let i = 0; i < e.length; i++) {
            str += `<div class="result"><span class="count-ion-${e[i].id}"></span>${renderEquation(e[i].content)}<br><span class="label label-ion" onclick="addIon(${e[i].id},'${e[i].content}')">${e[i].id}</span> `;
            str += e[i].title + '<br>';
            ionClass[e[i].id] = e[i].class
            if (useIonId) {
                okstr += e[i].content + ' / ';
                ionRegex += '(?=.*"id":' + e[i].id + ',.*)'
            } else if (isId) {
                if (replace) $('#qryInput').val(e[0].content)
                $('#addTitle').val(e[0].title)
                $('#addIdText').val(JSON.parse(bd).content)
                $('#addDescription').val(e[0].descriptions)
                procClass(e)
                type = e[0].type
                $('.type').removeClass('active')
                $('.type-' + type).addClass('active')
            }
            if (qin.match('!') || replace == 2) $('#qryInput').val(e[0].content)
            str += '</div>'
        }
        ionRegex += '.*'
        if (insAfter == -1) $('.frame')[3].innerHTML += str
        $('.ok').text(okstr)
    }
    MathJax.typeset()
    return e.length
}
async function doQuery(bd, isId = '', replace = 1, insAfter = -1) {
    const res = await fetch('/chem/query/' + nameq + isId, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: bd
    })
    const e = await res.text()
    return renderResult(bd, e, isId, replace, insAfter)
}
function doUpload(bd) {
    fetch('/chem/' + modeq + '/' + nameq, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: bd
    }).then(() => {
        if (nameq == 'eq' && modeq == 'upd') inputId()
        else if (!$('#qryInput').val()) return
        else doQuery(JSON.stringify({
            content: getRegex()
        }))
    })
}
async function upload(res) {
    var bd = {}
    if (nameq == 'eq') {
        $('#balInput').val($('#qryInput').val() ? $('#qryInput').val() : $('#qryInput').attr('placeholder').split('（')[0])
        setBal();
        balance().then(e => {
            if (e[0] == '!') return;
            input();
            if (!$('#addDescription').val()) return alert('无描述！')
            if (!confirm(e + (res ? '有相似项，' : '') + '确认上传？')) return
            $('#qryInput').val(e)
            bd = {
                content: $('#qryInput').val(),
                conditions: $('#addCondition').val(),
                descriptions: $('#addDescription').val(),
            }
        })
    } else if (nameq == 'mo') {
        getClass()
        if (!$('#addTitle').val()) return alert('无中文名！')
        if (!checkIon()) {
            await autoClass()
            if (!checkIon() && !confirm('电荷总数不为零，确认继续？')) return
        }
        if (!confirm((res ? '有相似项，' : '') + '确认上传？')) return;
        bd = {
            content: $('#qryInput').val(),
            title: $('#addTitle').val(),
            descriptions: $('#addDescription').val(),
            class: JSON.stringify(filClass()),
            ions: JSON.stringify(ionList),
            type: type
        }
    } else if (nameq == 'io') {
        getClass()
        if (!$('#addTitle').val()) return alert('无中文名！')
        if (!checkIon(1) && !confirm('电荷总数不符，确认继续？')) return
        if (!confirm((res ? '有相似项，' : '') + '确认上传？')) return;
        bd = {
            content: $('#qryInput').val(),
            class: JSON.stringify(filClass()),
            title: $('#addTitle').val()
        }
    }
    if (modeq == 'upd') bd['id'] = $('#addIdText').val()
    if (bd.content) doUpload(JSON.stringify(bd))
}
function query() {
    if (modeq == 'query' || modeq == 'add') {
        var bd
        if (nameq == 'mo' && modeq == 'query' && useIonId) {
            if (ionRegex == '') return
            bd = JSON.stringify({
                content: ionRegex,
                type: 'ions'
            })
        } else {
            var cont = getRegex();
            $('.ok').text(cont);
            if (cont == '') return
            bd = JSON.stringify({
                content: cont,
                type: useIon && modeq == 'query' && nameq == 'mo' ? (useIonId ? 'ionid' : 'ions') : 'content'
            })
        }
        doQuery(bd).then(res => {
            if (modeq == 'add') {
                upload(res)
            }
        })
    }
    if (modeq == 'upd') {
        upload(0)
    }
}

var curCount = {}, curClass = {}

function getClass(force = 0) {
    let e = parseEquation($('#qryInput').val())
    if (!force) {
        for (let i in curCount) {
            curClass[i] = $('#class-' + i).val()
        }
    }
    $('#class').empty()
    if (e != curCount) {
        if (JSON.stringify(e) == '{}') $('#pclass').show()
        else $('#pclass').hide(300)
        for (let i in e) {
            $("#class").append(`<span class="input-group-addon">${i}</span><input id="class-${i}" type="text" class="form-control" autocomplete="off" placeholder="">`)
            $('#class-' + i).val(curClass[i])
            if (!curCount[i]) {
                $('#class-' + i).hide()
                $('#class-' + i).show(300)
            }
        }
    }
    curCount = e
}
function filClass() {
    let fil = []
    for (j in curCount) {
        if (curClass[j].match(',')) {
            let sp = curClass[j].split(',')
            for (k = 0; k < sp.length; k++) {
                let g = {}; g[j] = sp[k]
                if (sp[k]) fil.push(g)
            }
        } else {
            let g = {}; g[j] = curClass[j]
            if (curClass[j]) fil.push(g)
        }
    }
    return fil
}
async function autoClass() {
    await getIons()
    for (i in curClass) curClass[i] = ''
    for (let i = 0; i < ionList.length; i++) {
        let e = JSON.parse(ionClass[ionList[i].id])
        for (let j = 0; j < e.length; j++) {
            for (k in e[j]) {
                if (curClass[k]) curClass[k] += ',' + e[j][k]
                else curClass[k] = e[j][k]
            }
        }
    }
    getClass(1)
}

var ionList = [], ionClass = {}

async function getIons() {
    $('.frame')[3].classList.add('active')
    $('.qry-group>label')[2].classList.add('active')
    getClass()
    let str = ''
    for (let i in curCount) {
        str += '|' + i
    }
    bd = JSON.stringify({ content: '^((' + str.slice(1) + ')\\d?)+(<|[^a-z])' })
    nameq = 'io'
    await doQuery(bd, '')
    nameq = 'mo'
    $('#qryInputRender-io').append(' - 点击标签以添加')
}
async function getOkIons() {
    let e = $('#qryInput').val()
    if (e.replace(/[^\d,]/g, '') == e) {
        e = e.replace(/,/g, "' or id='")
        bd = JSON.stringify({ content: e })
        nameq = 'io'
        await doQuery(bd, 'id', 0)
        nameq = 'mo'
    }
}
function updateIon() {
    let str = ''
    $('.ionList').empty()
    if (!ionList.length) return $('.ionList').append('...')
    for (let i = 0; i < ionList.length; i++) {
        str += `<span class="ion"><span class="label label-ion" onclick="removeIon(${ionList[i].id})">${ionList[i].id}</span> ${renderEquation(ionList[i].v)} x${ionList[i].c}</span>/`
    }
    str += ' 点击标签以减少 / <span style="cursor:pointer" class="glyphicon glyphicon-trash" onclick="clearIon()"></span>'
    $('.ionList').append(str)
    if (preview) MathJax.typeset()
}
function clearIon() {
    ionList = []
    updateIon()
}
function addIon(id, v) {
    console.log(ionList)
    if (!ionList.filter(e => {
        if (e.id == id) e.c++, $('.count-ion-' + id).text(e.c + ' ')
        return e.id == id
    }).length) {
        $('.count-ion-' + id).text('1 ')
        ionList.push({ id: id, v: v, c: 1 })
    }
    updateIon()
}
function removeIon(id, v) {
    ionList = ionList.filter(e => {
        if (e.id == id) e.c--, $('.count-ion-' + id).text(e.c + ' ')
        return e.c
    })
    updateIon()
}
function checkIon(f = 0) {
    if (f) f = $('#qryInput').val().replace(/<e([+-])>/g, '<1e$1>').replace(/.*<(\d)e([+-])>$/g, '$2$1')
    let sum = 0
    for (let i in curCount) {
        if (curClass[i].match(',')) return true
        sum += curCount[i] * curClass[i]
    }
    return sum == f
}

function input2() {
    if ((modeq == 'add' || modeq == 'upd') && (nameq == 'mo' || nameq == 'io')) getClass()
    if (nameq == 'mo' && modeq == 'query' && useIonId) {
        getOkIons()
    } else {
        if (modeq == 'query') {
            $('.ok').text(getRegex())
        }
        if ($('#qryInput').val() && $('#qryInput').val().match(/^\d+!?$/g)) {
            doQuery(JSON.stringify({ content: $('#qryInput').val().split('!')[0] }), 'id', 0)
        } else if ($('#qryInput').val().match('!')) {
            $('#qryInput').val($('#qryInput').val().split('!')[0])
            doQuery(JSON.stringify({ content: getRegex() }), '', 2)
        }
    }
    if (nameq == 'eq') {
        if ($('#qryInputRender')[0]) {
            if (preview) {
                $('#qryInputRender').html(renderEquation(strict ? ($('#qryInput').val() + '=' + $('#qryInput2').val()) : ($('#qryInput').val())))
            } else $('#qryInputRender').text((strict ? ($('#qryInput').val() + '=' + $('#qryInput2').val()) : ($('#qryInput').val())))
        }
    } else {
        if ($('#qryInputRender-' + nameq)[0]) {
            if (preview) {
                $('#qryInputRender-' + nameq).html(renderEquation($('#qryInput').val()))
            } else $('#qryInputRender-' + nameq).text($('#qryInput').val())
        }
    }
    if (preview) MathJax.typeset()
}

function getC(str) {
    if (str == 'eq') return 1
    if (str == 'mo') return 2
    if (str == 'io') return 3
    if (str == 'el') return 4
}

function inputId() {
    var bd = JSON.stringify({
        content: $('#addIdText').val(),
    })
    if (!$('#addIdText').val()) {
        $('.frame')[getC(nameq)].innerHTML = '';
        return;
    }
    doQuery(bd, 'id')
}

function qryToggleMatch() {
    if (matchMode == 'mole') {
        matchMode = 'elem'
    } else {
        matchMode = 'mole'
    }
}

var type = '酸';