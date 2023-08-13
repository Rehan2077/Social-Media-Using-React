import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title!"),
    description: yup.string().required("You must add a dercription!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    // console.log(data);
    await addDoc(postsRef, {
      // title: data.title,
      // description: data.description,
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input type="text" placeholder="title" {...register("title")} />
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <textarea
        placeholder="description"
        cols={40}
        rows={5}
        {...register("description")}
      />
      <p style={{ color: "red" }}>{errors.description?.message}</p>
      <input type="submit" value="Create Post" />
    </form>
  );
};

export default CreateForm;
