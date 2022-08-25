import LoginForm from './components/LoginForm';

const App = () => {
  const wrapperStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div className="wrapper" style={wrapperStyle}>
      <LoginForm/>
    </div>
  );
}

export default App;
