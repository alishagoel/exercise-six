export default function UserProfileCard({ userInformation }) {
  return (
    <div style={{ padding: "1%" }}>
      <h1> User Profile</h1>
      <p>Email: {userInformation?.email}</p>
    </div>
  );
}
