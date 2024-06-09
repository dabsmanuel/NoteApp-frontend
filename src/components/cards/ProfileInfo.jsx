/* eslint-disable react/prop-types */
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
	return (
		<div className="flex items-center gap-3">
			<div className="w-12 h-12 flex items-center justify-center rounded-full text-gray-900 font-medium bg-slate-200">
				{getInitials("Dabs Oyibo") }
			</div>

			<div className="text-sm">
				<p className=" font-medium">Dabs Oyibo</p>
				<button className="text-slate-700 underline" onClick={onLogout}>
					Logout   
				</button>
			</div>
		</div>
	);
};

export default ProfileInfo