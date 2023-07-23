import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import url from 'url'

export const useDataStore = defineStore('data', {
    state: () => ({
        username: '',
        isLogin: false
    }),
    getters: {},
    actions: {
        getUsername() {
            this.username = localStorage.username
        },

        handleLogout() {
            localStorage.clear()
            this.this.isLogin = false
            this.router.push('/')
        },

        async handeRegister(value) {
            try {
                const { username, email, password } = value
                const { data } = await axios({
                    url: baseUrl + '/users/register',
                    method: 'POST',
                    data: {
                        username,
                        email,
                        password
                    }
                })
                const dataLogin = {
                    input: email,
                    password
                }

                this.handleLogin(dataLogin)
            } catch (error) {
                console.log(error)
            }
        },

        async handleLogin(value) {
            try {
                const { input, password } = value
                let isEmail = false

                for (let i = 0; i < input.length; i++) {
                    if (input[i] === '@') {
                        isEmail = true
                    }
                }

                const dataInput = () => {
                    let obj = {}

                    if (isEmail) {
                        obj.email = input
                        obj.username = password
                        return obj
                    } else {
                        obj.username = input
                        obj.password = password
                        return obj
                    }
                }

                const { data } = await axios({
                    url: baseUrl + '/user/login',
                    method: 'POST',
                    data: dataInput()
                })

                localStorage.acces_token = data.acces_token
                localStorage.username = data.username
                localStorage.password = data.password
                this.getUsername()
                this.isLogin = true

                this.router.push('/')
            } catch (error) {
                console.log(error)
            }
        }
    }
})
