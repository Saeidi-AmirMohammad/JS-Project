import './style/style.scss'

class imageComponent{
    render(){
        const element = document.createElement('div');
        element.classList.add('image-box');
        element.innerHTML = 'saeidiAmirmohammad';

        return element;
    }
}

export default new imageComponent();