/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import Navbar from "../../components/Navbar/Navbar"
import NoteCard from "../../components/cards/NoteCard"
import { MdAdd } from "react-icons/md";
import AddedNotes from "./AddedNotes";
import Modal from "react-modal";

import { useState } from "react";



const Home = () => {

	const [openAddEditModal, setOpenAddEditModal] = useState({
		isShown: false,
		type: "add",
		data: null,
	});


  return (
		<>
			<Navbar />

			<div className="container mx-auto lg:px-0 px-4">
				<div className="grid lg:grid-cols-3 md:grid-cols-2  gap-3 mt-8">
					<NoteCard
						title="Meeting on 7th June"
						date="6th Jun 2024"
						content="Meeting on 7th June"
						tags="Meeting"
						isPinned={true}
						onEdit={() => {}}
						onDelete={() => {}}
						onPinNote={() => {}}
					/>
				</div>
			</div>

			<button
				className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
				onClick={() => {
					setOpenAddEditModal({ isShown: true, type: "add", data: null });
				}}>
				<MdAdd className="text-[32px] text-white" />
			</button>

			<Modal
				isOpen={openAddEditModal.isShown}
				onRequestClose={() => {}}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.2)",
					},
				}}
				contentLabel=""
				className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 ">
				<AddedNotes
					type={openAddEditModal.type}
					noteData={openAddEditModal.data}
					onClose={() => {
						setOpenAddEditModal({ isShown: false, type: "add", data: null });
					}}
				/>
			</Modal>
		</>
	);
}

export default Home