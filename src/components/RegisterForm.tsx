import { FC, ChangeEvent, useState, useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { LOGIN_CONFIRM_ROUTE, LOGIN_ROUTE } from '../utils/consts'

const RegisterForm: FC = () => {
  const navigate = useNavigate()
  const { userRegister } = useActions()
  const { isAuth, error, statusRegister } = useTypedSelector(({user}) => user)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [messageStatus, setMessageStatus] = useState<string>('')

  const onSetEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value)
  
  const onSetPassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value)
  
  const onRegister = () => {
    userRegister(email, password)
  }

  useEffect(() => {
    if (statusRegister === 'loading') {
      setMessageStatus('Аккаунт создается..')
    } else if (statusRegister === 'success') {
      setMessageStatus('Аккаунт успешно создан!')
      navigate(LOGIN_CONFIRM_ROUTE)
    } else if (statusRegister === 'error') {
      setMessageStatus('Что то пошло не так..')
    }
  }, [navigate, statusRegister])

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <h1 style={{ textAlign: 'center' }}>Создать аккаунт</h1>
      <div style={{ textAlign: 'center', marginBottom: 20, color: '#ff3636' }}>
        {messageStatus} <br />
        {error}
      </div>
      <Form.Item
        name="useremail"
        rules={[{ required: true, message: 'Пожалуйста введите ваш действующий email!' }]}
      >
        <Input
          value={email}
          onChange={onSetEmail}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="E-mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Пожалуйста введите ваш пароль!' }]}
      >
        <Input
          value={password}
          onChange={onSetPassword}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          onClick={onRegister}
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{marginRight: 10}}
        >
          Регистрация
        </Button>
        или <Link to={LOGIN_ROUTE}>Войти</Link>
      </Form.Item>
    </Form>
  )
}

export default RegisterForm
