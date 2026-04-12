const Hero = () => {
  return (
    <div
      className="w-11/12 mx-auto min-h-screen bg-contain"
      style={{
        background:
          "url(https://raw.githubusercontent.com/ProgrammingHero1/B11-A3-Living-Lab/refs/heads/main/Assignment_03_Category_0001/c1-assets/cat-big.png)",
        backgroundSize: "",
      }}
    >
      <div className="max-w-xl">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore cum
          nulla quod molestiae nostrum quibusdam expedita quaerat tempora
          reprehenderit!
        </p>
        <button className="btn bn-primary"></button>
      </div>
    </div>
  );
};

export default Hero;