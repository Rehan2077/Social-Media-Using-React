import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import Posts from "./Posts";

export interface Post {
  id: string;
  title: string;
  userId: string;
  description: string;
  username: string;
}

const Main = () => {
  const postsRef = collection(db, "posts");
  const [postsList, setPostsList] = useState<Post[] | null>(null);

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    // console.log(data);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postsList?.map((post, key) => {
        return <Posts key={key} post={post} />;
      })}
    </div>
  );
};

export default Main;
