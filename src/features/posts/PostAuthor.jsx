import { useSelector, useDispatch } from "react-redux";
import { selectallUsers } from "../users/usersSlice";
import { changeName } from "../users/usersSlice";
import { openModal } from "../counter/counterSlice";

const PostAuthor = ({ userId }) => {
  const dispatch = useDispatch();

  const users = useSelector(selectallUsers);

  const editPatient = (author) => {
    console.log(author);
    // dispatch(changeName({ id: author.id, name: author.name }));
    dispatch(openModal());
  };

  const author = users.find((user) => user.id === +userId);

  return <span onClick={() => editPatient(author)}>by {author ? author.name : "Unknown author"}</span>;
};
export default PostAuthor;
