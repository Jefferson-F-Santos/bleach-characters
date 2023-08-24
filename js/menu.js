(() => {

    const btnMenu = document.querySelector('.btnMenu');

    btnMenu.addEventListener('click', () => {

        const listMenu = document.querySelector('.listMenu');

        listMenu.classList.toggle('activeMenu');

    });

})();