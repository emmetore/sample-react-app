import React from 'react'

export default function LoginForm() {
    return (
        <div class="login-container">
            <h1><b>log in</b></h1>
            <input type="text" placeholder="username" class="input-box" />
            <br></br><br></br>
            <input type="text" placeholder="password" class="input-box" />
            <br></br><br></br>
            <button class="button">submit</button>
        </div>
    )
}