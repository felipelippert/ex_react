import { useEffect, useState } from "react";

const Form = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);


    const calcBmi = () => {
        const bmiValue = (weight / (height * height));
        setBmi(bmiValue.toFixed(1));
    }
    
    function returnBmi(bmi) {
        if (bmi <= 18.5) {
            return (
                <p>Your BMI is: {bmi}, categorized as underweight</p>
                )
            } 
        else if (bmi <= 24.9){
            return (
                <p>Your BMI is: {bmi}, categorized as normal</p>
                )
            }
            else if (bmi <= 29.9){
                return (
                    <p>Your BMI is: {bmi}, categorized as overweight</p>
                    )
                }
            else if (bmi >= 30) {
                return (
                    <p>Your BMI is: {bmi}, categorized as obese</p>
                    )
            }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        calcBmi();
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
            <h3>Let's determine your Body Mass Index (BMI)</h3>
            <input onChange={e => setWeight(e.target.value) } type="text" placeholder="Your weight" />
            <input onChange={e => setHeight(e.target.value)} type="text" placeholder="Your height (in m)" />
            <button onClick={() => returnBmi} type="submit">Calculate</button>
            {bmi != 0 && (
                returnBmi(bmi)
            )}
            </form>
        </div>
        
    )
}



export default Form;