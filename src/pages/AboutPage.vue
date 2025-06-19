<script setup lang="ts">
// Vue의 반응형 변수 생성을 위한 ref import
import { ref } from 'vue'
// 화면에 표시할 메시지
const message = ref('Vue의 반응형 예제')
// 리스트에 표시할 과일 목록
const items = ref(['사과', '바나나', '오렌지'])
// 리스트 표시 여부를 제어하는 변수
const showList = ref(true)
</script>

<template>
  <!-- Vuetify 컨테이너: 상단 여백 포함 -->
  <v-container fluid class="pt-8">
    <!-- 메시지(제목) -->
    <h2>{{ message }}</h2>
    <!-- 리스트 표시/숨기기 토글 버튼 -->
    <v-btn @click="showList = !showList" color="primary" class="mb-4">
      {{ showList ? '리스트 숨기기' : '리스트 보기' }}
    </v-btn>
    <!-- v-if로 리스트 표시 여부 제어 -->
    <v-list v-if="showList">
      <!-- v-for로 배열 반복 렌더링 -->
      <v-list-item v-for="item in items" :key="item">
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-container>
</template> 