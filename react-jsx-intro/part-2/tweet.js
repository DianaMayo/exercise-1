const Tweet = (props) => {
    return (
      <div className = "tweet">
        <li>{props.name}</li>
        <li>{props.username}</li>
        <li>{props.date}</li>
        <p>{props.message}</p>
      </div>
    );
  };