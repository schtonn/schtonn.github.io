'use strict';
var _createClass = function () {
    function s(e, a) {
        for (var n = 0; n < a.length; n++) {
            var s = a[n];
            s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
        }
    }
    return function (e, a, n) {
        return a && s(e.prototype, a), n && s(e, n), e;
    };
}();
function _classCallCheck(e, a) {
    if (!(e instanceof a))
        throw new TypeError('Cannot call a class as a function');
}
!function () {
    var e = (_createClass(n, [{key:"_OnBroadcastChannelMessage",value:function(e){this._onMessageCallback?this._onMessageCallback(e):this._queuedMessages.push(e)}},{key:"SetMessageCallback",value:function(e){this._onMessageCallback=e;var a=!0,n=!1,s=void 0;try{for(var t,l=this._queuedMessages[Symbol.iterator]();!(a=(t=l.next()).done);a=!0){var r=t.value;this._onMessageCallback(r)}}catch(e){n=!0,s=e}finally{try{!a&&l.return&&l.return()}finally{if(n)throw s}}this._queuedMessages.length=0}}]), n);
    function n() {
        var a = this;
        _classCallCheck(this, n), this._broadcastChannel = 'undefined' == typeof BroadcastChannel ? null : new BroadcastChannel('offline'), this._queuedMessages = [], this._onMessageCallback = null, this._broadcastChannel && (this._broadcastChannel.onmessage = function (e) {
            return a._OnBroadcastChannelMessage(e);
        });
    }
    window.OfflineClientInfo = new e();
}();