<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <NuxtLink to="/" class="text-2xl font-bold mb-4"> LOGO </NuxtLink>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>
          <Transition name="fade">
            <SharedAppAlert v-if="formError" :msg="formError" type="error" />
          </Transition>

          <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                class="app-input"
                placeholder="name@company.com"
              />
              <SharedInputError :text="emailError" />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                id="password"
                v-model="password"
                type="password"
                name="password"
                placeholder="••••••••"
                class="app-input"
              />
              <SharedInputError :text="passwordError" />
            </div>
            <div class="flex items-center justify-between">
              <NuxtLink to="#" class="cursor-pointer underline"
                >Forgot password?</NuxtLink
              >
            </div>
            <button type="submit" class="app-btn-primary">Sign in</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <NuxtLink
                to="#"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </NuxtLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const email = ref("");
const password = ref("");
const emailError = ref("");
const passwordError = ref("");
const formError = ref("");

const { login } = useStrapiAuth();

const handleValidation = () => {
  emailError.value = "";
  passwordError.value = "";
  const error = [];
  if (!email.value) {
    emailError.value = "Email is required";
    error.push("email");
  }
  if (!password.value) {
    passwordError.value = "Password is required";
    error.push("password");
  }

  return error;
};

const handleLogin = async () => {
  const checkError = handleValidation();

  if (checkError.length > 0) {
    return;
  }
  try {
    await login({ identifier: email.value, password: password.value });
    navigateTo("/dashboard");
  } catch (e: any) {
    console.log(e);
    formError.value = e.error.message;

    setTimeout(() => {
      formError.value = "";
    }, 3000);
  }
};
</script>

<style></style>
