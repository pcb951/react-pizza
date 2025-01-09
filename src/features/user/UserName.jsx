import { useSelector } from "react-redux";

function UserName() {
  const username = useSelector((state) => state.user.userName);

  if (!username) return;

  return <h1 className="hidden text-sm font-semibold md:block">{username}</h1>;
}

export default UserName;
