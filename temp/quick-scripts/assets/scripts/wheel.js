(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/wheel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0df18s2M45JA6+8brPjoaBF', 'wheel', __filename);
// scripts/wheel.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        wheel: cc.Node,
        winPopup: cc.Node,
        labelWin: cc.Label,
        labelChosen: cc.Label,
        btnWin: cc.Node,
        btnRandomWin: cc.Node,
        radioButton: [cc.Toggle]
    },

    onLoad: function onLoad() {
        this.textWin = "Chúc mừng người thắng là: ";
        this.textChosenWin = "Bạn chọn người thắng là: ";
        this.textRandomWin = "Ngẫu Nhiên";
        this.sectorAngles = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360];
        this.listUser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.totalCircle = 15;
        this.finalAngle = 0;
        this.sector = 0;
        this.index = -1;
    },
    start: function start() {},
    startWheel: function startWheel() {
        var _this = this;

        this.isWheel = true;
        this.index == -1 ? this.index = this.radomInteger(0, this.sectorAngles.length) : this.index;
        this.sector = this.sectorAngles[this.index];
        this.finalAngle = this.totalCircle * 360 + this.sector;

        this.wheel.runAction(cc.sequence(cc.rotateTo(5, this.finalAngle).easing(cc.easeQuinticActionInOut()), cc.callFunc(function () {
            _this.showWinPopup(_this.index);
        })));
    },
    showWinPopup: function showWinPopup(idx) {
        this.labelWin.string = this.textWin + "" + this.listUser[idx];
        this.winPopup.active = true;
    },
    hideWinPopup: function hideWinPopup() {
        this.winPopup.active = false;
    },
    setRandomWin: function setRandomWin() {
        this.index = -1;
        this.updateLabelChoiceWin(-1);
    },
    radioButtonClicked: function radioButtonClicked(toggle) {
        var clickedIndex = this.radioButton.indexOf(toggle);
        this.index = clickedIndex;
        this.updateLabelChoiceWin(this.index);
    },
    updateLabelChoiceWin: function updateLabelChoiceWin(idx) {
        if (idx > -1) this.labelChosen.string = this.textChosenWin + "" + this.listUser[idx];else {
            this.labelChosen.string = this.textChosenWin + "" + this.textRandomWin;
        }
    },
    radomInteger: function radomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    },
    degrees_to_radians: function degrees_to_radians(degrees) {
        var pi = Math.PI;
        return degrees * (pi / 180);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=wheel.js.map
        