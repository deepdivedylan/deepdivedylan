<template>
  <div class="tw-bg-ddblue">
    <nav
        class="
        tw-container
        tw-px-6
        tw-py-8
        tw-mx-auto
        md:tw-flex md:tw-justify-between md:tw-items-center
      "
    >
      <div class="tw-flex tw-items-center tw-justify-between">
        <router-link
            to="/"
            class="
            tw-text-xl
            tw-font-bold
            tw-text-ddcyan
            md:tw-text-2xl
            hover:tw-text-ddyellow
          "
        ><img class="tw-h-10" src="/images/deepdivedylan-cyan.svg" alt="">
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav()" class="tw-flex md:tw-hidden">
          <button
              type="button"
              class="
              tw-text-ddcyan
              hover:tw-text-ddyellow
              focus:tw-outline-none focus:tw-text-gray-400
            "
          >
            <span class="tw-sr-only">{{ $t('nav.toggle') }}</span>
            <Bars3Icon class="tw-w-6 tw-h-6 tw-fill-current" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
          :class="showMenu ? 'tw-flex' : 'tw-hidden'"
          class="
          tw-flex-col
          tw-mt-8
          tw-space-y-4
          md:tw-flex md:tw-space-y-0 md:tw-flex-row md:tw-items-center md:tw-space-x-10 md:tw-mt-0
        "
      >
        <li class="tw-text-ddcyan hover:tw-text-ddyellow" v-for="page in props.pages" :key="page.href" @click="toggleNav()"><router-link :to="page.href">{{ $t('nav.' + page.label) }}</router-link></li>
        <li class="tw-text-ddcyan hover:tw-text-ddyellow"><LocaleSelect /></li>
        <li class="tw-text-ddcyan hover:tw-text-ddyellow"><ThemeSelect /></li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/solid';
import { useToggle } from '@vueuse/core';
import { ref } from 'vue';
import NavRoute from '../interfaces/NavRoute.ts';
import LocaleSelect from './LocaleSelect.vue';
import ThemeSelect from './ThemeSelect.vue';

export interface Props {
  pages: NavRoute[]
};
const props = withDefaults(defineProps<Props>(), {
  pages: () => []
});

const showMenu = ref(false);
const toggleNav = useToggle(showMenu);
</script>