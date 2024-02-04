import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import './style.css';
import App from './App.vue';
import router from './router.ts';

import en from '../locales/en.json';
import es from '../locales/es.json';
type MessageSchema = typeof en;

const browserLocale = navigator.languages[0].toLocaleLowerCase().includes('es') ? 'es' : 'en';
const locale = window.localStorage.getItem('vueuse-i18n-locale') ?? browserLocale;
const translator = createI18n<[MessageSchema], 'en' | 'es'>({
    globalInjection: true,
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages: { en, es },
});

createApp(App)
    .use(router)
    .use(translator)
    .use(VueReCaptcha, {
        loaderOptions: {
            autoHideBadge: false,
            useEnterprise: true
        },
        siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY
    })
    .mount('#app');
