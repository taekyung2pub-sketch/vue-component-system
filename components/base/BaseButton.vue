<template>
  <button
      :class="[
      $style.button,
      $style[variant],
      $style[size],
    ]"
      v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})
</script>

<style
    module
    lang="scss"
    src="./BaseButton.scss"
></style>