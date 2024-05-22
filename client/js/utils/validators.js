export function validateGroupName(input) {
    validateInput(input, [
        {
            condition: () => input.value && input.value.length > 0,
            message: 'Este campo no puede estar vacío'
        }
    ])
}

export function validateGroupDescription(input) {
    const censoredWords = ['censura', 'suspender', 'spaguetti']
    const censoredWordsDetected = input.value.toLowerCase().split(' ').filter(word => {
        if (censoredWords.includes(word)) return word
    })

    validateInput(input, [
        {
            condition: () => input.value && input.value.length > 0,
            message: 'Este campo no puede estar vacío'
        },
        {
            condition: () => censoredWordsDetected.length === 0,
            message: `Las palabras '${censoredWordsDetected}' no están permitidas`
        }
    ])
}

export function validateGroupImageUrl(input) {
    validateInput(input, [
        {
            condition: () => input.value && input.value.length > 0,
            message: 'Este campo no puede estar vacío'
        }
    ])
}

export function validateGroupTags(input, tags) {
    validateInput(input, [
        {
            condition: () => tags.length >= 1 && tags.length <= 3,
            message: 'Se permiten entre 1 y 3 tags'
        }
    ])
}

function validateInput(input, params) {
    let validityMessage = []

    params.forEach(param => {
        if (!param.condition()) {
            validityMessage.push(param.message)
        }
    })

    if (validityMessage.length > 0) {
        input.setCustomValidity(validityMessage.join('\n'))
        input.classList.remove('valid')
        input.classList.add('invalid')
    } else {
        input.setCustomValidity('')
        input.classList.remove('invalid')
        input.classList.add('valid')
    }

    input.reportValidity()
}