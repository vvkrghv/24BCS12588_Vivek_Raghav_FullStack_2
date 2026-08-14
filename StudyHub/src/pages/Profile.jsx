import { useUser } from "../context/StudentContext";

function Profile() {
  const student = useUser();

  return (
    <div>
      <h2>Student Details</h2>

      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Year: {student.year}</p>
    </div>
  );
}

export default Profile;