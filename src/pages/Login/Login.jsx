import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import Password from "../../components/Input/Password"
import { validateEmail } from "../../utils/helper";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('please enter a valid email address');
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    setError('')
  };

  return (
		<>
			<Navbar />

			<div className="flex items-center justify-center mt-28">
				<div className="border w-96 rounded bg-white px-7 py-16">
					<form onSubmit={handleLogin}>
						<h4 className="text-2xl mb-2">Login</h4>

						<input
							type="text"
							placeholder="Email"
							value={email}
							className="input-box"
							onChange={(e) => setEmail(e.target.value)}
						/>

						<Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
						/>

            {error && <p className="text-red-500 text-xs pb-1">{ error }</p>}

						<button type="submit" className="btn-primary">
							Login
						</button>

						<p className="text-sm mt-4 text-center">
							Not registered yet?
							<Link to="/signup" className="text-primary font-medium underline">
								{" "}
								Create an Account
							</Link>
						</p>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login