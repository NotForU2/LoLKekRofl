var konamiCode = ['ArrowDown', 'ArrowDown', 'ArrowUp', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']
var yourCode = []

var сompareSequence = function () {
    var flag = yourCode.every((elem, index) => {
        return elem == konamiCode[index];
    })

    if (!flag) {
        yourCode = [];
        return 'you lose'
    }
    else if (yourCode.length == konamiCode.length) {
        return 'done'
    }
}

var megaRofl = {
    idDiv: null,
    idText: null,
    idFace: null,

    buildDiv: function () {
        let div = document.createElement('div')
        div.id = 'div-rofl'
        div.setAttribute('style', 'z-index:9999; position:absolute; top:20px; left:30%;')
        document.body.append(div)
        this.idDiv = div.id
    },

    buildText: function () {
        let h1 = document.createElement('h1')
        h1.id = 'text-rofl'
        h1.setAttribute('style', 'font-family:Impact, fantasy; text-align:center; font-size:72px;')
        h1.innerText = 'Попался, пидОр!'
        document.getElementById(this.idDiv).append(h1)
        this.idText = h1.id
        return h1
    },

    buildFace: function(){
        let img = document.createElement('img')
        img.id = 'img-rofl'
        img.src = 'https://raw.githubusercontent.com/NotForU2/LoLKekRofl/main/nik.png'
        img.setAttribute('style', 'display: block; margin-left: auto; margin-right: auto; width: 0%;')
        document.getElementById(this.idDiv).append(img)
        this.idFace = img.id
        return img
    },

    removeRofl: function() {
        var elem = document.getElementById(this.idFace)
        if(elem){
            elem.parentNode.removeChild(elem);
            this.idFace = null;
        }
        var elem = document.getElementById(this.idText)
        if(elem){
            elem.parentNode.removeChild(elem);
            this.idText = null;
        }
        var elem = document.getElementById(this.idDiv)
        if(elem){
            elem.parentNode.removeChild(elem);
            this.idDiv = null;
        }
    },

    _makeEmeggenceFace: function(el, from, to, step) {
        var _drawStep = function (el, startProg, endProg, stepProg, resolve) {
            return (function () {
                var newProg = startProg + stepProg
                el.style.width = newProg * 50 + '%'
                el.style.transform = `rotate(${newProg * 360}deg)`
                if (newProg < endProg) {
                    window.requestAnimationFrame(_drawStep(el, newProg, endProg, stepProg, resolve));
                } else {
                    resolve();
                }
            });
        }
        return new Promise(function (resolve) {
            window.requestAnimationFrame(_drawStep(el, from, to, step, resolve));
        });
    },

    animateText: function (text) {
        text.animate([
            {offset: 0, textShadow: '0.04em 0.04em #ff0000, 0.08em 0.08em #ff7f00, 0.12em 0.12em #ffff00, 0.16em 0.16em #00ff00, 0.20em 0.20em #0000ff, 0.24em 0.24em #4b0082, 0.28em 0.28em #8f00ff'},
            {offset: 0.15, textShadow: '0.04em 0.04em #8f00ff, 0.08em 0.08em #ff0000, 0.12em 0.12em #ff7f00, 0.16em 0.16em #ffff00, 0.20em 0.20em #00ff00, 0.24em 0.24em #0000ff, 0.28em 0.28em #4b0082'},
            {offset: 0.30, textShadow: '0.04em 0.04em #4b0082, 0.08em 0.08em #8f00ff, 0.12em 0.12em #ff0000, 0.16em 0.16em #ff7f00, 0.20em 0.20em #ffff00, 0.24em 0.24em #00ff00, 0.28em 0.28em #0000ff'},
            {offset: 0.45, textShadow: '0.04em 0.04em #0000ff, 0.08em 0.08em #4b0082, 0.12em 0.12em #8f00ff, 0.16em 0.16em #ff0000, 0.20em 0.20em #ff7f00, 0.24em 0.24em #ffff00, 0.28em 0.28em #00ff00'},
            {offset: 0.60, textShadow: '0.04em 0.04em #00ff00, 0.08em 0.08em #0000ff, 0.12em 0.12em #4b0082, 0.16em 0.16em #8f00ff, 0.20em 0.20em #ff0000, 0.24em 0.24em #ff7f00, 0.28em 0.28em #ffff00'},
            {offset: 0.75, textShadow: '0.04em 0.04em #ffff00, 0.08em 0.08em #00ff00, 0.12em 0.12em #0000ff, 0.16em 0.16em #4b0082, 0.20em 0.20em #8f00ff, 0.24em 0.24em #ff0000, 0.28em 0.28em #ff7f00'},
            {offset: 0.90, textShadow: '0.04em 0.04em #ff7f00, 0.08em 0.08em #ffff00, 0.12em 0.12em #00ff00, 0.16em 0.16em #0000ff, 0.20em 0.20em #4b0082, 0.24em 0.24em #8f00ff, 0.28em 0.28em #ff0000'},
            {offset: 1, textShadow: '0.04em 0.04em #ff0000, 0.08em 0.08em #ff7f00, 0.12em 0.12em #ffff00, 0.16em 0.16em #00ff00, 0.20em 0.20em #0000ff, 0.24em 0.24em #4b0082, 0.28em 0.28em #8f00ff'}
        ], {
            duration: 3000,
            iterations: Infinity
        })
    },

    staggerFace: function(img) {
        img.animate([
            { transform: 'rotate(-15deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(15deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-15deg)' }
        ], {
            duration: 5000,
            iterations: Infinity
        });
    },

    animateRofl: function() {
        if(this.idDiv != null){
            return;
        }
        this.buildDiv()
        var imgFace = this.buildFace()
        this._makeEmeggenceFace(imgFace, 0, 1, 0.02).then(() => {
            this.staggerFace(imgFace)
            var text = this.buildText()
            this.animateText(text)
        })
    }
}

document.addEventListener('keydown', function(event) {
    console.log(event.code)
    yourCode.push(event.code)
    if (сompareSequence() == 'done') {
        megaRofl.animateRofl();
    }
    else if (megaRofl.idDiv != null) {
        megaRofl.removeRofl();
    }
});