import { useState } from 'react';

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clearForm = (newValue) => {
    setForm(newValue);
  };

  return [form, onChange, clearForm];
};

export default useForm;
