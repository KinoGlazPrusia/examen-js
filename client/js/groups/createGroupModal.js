import * as api from '../utils/api.js'
import * as validators from '../utils/validators.js'
import { handleResponse as renderGroupList } from './groupList.js'

export default async function setupCreateGroupModal() {
    const form = document.forms['create-group']
    form['submit'].onclick = (e) => handleSubmit(e, form)

    const addGroupBtn = document.querySelector('.add-group')
    addGroupBtn.onclick = () => showCreateGroupModal()

    setupValidators(form)
}

function setupValidators(form) {
    form['name'].oninput = () => validators.validateGroupName(form['name'])
    form['description'].oninput = () => validators.validateGroupDescription(form['description'])
    form['image-url'].oninput = () => validators.validateGroupImageUrl(form['image-url'])
    form['tags'].oninput = () => validators.validateGroupTags(form['tags'], getTags(form))
}

function getTags(form) {
    const tags = form['tags'].value.split(' ')

    const cleanTags = tags.filter((tag) => {
        return tag.length > 0
    })

    return cleanTags
}

function showCreateGroupModal() {
    const modal = document.querySelector('.create-group-wrapper')
    modal.style.display = 'grid'

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'
        }
    }
}

function validateForm(form) {
    validators.validateGroupTags(form['tags'], getTags(form))
    validators.validateGroupImageUrl(form['image-url'])
    validators.validateGroupDescription(form['description'])
    validators.validateGroupName(form['name'])

    if (
        form['name'].validity.valid &&
        form['description'].validity.valid &&
        form['image-url'].validity.valid &&
        form['tags'].validity.valid
    ) {
        return true
    }

    return false
}

function handleSubmit(e, form) {
    e.preventDefault()

    if (!validateForm(form)) return
    
    const response = api.createDummyGroup(form)
    handleResponse(response)
}

function handleResponse(response) {
    const modal = document.querySelector('.create-group-wrapper')
    modal.style.display = 'none'

    renderGroupList(response)
}