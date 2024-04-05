const Person = (props) => {
    let reply;
    if (props.age > 18) {
        reply = "“please go vote!”"
    } else if (props.age < 18) {
        reply = "you must be 18"
    }

    return (
        <div>
            <h2>
                <p>“Learn some information about this person”</p>
                <p>{props.name}</p>
                <p>{props.age}</p>
            <ul>{props.hobbies.map(hobby => <li>{hobby}</li>)}</ul>
            </h2>
            <h3>
                {reply}
            </h3>
      </div>
    );
  };
  