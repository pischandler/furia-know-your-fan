<script setup lang="ts">
import { ref, computed } from 'vue'
import background from '@/assets/game2_background.png'
import gifLol from '@/assets/gifs/gif_lol.gif'
import videoLol1 from '@/assets/videos/lol/game/video_lol1.webm'
import videoLol2 from '@/assets/videos/lol/game/video_lol2.webm'
import videoLol3 from '@/assets/videos/lol/game/video_lol3.webm'
import videoLol4 from '@/assets/videos/lol/game/video_lol4.webm'

const props = defineProps<{
  question: string
  options: string[]
}>()

const emit = defineEmits(['answered'])

const selected = ref('')

const videoMap: Record<string, string> = {
  [props.options[0]]: videoLol1,
  [props.options[1]]: videoLol2,
  [props.options[2]]: videoLol3,
  [props.options[3]]: videoLol4,
}

const selectedVideo = computed(() => videoMap[selected.value] || '')

function selectOption(option: string) {
  selected.value = option
}

function submitAnswer() {
  if (selected.value) emit('answered', selected.value)
}
</script>

<template>
  <v-container
    class="fill-height d-flex align-center justify-center position-relative pa-0"
    :style="{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div class="position-absolute top-0 text-center w-100 mt-6">
      <h2 class="text-h6 font-weight-bold mb-2">Pergunta:</h2>
      <p class="font-weight-medium text-white">{{ props.question }}</p>
    </div>

    <img
      v-if="!selected"
      :src="gifLol"
      class="position-absolute"
      style="
        left: 40px;
        top: 50%;
        transform: translateY(-50%);
        height: 30vh;
        z-index: 5;
        pointer-events: none;
      "
    />

    <video
      v-else
      :src="selectedVideo"
      autoplay
      muted
      playsinline
      class="position-absolute"
      :style="`
    top: 50%;
    left: ${selected === props.options[2] || selected === props.options[3] ? '10px' : '-60px'};
    transform: translateY(-50%);
    height: ${selected === props.options[0] || selected === props.options[1] ? '60vh' : '35vh'};
    z-index: 5;
    pointer-events: none;
  `"
    />

    <div
      class="position-absolute"
      style="z-index: 6; top: 80px; left: 60%; transform: translateX(-50%)"
    >
      <v-card
        class="px-4 py-2 text-center cursor-pointer position-absolute"
        :class="selected === props.options[0] ? 'elevation-12' : 'elevation-2'"
        color="grey-darken-3"
        style="top: 100px; left: 0px"
        @click="selectOption(props.options[0])"
      >
        <span :class="selected === props.options[0] ? 'text-success' : 'text-white'">
          {{ props.options[0] }}
        </span>
      </v-card>

      <v-card
        class="px-4 py-2 text-center cursor-pointer position-absolute"
        :class="selected === props.options[1] ? 'elevation-12' : 'elevation-2'"
        color="grey-darken-3"
        style="top: 220px; left: 0px"
        @click="selectOption(props.options[1])"
      >
        <span :class="selected === props.options[1] ? 'text-success' : 'text-white'">
          {{ props.options[1] }}
        </span>
      </v-card>

      <v-card
        class="px-4 py-2 text-center cursor-pointer position-absolute"
        :class="selected === props.options[2] ? 'elevation-12' : 'elevation-2'"
        color="grey-darken-3"
        style="top: 320px; left: 0px"
        @click="selectOption(props.options[2])"
      >
        <span :class="selected === props.options[2] ? 'text-success' : 'text-white'">
          {{ props.options[2] }}
        </span>
      </v-card>

      <v-card
        class="px-4 py-2 text-center cursor-pointer position-absolute"
        :class="selected === props.options[3] ? 'elevation-12' : 'elevation-2'"
        color="grey-darken-3"
        style="top: 430px; left: px"
        @click="selectOption(props.options[3])"
      >
        <span :class="selected === props.options[3] ? 'text-success' : 'text-white'">
          {{ props.options[3] }}
        </span>
      </v-card>
    </div>

    <v-btn
      icon
      color="success"
      class="position-absolute"
      style="bottom: 16px; right: 16px; z-index: 10"
      :disabled="!selected"
      @click="submitAnswer"
    >
      <v-icon>mdi-arrow-right-bold</v-icon>
    </v-btn>
  </v-container>
</template>
