import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "prop-types"
import { loginUser } from "../../actions/authActions"
import PropTypes from "prop-types"
import classnames from "classnames"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            errors: {}
        }
    }

    //Redirects already authenticated uses to dashboard
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard")
        }
    }


    //Send user to dashboard if authenticated 
    componentWillReceiveProps(nextProps) {
        if ( nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard")
        }

        if (nextProps.error) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onChange = e => {
        this.setState({ [ e.target.id]: e.target.value })
    }

    //Prevents the page from reloading on submit
    onSubmit = e => {
        e.preventDefault()
    
    const userData = {
        email: this.state.email,
        password: this.state.password,
    }

    this.props.loginUSer(userData)

    console.log(userData)
    }

    render() {
        const { errors } = this.state

        return ( 
            <div className="container">

                <div style={{ marginTop: "4rem" }} className="row">
                
                    <div className="col s8 offset-s2">
                       
                       
                        <Link
                            to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i>
                            Back to home
                        </Link>
                        <div className="col s12" style={{
                            paddingLeft: "11.250px"
                        }}>
                            <h4>
                                <b>Login</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Don't have an account? <Link to="/register">Register</Link>
                            </p>
                        </div>

                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input 
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    
                                    className = { classnames("", {
                                        invalid: errors.email || errors.emailnotfound 
                                    })}
                                />
                                    <label htmlFor="email">Email</label>

                                    <span className="red-text">
                                        {errors.email}
                                        {errors.emailnotfound}
                                    </span>
                            </div>
                           
                           
                            <div className="input-field col s12">
                                <input 
                                    onChange= {this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"

                                    className={classnames("", {
                                        invalid: errors.password || errors.passwordincorrect
                                    })}
                                />
                                <label htmlFor="password2">Confirm Password</label>

                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
                            </div>
                            <div className="col s12" style={{ paddingLeft:"11.250px"}}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                    >
                                        Login 
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect (
    mapStateToProps,
    { loginUser}
)(Login)