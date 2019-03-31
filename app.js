var page = {
    dom: {
        logos: [].slice.call(document.querySelectorAll('.flip-container')),
        main: document.querySelector('main')
    },
    fn: {},
    data: {
        details: {
            bigBonsai: {title: 'Big Bonsai Games', description: 'Hallo ich bin LUkaseder fam'},
            dutchHouse: {title: 'Dutch House', description: 'Hallo ich bin LUkaseder fam'},
            graffitiPaintbar: {title: 'Graffiti Paintbar', description: 'Hallo ich bin LUkaseder fam'},
            itlantian: {title: 'Itlantian', description: 'Hallo ich bin LUkaseder fam'},
            kstm: {title: 'KSTM', description: 'Hallo ich bin LUkaseder fam'},
            lukaseder: {title: 'Lukaseder Fotografie', description: 'Hallo ich bin LUkaseder fam'},
            mokka: {title: 'Mokka Café', description: 'Hallo ich bin LUkaseder fam'},
            mytikas: {title: 'Mytikas', description: 'Hallo ich bin LUkaseder fam'},
            parallela: {title: 'Parallela', description: 'Hallo ich bin LUkaseder fam'},
            passionPodcast: {title: 'Passion Podcast', description: 'Hallo ich bin LUkaseder fam'},
            pulsebox: {title: 'Pulse Box', description: 'Hallo ich bin LUkaseder fam'},
            racedevil: {title: 'Race Devil', description: 'Hallo ich bin LUkaseder fam'},
            tgf: {title: 'TGF - Thomas Gottuck Fotografie', description: 'Hallo ich bin LUkaseder fam'},
            umcd: {title: 'UMCD - Ulrich Müller Consulting und Dienste', description: 'Hallo ich bin LUkaseder fam'},
            winkler: {title: 'Winkler Hausgerätetechnik', description: 'Hallo ich bin LUkaseder fam'}
        }
    }
};

page.fn.createAdditionalInfo = function(data, name, container) {

    var left = document.createElement('div');
    left.className = 'left';


    var logoContainerTop = document.createElement('div');
    logoContainerTop.className = 'logo-inside';

    var img1 = document.createElement('img');
    img1.src = 'icons/' + name + '_logo_100-01.svg';
    img1.alt = name + ' Logo';

    logoContainerTop.appendChild(img1);


    var logoContainerBottom = document.createElement('div');
    logoContainerBottom.className = 'logo-inside';

    var img2 = document.createElement('img');
    img2.src = 'icons/' + name + '_logo_alt_100-01.svg';
    img2.alt = name + ' Logo';

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
        e.target.parentNode.insertBefore(page.fn.createAdditionalInfo(page.data.details[e.target.dataset.name], e.target.dataset.name, undefined), e.target.nextSibling);
    }
})
