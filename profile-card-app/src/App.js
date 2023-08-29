import Card from "./components/Card";
import { userProfiles } from "./data.js";

function App() {
  return (
    <>
      {userProfiles.map((user, index) => (
        <Card user={user} key={index} />
      ))}
    </>
  );
}

export default App;
