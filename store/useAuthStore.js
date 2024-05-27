import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }) {
      // useFetch from nuxt 3
      const { data, pending } = await useFetch('https://server-dashboard-iot.vercel.app/api/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          username,
          password,
        },
      });
      this.loading = pending;

      if (data.value) {
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        token.value = data?.value?.token; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
      }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },


    async registerUser({ username, password }) {
      const router = useRouter();
      this.loading = true;
      try {
        const data = await $fetch("https://server-dashboard-iot.vercel.app/api/register", {
          method: "post",
          body: {
            username,
            password,
          },
        });

        if (data.code === 200) {
          router.push("/login");
        }
        // Successful login logic...
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.error("Register error:", error.data);
        const errorData = error.data;
        throw errorData;
      }
    },
  },
});
