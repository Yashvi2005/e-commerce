import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const login = (e) => {
        e.preventDefault()
        const data = { email, password }
        axios.post('/api/v1/user/login', data)
            .then(res => {
                if (res.data.success == 1) {
                    localStorage.setItem("user", JSON.stringify(res.data.data))
                    navigate("/")
                    window.location.reload()
                }
                else {
                    alert(res.data.message)
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            {/* Section: Design Block */}
            <section className="text-center text-lg-start">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
                    }}
                />
                {/* Jumbotron */}
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div
                                className="card cascading-right"
                                style={{
                                    background: "hsla(0, 0%, 100%, 0.55)",
                                    backdropFilter: "blur(30px)"
                                }}
                            >
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-5">Login now</h2>
                                    <form onSubmit={login}>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form3Example3"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <label className="form-label" htmlFor="form3Example3">
                                                Email address
                                            </label>
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="form3Example4"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <label className="form-label" htmlFor="form3Example4">
                                                Password
                                            </label>
                                        </div>
                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block mb-4"
                                        >
                                            Login
                                        </button>
                                        {/* Register buttons */}
                                        <div className="text-center">
                                            <p>Don't Have an Account ? <span onClick={() => navigate("/register")} style={{ color: "purple" }}>Register</span></p>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-google" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-twitter" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-github" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img
                                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                                className="w-100 rounded-4 shadow-4"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* Jumbotron */}
            </section>
            {/* Section: Design Block */}
        </>
    )
}
