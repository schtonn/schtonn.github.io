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

var bracket = {}, preview = 1, precise = 0

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
    var n = str.length, co = 1, ans = {};
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
    str = str.replace(/ /g, '')
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

// function renderEquation(str, condition = '') {
//     str = str.replace(/[\[{]/g, "(").replace(/[\]}]/g, ")");
//     str = str.replace(/([\+\=\.;])\1+/g, '$1')
//     console.log(str)
//     str = str.replace(/([^e]|^)([\+\=\.;])/g, '$1 $2 ')
//     console.log(str)
//     str = str.replace(/[^\dA-Za-z<>\(\)\+\-=\.; ]/g, "");
//     console.log(str)
//     // console.log('Rendering equation', str)
//     // str = str.replace(/([A-Za-z]+)/g, "\\text{$1}");
//     console.log(str)
//     str = str.replace(/<(\d*)\{e\}([\+\-])>/g, "^{$1$2}");
//     console.log(str)
//     str = str.replace(/([\}\)])(\d+)/g, "$1_{$2}");
//     str = str.replace(/\./g, "\\cdot");
//     // str = "<a href='#'>\\(" + str.replace(/([\+\-=\.;])([^\}])/g, "\\)</a> \\($1\\) <a href='#'>\\($2") + '\\)</a>';
//     str = `\\(\\ce{${str}}\\)`
//     console.log(str)
//     return str
// }

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
    inputText = balInput.value
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

var modeq = 'query', nameq = 'eq', strict = false, matchMode = 'mole'
function toggl(str, e = 0, f = 0) {
    $('#qryBtn').html(str)
    if (e) {
        $('#strict').hide()
        $('#qryMatch').hide(), $('.addInput').show(), $('.ok').hide()
        if (e == 2) $('#addId').show()
        else $('#addId').hide()
    }
    else {
        $('#strict').show()
        $('#qryMatch').show(), $('.addInput').hide(), $('.ok').show()
    }
    if (f) $('.qryInputHidable').show()
    else $('.qryInputHidable').hide()
}
function setQry() {
    if (nameq == 'eq') {
        $('.frame').removeClass('active')
        $('.frame')[0].classList.add('active')
        $('.frame')[1].classList.add('active')
        $('.qry-group>label').removeClass('active')
        $('.qry-group>label')[0].classList.add('active')
        if (modeq == 'query') {
            toggl('查询 <span class="glyphicon glyphicon-search"></span>')
            strict = false
            $('#strict').removeClass('btn-info').removeClass('active')
            $('#qryMatch').removeClass('btn-info').removeClass('active')
            $('#qryMatch').html('<span class="glyphicon glyphicon-cog"></span> 匹配分子')
            matchMode = 'mole'
            $('#qryInput').attr('placeholder', 'O2=H2O' + '（输入化学式查询数据库，也可输入 id）')
            input2();
        }
        else if (modeq == 'add') {
            toggl('上传 <span class="glyphicon glyphicon-plus"></span>', 1)
            $('#qryInput').attr('placeholder', 'H2+O2=H2O' + '（输入化学式上传至数据库）')
        } else {
            toggl('修改 <span class="glyphicon glyphicon-pencil"></span>', 2)
            $('#qryInput').attr('placeholder', '（修改已有化学式）')
        }
    } else if (nameq == 'mo') {
        $('.qry-group>label').removeClass('active')
        $('.qry-group>label')[1].classList.add('active')
        $('.frame').removeClass('active')
        $('.frame')[0].classList.add('active')
        $('.frame')[2].classList.add('active')
    }
    input2()
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
    } else return $('#qryInput').val()
}

function doQuery(bd, isId = '', replace = 1, insAfter = -1) {
    console.log(bd, isId)
    return fetch('/chem/query/' + nameq + isId, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: bd
    }).then(res => {
        return res.text()
    }).then(e => {
        if (nameq == 'eq') {
            if (e[0] == '!') {
                $('.frame')[1].innerHTML = '<pre class="text-danger bg-danger">' + e + '</pre>';
            } else if (insAfter != -1) {
                console.log($('.res-' + insAfter).children().length)
                e = JSON.parse(e)
                var str = ''
                str += '<div class="result" style="margin-left: 50px;margin-top: -20px;">' + renderEquation(e[0].content, e[0].conditions) + '<br>';
                if (e[0].conditions) str += '（' + e[0].conditions + '）';
                str += e[0].descriptions + '<br>';
                if (isId) {
                    if (replace) $('#qryInput').val(e[0].content)
                    $('#addCondition').val(e[0].conditions)
                    $('#addIdText').val(JSON.parse(bd).content)
                    $('#addDescription').val(e[0].descriptions)
                }
                str += '</div>'
                $('.res-' + insAfter).append(str)
                MathJax.typeset()
            } else {
                let qin = $('#qryInput').val()
                e = JSON.parse(e)
                if (!isId || !replace) {
                    $('.frame')[1].innerHTML = '<span id="qryInputRender">' + renderEquation(strict ? (qin + '=' + $('#qryInput2').val()) : qin) + ' - 匹配到 ' + e.length + ' 个</span><br><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span><br>';
                } else $('.frame')[1].innerHTML = ''
                var str = ''
                for (let i = 0; i < e.length; i++) {
                    str += '<div class="result res-' + i + '">' + renderEquation(e[i].content, e[i].conditions) + '<br><span class="label label-' + (e[i].rel ? (e[i].rel > 0 ? 'warning' : 'success') : 'default') + '" onclick="$(\'#qryInput\').val(' + e[i].id + ');input2()">' + e[i].id + '</span> ';
                    if (e[i].conditions) str += '（' + e[i].conditions + '）';
                    str += e[i].descriptions + '<br>';
                    if (e[i].rel > 0) {
                        str += `<span class="glyphicon glyphicon-share-alt"></span> <span class="label label-success" onclick="$(this).siblings('.result').length||doQuery(JSON.stringify({content:'${e[i].rel}'}),'id',0,${i})">${e[i].rel}</span><br>`;
                    }
                    if (e[i].rel < 0) {
                        str += `<span class="glyphicon glyphicon-share-alt"></span> <span class="label label-warning" onclick="$(this).siblings('.result').length||doQuery(JSON.stringify({content:'${-e[i].rel}'}),'id',0,${i})">${-e[i].rel}</span><br>`;
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
                MathJax.typeset()
                return e.length
            }
        } else if (nameq == 'mo') {
            let qin = $('#qryInput').val()
            e = JSON.parse(e)
            $('.frame')[2].innerHTML = '<span id="qryInputRender-mo">' + renderEquation(qin) + ' - 匹配到 ' + e.length + ' 个</span><br><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span><br>';
            var str = ''
            for (let i = 0; i < e.length; i++) {
                str += '<div class="result">' + renderEquation(e[i].content, e[i].conditions) + '<br><span class="label label-default" onclick="$(\'#qryInput\').val(' + e[i].id + ');input2()">' + e[i].id + '</span> ';
                if (e[i].conditions) str += '（' + e[i].conditions + '）';
                str += e[i].title + '<br>';
                let ions = JSON.parse(e[i].ions)
                for (let j = 0; j < ions.length; j++) {
                    str += `<span class="ion">${renderEquation(ions[j].c + '~' + ions[j].v)}</span>`
                    if (j < ions.length - 1) str += '/'
                }
                str += '<br>'
                if (isId) {
                    if (replace) $('#qryInput').val(e[0].content)
                    $('#addCondition').val(e[0].conditions)
                    $('#addIdText').val(JSON.parse(bd).content)
                    $('#addDescription').val(e[0].descriptions)
                }
                if (qin.match('!') || replace == 2) $('#qryInput').val(e[0].content)
                str += '</div>'
            }
            $('.frame')[2].innerHTML += str
            MathJax.typeset()
            return e.length
        }
    });
}

function query() {
    if (modeq == 'query' || modeq == 'add') {
        var cont = getRegex();
        $('.ok').text(cont);
        var bd = JSON.stringify({
            content: cont,
        })
        doQuery(bd).then(res => {
            if (nameq == 'eq' && modeq == 'add') {
                $('#balInput').val($('#qryInput').val() ? $('#qryInput').val() : $('#qryInput').attr('placeholder').split('（')[0])
                setBal();
                balance().then(e => {
                    if (e[0] == '!') return;
                    input();
                    if (!$('#addDescription').val()) {
                        alert('无描述')
                        return;
                    }
                    var resp = confirm(e + (res ? '有相似项，' : '') + '确认上传？')
                    if (!resp) return
                    $('#qryInput').val(e)
                    var bd = JSON.stringify({
                        content: $('#qryInput').val(),
                        conditions: $('#addCondition').val(),
                        descriptions: $('#addDescription').val(),
                    })
                    console.log(bd)
                    fetch('/chem/add/' + nameq, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: bd
                    }).then(() => {
                        doQuery(JSON.stringify({
                            content: $('#qryInput').val()
                        }))
                    })
                })
            }
        })
    }
    if (modeq == 'upd') {
        $('#balInput').val($('#qryInput').val() ? $('#qryInput').val() : $('#qryInput').attr('placeholder').split('（')[0])
        setBal();
        balance().then(e => {
            if (e[0] == '!') return
            input();
            if (!$('#addDescription').val()) {
                alert('无描述')
                return;
            }
            var resp = confirm(e + '确认上传？')
            if (!resp) return;
            $('#qryInput').val(e)
            var bd = JSON.stringify({
                content: $('#qryInput').val(),
                id: $('#addIdText').val(),
                conditions: $('#addCondition').val(),
                descriptions: $('#addDescription').val(),
            })
            console.log(bd)
            return fetch('/chem/upd/' + nameq, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: bd
            })
        }).then(inputId)
    }

}

function input2() {
    if (modeq == 'query') {
        $('.ok').text(getRegex())
    }
    if ($('#qryInput').val() && $('#qryInput').val().match(/^\d+!?$/g)) {
        doQuery(JSON.stringify({ content: $('#qryInput').val().split('!')[0] }), 'id', 0)
    } else if ($('#qryInput').val().match('!')) {
        $('#qryInput').val($('#qryInput').val().split('!')[0])
        doQuery(JSON.stringify({ content: getRegex() }), '', 2)
    }
    if (nameq == 'eq') {
        if ($('#qryInputRender')[0]) {
            if (preview) {
                $('#qryInputRender').html(renderEquation(strict ? ($('#qryInput').val() + '=' + $('#qryInput2').val()) : ($('#qryInput').val())))
            } else $('#qryInputRender').text((strict ? ($('#qryInput').val() + '=' + $('#qryInput2').val()) : ($('#qryInput').val())))
        }
    }
    else {
        if ($('#qryInputRender-mo')[0]) {
            if (preview) {
                $('#qryInputRender-mo').html(renderEquation($('#qryInput').val()))
            } else $('#qryInputRender-mo').text($('#qryInput').val())
        }
    }
    if (preview) MathJax.typeset()
}

function inputId() {
    var bd = JSON.stringify({
        content: $('#addIdText').val(),
    })
    if (!$('#addIdText').val()) {
        $('.frame')[1].innerHTML = '';
        return;
    }
    doQuery(bd, 'id')
}

function qryToggleMatch() {
    if (matchMode == 'mole') {
        $('#qryMatch').html('<span class="glyphicon glyphicon-cog"></span> 匹配元素')
        matchMode = 'elem'
    } else {
        $('#qryMatch').html('<span class="glyphicon glyphicon-cog"></span> 匹配分子')
        matchMode = 'mole'
    }
}