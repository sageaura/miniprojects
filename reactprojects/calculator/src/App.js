import { useState } from 'react';

function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/', '*', '+', '-', '.'];
// pass a value through to calc, under display this would mean that if there is no value in calc, then display 0
	const updateCalc = value => {
		if (
			ops.includes(value) && calc === '' ||		
			ops.includes(value) && ops.includes(calc.slice(-1)
			)
			) {
			return;
			}

		setCalc(calc + value);

		if (!ops.includes(value)) {
		setResult(eval(calc + value).toString());
		}
	
	}


// instead of repeating the numbers in the digit class, this functions inputs the numbers between 1 and 10 (1-9) and pushes it into an array for buttons
	const createDigits = () => {
		const digits = [];
			for (let i = 1; i <10; i++) {
			digits.push(
				<button 
					onClick= {() => updateCalc(i.toString())} 
					key={i}>
					{i}
				</button>
			)
				}
		return digits
	}

	const calculate = () =>

		return (
			<div className="App">
				<div className="calculator">
					<div className="display">
							{result ? <span>({result})</span> : '' }&
							nbsp;
							{ calc || "0" }
					</div>

				<div className="operators">
					<button onClick= {() => updateCalc('/')}>/</button>
					<button onClick= {() => updateCalc('*')}>*</button>
					<button onClick= {() => updateCalc('+')}>+</button>
					<button onClick= {() => updateCalc('-')}>-</button>

					<button>Del</button>
				</div>
				<div className="digits">
					{ createDigits() }
					<button onClick= {() => updateCalc('0')}>0</button>
					<button onClick= {() => updateCalc('.')}>.</button>
					<button onClick= {() => updateCalc('=')}>=</button>
				</div>
				</div>
			</div>
		);
}

export default App;
