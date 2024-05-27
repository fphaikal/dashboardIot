<script setup>
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

import { useAuthStore } from '~/store/useAuthStore'; // import the auth store we just created
const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const router = useRouter();
const logout = () => {
  logUserOut();
  router.push('/login');
};

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Suhu',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      data: [],
    },
    {
      label: 'Kelembapan',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      data: [],
    },
  ],
});

const fetchData = async () => {
  try {
    const response = await fetch('/api');
    const data = await response.json();

    if (data && data.length > 0) {
      const labels = data.map(item => new Date(item.date).toLocaleString());
      const suhuData = data.map(item => item.suhu);
      const kelembapanData = data.map(item => item.kelembapan);

      chartData.value = {
        labels: labels,
        datasets: [
          { ...chartData.value.datasets[0], data: suhuData },
          { ...chartData.value.datasets[1], data: kelembapanData },
        ],
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
  const interval = setInterval(fetchData, 1000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div class="flex flex-col gap-5 p-10 md:p-20 flex-1 min-h-screen w-full">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold my-auto">Welcome To IoT Dashboard👋</h1>
      <button @click="logout" class="btn btn-primary my-auto">Logout</button>
    </div>
    <div class="flex flex-col md:flex-row gap-3 mt-5">
      <div class="card w-full bg-dark shadow-xl rounded-md border border-zinc-700">
        <div class="card-body">
          <h2 class="card-title">Suhu</h2>
          <p class="text-3xl font-bold">{{ chartData.datasets[0].data.length > 0 ? chartData.datasets[0].data[chartData.datasets[0].data.length - 1] : 'Loading...' }}</p>
        </div>
      </div>
      <div class="card w-full bg-dark shadow-xl rounded-md border border-zinc-700">
        <div class="card-body">
          <h2 class="card-title">Kelembapan</h2>
          <p  class="text-3xl font-bold">{{ chartData.datasets[1].data.length > 0 ? chartData.datasets[1].data[chartData.datasets[1].data.length - 1] : 'Loading...' }}</p>
        </div>
      </div>
    </div>
    <div class="card w-full bg-dark shadow-xl rounded-md border border-zinc-700">
      <div class="card-body">
        <Line :data="chartData" :options="{ responsive: true, maintainAspectRatio: false }" />
      </div>
    </div>
  </div>
</template>
