// import from 'lodash';

class imageComponent{

    createTextTag(){
        const text = document.createElement('p')
        text.innerHTML = 'سلام امیر محمد سعیدی';

        return text;
    }

    render(){
        const element = document.createElement('div');
        element.classList.add('image-box');
        element.innerHTML = 'saeidiAmirmohammad';

        element.appendChild(this.createTextTag());

        return element;
    }
}

export default new imageComponent();