function ProgressBar(props) {
    const styleBar = {
      height: '20px',
      background: '#eeeeee',
    }
    function calcProgressWidth(value) {
      let progress = 0;
      value.forEach(soloValue => {
          if (soloValue.Check) {
              progress++
        }
      });
      
      return {width: progress * 100 / value.length + "%", background: 'blue', height: "100%"}
    }
    
    return (
        <div>
            <h6>Progress:</h6> 
            <div style={styleBar}>
                {props.value.length == 0 
                ? <div style={styleBar}></div> 
                : <div style={calcProgressWidth(props.value)}></div>
                }
            </div>
        </div>
    );
}
  
export { ProgressBar };