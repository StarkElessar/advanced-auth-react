import { FC, ChangeEvent, useState, useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { ADMIN_ROUTE } from '../utils/consts'

const LoginConfirmForm: FC = () => {
  const [loginForm] = Form.useForm()
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
  const onLogin = () => userLogin(email, password)

  useEffect(() => {
    if (statusLogin === 'loading') {
      setMessageStatus('Процесс авторизации..')
    } else if (statusLogin === 'success') {
      setMessageStatus('Вы успешно авторизовались!')
      loginForm.resetFields()
      navigate(ADMIN_ROUTE)
    } else if (statusLogin === 'error') {
      setMessageStatus('Ошибка авторизации, повторите снова')
      loginForm.resetFields()
    }
  }, [loginForm, navigate, statusLogin])

  return (
    <Form
      form={loginForm}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <h1>Вы успешно создали аккаунт! Можете войти в него:</h1>
      {error && (
        <div
          style={{
            textAlign: 'center',
            marginBottom: 10,
            color: '#ff3636',
          }}
        >
          {messageStatus} <br />
          {error}
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
