'use strict';
var canvas, context, particles, SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight, RADIUS = 60, RADIUS_SCALE = 1, RADIUS_SCALE_MIN = 1, RADIUS_SCALE_MAX = 1.5, QUANTITY = 25, mouseX = 0.5 * SCREEN_WIDTH, mouseY = 0.5 * SCREEN_HEIGHT, mouseIsDown = !1;
function init() {
    (canvas = document.getElementById('world')) && canvas.getContext && (context = canvas.getContext('2d'), document.addEventListener('mousemove', documentMouseMoveHandler, !1), document.addEventListener('mousedown', documentMouseDownHandler, !1), document.addEventListener('mouseup', documentMouseUpHandler, !1), document.addEventListener('touchstart', documentTouchStartHandler, !1), document.addEventListener('touchmove', documentTouchMoveHandler, !1), window.addEventListener('resize', windowResizeHandler, !1), createParticles(), windowResizeHandler(), setInterval(loop, 1000 / 60));
}
function createParticles() {
    particles = [];
    for (var e = 0; e < QUANTITY; e++) {
        var t = {
            position: {
                x: mouseX,
                y: mouseY
            },
            shift: {
                x: mouseX,
                y: mouseY
            },
            size: 1,
            angle: 0,
            speed: 0.01 + 0.04 * Math.random(),
            targetSize: 1,
            fillColor: '#' + (4210752 * Math.random() + 11184810 | 0).toString(16),
            orbit: 0.5 * RADIUS + 0.5 * RADIUS * Math.random()
        };
        particles.push(t);
    }
}
function documentMouseMoveHandler(e) {
    mouseX = e.clientX, mouseY = e.clientY;
}
function documentMouseDownHandler(e) {
    mouseIsDown = !0;
}
function documentMouseUpHandler(e) {
    mouseIsDown = !1;
}
function documentTouchStartHandler(e) {
    1 == e.touches.length && (e.preventDefault(), mouseX = e.touches[0].pageX - 0.5 * (window.innerWidth - SCREEN_WIDTH), mouseY = e.touches[0].pageY - 0.5 * (window.innerHeight - SCREEN_HEIGHT));
}
function documentTouchMoveHandler(e) {
    1 == e.touches.length && (e.preventDefault(), mouseX = e.touches[0].pageX - 0.5 * (window.innerWidth - SCREEN_WIDTH), mouseY = e.touches[0].pageY - 0.5 * (window.innerHeight - SCREEN_HEIGHT));
}
function windowResizeHandler() {
    SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight, canvas.width = SCREEN_WIDTH, canvas.height = SCREEN_HEIGHT;
}
function loop() {
    for (context.shadowBlur = 3, mouseIsDown ? RADIUS_SCALE += 0.02 * (RADIUS_SCALE_MAX - RADIUS_SCALE) : RADIUS_SCALE -= 0.02 * (RADIUS_SCALE - RADIUS_SCALE_MIN), RADIUS_SCALE = Math.min(RADIUS_SCALE, RADIUS_SCALE_MAX), i = 0, len = particles.length; i < len; i++) {
        var e = particles[i];
        e.angle += e.speed, e.shift.x += (mouseX - e.shift.x) * e.speed, e.shift.y += (mouseY - e.shift.y) * e.speed, e.position.x = e.shift.x + Math.cos(i + e.angle) * (e.orbit * RADIUS_SCALE), e.position.y = e.shift.y + Math.sin(i + e.angle) * (e.orbit * RADIUS_SCALE), e.position.x = Math.max(Math.min(e.position.x, SCREEN_WIDTH), 0), e.position.y = Math.max(Math.min(e.position.y, SCREEN_HEIGHT), 0), e.size += 0.05 * (e.targetSize - e.size), Math.round(e.size) == Math.round(e.targetSize) && (e.targetSize = 1 + 7 * Math.random()), context.beginPath(), context.fillStyle = e.fillColor, context.moveTo(e.position.x, e.position.y), context.arc(e.position.x, e.position.y, e.size, 0, 2 * Math.PI, !0), context.fill();
    }
}
init();