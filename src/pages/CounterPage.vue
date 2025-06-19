<script setup lang="ts">
// Pinia의 store(상태관리) 정의를 위한 함수 import
import { defineStore } from 'pinia'
// Vue의 반응형 변수 생성을 위한 ref import
import { ref } from 'vue'

// 카운터 상태를 관리하는 Pinia store 정의
const useCounterStore = defineStore('counter', () => {
  const count = ref(0) // 카운트 값 (반응형)
  function increment() { count.value++ } // 증가 함수
  function decrement() { count.value-- } // 감소 함수
  return { count, increment, decrement }
})

// store 인스턴스 생성
const counter = useCounterStore()
</script>
<template>
  <!-- Vuetify 컨테이너: 상단 여백 포함 -->
  <v-container fluid class="pt-8">
    <!-- 페이지 제목 -->
    <h2>Pinia 카운터 예제</h2>
    <!-- 감소 버튼 -->
    <v-btn @click="counter.decrement" color="error" class="ma-2">-</v-btn>
    <!-- 현재 카운트 값 표시 -->
    <span style="font-size:2rem">{{ counter.count }}</span>
    <!-- 증가 버튼 -->
    <v-btn @click="counter.increment" color="primary" class="ma-2">+</v-btn>
  </v-container>
</template> 