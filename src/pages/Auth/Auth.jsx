import "./Auth.css";
import { Button } from "@/components/ui/button";

import SignupForm from "./signup/SignupForm";
import LoginForm from "./login/login";
import { useState } from "react";

const Auth = () => {
  const [active, setActive] = useState(true);
  return (
    
    <div className="loginContainer justify-around">
      <div className="m-8">
         <p className="text-9xl font-bold text-white items-center justify-center">Track your <br />Project Bugs <br /> now!!</p>
      </div>
      <div className="box h-[35rem] w-[30rem] mr-32">
        <div className="minContainer login ">
          <div className="loginBox w-full px-10 space-y-5">
            {active ? <SignupForm /> : <LoginForm />}

            <div className="flex items-center justify-center">
              <span className="text-black">Have an account? </span>
              <button onClick={() => setActive(!active)} variant="ghost" style={{ color: "blue" }} className="px-3 py-2 hover:bg-gray-400 rounded-xl">
                 {active ? "Sign in" : "Sign up"}
             </button>

            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Auth;
