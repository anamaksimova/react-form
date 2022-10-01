import _ from './Form.module.css';
import {useForm} from 'react-hook-form';

export const Form = () => {
    const {
      register,
      handleSubmit,
      formState: {errors}
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form className={_.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={_.wrap}>
            <label className={_.label} htmlFor='email'>Email</label>
            <input className={_.input} 
            type='text'
            id='email'
            aria-invalid={!!errors.email}
            {...register('email', {
                
                required: {
                    value: true,
                    message: 'Введите email'
                    },
                pattern: {
                    value: /^.+@.+\..+$/,
                    message: 'неверный email'
                }
            })}
            />
           {errors.email && <p className={_.error}>{errors.email.message}</p>}
          </div>
          <div className={_.wrap}>
            <label className={_.label} htmlFor='password'>пароль</label>
            <input className={_.input}
            type='password'
            id='password'
            {...register('password', {
                
                required: {
                    value: true,
                    message: 'Введите password'
                    },
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
                    message: 'неверный password'
                }
            })}
            />
            {errors.password && <p className={_.error}>{errors.password.message}</p>}
            {/* <p className={_.error}>Сообщение об ошибке</p> */}
          </div>
          <div className={_.wrapCheckbox}>
          <input className={_.checkbox} type='checkbox' id='save'
           {...register('save')}
           
           ></input>
            <label className={_.labelCheckbox} htmlFor='save'>Сохранить пароль</label>
          </div>
        <button className={_.submit} type='submit'>Войти</button>
      

        </form>
    )
}