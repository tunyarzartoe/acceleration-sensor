'use strict';
// 要素の取得
const ball = document.getElementById('ball');
// ボールの移動量
let deltaX = 0;  // x座標方向の移動量
let deltaY = 0;  // y座標方向の移動量
// deviceorientationイベントは，方角センサーから最新のデータが得られた場合に発生
window.addEventListener('deviceorientation', e => {
    deltaX = e.gamma * 0.3;  // x座標方向の移動量（0.3倍して移動速度を調整）
    deltaY = e.beta * 0.3;  // y座標方向の移動量（0.3倍して移動速度を調整）
});
// 20ミリ秒ごとにボールの移動を描画を繰り返す
setInterval(() => {
    const nowX = ball.offsetLeft;  // 現在の（親要素から見た相対的な）x座標
    const nowY = ball.offsetTop;  // 現在の（親要素から見た相対的な）y座標
    const newX = nowX + deltaX;  // 移動先のx座標
    const newY = nowY + deltaY;  // 移動先のy座標
    ball.style.left = `${newX}px`;
    ball.style.top = `${newY}px`;
}, 20);