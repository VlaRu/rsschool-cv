export const navigationElements = document.querySelectorAll('.section');
const navigationList = document.querySelectorAll('.list_navigation-element');

export function hideSections() {
  navigationElements.forEach(section => {
    section.classList.add('none');
  });
}

export function navigation() {
  navigationList.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        hideSections();
        navigationElements[index].classList.remove('none');
    });
  });
}