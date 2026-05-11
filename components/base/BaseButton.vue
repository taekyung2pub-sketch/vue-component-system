<template>
  <button :class="[$style.button, $style[variant], $style[size]]" v-bind="$attrs">
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

<style module lang="scss">
.button {
  border-radius: $radius-md;
  font-weight: $font-weight-medium;
  transition: $transition-fast;
  cursor: pointer;
  border: none;

  &:hover { opacity: 0.85; }
  &:focus-visible { outline: 2px solid $color-primary; outline-offset: 2px; }

  // Variants
  &.primary { background: $color-primary; color: #fff; }
  &.secondary { background: $color-bg-subtle; color: $color-text; }
  &.ghost { background: transparent; border: 1px solid $color-border; color: $color-text; }

  // Sizes
  &.sm { padding: $spacing-xs $spacing-sm; font-size: $font-size-sm; }
  &.md { padding: $spacing-sm $spacing-md; font-size: $font-size-md; }
  &.lg { padding: $spacing-md $spacing-lg; font-size: $font-size-lg; }
}
</style>