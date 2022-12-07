import Cookies from 'js-cookie'

import {withRouter, Redirect} from 'react-router-dom'

const Login = props => {
  const onSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const jwtToken = Cookies.get('jwt_token')

  const onCreds = async () => {
    const userdetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {method: 'POST', body: JSON.stringify(userdetails)}
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      onSuccess(data.jwt_token)
    }
  }
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1 className="heading">Please Login</h1>
      <button type="button" onClick={onCreds}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
