import { useState } from "react";

const Form = () => {
    let [weight, setWeight] = useState(0);
    let [height, setHeight] = useState(0);
    let bmi = weight/ (height*height);
    


    const returnBmi = () => {
        
        if (bmi <= 18.5) {
            return (
                <p>Your BMI is: {bmi.toFixed(1)}, categorized as underweight</p>
                )
            } 
        else if (bmi <= 24.9){
            return (
                <p>Your BMI is: {bmi.toFixed(1)}, categorized as normal</p>
                )
            }
            else if (bmi <= 29.9){
                return (
                    <p>Your BMI is: {bmi.toFixed(1)}, categorized as overweight</p>
                    )
                }
            else if (bmi >= 30) {
                return (
                    <p>Your BMI is: {bmi.toFixed(1)}, categorized as obese</p>
                    )
            }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        returnBmi()
        
    
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Let's determine your Body Mass Index (BMI)</h3>
            <input onChange={e => setWeight(e.target.value) } type="text" placeholder="Your weight" />
            <input onChange={e => setHeight(e.target.value)} type="text" placeholder="Your height (in m)" />
            <button type="submit">Calculate</button>
            




        </form>
    )
}



export default Form;