import { FC, ChangeEvent, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { ADMIN_ROUTE } from '../utils/consts'

const LoginConfirmForm: FC = () => {
  const navigate = useNavigate()
  const { userLogin } = useActions()
  const { isAuth } = useTypedSelector(({ user }) => user)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSetEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value)

  const onSetPassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value)

  const onLogin = () => {
    userLogin(email, password)
    isAuth && navigate(ADMIN_ROUTE)
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <h1>Вы успешно создали аккаунт! Может войти в него:</h1>
      <Form.Item
        name="useremail"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите ваш действующий email!',
          },
        ]}
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
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="#">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button
          onClick={onLogin}
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ marginRight: 10 }}
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginConfirmForm
