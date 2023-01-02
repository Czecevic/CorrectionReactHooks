
function calcProgressWidth(items) {
  let progress = 0;
  
  items.forEach(item => {
    if (item.isDone)
    progress++
  });
  
  return {width: progress * 100 / items.length + "%", background: 'var(--blue)'}
}

const styleBar = {
  height: '20px',
  background: '#eeeeee',
}

function ProgressBar(props) {
  const progressWidth = calcProgressWidth(props.items);

  return (
    <div className="d-flex mt-3 mb-4">
      <h6 className="mr-3">Progress:</h6> 
      <div className="d-flex mb-3 w-100" style={styleBar}>
          <div 
            className="h-100 align-self-end" 
            style={progressWidth} 
          >
          </div>
      </div>
    </div>
  );
}

export { ProgressBar };