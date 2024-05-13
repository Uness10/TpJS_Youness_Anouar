import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const addPost = (postData) => {
  const error = ref(null)      

  let newDoc = projectFirestore.collection("Articles").doc();
  const id = newDoc.id  ;
  const add = async () => {
    try {
        newDoc.set(postData);
        //console.log("Doc written ",id);
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, add };
};

export default addPost;
