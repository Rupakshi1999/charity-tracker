// this pafe is creating with github repo github.com/obabichev/react-token-auth
import { createAuthProvider } from 'react-token-auth'

export const {useAuth, authFetch, login, logout} = createAuthProvider({
    getAccessToken: 'access_token',
    storage: localStorage,
    onUpdateToken: (token) => fetch('http://127.0.0.1:5000/authorization/refresh',
        {
            method: 'POST',
            body: token.refresh_token
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
})
