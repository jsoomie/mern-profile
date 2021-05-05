import "./Greeting.css";

export const Greeting = () => {
  return (
    <div className="all-center greeting-container">
      <img src="./js_profile_hs.png" alt="my profile pic" width="300px" />
      <h1 className="greeting-hello">
        Hello<span className="greeting-exclamation">!</span>
      </h1>
      <h1>
        My name is <span className="greeting-name">Jonathan Soukaseume</span>
      </h1>
      <div className="greeting-break">
        <hr />
      </div>
      <h1>I am a full stack web developer</h1>
    </div>
  );
};

export default Greeting;
