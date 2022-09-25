import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import empty from "is-empty";

const uploadPhoto = async (photo) => {
    try {
        if (empty(photo)) {
            return { image: "null", imageId: "null" };
        }
        const imageId =
            Date.now().toString(36) + Math.random().toString(36).substr(2);
        const fileRef = ref(storage, imageId);
        await uploadBytes(fileRef, photo);
        const image = await getDownloadURL(fileRef);
        return { image, imageId };
    } catch (error) {
        console.log(error);
        return new Error(error);
    }
};
export default uploadPhoto;
