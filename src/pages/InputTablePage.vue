<script setup lang="ts">
// Vue의 반응형 변수 생성을 위한 ref import
import { ref } from 'vue'

// 텍스트필드에 입력되는 값
const input = ref('')
// 표에 표시할 데이터(입력값 목록)
const rows = ref<{ value: string }[]>([])

// 입력 버튼 클릭 시 실행되는 함수
function addRow() {
  // 입력값이 비어있지 않으면 표에 추가
  if (input.value.trim()) {
    rows.value.push({ value: input.value })
    input.value = '' // 입력창 초기화
  }
}
</script>
<template>
  <!-- Vuetify 컨테이너: 상단 여백 포함 -->
  <v-container fluid class="pt-8">
    <h2>입력/표 예제</h2>
    <v-row>
      <!-- 텍스트필드 영역 -->
      <v-col cols="8">
        <!-- v-model로 input과 바인딩, 엔터키로도 addRow 실행 -->
        <v-text-field v-model="input" label="값 입력" @keyup.enter="addRow" />
      </v-col>
      <!-- 입력 버튼 영역 -->
      <v-col cols="4">
        <v-btn color="primary" @click="addRow" style="height: 56px;">입력</v-btn>
      </v-col>
    </v-row>
    <!-- 입력된 값들을 표로 표시 -->
    <v-data-table :headers="[{ title: '입력값', value: 'value' }]" :items="rows" class="mt-6" />
  </v-container>
</template> 