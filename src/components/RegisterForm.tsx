import { FC, ChangeEvent, useState } from 'react'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { LOGIN_CONFIRM_ROUTE, LOGIN_ROUTE } from '../utils/consts'

const RegisterForm: FC = () => {
  const navigate = useNavigate()
  const { userRegister } = useActions()
  const { isAuth } = useTypedSelector(({user}) => user)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSetEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value)
  
  const onSetPassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value)
  
  const onRegister = async () => {
    await userRegister(email, password)
    isAuth && navigate(LOGIN_CONFIRM_ROUTE)
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
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
