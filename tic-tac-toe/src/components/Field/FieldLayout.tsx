import { XMark, OMark } from '../';

type Props = {
  field: string[];
  handleField: (idx: number) => void;
};

const FieldLayout = ({ field, handleField }: Props) => {
  return (
    <>
      <div className="w-125 h-125 glass  rounded-4xl grid grid-cols-3 grid-rows-3 p-4 gap-3">
        <div className="hr-x left-1/3"></div>
        <div className="hr-x left-2/3 "></div>

        <div className="hr-y top-1/3"></div>
        <div className="hr-y top-2/3"></div>
        {field.map((el: string, idx: number) => (
          <button
            key={idx}
            className="flex items-center justify-center cursor-pointer"
            onClick={() => handleField(idx)}
          >
            {el === 'X' ? <XMark /> : el === 'O' ? <OMark /> : ''}
          </button>
        ))}
      </div>
    </>
  );
};

export default FieldLayout;
