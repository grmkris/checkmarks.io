const Connect = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
      }}
    >
      <div className="hero-overlay bg-base-100"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-accent">
            Get your verified credentials here
          </h1>

          <button className="btn-primary btn">connect your wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Connect;