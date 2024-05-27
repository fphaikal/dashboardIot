<script setup>
import axios from 'axios'

const data = await $fetch('/api/control')

const toggleLamp = async (lamp) => {
  const updatedStatus = lamp.status === 1 ? 0 : 1

  try {
    await axios.put('https://server-dashboard-iot.vercel.app/api/update-lamp-status', [
      {
        id: lamp.id,
        status: updatedStatus
      }
    ])
    lamp.status = updatedStatus
  } catch (err) {
    console.error('Failed to update lamp status:', err)
  }
}
</script>

<template>
  <div class="flex flex-col gap-5 p-10 md:p-20 flex-1 min-h-screen w-full">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold my-auto">Control</h1>
    </div>
    <div class="flex gap-3 flex-col md:flex-row">
      <div class="card w-full bg-dark shadow-xl rounded-md border border-zinc-700" v-for="lamp in data" :key="lamp.id">
        <div class="card-body">
          <h2 class="card-title">{{ lamp.name }}</h2>
          <div class="form-control w-52">
            <label class="cursor-pointer label">
              <input type="checkbox" class="toggle [--tglbg:#212134] bg-primary hover:bg-secondary border-primary"
                     :checked="lamp.status === 1"
                     @change="toggleLamp(lamp)" />
              <span v-if="lamp.status === 1">ON</span>
              <span v-else>OFF</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

