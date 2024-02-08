const initApp = () => {
    const hamburgerBtn = document.getElementById
    ('hamburger-button')
    const mobileMune = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMune.classList.toggle('hidden');
        mobileMune.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');
    }

    hamburgerBtn.addEventListener('click',toggleMenu);
    mobileMune.addEventListener('click',toggleMenu);

}

document.addEventListener('DOMContentLoaded',initApp);