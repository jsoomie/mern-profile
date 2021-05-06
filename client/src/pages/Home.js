import { ProgramList, Greeting } from "../components";

export const Home = () => {
  return (
    <div className="homePage">
      <Greeting />
      <ProgramList />
    </div>
  );
};

export default Home;
