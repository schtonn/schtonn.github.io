/*
* FileSaver.js
* A saveAs() FileSaver implementation.
*
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
* source  : http://purl.eligrey.com/github/FileSaver.js
*/

// The one and only way of getting global scope in all environments
// https://stackoverflow.com/q/3277182/1008999
var _global = typeof window === 'object' && window.window === window
    ? window : typeof self === 'object' && self.self === self
        ? self : typeof global === 'object' && global.global === global
            ? global
            : this

function bom(blob, opts) {
    if (typeof opts === 'undefined') opts = { autoBom: false }
    else if (typeof opts !== 'object') {
        console.warn('Deprecated: Expected third argument to be a object')
        opts = { autoBom: !opts }
    }

    // prepend BOM for UTF-8 XML and text/* types (including HTML)
    // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
    if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
        return new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type })
    }
    return blob
}

function download(url, name, opts) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.onload = function () {
        saveAs(xhr.response, name, opts)
    }
    xhr.onerror = function () {
        console.error('could not download file')
    }
    xhr.send()
}

function corsEnabled(url) {
    var xhr = new XMLHttpRequest()
    // use sync to avoid popup blocker
    xhr.open('HEAD', url, false)
    try {
        xhr.send()
    } catch (e) { }
    return xhr.status >= 200 && xhr.status <= 299
}

// `a.click()` doesn't work for all browsers (#465)
function click(node) {
    try {
        node.dispatchEvent(new MouseEvent('click'))
    } catch (e) {
        var evt = document.createEvent('MouseEvents')
        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80,
            20, false, false, false, false, 0, null)
        node.dispatchEvent(evt)
    }
}

// Detect WebView inside a native macOS app by ruling out all browsers
// We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
// https://www.whatismybrowser.com/guides/the-latest-user-agent/macos
var isMacOSWebView = _global.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)

var saveAs = _global.saveAs || (
    // probably in some web worker
    (typeof window !== 'object' || window !== _global)
        ? function saveAs() { /* noop */ }

        // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView
        : ('download' in HTMLAnchorElement.prototype && !isMacOSWebView)
            ? function saveAs(blob, name, opts) {
                var URL = _global.URL || _global.webkitURL
                var a = document.createElement('a')
                name = name || blob.name || 'download'

                a.download = name
                a.rel = 'noopener' // tabnabbing

                // TODO: detect chrome extensions & packaged apps
                // a.target = '_blank'

                if (typeof blob === 'string') {
                    // Support regular links
                    a.href = blob
                    if (a.origin !== location.origin) {
                        corsEnabled(a.href)
                            ? download(blob, name, opts)
                            : click(a, a.target = '_blank')
                    } else {
                        click(a)
                    }
                } else {
                    // Support blobs
                    a.href = URL.createObjectURL(blob)
                    setTimeout(function () { URL.revokeObjectURL(a.href) }, 4E4) // 40s
                    setTimeout(function () { click(a) }, 0)
                }
            }

            // Use msSaveOrOpenBlob as a second approach
            : 'msSaveOrOpenBlob' in navigator
                ? function saveAs(blob, name, opts) {
                    name = name || blob.name || 'download'

                    if (typeof blob === 'string') {
                        if (corsEnabled(blob)) {
                            download(blob, name, opts)
                        } else {
                            var a = document.createElement('a')
                            a.href = blob
                            a.target = '_blank'
                            setTimeout(function () { click(a) })
                        }
                    } else {
                        navigator.msSaveOrOpenBlob(bom(blob, opts), name)
                    }
                }

                // Fallback to using FileReader and a popup
                : function saveAs(blob, name, opts, popup) {
                    // Open a popup immediately do go around popup blocker
                    // Mostly only available on user interaction and the fileReader is async so...
                    popup = popup || open('', '_blank')
                    if (popup) {
                        popup.document.title =
                            popup.document.body.innerText = 'downloading...'
                    }

                    if (typeof blob === 'string') return download(blob, name, opts)

                    var force = blob.type === 'application/octet-stream'
                    var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari
                    var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent)

                    if ((isChromeIOS || (force && isSafari) || isMacOSWebView) && typeof FileReader !== 'undefined') {
                        // Safari doesn't allow downloading of blob URLs
                        var reader = new FileReader()
                        reader.onloadend = function () {
                            var url = reader.result
                            url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;')
                            if (popup) popup.location.href = url
                            else location = url
                            popup = null // reverse-tabnabbing #460
                        }
                        reader.readAsDataURL(blob)
                    } else {
                        var URL = _global.URL || _global.webkitURL
                        var url = URL.createObjectURL(blob)
                        if (popup) popup.location = url
                        else location.href = url
                        popup = null // reverse-tabnabbing #460
                        setTimeout(function () { URL.revokeObjectURL(url) }, 4E4) // 40s
                    }
                }
)

_global.saveAs = saveAs.saveAs = saveAs

if (typeof module !== 'undefined') {
    module.exports = saveAs;
}
if (typeof jQuery !== 'undefined' && typeof saveAs !== 'undefined') {
    ; (function ($) {
        $.fn.wordExport = function (fileName) {
            fileName =
                typeof fileName !== 'undefined' ? fileName : 'jQuery-Word-Export'
            var static = {
                // mhtml: {
                //   top:
                //     'Mime-Version: 1.0\nContent-Base: ' +
                //     location.href +
                //     '\nContent-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset="utf-8"\nContent-Location: ' +
                //     location.href +
                //     '\n\n<!DOCTYPE html>\n<html>\n_html_</html>',
                //   head:
                //     '<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<style>\n_styles_\n</style>\n</head>\n',
                //   body: '<body>_body_</body>'
                // }
                mhtml: {
                    top:
                        'Mime-Version: 1.0\nContent-Base: ' +
                        location.href +
                        '\nContent-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset="utf-8"\nContent-Location: ' +
                        location.href +
                        '\n\n<!DOCTYPE html>\n' +
                        '<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns:m="http://schemas.microsoft.com/office/2004/12/omml" xmlns="http://www.w3.org/TR/REC-html40">\n_html_</html>',
                    head:
                        '<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<style>\n_styles_\n</style>\n<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:TrackMoves>false</w:TrackMoves><w:TrackFormatting/><w:ValidateAgainstSchemas/><w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid><w:IgnoreMixedContent>false</w:IgnoreMixedContent><w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText><w:DoNotPromoteQF/><w:LidThemeOther>EN-US</w:LidThemeOther><w:LidThemeAsian>ZH-CN</w:LidThemeAsian><w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript><w:Compatibility><w:BreakWrappedTables/><w:SnapToGridInCell/><w:WrapTextWithPunct/><w:UseAsianBreakRules/><w:DontGrowAutofit/><w:SplitPgBreakAndParaMark/><w:DontVertAlignCellWithSp/><w:DontBreakConstrainedForcedTables/><w:DontVertAlignInTxbx/><w:Word11KerningPairs/><w:CachedColBalance/><w:UseFELayout/></w:Compatibility><w:BrowserLevel>MicrosoftInternetExplorer4</w:BrowserLevel><m:mathPr><m:mathFont m:val="Cambria Math"/><m:brkBin m:val="before"/><m:brkBinSub m:val="--"/><m:smallFrac m:val="off"/><m:dispDef/><m:lMargin m:val="0"/> <m:rMargin m:val="0"/><m:defJc m:val="centerGroup"/><m:wrapIndent m:val="1440"/><m:intLim m:val="subSup"/><m:naryLim m:val="undOvr"/></m:mathPr></w:WordDocument></xml><![endif]--></head>\n',
                    body: '<body>_body_</body>'
                }
            }
            var options = {
                maxWidth: 624
            }
            // Clone selected element before manipulating it
            var markup = $(this).clone()

            // Remove hidden elements from the output
            markup.each(function () {
                var self = $(this)
                if (self.is(':hidden')) self.remove()
            })

            // Embed all images using Data URLs
            var images = Array()
            var img = markup.find('img')
            for (var i = 0; i < img.length; i++) {
                // Calculate dimensions of output image
                var w = Math.min(img[i].width, options.maxWidth)
                var h = img[i].height * (w / img[i].width)
                // var w = '200'
                // var h = '100'
                // Create canvas for converting image to data URL
                var canvas = document.createElement('CANVAS')
                canvas.width = w
                canvas.height = h
                // Draw image to canvas
                var context = canvas.getContext('2d')
                context.drawImage(img[i], 0, 0, w, h)
                // Get data URL encoding of image
                var uri = canvas.toDataURL('image/png')
                $(img[i]).attr('src', img[i].src)
                img[i].width = w
                img[i].height = h
                // Save encoded image to array
                images[i] = {
                    type: uri.substring(uri.indexOf(':') + 1, uri.indexOf(';')),
                    encoding: uri.substring(uri.indexOf(';') + 1, uri.indexOf(',')),
                    location: $(img[i]).attr('src'),
                    data: uri.substring(uri.indexOf(',') + 1)
                }
            }

            // Prepare bottom of mhtml file with image data
            var mhtmlBottom = '\n'
            for (var i = 0; i < images.length; i++) {
                mhtmlBottom += '--NEXT.ITEM-BOUNDARY\n'
                mhtmlBottom += 'Content-Location: ' + images[i].location + '\n'
                mhtmlBottom += 'Content-Type: ' + images[i].type + '\n'
                mhtmlBottom +=
                    'Content-Transfer-Encoding: ' + images[i].encoding + '\n\n'
                mhtmlBottom += images[i].data + '\n\n'
            }
            mhtmlBottom += '--NEXT.ITEM-BOUNDARY--'

            //TODO: load css from included stylesheet
            var styles = ''

            // Aggregate parts of the file together
            var fileContent =
                static.mhtml.top.replace(
                    '_html_',
                    static.mhtml.head.replace('_styles_', styles) +
                    static.mhtml.body.replace('_body_', markup.html())
                ) + mhtmlBottom

            // Create a Blob with the file contents
            var blob = new Blob([fileContent], {
                type: 'application/msword;charset=utf-8'
            })
            saveAs(blob, fileName + '.doc')
        }
    })(jQuery)
} else {
    if (typeof jQuery === 'undefined') {
        console.error('jQuery Word Export: missing dependency (jQuery)')
    }
    if (typeof saveAs === 'undefined') {
        console.error('jQuery Word Export: missing dependency (FileSaver.js)')
    }
}