<script setup lang="ts">
import { computed, ref } from 'vue'
import emailjs from '@emailjs/browser'
import router from '@/router'

const formErrorValidationMessage = ref('')
const fullname = ref('')
const email = ref('')
const textAreaMessage = ref('')
const textAreaMessageLabel = computed(
  () => `Message* (${textAreaMessage.value.length}/ 5000)`,
)

const serviceID = 'service_portfolio'
const templateID = 'template_portfolio'

function sendEmail() {
  // Send email using emailjs
  return new Promise((resolve, reject) => {
    emailjs.send(serviceID, templateID, {
      name: fullname.value,
      email: email.value,
      message: textAreaMessage.value,
    }, 'Q8KkVDwrTuzMz6VDq')
      .then((_result) => {
        resolve(true)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

async function handleFormSubmission() {
  try {
    const emailSentResponse = await sendEmail()
    if (emailSentResponse !== true)
      throw new Error(`Error sending email: ${emailSentResponse}`)
    router.replace({ path: '/' })
  }
  catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
      formErrorValidationMessage.value = error.message
    }
  }
}
</script>

<template>
  <h2 class="pb-[2rem]">
    Formulaire de contact
  </h2>
  <FormKit
    v-slot="{ state: { valid: formIsValid } }"
    type="form"
    class="space-y-[1rem]"
    :submit-attrs="{
      inputClass: 'hidden',
    }"
  >
    <div
      class="flex flex-col space-y-[1rem] xl:space-y-0 pb-[1rem] xl:flex-row xl:space-x-[1rem]"
    >
      <FormKit
        v-model="fullname"
        type="text"
        maxlength="80"
        validation="required"
        :validation-messages="{
          required: 'Votre nom est nécessaire',
        }"
        label="Nom complet*"
        placeholder="John Doe"
        name="fullname"
        label-class="font-bold text-dark"
        input-class="w-full outline outline-1 p-[0.5rem] text-dark placeholder-dark-75 bg-white"
        outer-class="text-red-500"
      />
      <FormKit
        v-model="email"
        type="email"
        validation="required|email"
        :validation-messages="{
          required: 'Votre email est nécessaire',
          email: 'Veuillez saisir une adresse e-mail valide.',
        }"
        label="Email*"
        placeholder="JohnDoe@gmail.com"
        name="email"
        label-class="font-bold text-dark"
        input-class="w-full outline outline-1 p-[0.5rem] text-dark placeholder-dark-75 bg-white"
        outer-class="text-red-500"
      />
    </div>
    <FormKit
      v-model="textAreaMessage"
      type="textarea"
      maxlength="5000"
      validation="required|length:5"
      :validation-messages="{
        required: 'Votre message est nécessaire',
        length: 'Votre message est trop court',
      }"
      messages="Veuillez saisir une adresse e-mail valide."
      :label="textAreaMessageLabel"
      placeholder="La raison pour laquelle vous me contacter"
      name="message"
      label-class="font-bold text-dark"
      input-class="w-full outline outline-1 p-[0.5rem] pb-[4rem] xl:pb-[6rem] xl:pb-[8rem] 2xl:pb-[10rem] text-dark placeholder-dark-75 bg-white"
      outer-class="text-red-500 pb-[1rem]"
    />
    <button type="button" class="btn-dark" @click="formIsValid ? handleFormSubmission() : null">
      Envoyer le formulaire
    </button>
  </FormKit>
</template>

<style lang="scss" scoped></style>
