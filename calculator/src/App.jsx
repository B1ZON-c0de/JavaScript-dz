import { useState } from 'react';
import { numbers, operators } from './data';

function App() {
  const [operand, setOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [operand2, setOperand2] = useState('');
  const [output, setOutput] = useState('');
  const [isDisable, setIsDisable] = useState(false);

  const handleReset = () => {
    setOperand('');
    setOperator('');
    setOperand2('');
  };
  const handleSum = () => {
    setOperator('+');
  };
  const handleDif = () => {
    setOperator('-');
  };
  const handleEquals = () => {
    setOutput(
      operator === '+'
        ? Number(operand) + Number(operand2)
        : operator === '-' && Number(operand) - Number(operand2)
    );
    handleReset();
    setIsDisable(true);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[#0f172a] relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
          }}
        />
        <div className="h-[100vh] flex justify-center items-center">
          <div className="glass w-70 rounded-2xl p-6 ">
            <div className="output">
              {output === '' ? operand + operator + operand2 : output}
            </div>
            <div className="flex gap-x-2">
              <div className="grid grid-cols-3 gap-2">
                {numbers.map((el, idx) => (
                  <button
                    className={
                      numbers.length - 1 === idx
                        ? 'btn btn-soft btn-secondary btn-lg text col-span-3'
                        : 'btn btn-soft btn-secondary btn-lg text'
                    }
                    key={el}
                    onClick={() => {
                      output !== '' && setIsDisable(false);
                      output !== '' && setOutput('');
                      operator === '+' || operator === '-'
                        ? setOperand2(operand2 + el)
                        : setOperand(operand + el);
                    }}
                  >
                    {el}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-2">
                {operators.map((el) => (
                  <button
                    onClick={() => {
                      el === 'С' && handleReset();
                      el === '+' && handleSum();
                      el === '-' && handleDif();
                      el === '=' && handleEquals();
                    }}
                    className="btn btn-accent btn-lg text-lg"
                    key={el}
                    disabled={isDisable}
                  >
                    {el}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
