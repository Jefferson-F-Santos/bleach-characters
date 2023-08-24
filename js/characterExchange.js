(() => {

    const urlImage = './assets/images/';

    const title = document.querySelector('.title');
    const interface = document.querySelector('.interface');
    const imgSelected = document.querySelector('.contentImage img');
    const characters = document.querySelectorAll('.imageCharacter');

    const checkCharacter = item => {
        if ('Byakuya Kuchiki' == item.dataset.character) {
            interface.style.backgroundColor = '#b75fcd';
            imgSelected.setAttribute('src', urlImage + 'Byakuya-Kuchiki.png');
            title.innerHTML = `<h2>Captain <br><span>${item.dataset.character}</span></h2>`;
            colorText(item.dataset.character);
        }
        if ('Aizen Sosuke' == item.dataset.character) {
            interface.style.backgroundColor = '#7537b5';
            imgSelected.setAttribute('src', urlImage + 'Aizen-Sosuke.webp');
            title.innerHTML = `<h2>Captain <br><span>${item.dataset.character}</span></h2>`;
            colorText(item.dataset.character);
        }
        if ('Gin Ichimaru' == item.dataset.character) {
            interface.style.backgroundColor = '#f1f1f1';
            imgSelected.setAttribute('src', urlImage + 'Gin-Ichimaru.webp');
            title.innerHTML = `<h2>Captain <br><span>${item.dataset.character}</span></h2>`;
            colorText(item.dataset.character);
        }
        if ('Kyouraku Shunsui' == item.dataset.character) {
            interface.style.backgroundColor = '#f69e9c';
            imgSelected.setAttribute('src', urlImage + 'Kyouraku-Shunsui.png');
            title.innerHTML = `<h2>Captain <br><span>${item.dataset.character}</span></h2>`;
            colorText(item.dataset.character);
        }
        if ('Toshirro Hitsugaya' == item.dataset.character) {
            interface.style.backgroundColor = '#2c9ac2';
            imgSelected.setAttribute('src', urlImage + 'Toshirro-Hitsugaya.webp');
            title.innerHTML = `<h2>Captain <br><span>${item.dataset.character}</span></h2>`;
            colorText(item.dataset.character);
        }
    }

    const colorText = character => {
        const colorTitle = document.querySelector('.title h2');
        const colorP = document.querySelector('.contentText p');
        const itens = document.querySelectorAll('.listMenu .item');

        if (character == 'Gin Ichimaru') {
            colorP.style.color = '#555';
            colorTitle.style.color = '#333';

            itens.forEach(item => {
                item.style.color = '#333';
            });

            return true;
        }

        colorP.style.color = '#fbfbfb';
        colorTitle.style.color = '#fbfbfb';

        itens.forEach(item => {
            item.style.color = '#F5F5F0';
        });

    }

    characters.forEach(item => {
        item.addEventListener('click', () => {
            checkCharacter(item);
        })
    });

})();