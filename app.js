var page = {
    dom: {
        logos: [].slice.call(document.querySelectorAll('.flip-container')),
        main: document.querySelector('main')
    },
    fn: {}
};

page.fn.createAdditionalInfo = function(data, container) {

    var left = document.createElement('div');
    left.className = 'left';


    var logoContainerTop = document.createElement('div');
    logoContainerTop.className = 'logo-inside';

    var img1 = document.createElement('img');
    img1.src = 'icons/' + data.name + '_logo_100-01.svg';
    img1.alt = data.name + ' Logo';

    logoContainerTop.appendChild(img1);


    var logoContainerBottom = document.createElement('div');
    logoContainerBottom.className = 'logo-inside';

    var img2 = document.createElement('img');
    img2.src = 'icons/' + data.name + '_logo_alt_100-01.svg';
    img2.alt = data.name + ' Logo';

    logoContainerBottom.appendChild(img2);

    left.appendChild(logoContainerTop);
    left.appendChild(logoContainerBottom);


    var right = document.createElement('div');
    right.className = 'right';

    var title = document.createElement('h3');
    title.textContent = data.title;

    var description = document.createElement('p');
    description.textContent = data.description;

    right.appendChild(title);
    right.appendChild(description);

    if (!container) {
        var wrapper = document.createElement('aside');
        wrapper.className = 'info-container';

        wrapper.appendChild(left);
        wrapper.appendChild(right);

        return wrapper;
    }
    else {
        container.innerHtml = '';
        container.appendChild(left);
        container.appendChild(right);
    }
}

page.dom.main.addEventListener('click', function(e) {
    if (e.target && e.target.className && e.target.className.indexOf('flip-container') > -1) {
        e.target.dataset.details = JSON.stringify({name: 'lukaseder', title: 'lukaseder', description: 'Hallo ich bin LUkaseder fam'});
        // TODO: hier weitermachen
        e.target.insertAdjacentElement(page.fn.createAdditionalInfo(JSON.parse(e.target.dataset.details), undefined));
    }
})
