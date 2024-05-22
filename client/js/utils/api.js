const POSTS_API = 'https://jsonplaceholder.org/posts'
const USERS_API = 'https://jsonplaceholder.org/users'

/* AUTH */
export async function login(credentials) {
    const url = '/examen-js/server/api/auth/login.php'

    const requestData = new FormData()
    requestData.append('userId', credentials.userId)
    requestData.append('password', credentials.password)
    requestData.append('rememberMe', credentials.rememberMe)
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: requestData
        })
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data
    } 
    
    catch (error) {
        throw error
    } 
}

export async function isLoggedIn() {
    const url = '/examen-js/server/api/auth/is-logged-in.php'

    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data.status === 200 ? true : false
    } 
    
    catch (error) {
        throw error
    }
}

export async function logout() {
    const url = '/examen-js/server/api/auth/logout.php'

    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export async function register(form) {
    const url = '/examen-js/server/api/auth/register.php'
    const requestData = new FormData(form)

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: requestData
        })
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

/* USER */
export async function getUserInfo() {
    const url = '/examen-js/server/api/users/user.php'

    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export async function getUser(id) {
    const url = USERS_API + '/' + id

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Error en la solicitud HTTP')
        }
        const data = await response.json()
        return data 
    } catch (error) {
        throw error
    }
}

/* POSTS */
export async function getPostList() {
    const url = POSTS_API

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Error en la solicitud HTTP')
        }
        const data = await response.json()
        return data 
    } catch (error) {
        throw error
    }
}

export async function createPost(form) {
    const url = '/examen-js/server/api/posts/create-post.php'
    const requestData = new FormData(form)

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: requestData
        })
        if (response.status !== 200) {
            throw new Error(response.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }

}

/* FRIENDS */
export async function getFriends(filter=null) {
    const url = '/examen-js/server/api/friends/get-friends.php'
    const request = filter ? url + `?filter=${filter.filter}&filter-value=${filter.value}` : url

    try {
        const response = await fetch(request)
        if (!response.status === 200) {
            throw new Error('Error en la solicitud HTTP');
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export async function getSuggestedFriends(){
    const url = '/examen-js/server/api/friends/get-suggested-friends.php'
    try {
        const response = await fetch(url)
        if (!response.status === 200) {
            throw new Error('Error en la solicitud HTTP')
        }
        const data = await response.json()
        return data 
    } catch (error) {
        throw error
    }
}

/* GROUPS 
(todas estas funciones no son asincronas porque no conectan 
con el backend y solo contienen valores dummy)*/ 
export function getDummyGroups(filter=null) {
    const dummyData = [
        {
            'name': 'Tu no ets de Vilanova si no …',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            'image': `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300`,
            'tags':['social']
        },
        {
            'name': 'Antics alumnes Escola XXXX',
            'description': '...',
            'image': `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300`,
            'tags': ['social','records']
        },
        {
            'name': 'Vilanova images d\'ahir i avui',
            'description': '...',
            'image': `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300`,
            'tags': ['records']
        },
        {
            'name': 'Anem a caminar',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            'image': `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300`,
            'tags': ['esport', 'salut']
        },
        {
            'name': 'Club Esportiu Ribes',
            'description': '...',
            'image': `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300`,
            'tags': ['esport', 'aventura']
        }
    ]

    // Función para filtrar los datos devueltos (integrarla en el backend)
    const compare = (string, ref) => {
        return string.includes(ref)
    }

    if (filter) {
        const filteredData = dummyData.filter(group => {
            switch (filter.filter) {
                case 'name':
                    if (compare(group.name.toLowerCase().replace(/ /g, ''), filter.value.toLowerCase().replace(/ /g, ''))) {
                        return group
                    }
                    break
                case 'tag':
                    if (compare(group.tags.join('').toLowerCase(), filter.value.toLowerCase())) {
                        return group
                    }
                    break
            }
        })

        return filteredData
    }

    return dummyData
}

export function createDummyGroup(form) {
    const groups = getDummyGroups()

    const newGroup = {
        'name': form['name'].value,
        'description': form['description'].value,
        'image': form['image-url'].value,
        'tags': form['tags'].value.split(' ')
    }

    form.reset()

    // Insertamos el nuevo grupo al inicio del array (no es persistente)
    groups.unshift(newGroup)
    return groups
}