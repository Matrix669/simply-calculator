import { useState } from 'react'


function App() {
	const [buttonValue, setButtonValue] = useState('')

	function handleButtonValueClick(event) {
		setButtonValue(buttonValue + event.target.value)
	}

	const inputsBtn = [
		{
			value: 1,
			onClick: handleButtonValueClick,
		},
		{
			value: 2,
			onClick: handleButtonValueClick,
		},
		{
			value: 3,
			onClick: handleButtonValueClick,
		},
		{
			value: '+',
			className: 'calculator__box--operator',
			onClick: handleButtonValueClick
		},
		{
			value: 4,
			onClick: handleButtonValueClick,
		},
		{
			value: 5,
			onClick: handleButtonValueClick,
		},
		{
			value: 6,
			onClick: handleButtonValueClick,
		},
		{
			value: '-',
			className: 'calculator__box--operator',
			onClick: handleButtonValueClick
		},
		{
			value: 7,
			onClick: handleButtonValueClick,
		},
		{
			value: 8,
			onClick: handleButtonValueClick,
		},
		{
			value: 9,
			onClick: handleButtonValueClick,
		},
		{
			value: '*',
			className: 'calculator__box--operator',
			onClick: handleButtonValueClick
		},
		{
			value: 0,
			onClick: handleButtonValueClick,
		},
		{
			value: '.',
			onClick: handleButtonValueClick,
		},
		{
			value: 'C',
			className: 'calculator__box--clear',
			onClick: () => setButtonValue(''),
		},
		{
			value: '/',
			className: 'calculator__box--operator',
			onClick: handleButtonValueClick
		},
		{
			value: 'DE',
			className: 'calculator__box--de',
			onClick: () => setButtonValue(buttonValue.slice(0, -1))
		},
		{
			value: '=',
			className: 'calculator__box--equals',
			onClick: () => setButtonValue(eval(buttonValue)),
		},
	]

	return (
		<div className='calculator'>
			<div className='calculator--result'>{buttonValue}</div>
			<div className='calculator__box'>
				{inputsBtn.map(input => (
					<input
						type='button'
						key={input.value}
						className={input.className && input.className}
						value={input.value}
						onClick={input.onClick}
					/>
				))}
			</div>
		</div>
	)
}

export default App
