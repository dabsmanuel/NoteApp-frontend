/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags}) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handlekeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
		<div>
			{tags?.length > 0 && (
				<div className="flex items-center gap-2 flex-wrap mt-2">
					{tags.map((tag, index) => (
						<span
							className="flex items-center gap-2 text-sm text-slate-900 bg-slate-200 px-3 py-1 rounded"
							key={index}>
							#{tag}
							<button
								onClick={() => {
									handleRemoveTag(tag);
								}}>
								<MdClose />
							</button>
						</span>
					))}
				</div>
			)}

			<div className="flex items-center gap-4 mt-3">
				<input
					type="text"
					className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
					value={inputValue}
					placeholder="Add tags"
					onChange={handleInputChange}
					onKeyDown={handlekeyDown}
				/>

				<button
					className="w-8 h-8 items-center flex hover:text-white rounded justify-center border border-blue-700 hover:bg-blue-700"
					onClick={() => {
						addNewTag();
					}}>
					<MdAdd className="text-2xl hover:text-white text-blue-700" />
				</button>
			</div>
		</div>
	);
};

export default TagInput