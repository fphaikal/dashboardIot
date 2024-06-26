import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/useAuthStore';

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie('token'); // get token from cookies

  if (token.value) {
    // check if value exists
    // todo verify if token is valid, before updating the state
    authenticated.value = true; // update the state to authenticated
  }

  // if token exists and url is /login or /register redirect to homepage
  if (token.value && (to?.name === 'login' || to?.name === 'register')) {
    return navigateTo('/');
  }

  // if token doesn't exist and the url is not /login or /register, redirect to login
  if (!token.value && to?.name !== 'login' && to?.name !== 'register') {
    abortNavigation();
    return navigateTo('/login');
  }
});
