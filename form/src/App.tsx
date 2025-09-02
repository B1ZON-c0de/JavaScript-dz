import Background from './components/Background';
import { useForm } from 'react-hook-form';
import type { IForm } from './types/type';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schema/schema';
import { useRef } from 'react';
import PasswordInput from './components/PasswordInput/PasswordInput';

function App() {
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const onFormSubmit = (data: IForm) => {
    console.log(`email`, data.email);
    console.log(`password`, data.password);
    reset();
  };

  return (
    <>
      <Background>
        <div className="glass p-6 rounded-lg w-90">
          <h1 className="text-center mb-4">Регистрация</h1>
          <form
            className="flex flex-col items-center justify-center gap-5"
            onSubmit={handleSubmit((data) => {
              submitBtnRef.current?.focus();
              onFormSubmit(data);
            })}
          >
            <div className="flex flex-col gap-1 ">
              <label className="input input-lg w-78 shadow-2xl">
                <input
                  type="text"
                  placeholder="Email"
                  required
                  {...register('email')}
                />
              </label>
              {errors.email?.message && (
                <span className="badge badge-error w-full shadow-2xl font-semibold">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <PasswordInput
              placeholder="Password"
              register={register}
              name="password"
              errors={errors.password?.message}
            />
            <PasswordInput
              placeholder="Repeat password"
              register={register}
              name="repeatPassword"
              errors={errors.repeatPassword?.message}
            />
            <button
              ref={submitBtnRef}
              className="btn btn-wide btn-success  p-5 text-xl "
              disabled={!isValid}
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </Background>
    </>
  );
}

export default App;
