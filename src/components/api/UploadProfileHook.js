import axios from "axios";
import { useEffect, useState } from "react";

export default function useUploadProfileHook() {
    const [state, setState] = useState("loading");

    const upload = (avatar) => {
        axios
            .post("https://localhost:3001/profile_pictures", {
                file: avatar,
                upload_preset: "profile_pictures",
            })
            .then((response) => {
                if (response.status === 200) {
                    setState("success");
                } else {
                    setState("error");
                }
                console.log(response);
            });
    };

    return {state, upload};
}
