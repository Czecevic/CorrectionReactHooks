const calcProgressWidth = (value) => {
  let progress = 0;
  value.forEach((element) => {
    if (element.isDone) {
      progress += 1;
    }
  });
  return {
    width: (progress * 100) / value.length + "%",
    height: "20px",
    background: "#ff99ff",
  };
};

export const ProgressBar = ({ value }) => {
  const progressWidth = calcProgressWidth(value);
  return (
    <>
      <h2>Progress bar : </h2>
      <div style={{ background: "#eee", height: "20px" }}>
        <div style={progressWidth}></div>
      </div>
    </>
  );
};
