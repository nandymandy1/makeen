import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.Auth);
  return (
    <div>
      <p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </p>
    </div>
  );
};

export default Profile;
