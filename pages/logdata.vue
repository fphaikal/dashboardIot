<script setup>
const { data } = await useFetch('/api')

</script>
<template>
  <div class="flex flex-col gap-5 p-10 md:p-20 flex-1 min-h-screen w-full">
    <h1 class="text-3xl font-bold">Log Data</h1>


    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right">
        <thead class="text-xs uppercase bg-dark">
          <tr>
            <th scope="col" class="px-6 py-3">
              No
            </th>
            <th scope="col" class="px-6 py-3">
              Suhu
            </th>
            <th scope="col" class="px-6 py-3">
              Kelembapan
            </th>
            <th scope="col" class="px-6 py-3">
              Timestamp
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(d, index) in data" class="bg-dark/50 hover:bg-gray-900">
            <td class="px-6 py-4">
              {{ index + 1 }}
            </td>
            <td class="px-6 py-4">
              {{ d.suhu }}
            </td>
            <td class="px-6 py-4">
              {{ d.kelembapan }}
            </td>
            <td class="px-6 py-4">
              {{ new Date(d.date).toLocaleString() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>