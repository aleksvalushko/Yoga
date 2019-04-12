class Options {
    constructor(height, width, bg, fontSize, textAlign, color){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.color = color;
    }

    createElem(){
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = "Hello World!";
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; 
        font-size: ${this.fontSize}px; text-align: ${this.textAlign}; color: ${this.color};`;
    }
}

const elem = new Options(150, 300, 'blue', 30, 'center', 'red');

elem.createElem();