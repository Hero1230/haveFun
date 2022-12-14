import {
	deleteObject,
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes,
} from "firebase/storage";
import { useRef, useState } from "react";
import { useAuthContext } from "../../../hooks/auth/useAuthContext";
import { useUpdateDocument } from "../../../hooks/data/useUpdateDocument";
import { useUserDataContext } from "../../../hooks/data/useUserDataContext";
import styles from "./AvatarUpdate.module.scss";

const AvatarUpdate = ({ setError, setSuccess }) => {
	const { user } = useAuthContext();
	const { document } = useUserDataContext();
	const storageRef = ref(getStorage(), `images/${user.uid}.jpg`);
	const { updateDocument } = useUpdateDocument();
	const inputRef = useRef(null);
	const [isSavingAvatar, setIsSavingAvatar] = useState(false);

	const handleUpdate = () => {
		inputRef.current.click();
	};

	const handleDelete = async () => {
		if (document) {
			if (!document.photoURL) {
				setError("Cannot remove stock avatar image!");
				return;
			}
		}
		await deleteObject(storageRef);
		await updateDocument("users", user.uid, { photoURL: "start" });
		setSuccess("Avatar successfully removed!");
	};

	const handleFileChange = async (event) => {
		setIsSavingAvatar(true);
		setError(null);
		const fileObj = event.target.files && event.target.files[0];

		if (!fileObj) {
			return;
		}

		if (!fileObj.type.includes("image")) {
			setError("Please select image file");
			setIsSavingAvatar(false);
			return;
		}

		event.target.value = null;

		await uploadBytes(storageRef, fileObj);

		const photo = await getDownloadURL(storageRef);

		await updateDocument("users", user.uid, { photoURL: photo });
		setIsSavingAvatar(false);
		setSuccess("Avatar successfully uploaded!");
	};
	return (
		<div className={styles.buttons}>
			<input
				style={{ display: "none" }}
				ref={inputRef}
				type="file"
				onChange={handleFileChange}
			/>
			{!isSavingAvatar && (
				<button className="btn" onClick={handleUpdate}>
					Upload a new avatar
				</button>
			)}
			{isSavingAvatar && (
				<button className="btn" disabled>
					Uploading...
				</button>
			)}
			<button className={styles["delete-btn"]} onClick={handleDelete}>
				Delete avatar
			</button>
		</div>
	);
};

export default AvatarUpdate;
