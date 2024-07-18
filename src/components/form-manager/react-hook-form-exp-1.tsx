import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
}

const FormWithReactHookForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register('name')} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithReactHookForm;

