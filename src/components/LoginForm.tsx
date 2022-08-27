import { FC, ChangeEvent, useState, memo } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/consts'

const LoginForm: FC = () => {
  const navigate = useNavigate()
  const { userLogin } = useActions()
  const { statusLogin, error } = useTypedSelector(({ user }) => user)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [messageStatus, setMessageStatus] = useState<string>('')

  const onSetEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value)

  const onSetPassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value)

  const onLogin = () => {
    userLogin(email, password)
    
    if (statusLogin === 'success') {
      navigate(ADMIN_ROUTE)
    } else if (statusLogin === 'loading') {
      setMessageStatus('Процесс авторизации..')
    } else if (statusLogin === 'error') {
      navigate(LOGIN_ROUTE)
      setMessageStatus('Ошибка авторизации, повторите снова')
      setEmail('')
      setPassword('')
    }
  }

  console.log(messageStatus)

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <h1 style={{ textAlign: 'center' }}>Войти в кабинет</h1>
      <div style={{ textAlign: 'center', marginBottom: 20, color: '#ff3636' }}>
        {messageStatus}
      </div>
      {statusLogin === 'loading' && (
        <div style={{
          textAlign: 'center',
          marginBottom: 20,
          color: '#ff3636'
          }}
        >
          Процесс авторизации..
        </div>
      )}
      {statusLogin === 'success' && (
        <div style={{
          textAlign: 'center',
          marginBottom: 20,
          color: '#ff3636'
          }}
        >
          Вы успешно авторизовались!
        </div>
      )}

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
          Забыли пароль
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
        или <Link to={REGISTER_ROUTE}>Создать аккаунт</Link>
      </Form.Item>
    </Form>
  )
}

export default memo(LoginForm)
