<template>
  <!-- Vuetify 컨테이너: 상단 여백 포함 -->
  <v-container fluid class="pt-8">
    <v-row>
      <!-- 버튼 예제 영역 -->
      <v-col cols="12" md="6">
        <h2>Vuetify 버튼</h2>
        <!-- 다양한 색상의 버튼 -->
        <v-btn color="primary" class="ma-2">Primary</v-btn>
        <v-btn color="secondary" class="ma-2">Secondary</v-btn>
        <v-btn color="success" class="ma-2">Success</v-btn>
      </v-col>
      <!-- 스위치 예제 영역 -->
      <v-col cols="12" md="6">
        <h2>Vuetify 스위치</h2>
        <!-- 스위치 컴포넌트 (v-model로 값 바인딩) -->
        <v-switch label="스위치 예제" v-model="switchValue" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
// Vue의 반응형 변수 생성을 위한 ref import
import { ref } from 'vue'
// 스위치의 상태를 저장하는 반응형 변수
const switchValue = ref(false)
</script> 