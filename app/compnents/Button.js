'use client'

 
const Button = () => {

    const handleClicked = () => {
        console.log('i have clicked');
      }
    


    return (
        <div>
            <button onClick={handleClicked}>Clicked here </button>
        </div>
    );
};

export default Button;