const App = () => {
    return (
        <div>
          <Person
            name="Anton"
            age={37}
            hobbies={["rest", "watching tv", "drinking beer"]}
          />
          <Person 
          name="Diana" 
          age={35} 
          hobbies={["dance", "rest", "read"]} />
          <Person
            name="Anya"
            age={4}
            hobbies={["dance", "jump"]}
          />
          <Person
            name="Mila"
            age={2}
            hobbies={["play", "dance", "run"]}
          />
        </div>
      );
    }
   