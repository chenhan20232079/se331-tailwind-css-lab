<template>
  <div>
    <SpeedInsights />
    <div class="text-center font-sans text-gray-700 antialias">
      <!-- 步骤3 & 10: 动画效果 -->
      <div class="animate-fade bg-yellow-100 p-4 mb-6">
        <h4 class="text-lg font-semibold">Flash Message: Welcome to our application!</h4>
      </div>
      
      <!-- 步骤2 & 9: 导航栏 -->
      <nav class="py-6 bg-white shadow-sm">
        <div class="flex justify-center space-x-8">
          <span class="font-bold text-green-500">Home</span>
          <span class="font-bold text-gray-700">Events</span>
          <span class="font-bold text-gray-700">Register</span>
          <span class="font-bold text-gray-700">About</span>
        </div>
      </nav>

      <main class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Home Page</h1>
        <p class="text-xl text-gray-600 mb-8">Welcome to our application</p>
        
        <!-- 步骤4: 自定义阴影和悬停效果 -->
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:scale-105 hover:shadow-sp transition-all duration-300 mb-12">
          View Event List
        </button>

        <!-- 步骤5 & 6: 事件卡片 -->
        <div class="flex flex-col items-center space-y-6">
          <div class="cursor-pointer border border-gray-600 p-4 w-64 mb-6 hover:scale-105 hover:shadow-sp transition-all duration-300">
            <h2 class="text-xl font-bold text-gray-800">Tech Conference</h2>
            <span class="text-gray-600 text-sm">@09:00 AM on 2025-11-15</span>
          </div>
          
          <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-105 hover:shadow-sp transition-all duration-300">
            <h2 class="text-xl font-bold text-gray-800">Music Festival</h2>
            <span class="text-gray-600 text-sm">@02:00 PM on 2025-12-05</span>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { SpeedInsights } from "@vercel/speed-insights"

export default {
  name: "App",
  components: {
    SpeedInsights
  }
}
</script>
