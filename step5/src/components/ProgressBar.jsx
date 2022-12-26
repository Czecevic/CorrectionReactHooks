function ProgressBar(props) {
    const progressWidth = calcProgressWidth(props.value);
    function calcProgressWidth(value) {
      let progress = 0;
      value.forEach(soloValue => {
          if (soloValue.Check) {
              progress++
        }
      });
      
      return {width: progress * 100 / value.length + "%", background: 'blue', height: progress * 200 / value.length + "%"}
    }
    
    const styleBar = {
      height: '20px',
      background: '#eeeeee',
    }
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