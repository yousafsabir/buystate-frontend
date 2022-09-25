import { ref, deleteObject } from "firebase/storage";
import { storage } from "../firebase";

const deletePhoto = async (imageId) => {
    try {
        const fileRef = ref(storage, imageId);
        await deleteObject(fileRef);
    } catch (error) {
        console.log(error);
        return new Error(error);
    }
};
export default deletePhoto;
