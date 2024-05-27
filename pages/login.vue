<script setup lang="ts">
definePageMeta({
  layout: 'blank'
})

import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/useAuthStore';

const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const user = ref({
  username: '',
  password: '',
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value);
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push('/');
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 w-full lg:w-1/3">
    <div class="w-full rounded-lg shadow dark:border md:mt-0 xl:p-0 bg-dark dark:border-gray-700 text-white">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
          Sign in to your account
        </h1>
        <form class="space-y-4 md:space-y-6" action="#">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium ">Username</label>
            <input type="email" name="email" id="email" v-model="user.username"
              class="bg-dark2 border text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600"
              placeholder="Username" required>
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" v-model="user.password"
              class="bg-dark2 border text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600"
              required>
          </div>
          
          <button @click.prevent="login"  type="submit" class="w-full btn btn-primary">Sign in</button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">Don’t have an account yet? <a href="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a></p>
        </form>
      </div>
    </div>
  </div>
</template>