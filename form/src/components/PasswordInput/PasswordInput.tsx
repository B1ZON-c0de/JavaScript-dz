import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import type { IForm } from '../../types/type';

interface IProps {
  register: UseFormRegister<IForm>;
  placeholder: string;
  name: 'password' | 'repeatPassword';
  errors?: string;
}

const PasswordInput = ({ register, errors, placeholder, name }: IProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col gap-1 ">
      <label className="input input-lg w-78 shadow-2xl">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          required
          {...register(name)}
        />
        <button className="cursor-pointer" onClick={handleShowPassword}>
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      </label>
      {errors && (
        <span className="badge badge-error text-xs w-full shadow-2xl font-semibold">
          {errors}
        </span>
      )}
    </div>
  );
};

export default PasswordInput;
