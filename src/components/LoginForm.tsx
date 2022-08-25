import { FC, useState } from 'react'

const LoginForm: FC = () => {
  const wrapperStyle: object = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div style={wrapperStyle}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        style={{marginBottom: 20}}
        placeholder='Email'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        style={{marginBottom: 20}}
        placeholder='Password'
      />
      <button>Login</button>
      <button>Register</button>
    </div>
  )
}

export default LoginForm