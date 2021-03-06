'use strict';

const e = React.createElement;
const useEffect = React.useEffect;
function keyboardButton(props) {
    return e('path', {
        id: props.id,
        className: 'keyboard-btn ' + (props.className || ''),
        d: props.d
    });
}

function keyboard(props) {
    const keysPaths = [e(keyboardButton, {
        d: "M 7.3,84.1 C 5.6,84.6 3.2,86.3 2.1,87.9 0.1,90.6 0,92.2 0,113.5 v 22.7 l 3.4,3.4 3.4,3.4 H 36.4 66 l 3.2,-2.9 3.3,-2.9 0.3,-22.4 C 73.1,95.8 72.9,92.1 71.5,89.5 68.4,83.6 68,83.5 38,83.3 22.9,83.2 9.1,83.6 7.3,84.1 Z",
        id: "Escape"
    }),
    e(keyboardButton, {
        d: "m 82.5,84.4 c -6.8,3 -7,3.7 -7.3,26.5 -0.4,22.9 0.2,26.8 4.7,30 2.8,2 4.3,2.1 31.6,2.1 29.7,0 31.4,-0.2 34.7,-4.4 1.6,-1.8 1.8,-4.8 1.8,-25.2 0,-21.8 -0.1,-23.3 -2,-25.7 -1.2,-1.5 -3.8,-3.1 -5.8,-3.7 -5.7,-1.5 -54,-1.2 -57.7,0.4 z",
        id: "F1"
    }),
    e(keyboardButton, {
        d: "m 158.3,84.1 c -1.7,0.5 -4.1,2.1 -5.2,3.5 -2,2.5 -2.1,4 -2.1,25.1 0,24.4 0.5,26.8 5.7,29.2 1.5,0.7 12.7,1.1 31.3,1.1 h 29 l 3.2,-2.9 3.3,-2.9 0.3,-22.1 c 0.3,-18.4 0.1,-22.5 -1.2,-25.3 -3,-6.2 -3.3,-6.3 -33.6,-6.5 -15.1,-0.1 -28.9,0.3 -30.7,0.8 z",
        id: "F2"
    }),
    e(keyboardButton, {
        d: "m 235,83.7 c -8.4,2.7 -9,4.8 -9,29.2 0,21.7 0.7,25.3 5.1,28.5 2,1.4 6.1,1.6 31.1,1.6 18.5,0 29.6,-0.4 31.1,-1.1 5.2,-2.4 5.7,-4.8 5.7,-29.2 0,-21.1 -0.1,-22.6 -2,-25 -1.2,-1.5 -3.8,-3.1 -5.8,-3.7 C 287.5,83 238,82.7 235,83.7 Z",
        id: "F3"
    }),
    e(keyboardButton, {
        d: "m 309.3,84.1 c -1.7,0.5 -4.1,2.1 -5.2,3.5 -2,2.5 -2.1,3.9 -2.1,25.8 0,20.4 0.2,23.4 1.8,25.2 3.3,4.2 5,4.4 34.7,4.4 27.3,0 28.8,-0.1 31.6,-2.1 4.5,-3.2 5.1,-7.1 4.7,-30 -0.4,-29.2 1.2,-27.9 -36.5,-27.8 -14.2,0 -27.2,0.5 -29,1 z",
        id: "F4"
    }),
    e(keyboardButton, {
        d: "m 385.3,83.7 c -2.7,0.5 -7.2,4.9 -7.9,7.8 -0.3,1.1 -0.4,11.9 -0.2,23.9 l 0.3,21.8 3.3,2.9 3.2,2.9 h 29.6 29.6 l 3.4,-3.4 3.4,-3.4 v -22.4 c 0,-20.3 -0.2,-22.6 -2,-25.5 -1.3,-2.1 -3.1,-3.5 -5.7,-4.2 -3.6,-1 -52.1,-1.4 -57,-0.4 z",
        id: "F5"
    }),
    e(keyboardButton, {
        d: "m 460.3,84.1 c -1.7,0.5 -4.1,2.1 -5.2,3.5 -2,2.5 -2.1,3.9 -2.1,25.8 0,20.4 0.2,23.4 1.8,25.2 3.3,4.2 5,4.4 35,4.4 h 29 l 3.1,-2.9 3.1,-2.9 V 113.3 C 525,81 527.3,83 489.2,83.1 c -14.1,0 -27.1,0.5 -28.9,1 z",
        id: "F6"
    }),
    e(keyboardButton, {
        d: "m 536.5,83.7 c -3.4,0.9 -6.3,3.3 -7.5,6.2 -0.7,1.9 -1,9.8 -0.8,25 l 0.3,22.3 3.3,2.9 3.2,2.9 h 29.6 29.6 l 3.4,-3.4 3.4,-3.4 v -22.1 c 0,-23.5 -0.4,-25.8 -4.9,-28.8 -2.3,-1.6 -5.6,-1.8 -30.1,-2 -15.1,-0.1 -28.4,0.1 -29.5,0.4 z",
        id: "F7"
    }),
    e(keyboardButton, {
        d: "m 611.3,84.1 c -1.7,0.5 -4.1,2.1 -5.2,3.5 -2,2.5 -2.1,4 -2.1,25.6 0,13.8 0.4,23.7 1,24.9 2.5,4.5 5.2,4.9 35,4.9 29.8,0 32.5,-0.4 35,-4.9 0.6,-1.2 1,-11.1 1,-24.9 0,-21.6 -0.1,-23.1 -2,-25.5 -1.2,-1.5 -3.8,-3.1 -5.8,-3.7 -4.6,-1.2 -52.5,-1.2 -56.9,0.1 z",
        id: "F8"
    }),
    e(keyboardButton, {
        d: "m 688,83.6 c -8.7,3.1 -9,4.1 -9,30.5 v 22.1 l 3.4,3.4 3.4,3.4 h 29.6 29.6 l 3.2,-2.9 3.3,-2.9 0.3,-22.3 c 0.3,-24 -0.1,-26.5 -4.7,-29.6 -2.3,-1.6 -5.5,-1.8 -30.1,-2 -15.1,-0.1 -28.2,0 -29,0.3 z",
        id: "F9"
    }),
    e(keyboardButton, {
        d: "m 762,84.1 c -1.4,0.6 -3.5,2 -4.7,3.1 -2.3,2.1 -2.3,2.6 -2.3,26.1 v 23.9 l 3.1,2.9 3.1,2.9 h 29 c 30,0 31.7,-0.2 35,-4.4 1.6,-1.8 1.8,-4.8 1.8,-25.2 0,-21.8 -0.1,-23.3 -2,-25.7 -1.2,-1.5 -3.8,-3.1 -5.8,-3.7 -4.8,-1.3 -53.8,-1.2 -57.2,0.1 z",
        id: "F10"
    }),
    e(keyboardButton, {
        d: "m 837.2,84.1 c -2,0.6 -4,2.2 -5.2,4.2 -1.8,2.9 -2,5.1 -2,25.5 v 22.4 l 3.4,3.4 3.4,3.4 h 29.6 29.6 l 3.2,-2.9 3.3,-2.9 0.3,-22.4 c 0.3,-19 0.1,-22.7 -1.3,-25.3 -3.1,-5.9 -3.5,-6 -33.5,-6.2 -15.6,-0.1 -28.9,0.2 -30.8,0.8 z",
        id: "F11"
    }),
    e(keyboardButton, {
        d: "m 912.5,84.4 c -6.8,3 -7,3.7 -7.3,26.5 -0.4,22.9 0.2,26.8 4.7,30 2.8,2 4.3,2.1 31.6,2.1 29.7,0 31.4,-0.2 34.7,-4.4 1.6,-1.8 1.8,-4.8 1.8,-25.2 0,-21.8 -0.1,-23.3 -2,-25.7 -1.2,-1.5 -3.8,-3.1 -5.8,-3.7 -5.7,-1.5 -54,-1.2 -57.7,0.4 z",
        id: "F12"
    }),
    e(keyboardButton, {
        d: "m 988.3,84.1 c -1.7,0.5 -4.1,2.1 -5.2,3.5 -2,2.5 -2.1,4 -2.1,25.1 0,24.4 0.5,26.8 5.7,29.2 1.5,0.7 12.6,1.1 31.1,1.1 31.9,0 32.1,0 34.8,-6.6 2.1,-5 2,-42.4 -0.1,-46.8 -2.9,-6 -3.3,-6.1 -33.5,-6.3 -15.1,-0.1 -28.9,0.3 -30.7,0.8 z",
        id: "PrintScreen"
    }),
    e(keyboardButton, {
        d: "m 1064.3,83.7 c -3.2,0.6 -7.2,5.1 -7.9,8.7 -0.3,1.8 -0.4,12.6 -0.2,24 l 0.3,20.8 3.3,2.9 3.2,2.9 h 29 c 18.6,0 29.8,-0.4 31.3,-1.1 5.2,-2.4 5.7,-4.8 5.7,-29.2 0,-21.1 -0.1,-22.6 -2,-25 -1.2,-1.5 -3.8,-3.1 -5.8,-3.7 -3.5,-0.9 -52.1,-1.2 -56.9,-0.3 z",
        id: "Delete"
    }),
    e(keyboardButton, {
        d: "m 1139.3,84.1 c -1.7,0.5 -4.1,2.1 -5.2,3.5 -2,2.5 -2.1,3.9 -2.1,25.8 0,20.4 0.2,23.4 1.8,25.2 3.3,4.2 5,4.4 34.7,4.4 27.3,0 28.8,-0.1 31.6,-2.1 4.5,-3.2 5.1,-7.1 4.7,-30 -0.4,-29.2 1.2,-27.9 -36.5,-27.8 -14.2,0 -27.2,0.5 -29,1 z",
        id: "Insert"
    }),
    e(keyboardButton, {
        d: "m 1215.3,83.7 c -2.7,0.5 -7.2,4.9 -7.9,7.8 -0.3,1.1 -0.4,11.9 -0.2,23.9 l 0.3,21.8 3.3,2.9 3.2,2.9 h 29.6 29.6 l 3.4,-3.4 3.4,-3.4 v -22.7 c 0,-21.2 -0.1,-22.9 -2,-25.6 -1.2,-1.6 -3.6,-3.3 -5.8,-3.9 -3.5,-0.9 -52.1,-1.2 -56.9,-0.3 z",
        id: "Pause"
    }),
    e(keyboardButton, {
        d: "M 3.4,152.4 0,155.8 v 31.4 c 0,34.8 0,34.6 6.6,37.4 4.8,2 59,2 63.8,0 C 77,221.8 77,222 77,187.2 V 155.8 L 73.6,152.4 70.2,149 H 38.5 6.8 Z",
        id: "Backquote"
    }),
    e(keyboardButton, {
        d: "m 86.5,149.9 c -1.1,0.5 -2.9,1.9 -4,3.1 -1.9,2.1 -2,3.8 -2.3,33.4 -0.2,34.3 -0.2,34.8 5.8,37.9 3.2,1.6 6.5,1.7 34.3,1.5 l 30.9,-0.3 2.9,-3.3 2.9,-3.2 v -31.6 -31.6 l -3.4,-3.4 -3.4,-3.4 -30.8,0.1 c -17,0 -31.8,0.4 -32.9,0.8 z",
        id: "Digit1"
    }),
    e(keyboardButton, {
        d: "m 165.2,151 c -1.8,1.1 -3.7,3.2 -4.2,4.6 -0.6,1.4 -1,15.3 -1,32.2 0,27.7 0.1,29.9 2,32.9 3.1,5.1 6,5.5 39.2,5.1 l 29.7,-0.3 3,-2.9 3.1,-3 v -32 c 0,-28.9 -0.2,-32.3 -1.8,-34.2 -3.4,-4.2 -4.9,-4.4 -36.4,-4.4 -28.5,0 -30.5,0.1 -33.6,2 z",
        id: "Digit2"
    }),
    e(keyboardButton, {
        d: "m 245.4,150.9 c -1.7,1.1 -3.6,3.4 -4.3,5.2 -1.8,5.2 -1.5,59 0.4,63.5 2.5,6 4.6,6.4 37.4,6.4 15.9,0 30.1,-0.4 31.4,-0.9 1.4,-0.6 3.5,-2 4.6,-3.2 2,-2.2 2.1,-3.2 2.1,-34.3 0,-28.9 -0.2,-32.3 -1.8,-34.2 -3.4,-4.2 -4.9,-4.4 -36.4,-4.4 -28,0 -30.5,0.2 -33.4,1.9 z",
        id: "Digit3"
    }),
    e(keyboardButton, {
        d: "m 325.3,151 c -5,3 -5.5,6.4 -5.1,38.8 0.3,31.8 0.5,32.9 7,35.1 4.2,1.5 59.4,1.5 63.6,0 6.1,-2.1 6.2,-2.6 6.2,-37.4 0,-19.8 -0.4,-32.4 -1,-33.6 -2.5,-4.6 -5,-4.9 -37.2,-4.9 -28.3,0 -30.5,0.1 -33.5,2 z",
        id: "Digit4"
    }),
    e(keyboardButton, {
        d: "m 406.5,150.2 c -5.5,3 -5.5,2.8 -5.5,37.4 0,31.1 0.1,32.1 2.1,34.3 1.1,1.2 3.2,2.6 4.6,3.2 1.3,0.5 15.5,0.9 31.4,0.9 32.8,0 34.9,-0.4 37.4,-6.4 2.1,-5.1 2.2,-59 0.1,-64.1 -2.7,-6.3 -4,-6.5 -37.8,-6.5 -20.1,0.1 -31,0.4 -32.3,1.2 z",
        id: "Digit5"
    }),
    e(keyboardButton, {
        d: "m 486.5,150.2 c -5.5,3 -5.5,2.8 -5.5,37.4 v 32 l 3.1,3 3,2.9 29.7,0.3 c 33.2,0.4 36.1,0 39.2,-5.1 1.9,-3 2,-5.2 2,-32.9 0,-16.9 -0.4,-30.8 -1,-32.2 -0.5,-1.4 -2.4,-3.5 -4.2,-4.6 -3.1,-1.9 -5.1,-2 -33.8,-2 -20.3,0.1 -31.2,0.4 -32.5,1.2 z",
        id: "Digit6"
    }),
    e(keyboardButton, {
        d: "m 564.4,152.4 -3.4,3.4 v 31.6 31.6 l 2.9,3.2 2.9,3.3 30.9,0.3 c 27.8,0.2 31.1,0.1 34.3,-1.5 1.9,-1 4,-2.9 4.7,-4.3 1.6,-3.1 1.8,-60.5 0.3,-64.4 -0.5,-1.4 -2.4,-3.5 -4.2,-4.6 -3.1,-1.9 -5.1,-2 -34.1,-2 h -30.9 z",
        id: "Digit7"
    }),
    e(keyboardButton, {
        d: "m 644.4,152.4 -3.4,3.4 v 31.4 c 0,34.8 0,34.6 6.6,37.4 4.8,2 59,2 63.8,0 6.6,-2.8 6.6,-2.6 6.6,-37.4 v -31.4 l -3.4,-3.4 -3.4,-3.4 h -31.7 -31.7 z",
        id: "Digit8"
    }),
    e(keyboardButton, {
        d: "m 727.4,150 c -1.2,0.4 -3.1,2.1 -4.3,3.6 -2,2.6 -2.1,3.5 -2.1,33.8 0,34.6 0,34.4 6.6,37.2 5,2.1 60.3,2 64.4,-0.1 6,-3.1 6,-3 6,-37.3 v -31.4 l -3.4,-3.4 -3.4,-3.4 -30.8,0.1 c -17,0 -31.9,0.4 -33,0.9 z",
        id: "Digit9"
    }),
    e(keyboardButton, {
        d: "m 806.2,151 c -1.8,1.1 -3.7,3.2 -4.2,4.6 -0.6,1.4 -1,15.3 -1,32.2 0,27.7 0.1,29.9 2,32.9 3.1,5.1 6,5.5 39.3,5.1 l 29.9,-0.3 2.9,-3.3 2.9,-3.2 v -31 c 0,-20.1 -0.4,-31.7 -1.1,-33.3 -2.5,-5.5 -4.1,-5.7 -37.1,-5.7 -28.5,0 -30.5,0.1 -33.6,2 z",
        id: "Digit0"
    }),
    e(keyboardButton, {
        d: "m 886.8,150.6 c -5.6,3 -5.8,4.6 -5.8,37.1 0,27.8 0.1,30 2,33 3.1,5.1 6,5.5 39.2,5.1 l 29.7,-0.3 3,-2.9 3.1,-3 v -32 c 0,-28.9 -0.2,-32.3 -1.8,-34.2 -3.4,-4.2 -4.9,-4.4 -36.4,-4.4 -24.8,0.1 -30.8,0.3 -33,1.6 z",
        id: "Minus"
    }),
    e(keyboardButton, {
        d: "m 966.4,150.9 c -1.7,1.1 -3.6,3.4 -4.3,5.2 -0.7,2.1 -1.1,13.1 -1.1,31.6 0,24.6 0.2,29 1.7,32 2.8,6 4.6,6.3 37.2,6.3 15.9,0 30.1,-0.4 31.4,-0.9 1.4,-0.6 3.5,-2 4.6,-3.2 2,-2.2 2.1,-3.2 2.1,-34.3 0,-28.9 -0.2,-32.3 -1.8,-34.2 -3.4,-4.2 -4.9,-4.4 -36.4,-4.4 -28,0 -30.5,0.2 -33.4,1.9 z",
        id: "Equal"
    }),
    e(keyboardButton, {
        d: "m 1047.5,150.1 c -5.5,3.1 -5.5,2.9 -5.5,37.5 0,31.1 0.1,32.1 2.1,34.3 1.1,1.2 3.2,2.6 4.6,3.2 1.4,0.5 31.1,0.9 72.1,0.9 64.4,0 70,-0.1 73.2,-1.8 6,-3 6,-3.5 5.8,-37.9 l -0.3,-31.3 -2.8,-2.7 -2.7,-2.8 -72.3,-0.2 c -51.5,-0.2 -72.8,0.1 -74.2,0.8 z",
        id: "Backspace"
    }),
    e(keyboardButton, {
        d: "m 1206.4,152.4 -3.4,3.4 v 31.4 c 0,34.8 0,34.6 6.6,37.4 4.8,2 59,2 63.8,0 6.6,-2.8 6.6,-2.6 6.6,-37.4 v -31.4 l -3.4,-3.4 -3.4,-3.4 h -31.7 -31.7 z",
        id: "Home"
    }),
    e(keyboardButton, {
        d: "m 5.1,233.4 c -4.8,2.7 -5,4 -5.1,36.4 0,33 0.2,34.4 5.6,37.2 3.9,2.2 89.8,2.2 93.7,0.1 5.5,-2.9 5.8,-5.2 5.5,-38.7 l -0.3,-30.6 -3.3,-2.9 L 98,232 H 52.7 C 17.1,232.1 7,232.4 5.1,233.4 Z",
        id: "Tab"
    }),
    e(keyboardButton, {
        d: "m 109.1,234.6 -3.1,2.6 v 32.7 32.8 l 2.3,2.1 c 1.3,1.3 3.9,2.7 5.8,3.2 4.5,1.3 55.4,1.3 60.1,0 2,-0.6 4.6,-2.2 5.8,-3.7 1.9,-2.5 2,-3.8 2,-34.5 v -32 l -2.9,-2.9 -2.9,-2.9 h -32 -32 z",
        id: "KeyQ"
    }),
    e(keyboardButton, {
        d: "m 188.9,234.9 -2.9,2.9 v 32.4 32.5 l 2.3,2.1 c 1.3,1.3 3.9,2.7 5.8,3.2 4.4,1.3 55.4,1.3 60,0 1.9,-0.6 4.6,-2.2 6,-3.6 l 2.4,-2.6 v -32 -32 l -3.3,-2.9 -3.2,-2.9 h -32.1 -32.1 z",
        id: "KeyW"
    }),
    e(keyboardButton, {
        d: "m 269.1,234.9 -3.1,2.9 v 32.2 32.2 l 2.8,2.8 c 3.9,3.9 7.1,4.2 38.7,3.8 29.8,-0.3 31.2,-0.6 34,-6.4 1.4,-2.9 1.5,-7.7 1.3,-34 l -0.3,-30.6 -3.3,-2.9 -3.2,-2.9 h -31.9 -31.9 z",
        id: "KeyE"
    }),
    e(keyboardButton, {
        d: "m 349.1,235.1 -3.1,3.1 v 32 32 l 2.8,2.8 c 3.9,3.9 7.1,4.2 39.2,3.8 29.7,-0.3 30.2,-0.4 33.4,-5.9 1.4,-2.3 1.6,-6.9 1.6,-33.4 v -30.7 l -3.4,-3.4 -3.4,-3.4 h -32 -32 z",
        id: "KeyR"
    }),
    e(keyboardButton, {
        d: "m 430.4,233.8 c -4.2,3.4 -4.4,4.9 -4.4,37.2 v 31.2 l 2.8,2.8 c 3.9,3.9 7.1,4.2 39.2,3.8 24.3,-0.3 27.8,-0.5 30.1,-2.1 4.7,-3.1 4.9,-4.8 4.9,-36.8 0,-32.7 -0.3,-34.3 -5.7,-36.8 -1.6,-0.7 -13.2,-1.1 -33.6,-1.1 -28.1,0 -31.4,0.2 -33.3,1.8 z",
        id: "KeyT"
    }),
    e(keyboardButton, {
        d: "m 511.4,233.1 c -1.1,0.6 -2.8,2.3 -3.7,3.9 -1.5,2.5 -1.7,6.6 -1.7,32.9 0,32 0.2,33.7 4.9,36.8 2.3,1.6 5.8,1.8 30.1,2.1 32.4,0.4 34.9,0.1 39,-3.9 l 3,-3.1 V 271 c 0,-21.8 -0.4,-31.7 -1.2,-33.5 -2.4,-5.3 -4.1,-5.5 -37.5,-5.4 -18.5,0 -31.6,0.4 -32.9,1 z",
        id: "KeyY"
    }),
    e(keyboardButton, {
        d: "m 589.4,235.4 -3.4,3.4 v 30.6 c 0,32.5 0.2,34.2 4.9,37.3 2.3,1.6 5.8,1.8 30.1,2.1 32.1,0.4 35.3,0.1 39.2,-3.8 l 2.8,-2.8 v -32 -32 l -3.1,-3.1 -3.1,-3.1 h -32 -32 z",
        id: "KeyU"
    }),
    e(keyboardButton, {
        d: "m 669.8,234.9 -3.3,2.9 -0.3,30.6 c -0.2,25.9 0,31.1 1.3,33.9 2.9,6.1 3.3,6.2 33.5,6.5 32.1,0.4 35.3,0.1 39.2,-3.8 l 2.8,-2.8 V 270 237.8 l -3.1,-2.9 -3.1,-2.9 H 704.9 673 Z",
        id: "KeyI"
    }),
    e(keyboardButton, {
        d: "m 749.8,234.9 -3.3,2.9 v 32 32 l 2.4,2.6 c 1.4,1.4 4.1,3 6,3.6 4.8,1.3 55.5,1.3 60.3,0 2,-0.6 4.6,-2.2 5.8,-3.7 1.9,-2.5 2,-3.8 2,-34.5 v -32 l -2.9,-2.9 -2.9,-2.9 H 785.1 753 Z",
        id: "KeyO"
    }),
    e(keyboardButton, {
        d: "m 829.9,234.9 -2.9,2.9 v 32.4 32.5 l 2.3,2.1 c 1.3,1.3 3.9,2.7 5.8,3.2 4.4,1.3 55.4,1.3 60,0 1.9,-0.6 4.6,-2.2 6,-3.6 l 2.4,-2.6 0.3,-27.6 c 0.4,-32.3 0.1,-35.5 -3.8,-39.4 L 897.2,232 H 865 832.8 Z",
        id: "KeyP"
    }),
    e(keyboardButton, {
        d: "m 909.9,234.9 -2.9,2.9 v 32 c 0,30.7 0.1,32 2,34.5 1.2,1.5 3.8,3.1 5.8,3.7 4.8,1.3 55.5,1.3 60.3,0 1.9,-0.6 4.6,-2.2 6,-3.6 l 2.4,-2.6 v -32 -32 l -3.3,-2.9 -3.2,-2.9 h -32.1 -32.1 z",
        id: "BracketLeft"
    }),
    e(keyboardButton, {
        d: "m 990.1,234.9 -3.1,2.9 v 32.2 32.2 l 2.8,2.8 c 3.9,3.9 7.1,4.2 39.2,3.8 30.2,-0.3 30.6,-0.4 33.5,-6.5 1.3,-2.8 1.5,-8 1.3,-33.9 l -0.3,-30.6 -3.3,-2.9 -3.2,-2.9 h -31.9 -31.9 z",
        id: "BracketRight"
    }),
    e(keyboardButton, {
        d: "m 1077.6,233.9 c -5.4,3.6 -5.5,4.2 -5.5,35.6 -0.1,31.2 0.1,32.1 5.2,35.9 2.5,1.9 4.5,2.1 17.3,2.4 l 14.4,0.3 v 39.5 39.4 l 2.9,3.2 2.9,3.3 36.9,0.6 c 40.8,0.7 42.3,0.6 46,-5 l 2.3,-3.4 v -71.9 c 0,-78.9 0.2,-76.5 -5.9,-80.1 -2.6,-1.5 -7.9,-1.7 -58.3,-1.7 -53,0 -55.4,0.1 -58.2,1.9 z",
        id: "Enter"
    }),
    e(keyboardButton, {
        d: "m 1208.1,233.4 c -4.9,2.7 -5,4 -5.1,37.3 v 31.1 l 3,3.1 c 4.1,4 6.6,4.3 39,3.9 30,-0.3 31.2,-0.6 33.8,-6.4 1.7,-3.6 1.7,-61.3 0,-64.9 -2.4,-5.3 -4.1,-5.5 -37.5,-5.5 -23.6,0.1 -31.4,0.4 -33.2,1.4 z",
        id: "PageUp"
    }),
    e(keyboardButton, {
        d: "m 7.3,315.1 c -1.7,0.5 -4.1,2.2 -5.2,3.8 -2,2.8 -2.1,4.2 -2.1,33.6 0,33.3 0.2,34.9 5.7,37.4 3.4,1.6 119.6,1.5 122.6,0 5.7,-2.9 5.7,-2.7 5.7,-37 0,-30.4 -0.1,-31.7 -2,-34.2 -1.2,-1.5 -3.8,-3.1 -5.8,-3.7 -4.7,-1.3 -114.4,-1.2 -118.9,0.1 z",
        id: "CapsLock"
    }),
    e(keyboardButton, {
        d: "m 151.3,314.7 c -2.7,0.5 -7.2,4.9 -7.9,7.7 -0.3,1.2 -0.4,15.7 -0.2,32.4 l 0.3,30.4 3.3,2.9 3.2,2.9 h 31.9 31.9 l 3.1,-3.1 3.1,-3.1 v -31.7 c 0,-27.6 -0.2,-31.9 -1.6,-34 -3.3,-4.7 -6.2,-5.1 -36.6,-5 -15.6,0.1 -29.3,0.4 -30.5,0.6 z",
        id: "KeyA"
    }),
    e(keyboardButton, {
        d: "m 232,314.7 c -8.8,2.8 -9,3.8 -9,37.7 0,30.7 0.4,33.7 5.1,37 2.1,1.4 6.4,1.6 34,1.6 h 31.7 l 3.1,-2.9 3.1,-2.9 v -32.4 c 0,-32.4 0,-32.5 -2.2,-34.6 -1.3,-1.1 -3.6,-2.5 -5.1,-3.1 -2.8,-1.1 -57.6,-1.5 -60.7,-0.4 z",
        id: "KeyS"
    }),
    e(keyboardButton, {
        d: "m 310.5,315.4 c -6.6,3 -6.4,2 -6.5,36.9 -0.1,19.5 0.3,32.4 0.9,33.5 2.7,5 3.9,5.2 37.4,5.2 30.2,0 31.5,-0.1 34,-2.1 4.4,-3.4 4.9,-7.1 4.5,-38.4 -0.3,-30.7 -0.4,-31.4 -5.2,-34.6 -3.1,-2 -60.7,-2.5 -65.1,-0.5 z",
        id: "KeyD"
    }),
    e(keyboardButton, {
        d: "m 390.4,315.4 c -6.4,2.9 -6.4,2.7 -6.4,37.9 v 31.9 l 3.1,2.9 3.1,2.9 h 31.9 31.9 l 3.2,-2.9 3.3,-2.9 0.3,-30.6 c 0.3,-33 0,-35.3 -5,-38.6 -3.3,-2.2 -60.7,-2.7 -65.4,-0.6 z",
        id: "KeyF"
    }),
    e(keyboardButton, {
        d: "m 471.3,315.1 c -1.7,0.5 -4.1,2.1 -5.2,3.5 -2,2.6 -2.1,3.8 -2.1,34.3 0,28.4 0.2,31.8 1.8,33.7 3.4,4.2 4.9,4.4 37.1,4.4 H 534 l 3.2,-2.9 3.3,-2.9 0.3,-30.8 c 0.3,-33 0.1,-34.9 -4.7,-38.1 -2.3,-1.6 -5.5,-1.8 -32.1,-2 -16.3,-0.1 -30.9,0.2 -32.7,0.8 z",
        id: "KeyG"
    }),
    e(keyboardButton, {
        d: "m 551.3,315.1 c -1.7,0.5 -4.1,2.1 -5.2,3.5 -2,2.6 -2.1,3.9 -2.1,33.6 0,33.5 0.2,35.2 5.5,37.6 1.8,0.8 11.7,1.2 33.6,1.2 h 31.1 l 3.4,-3.4 3.4,-3.4 v -30.9 c 0,-28.7 -0.1,-31 -2,-34 -1.3,-2.1 -3.1,-3.5 -5.7,-4.2 -4.7,-1.3 -57.5,-1.3 -62,0 z",
        id: "KeyH"
    }),
    e(keyboardButton, {
        d: "m 631.2,315.1 c -2,0.6 -4,2.2 -5.2,4.2 -1.9,3 -2,5.2 -2,33.5 0,33 0.2,34.6 5.7,37.1 3.3,1.5 62.3,1.5 65.6,0 5.5,-2.5 5.7,-4 5.7,-37.7 0,-29.6 -0.1,-31 -2,-33.5 -1.2,-1.5 -3.8,-3.1 -5.8,-3.7 -4.7,-1.3 -57.5,-1.2 -62,0.1 z",
        id: "KeyJ"
    }),
    e(keyboardButton, {
        d: "m 711.2,315.1 c -2,0.6 -4,2.2 -5.2,4.2 -1.9,3 -2,5.2 -2,34 v 30.9 l 3.4,3.4 3.4,3.4 H 742 c 32.3,0 33.8,-0.2 37.2,-4.4 1.6,-1.9 1.8,-5.3 1.8,-33.7 0,-30.4 -0.1,-31.7 -2,-34.2 -1.2,-1.5 -3.8,-3.1 -5.8,-3.7 -4.7,-1.3 -57.5,-1.2 -62,0.1 z",
        id: "KeyK"
    }),
    e(keyboardButton, {
        d: "m 792.5,314.7 c -3.3,0.9 -6.3,3.3 -7.4,6.2 -0.8,1.9 -1.1,12.1 -0.9,33.5 l 0.3,30.8 3.3,2.9 3.2,2.9 h 31.1 c 32.2,0 33.7,-0.2 37.1,-4.4 1.6,-1.9 1.8,-5.3 1.8,-33.6 0,-27.6 -0.2,-31.8 -1.6,-33.9 -3.3,-4.7 -6.2,-5.1 -36.6,-5 -15.6,0.1 -29.2,0.4 -30.3,0.6 z",
        id: "KeyL"
    }),
    e(keyboardButton, {
        d: "m 872.3,314.7 c -3.1,0.6 -7.2,5 -7.8,8.7 -0.4,1.7 -0.5,16.3 -0.3,32.4 l 0.3,29.4 3.3,2.9 3.2,2.9 h 31.9 31.9 l 3.1,-2.9 3.1,-2.9 v -32.4 c 0,-32.4 0,-32.5 -2.2,-34.6 -4.3,-3.9 -6.9,-4.2 -36.1,-4.1 -15.5,0.1 -29.2,0.4 -30.4,0.6 z",
        id: "Semicolon"
    }),
    e(keyboardButton, {
        d: "m 952.4,314.7 c -1.2,0.2 -3.4,1.8 -5,3.4 l -2.9,3 -0.3,27.7 c -0.4,32.8 -0.1,35.5 4,39.4 l 3,2.8 h 31.8 31.8 l 3.1,-2.9 3.1,-2.9 v -32.4 -32.4 l -3.1,-3 -3,-2.9 -30.2,-0.1 c -16.6,-0.1 -31.2,0 -32.3,0.3 z",
        id: "Quote"
    }),
    e(keyboardButton, {
        d: "m 1032,315.1 c -1.4,0.6 -3.5,2 -4.7,3.1 -2.3,2.1 -2.3,2.2 -2.3,34.6 v 32.4 l 3.1,2.9 3.1,2.9 h 31.9 31.9 l 3.2,-2.9 3.3,-2.9 0.3,-30.6 c 0.3,-26 0.1,-31.1 -1.2,-33.8 -3,-6.3 -3.1,-6.3 -36.1,-6.5 -18.7,-0.1 -30.9,0.2 -32.5,0.8 z",
        id: "Backslash"
    }),
    e(keyboardButton, {
        d: "m 1210.3,315.1 c -1.7,0.5 -4.1,2.1 -5.2,3.5 -2,2.6 -2.1,3.9 -2.1,33.6 0,33.7 0.2,35.2 5.7,37.7 1.6,0.7 13.1,1.1 32.8,1.1 19.7,0 31.2,-0.4 32.8,-1.1 5.5,-2.5 5.7,-4.1 5.7,-37.4 0,-29.3 -0.1,-30.8 -2,-33.6 -1.2,-1.6 -3.6,-3.3 -5.8,-3.9 -4.6,-1.2 -57.4,-1.2 -61.9,0.1 z",
        id: "PageDown"
    }),
    e(keyboardButton, {
        d: "m 6.4,398 c -1.2,0.4 -3.1,2.1 -4.3,3.6 -2,2.6 -2.1,3.5 -2.1,33.8 0,34.1 0,34 6,37.1 2.4,1.3 9,1.5 39.3,1.5 23.4,0 37.5,-0.4 39.5,-1.1 6.1,-2.1 6.2,-2.6 6.2,-37.6 C 91,400.8 91,401 85.3,398.1 82.7,396.8 9.7,396.6 6.4,398 Z",
        id: "ShiftLeft"
    }),
    e(keyboardButton, {
        d: "m 100.2,399 c -1.8,1.1 -3.7,3.2 -4.2,4.6 -0.6,1.4 -1,15.3 -1,32 0,32.5 0.2,33.9 6,36.9 2.6,1.4 7.6,1.5 34.1,1.3 l 31.1,-0.3 2.9,-3.3 2.9,-3.2 v -31.6 -31.6 l -3.4,-3.4 -3.4,-3.4 h -30.8 c -29.1,0 -31.1,0.1 -34.2,2 z",
        id: "Backslash2"
    }),
    e(keyboardButton, {
        d: "m 182.4,398 c -1.2,0.4 -3.1,2.1 -4.3,3.6 -2,2.6 -2.1,3.5 -2.1,33.9 0,29.5 0.1,31.4 2,33.7 3.6,4.7 5.5,4.9 38.4,4.6 l 30.8,-0.3 2.9,-3.3 2.9,-3.2 V 435.5 404 l -2.9,-3.2 -2.9,-3.3 -31.4,-0.2 c -17.2,-0.1 -32.3,0.2 -33.4,0.7 z",
        id: "KeyZ"
    }),
    e(keyboardButton, {
        d: "m 263.4,398 c -1.2,0.4 -3.1,2.1 -4.3,3.6 -2,2.6 -2.1,3.5 -2.1,34 V 467 l 2.9,3.2 2.9,3.3 31.4,0.3 c 29.9,0.2 31.4,0.1 34.6,-1.8 1.8,-1.1 3.7,-3.2 4.2,-4.6 0.6,-1.4 1,-15.2 1,-31.9 0,-16.7 -0.4,-30.5 -1,-31.9 -0.5,-1.4 -2.4,-3.5 -4.2,-4.6 -3.1,-1.9 -5,-2 -33.3,-1.9 -16.5,0 -31,0.4 -32.1,0.9 z",
        id: "KeyX"
    }),
    e(keyboardButton, {
        d: "m 343.5,398.2 c -5.5,3 -5.5,2.8 -5.5,37.4 0,31.1 0.1,32.1 2.1,34.3 1.1,1.2 3.2,2.6 4.6,3.2 1.3,0.5 15.5,0.9 31.4,0.9 32,0 34.5,-0.4 37.3,-5.9 2.3,-4.4 2.4,-60.7 0.1,-65.1 -3,-5.8 -4.4,-6 -37.7,-6 -20.1,0.1 -31,0.4 -32.3,1.2 z",
        id: "KeyC"
    }),
    e(keyboardButton, {
        d: "m 423.3,399 c -5,3 -5.5,6.4 -5.1,38.8 0.3,31.8 0.5,32.9 7,35.1 4.2,1.5 59.4,1.5 63.6,0 6.1,-2.1 6.2,-2.6 6.2,-37.6 0,-28.6 -0.2,-32 -1.8,-33.9 -3.4,-4.2 -4.9,-4.4 -36.4,-4.4 -28.3,0 -30.5,0.1 -33.5,2 z",
        id: "KeyV"
    }),
    e(keyboardButton, {
        d: "m 504.8,398.6 c -5.6,3 -5.8,4.6 -5.8,37.1 0,27.8 0.1,30 2,33 3.1,5.1 6,5.5 39.2,5.1 l 29.7,-0.3 3,-2.9 3.1,-3 v -32 c -0.1,-34 0,-33.5 -5,-36.9 -2.2,-1.5 -5.8,-1.7 -33,-1.7 -25,0.1 -31,0.3 -33.2,1.6 z",
        id: "KeyB"
    }),
    e(keyboardButton, {
        d: "m 585.2,399 c -1.8,1.1 -3.7,3.2 -4.2,4.6 -0.6,1.4 -1,15.2 -1,31.9 0,16.7 0.4,30.5 1,31.9 0.5,1.4 2.4,3.5 4.2,4.6 3.2,1.9 4.7,2 34.6,1.8 l 31.4,-0.3 2.9,-3.3 2.9,-3.2 V 435.5 404 l -2.9,-3.2 -2.9,-3.3 -31.4,-0.3 c -29.9,-0.2 -31.4,-0.1 -34.6,1.8 z",
        id: "KeyN"
    }),
    e(keyboardButton, {
        d: "m 667.4,398 c -1.2,0.4 -3.1,2.1 -4.3,3.6 -2,2.6 -2.1,3.5 -2.1,34 V 467 l 2.9,3.2 2.9,3.3 30.8,0.3 c 32.9,0.3 34.8,0.1 38.4,-4.6 1.9,-2.3 2,-4.2 2,-33.6 0,-34.1 0,-34 -6,-37.1 -2.4,-1.2 -8.1,-1.5 -32.7,-1.4 -16.4,0 -30.8,0.4 -31.9,0.9 z",
        id: "KeyM"
    }),
    e(keyboardButton, {
        d: "m 747,398.7 c -5,3.4 -4.9,2.9 -5,36.9 v 32 l 3.1,3 3,2.9 29.7,0.3 c 33.2,0.4 36.1,0 39.2,-5.1 1.9,-3 2,-5.2 2,-33 0,-24.7 -0.3,-30.3 -1.5,-32.7 -3,-5.8 -4.4,-6 -37.7,-6 -27,0 -30.6,0.2 -32.8,1.7 z",
        id: "Comma"
    }),
    e(keyboardButton, {
        d: "m 828.5,398.2 c -5.5,3 -5.5,2.8 -5.5,37.1 0,35 0.1,35.5 6.2,37.6 1.9,0.7 14,1.1 32,1.1 32.7,0 34.8,-0.4 37.3,-6.4 2.1,-5.1 2.2,-59 0.1,-64.1 -2.7,-6.3 -4,-6.5 -37.8,-6.5 -20.1,0.1 -31,0.4 -32.3,1.2 z",
        id: "Period"
    }),
    e(keyboardButton, {
        d: "m 908.8,398.6 c -5.5,3 -5.8,4.6 -5.8,36.9 0,24.9 0.2,30.1 1.6,32.6 2.8,5.5 5.3,5.9 37.3,5.9 15.9,0 30.1,-0.4 31.4,-0.9 1.4,-0.6 3.5,-2 4.6,-3.2 2,-2.2 2.1,-3.2 2.1,-34.3 0,-28.9 -0.2,-32.3 -1.8,-34.2 -3.4,-4.2 -4.9,-4.4 -36.4,-4.4 -24.8,0.1 -30.8,0.3 -33,1.6 z",
        id: "Slash"
    }),
    e(keyboardButton, {
        d: "m 989.2,399 c -1.8,1.1 -3.7,3.2 -4.2,4.6 -0.6,1.4 -1,15.2 -1,31.9 0,16.7 0.4,30.5 1,31.9 0.5,1.4 2.4,3.5 4.2,4.6 3.2,1.9 5.1,2 61.5,2 33.8,0 59.2,-0.4 60.6,-0.9 1.4,-0.6 3.5,-2 4.6,-3.2 2,-2.2 2.1,-3.2 2.1,-34.3 0,-34.8 0,-34.6 -5.7,-37.5 -1.5,-0.8 -19.6,-1.1 -61,-1.1 -57,0 -58.9,0.1 -62.1,2 z",
        id: "ShiftRight"
    }),
    e(keyboardButton, {
        d: "m 1127.2,399 c -1.8,1.1 -3.7,3.2 -4.2,4.6 -0.6,1.4 -1,15.2 -1,31.9 0,16.7 0.4,30.5 1,31.9 0.5,1.4 2.4,3.5 4.2,4.6 3.2,1.9 4.7,2 34.6,1.8 l 31.4,-0.3 2.9,-3.3 2.9,-3.2 V 435.5 404 l -2.9,-3.2 -2.9,-3.3 -31.4,-0.3 c -29.9,-0.2 -31.4,-0.1 -34.6,1.8 z",
        id: "ArrowUp"
    }),
    e(keyboardButton, {
        d: "m 1209.4,398 c -1.2,0.4 -3.1,2.1 -4.3,3.6 -2,2.6 -2.1,3.5 -2.1,33.8 0,34.1 0,34 6,37.1 4.3,2.2 60.7,2.2 65,0 6,-3.1 6,-3 6,-37.2 V 404 l -2.9,-3.2 -2.9,-3.3 -31.4,-0.2 c -17.2,-0.1 -32.3,0.2 -33.4,0.7 z",
        id: "End"
    }),
    e(keyboardButton, {
        d: "m 5.4,481.1 c -1.1,0.6 -2.8,2.3 -3.7,3.9 -1.5,2.5 -1.7,6.6 -1.7,33.5 0,29.3 0.1,30.8 2,33.6 1.2,1.6 3.6,3.3 5.8,3.9 5,1.4 113.4,1.4 118.4,0 2,-0.6 4.6,-2.2 5.8,-3.7 1.9,-2.5 2,-3.8 2,-34.2 0,-34.3 0,-34.1 -5.7,-37 -2.9,-1.5 -119.8,-1.4 -122.9,0 z",
        id: "ControlLeft"
    }),
    e(keyboardButton, {
        d: "m 140.8,482.9 -3.3,2.9 -0.3,30.6 c -0.2,25.9 0,31.1 1.3,33.9 2.9,6.1 3.1,6.2 35,6.5 31.3,0.4 35,-0.1 38.4,-4.5 2,-2.5 2.1,-3.8 2.1,-34.5 v -32 l -3.1,-2.9 -3.1,-2.9 H 175.9 144 Z",
        id: "FN"
    }),
    e(keyboardButton, {
        d: "m 221.1,482.9 -3.1,2.9 v 32.4 c 0,32.4 0,32.5 2.3,34.6 4.1,3.9 6.9,4.2 35.8,4.2 29.8,0 32.3,-0.3 36.4,-5 1.9,-2.1 2,-3.6 2,-34.2 v -32 l -3.3,-2.9 -3.2,-2.9 h -31.9 -31.9 z",
        id: "MetaLeft"
    }),
    e(keyboardButton, {
        d: "m 301.1,483.1 -3.1,3.1 v 32 32 l 2.8,2.8 c 3.9,3.9 7.1,4.2 39.2,3.8 29.7,-0.3 30.2,-0.4 33.4,-5.9 1.4,-2.3 1.6,-6.9 1.6,-33.4 v -30.7 l -3.4,-3.4 -3.4,-3.4 h -32 -32 z",
        id: "AltLeft"
    }),
    e(keyboardButton, {
        d: "m 383.1,481.4 c -4.9,2.7 -5,4 -5.1,37.2 0,29.9 0.1,31.2 2,33.7 1.2,1.5 3.8,3.1 5.8,3.7 5.3,1.4 387,1.4 390.9,-0.1 1.5,-0.6 3.8,-2 5.1,-3.1 2.2,-2.1 2.2,-2.2 2.2,-34.6 v -32.4 l -2.9,-2.9 -2.9,-2.9 H 581.8 c -161,0.1 -196.7,0.3 -198.7,1.4 z",
        id: "Space"
    }),
    e(keyboardButton, {
        d: "m 791.1,482.9 -3.1,2.9 v 32.2 32.2 l 2.8,2.8 c 3.9,3.9 7.1,4.2 39.2,3.8 30.2,-0.3 30.6,-0.4 33.5,-6.5 1.3,-2.8 1.5,-8 1.3,-33.9 l -0.3,-30.6 -3.3,-2.9 -3.2,-2.9 h -31.9 -31.9 z",
        id: "AltRight"
    }),
    e(keyboardButton, {
        d: "m 873.5,481.2 c -5.5,3 -5.5,2.8 -5.5,37.1 v 31.9 l 2.8,2.8 c 3.9,3.9 7.1,4.2 39.2,3.8 24.3,-0.3 27.8,-0.5 30.1,-2.1 4.7,-3.1 4.9,-4.8 4.9,-37.3 v -30.6 l -3.4,-3.4 -3.4,-3.4 h -31.3 c -20.9,0.1 -32.1,0.4 -33.4,1.2 z",
        id: "RightMeta"
    }),
    e(keyboardButton, {
        d: "m 953.4,481.1 c -1.1,0.6 -2.8,2.3 -3.7,3.9 -1.5,2.5 -1.7,6.6 -1.7,33.2 0,28.2 0.1,30.5 2,33.5 1.3,2.1 3.1,3.5 5.7,4.2 5.2,1.5 72.2,1.5 76,0 1.5,-0.6 3.8,-2 5.1,-3.1 2.2,-2.1 2.2,-2.2 2.2,-34.6 v -32.4 l -3.1,-2.9 -3.1,-2.9 -38.7,0.1 c -23.8,0 -39.4,0.4 -40.7,1 z",
        id: "ControlRight"
    }),
    e(keyboardButton, {
        d: "m 1046.1,482.9 -3.1,2.9 v 32.5 32.5 l 3,2.6 c 1.7,1.4 4.5,2.8 6.3,3.1 1.8,0.4 16,0.5 31.7,0.3 31.3,-0.3 31.6,-0.4 34.6,-6.6 1.3,-2.7 1.5,-7.8 1.2,-33.8 l -0.3,-30.6 -3.3,-2.9 -3.2,-2.9 h -31.9 -31.9 z",
        id: "ArrowLeft"
    }),
    e(keyboardButton, {
        d: "m 1128.5,481.2 c -5.5,3 -5.5,2.8 -5.5,37.1 v 31.9 l 2.8,2.8 c 3.9,3.9 7.1,4.2 39.2,3.8 24.3,-0.3 27.8,-0.5 30.1,-2.1 4.7,-3.1 4.9,-4.8 4.9,-37.3 v -30.6 l -3.4,-3.4 -3.4,-3.4 h -31.3 c -20.9,0.1 -32.1,0.4 -33.4,1.2 z",
        id: "ArrowDown"
    }),
    e(keyboardButton, {
        d: "m 1208.4,481.1 c -1.1,0.6 -2.8,2.3 -3.7,3.9 -1.5,2.5 -1.7,6.6 -1.7,33.5 0,29.3 0.1,30.8 2,33.6 1.2,1.6 3.6,3.3 5.8,3.9 4.9,1.3 56.5,1.3 61.4,0 2.2,-0.6 4.6,-2.3 5.8,-3.9 1.9,-2.8 2,-4.3 2,-33.6 0,-33.3 -0.2,-34.9 -5.7,-37.4 -3.1,-1.4 -62.9,-1.4 -65.9,0 z",
        id: "ArrowRight"
    }),
]
    useEffect(() => {
        // Update the document title using the browser API
        let onKeyDown = document.addEventListener('keydown', key=>{
            // console.log(key.keyCode);
            let el = document.getElementById(key.code);
            if(el) el.classList.add('active');
        });
        let onKeyUp = document.addEventListener('keyup', key=>{
            let el = document.getElementById(key.code);
            if(el) el.classList.remove('active');
        });
        return ()=>{
            document.removeEventListener(onKeyDown);
            document.removeEventListener(onKeyUp);
        }
    });

    return e('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        id: "keyborad",
        viewBox: "0 0 1280.000000 640.000000",
        height: "100%",
        width: "100%",
        version: "1.0",
    }, keysPaths);
}

ReactDOM.render(e(keyboard), document.getElementById('react-root'));