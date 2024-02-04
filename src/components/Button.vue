<template>
  <button
      class="tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-me-2 tw-mb-2 focus:tw-outline-none"
      :class="classes[props.type as keyof typeof classes]"
      :type="buttonType">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
export interface Props {
  submit: boolean,
  type: string
};
const props = withDefaults(defineProps<Props>(), {
  submit: false,
  type: 'primary'
});

const classes = {
  primary: 'tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-ring-blue-300 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-800',
  secondary: 'tw-text-gray-900 tw-bg-white tw-border tw-border-gray-200 tw-hover:bg-gray-100 tw-hover:text-blue-700 tw-focus:z-10 tw-focus:ring-4 tw-focus:ring-gray-200 dark:focus:tw-ring-gray-700 dark:tw-bg-gray-800 dark:tw-text-gray-400 dark:tw-border-gray-600 dark:hover:tw-text-white dark:hover:tw-bg-gray-700'
};
const buttonType = props.submit ? 'submit' : 'button';
</script>