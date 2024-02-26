import React from "react";
import Logo from "../assets/img/logo.png";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();


    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    try {
      console.log(data);
      window.location.href = "/user/dashboard";
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-screen h-screen bg-[#EEEEEE] flex flex-col md:flex-row">
      <div className="w-full bg-purple-contrast hidden md:block">
        <div className="w-full h-full flex items-center justify-center">
          <img src={Logo} alt="Logo" className="" />
        </div>
      </div>
      <div className="w-full h-full bg-[#EEEEEE] flex items-center  justify-center">
        <div className=" md:mx-16 px-16 py-24  bg-[#fff] shadow-2xl rounded-3xl w-full">
          <h1 className="text-4xl font-semibold mb-8">Login</h1>
          <form className="flex flex-col select-none" onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='
                                    w-full mb-4 p-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
                                    focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              required />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="
            w-full mb-16 p-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              required
            />
            <button className="bg-purple-highlight py-4 px-8 rounded-lg uppercase text-white text-lg font-semibold hover:bg-purple-contrast duration-150 ease-in-out" type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;