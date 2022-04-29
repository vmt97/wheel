
cc.Class({
    extends: cc.Component,

    properties: {
        wheel:cc.Node,
        winPopup:cc.Node,
        labelWin:cc.Label,
        labelChosen:cc.Label,
        btnWin: cc.Node,
        btnRandomWin: cc.Node,
        radioButton: [cc.Toggle]
    },

    onLoad () {
        this.textWin = "Chúc mừng người thắng là: ";
        this.textChosenWin = "Bạn chọn người thắng là: ";
        this.textRandomWin = "Ngẫu Nhiên";
        this.sectorAngles = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360];
        this.listUser = [1,2,3,4,5,6,7,8,9,10,11,12];
        this.totalCircle = 15;
        this.finalAngle = 0;
        this.sector = 0;
        this.index = -1;
    },

    startWheel(){
        this.index == -1 ? this.index = this.radomInteger(0,this.sectorAngles.length): this.index;
        this.sector = (this.sectorAngles[this.index]);
        this.finalAngle = this.totalCircle * 360 + this.sector;

        this.wheel.runAction(
            cc.sequence(
                cc.rotateTo(5,this.finalAngle).easing(cc.easeQuinticActionInOut()),
                cc.callFunc(()=>{
                    this.showWinPopup(this.index);
                })
            )
        );
    },

    showWinPopup(idx){
        this.labelWin.string = this.textWin+""+ this.listUser[idx];
        this.winPopup.active = true;
    },

    hideWinPopup(){
        this.winPopup.active = false;
    },

    setRandomWin(){
        this.index = -1;
        this.updateLabelChoiceWin(-1);
    },

    radioButtonClicked(toggle) {
        var clickedIndex = this.radioButton.indexOf(toggle);
        this.index = clickedIndex;
        this.updateLabelChoiceWin(this.index);
    },

    updateLabelChoiceWin(idx){
        if (idx > -1)
            this.labelChosen.string = this.textChosenWin + "" + this.listUser[idx];
        else {
            this.labelChosen.string = this.textChosenWin + ""+ this.textRandomWin;
        }
    },

    radomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    },
    
});
