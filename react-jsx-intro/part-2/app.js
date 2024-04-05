const App = () => {
    return (
      <div>
        <Tweet
          name="Diana"
          username="DianaXD"
          date={new Date().toDateString()}
          message="Hola a todos!"
        />
        <Tweet
          name="Anya"
          username="Anya123"
          date={new Date().toDateString()}
          message="Quien eres tu?"
        />
        <Tweet
          name="Mila"
          username="MilaT"
          date={new Date().toDateString()}
          message="interesante!!"
        />
      </div>
    );
  }