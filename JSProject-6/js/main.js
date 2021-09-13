let items = document.querySelectorAll('nav.head-tab ul li');
items.forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('nav.head-tab ul li.selected').classList.remove('selected')
        item.classList.add('selected');
        let contentBox = item.getAttribute('data-content');
        document.querySelector('div.content-tab ul li.selected-content').classList.remove('selected-content')
        document.querySelector(`div.content-tab ul li[data-content = "${contentBox}"]`).classList.add('selected-content')
    })
});
