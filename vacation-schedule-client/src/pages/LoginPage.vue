<template>
  <div class="page-login">
    <form class="form" @submit="onSubmit">
      <h1>Login</h1>
      <div class="form-field">
        <input
          v-model="email"
          name="email"
          class="form-field__input"
          placeholder="Email"
        />
        <span class="form-field__error">{{ emailError }}</span>
      </div>
      <div class="form-field">
        <input
          v-model="password"
          name="password"
          type="password"
          class="form-field__input"
          placeholder="Password"
        />
        <span class="form-field__error">{{ passwordError }}</span>
      </div>
      <button class="form__button">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { AuthService } from '../services';

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const { handleSubmit } = useForm({ validationSchema: schema });

const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');

const onSubmit = handleSubmit(values => {
  console.log('onSubmit', values);

  const { onFetchResponse, onFetchError } = AuthService.login({
    email: values.email,
    password: values.password,
  });

  onFetchResponse(response => {
    console.log('response status', response.status);
    console.log('response', response);
  });

  onFetchError(error => {
    console.error(error);
    console.error('message', error.message);
  });
});
</script>

<style scoped>
.page-login {
  @apply container items-center px-5 py-12 lg:px-20;
}
.form {
  @apply flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2;
}
.form-field {
}
.form-field__input {
  @apply w-full px-4 py-2 my-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-gray-500 focus:bg-white focus:outline-none focus:ring-2 ring-offset-current ring-offset-2;
}
.form-field__error {
  @apply text-red-700;
}
.form__button {
  @apply w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md  focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800;
}
</style>
