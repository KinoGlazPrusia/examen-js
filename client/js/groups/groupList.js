import * as api from '../../js/utils/api.js'

export default async function setupGroupList() {
    setupSearchBar()

    const response = api.getDummyGroups()
    handleResponse(response) // No hay llamada a una API real con lo que no es asíncrona
}

function setupSearchBar() {
    const searchInput = document.querySelector('.searchbar input')
    searchInput.oninput = (e) => handleInput(e)
}

function handleInput(e) {
    const filter = document.querySelector('.filter-select').value
    const filterValue = document.querySelector('.searchbar-input').value

    const filteredData = api.getDummyGroups({filter: filter, value:filterValue})
    handleResponse(filteredData)
}

export function handleResponse(groups) {
    const groupListHTML = document.querySelector('.group-list')
    groupListHTML.innerHTML = ''

    groups.forEach((group, index) => {
        const tagsHTML = document.createElement('div')
        tagsHTML.classList.add('group-tag-wrapper')

        group.tags.forEach(tag => {
            tagsHTML.innerHTML += `
                <code class="group-tag">${tag}</code>
            `
        })

        const groupCardHTML = document.createElement('div')
        groupCardHTML.classList.add('group-card')


        groupCardHTML.innerHTML = `
                <img src=${group.image} alt="Foto del grupo" class="group-image">
                <span class="group-name">${group.name}</span>
                <div class="groupt-tag-wrapper">${tagsHTML.innerHTML}</div>
                <span class="group-description">${group.description}</span>
                <button class="group-description-extend">
                    <span class="material-symbols-outlined">keyboard_arrow_down</span>
                </button>
                <button class="follow">
                    <span class="material-symbols-outlined">add_circle</span>
                </button>
        `
        const extendBtn = groupCardHTML.querySelector('.group-description-extend')
        const description = groupCardHTML.querySelector('.group-description')

        extendBtn.onclick = () => {
            if (description.classList.contains('extended')) {
                description.classList.remove('extended')
                description.classList.add('long')
                extendBtn.innerHTML = '<span class="material-symbols-outlined">keyboard_arrow_down</span>'
            } else {
                description.classList.add('extended')
                description.classList.remove('long')
                extendBtn.innerHTML = '<span class="material-symbols-outlined">keyboard_arrow_up</span>'
            }
        }

        groupListHTML.appendChild(groupCardHTML)

        if (description.scrollHeight <= description.offsetHeight) {
            extendBtn.style.display = 'none'
        }  else {
            description.classList.add('long')
        }

    })
}