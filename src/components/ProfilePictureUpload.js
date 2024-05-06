import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import useUploadProfileHook from "./api/UploadProfileHook";

export default function ProfilePictureUpload({ avatar }) {
    const ref = useRef(null);
    const [avatarURL, setAvatarURL] = useState(avatar);
    const { state, upload } = useUploadProfileHook(avatarURL);
    const handleClick = () => {
        ref.current.click();
    }
    const handleAvatarChangeAndUpload = () => {
        const uploadedFile = ref.current.files[0];
        const url = URL.createObjectURL(uploadedFile);
        setAvatarURL(url);
        upload(url);

    }
    return (
        <div
            className="min-w-24 min-h-24 rounded-full
             bg-gray-300 overflow-hidden relative "
        >
            <img
                src={
                    "https://fastly.picsum.photos/id/528/150/150.jpg?hmac=cnLsg5PqH3-dJgiEBY6AneVJr4DCfkfQKad-OUftW-g"
                }
                alt="Profile Picture"
                className="w-full h-[5rem]
                 object-cover"
            />
            <div className="h-6 bottom-0 w-24 bg-black absolute border-full flex items-center">
                <FontAwesomeIcon
                    icon={faCamera}
                    onClick={handleClick}
                    className="text-white text-xl mx-auto hover:text-gray-300 transition duration-300"
                />
                <input type="file" className="hidden" ref={ref} onChange={handleAvatarChangeAndUpload} />
            </div>
        </div>
    );
}
