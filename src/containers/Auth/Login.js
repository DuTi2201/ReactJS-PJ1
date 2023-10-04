import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import {handleLoginApi} from '../../services/userService';
import * as actions from "../../store/actions";
import './Login.scss'
import { FormattedMessage } from 'react-intl';

import adminService from '../../services/adminService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isShowPassword: false,
    }
    this.btnLogin = React.createRef();
  }

  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
  }

  handleLogin = async() => {
    this.setState({
  errMessage:''
    })
    try {
      await this.handleLoginApi(this.state.username, this.state.password);
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message
          })
        }
      }
      console.log('duong say hi', error.response)
    }
    // console.log('username: ',this.state.username, 'password: ',this.state.password )
  }

  render() {
    return (

      <section class="login">
        <div class="login_box">
          <div class="left">
            <div class="top_link"><a href="#"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home</a></div>
            <div class="contact">
              <form action="" />
              <h3>SIGN IN</h3>

              {/* Sign In Form  */}
              <form action="">

                <button class="submit"><span className="login-btn" onClick={()=>{this.handleLogin()}}>Log in</span></button>

                <input type="text" className="user" placeholder="Please enter your ID." value={this.state.username} onChange={(event) => { this.handleOnChangeUsername(event) }} />
                <div className='col-12 custom-input-password' >
                  <input type={this.state.isShowPassword ? 'text' : 'password'} className="pass" placeholder="Please enter your password." onChange={(event) => { this.handleOnChangePassword(event) }} />
                  {/* <span
                    onClick={() => { this.handleShowHidePassword() }} > <i class={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i> </span> */}
</div>
                

                

                <div className='col-12'>
                  <span className='forgot-password'>Forgot password?</span>
                </div>
              

              </form>
            </div>
          </div>
          <div class="right">
            <div class="right-text">
              <h5>BỆNH VIỆN</h5>
              <h2>ĐẠI HỌC Y HÀ NỘI</h2>
            </div>
            <div class="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt="" /></div>
          </div>
        </div>
      </section>

    )
  }
}

const mapStateToProps = state => {
  return {
    language: state.app.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

