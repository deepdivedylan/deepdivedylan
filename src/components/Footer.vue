<template>
  <div class="tw-bg-ddblue tw-bottom-0">
    <footer class="tw-container tw-flex tw-items-center tw-flex-wrap tw-px-6 tw-py-8 tw-mx-auto tw-text-sm tw-font-bold tw-text-ddcyan">
      <div class="tw-pr-2">
        <a href="https://github.com/deepdivedylan"><img class="tw-h-5" src="/images/github.svg" alt="" /></a>
      </div>
      <div class="tw-pr-6">
        <a class="hover:tw-text-ddyellow" href="https://github.com/deepdivedylan">deepdivedylan</a>
      </div>
      <div class="tw-pr-2">
        <a class="hover:tw-text-ddyellow" href="https://x.com/deepdivedylan">&#x1D54F;</a>
      </div>
      <div>
        <a class="hover:tw-text-ddyellow" href="https://x.com/deepdivedylan">@deepdivedylan</a>
      </div>
      <div class="tw-ml-auto">
        <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
          <a class="hover:tw-text-ddyellow" property="dct:title" rel="cc:attributionURL" href="https://www.deepdivedylan.io">Deep Dive Dylan</a>
          &copy; 2016 - {{ thisYear }} by
          <a class="hover:tw-text-ddyellow" rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/deepdivedylan">Dylan McDonald</a>
          is licensed under
          <a class="tw-inline-block" href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="license noopener noreferrer">
            CC BY-NC 4.0
            <img class="tw-align-bottom tw-inline tw-h-6 tw-ml-2 tw-mr-2" src="/images/cc.svg">
            <img class="tw-align-bottom tw-inline tw-h-6 tw-mr-2" src="/images/by.svg">
            <img class="tw-align-bottom tw-inline tw-h-6" src="/images/nc.svg">
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
const thisYear = (new Date()).getFullYear();
</script>
