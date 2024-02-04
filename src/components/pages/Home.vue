<template>
  <h1 class="tw-font-bold tw-text-xl tw-mb-3">Deep Dive Dylan</h1>
  <p class="tw-mb-3">{{ $t('home.whoami') }}</p>
  <ul class="tw-list-disc tw-mb-3 tw-ml-6">
    <li>{{ $t('home.cybersecurity') }}</li>
    <li>{{ $t('home.freethinker') }}</li>
    <li>{{ $t('home.teacher') }}</li>
    <li>{{ $t('home.trekkie') }}</li>
    <li>{{ $t('home.webdev') }}</li>
  </ul>
  <p class="tw-mb-3">{{ $t('home.introduction') }}</p>
  <p>{{ $t('home.soundgood') }} <router-link class="tw-text-ddyellow" to="/contact">{{ $t('home.getintouch') }}</router-link></p>
</template>