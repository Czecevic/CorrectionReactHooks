function Countdown(props) {
  const {duration} = props;

  if (duration === 0) {
    return <div className="mt-5 h3">Time's up!</div>;
  }

  let time = {
    minutes: Math.floor(duration / 60),
    seconds: Math.floor(duration % 60)
  }
  return (
    <div className="mt-5  h3">
      <b>{time.minutes} : {time.seconds}</b>
    </div>
  );
}

export { Countdown };