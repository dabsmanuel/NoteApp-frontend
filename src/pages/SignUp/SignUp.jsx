import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { validateEmail } from "../../utils/helper";
import Password from "../../components/Input/Password";

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

	const handleSignUp = async (e) => {
		e.preventDefault();

    if (!name) {
			setError("please enter your name");
			return;
		}

		if (!validateEmail(email)) {
			setError("please enter a valid email address");
			return;
		}

		if (!password) {
			setError("Please enter your password");
			return;
		}

		setError("");
	};


	return (
		<>
			<Navbar />

			<div className="flex items-center justify-center mt-28">
				<div className="border w-96 rounded bg-white px-7 py-16">
					<form onSubmit={handleSignUp}>
						<h4 className="text-2xl mb-2">SignUp</h4>

						<input
							type="text"
							placeholder="Name"
							value={name}
							className="input-box"
							onChange={(e) => setName(e.target.value)}
						/>

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

						{error && <p className="text-red-500 text-xs pb-1">{error}</p>}

						<button type="submit" className="btn-primary">
							Create Account
						</button>

						<p className="text-sm mt-4 text-center">
							Already have an account?
							<Link to="/login" className="text-primary font-medium underline">
								{" "}
								Login
							</Link>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignUp;
