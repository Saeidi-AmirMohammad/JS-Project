

class draggable {
    dragSrcEl;
    constructor(options) {
        this.setupList(options);

        for (let listItem of options.el.children) {
            this.addDnDHandlers(listItem);
        }
    }

    setupList(options) {
        let { list, el: element, template } = options;

        if (!element) {
            throw Error('element is null')
        }

        if (!list) {
            throw Error('list is null')

        }

        if (!Array.isArray(list)) {
            throw Error('element is not array')

        }

        if (!template) {
            throw Error('template is null')

        }

        if (typeof template !== "function") {
            throw Error('template is not function')

        }

        list.forEach(item => element.innerHTML += template(item))

    }

    addDnDHandlers(e) {
        e.setAttribute("draggable", true);

        e.addEventListener('dragstart', this.handleDragStart);
        e.addEventListener('dragenter', this.handleDragEnter);
        e.addEventListener('dragover', this.handleDragOver);
        e.addEventListener('dragleave', this.handleDragLeave);
        e.addEventListener('drop', this.handleDragDrop);
        e.addEventListener('dragend', this.handleDragEnd);


    }

    handleDragStart(e) {
        this.dragSrcEl = e.target;
        e.dataTransfer.setData('text/html', e.target.outerHTML);
        e.target.classList.add('dragElem');

        // console.log('drag-start' , e.target);
    }

    handleDragEnter(e) {

        // console.log('drag-enter' , e.target);

    }

    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.target.classList.add('over');

        // console.log('drag-over' , e.target);

    }

    handleDragLeave(e) {
        e.target.classList.remove('over')

        // console.log('drag-leave' , e.target);

    }

    handleDragDrop(e) {
        let target = e.target.closest('.list-item');
    if(this.dragSrcEl != target)
    {
        target.parentNode.removeChild(this.dragSrcEl)
        let dropHTML = e.dataTransfer.getData('text/html');
        target.insertAdjacentHTML('beforebegin', dropHTML);
        this.addDnDHandlers(target.previousSibling);
    }

        e.target.classList.remove('over');

        // console.log('drag-drop' , e.target);

    }

    handleDragEnd(e) {

        e.target.classList.remove('dragElem');

        // console.log('drag-end' , e.target);

    }

}


