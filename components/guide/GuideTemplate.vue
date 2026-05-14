<template>
  <div class="guide-wrap">

    <header class="guide-header">

      <span class="guide-chip">
        Component Guide
      </span>

      <h1 class="guide-title">
        {{ title }}
      </h1>

      <p
          v-if="description"
          class="guide-desc"
      >
        {{ description }}
      </p>

    </header>

    <slot />

  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
}

defineProps<Props>()
</script>