import dropdown from '../assets/menu.svg'
const dropdownSvgContainer = document.querySelector('.svgDiv')
const dropdownMenu = document.querySelector('.dropdown')
const dropdownProducts = document.querySelector('.all-products-dropdown')


export function addSvgDropdown() {
    const dropdownSvg = new Image(30, 30)
    dropdownSvg.src = dropdown    
    dropdownSvg.classList.add('svgIcon')
    dropdownSvgContainer.append(dropdownSvg)
}

export function showMenuOnHover() {
    dropdownMenu.addEventListener('mouseover', () => {
        dropdownProducts.removeAttribute('hidden')
    })
}
export function hideMenuOnMouseOut() {
    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownProducts.setAttribute('hidden', true)
    })
}