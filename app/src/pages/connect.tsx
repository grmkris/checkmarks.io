const UpperContainer = () => <>UpperContainer</>;
const LowerContainer = () => <>LowerContainer</>;
const Landing = () => {
  return (
    <>
      <div className="hero min-h-screen bg-primary">
        <div className=" ">
          <h1 className="text-center text-5xl text-accent">Checkmarcks</h1>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <h1 className="text-center text-5xl text-accent">
            Get your verified credentials here
          </h1>
          <button className="btn-primary btn mt-8 text-center ">
            Connect your wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;