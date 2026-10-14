import {readFile} from 'node:fs/promises';
import {markdown} from './privacy.mjs';
export async function codeStockAndroidPrivacy() {
 const [ja,en]=await Promise.all(['ja','en'].map(lang=>readFile(new URL(`../data/privacy/giga-helper-android-${lang}.md`,import.meta.url),'utf8')));
 return `<a class="back" href="/apps/giga-helper/">← コードストックのサイト</a><article class="document policy"><p class="eyebrow">ANDROID PRIVACY POLICY</p><h1>コードストック（Android版）<br>プライバシーポリシー</h1><nav class="language-links" aria-label="ポリシーの言語"><a href="#japanese">日本語</a><a href="#english" lang="en">English</a></nav><section id="japanese" lang="ja"><h2>日本語</h2>${markdown(ja)}</section><section id="english" lang="en"><h2>CodeStock for Android Privacy Policy</h2>${markdown(en)}</section><p><a href="/apps/giga-helper/support/">サポート / Support</a> · <a href="/apps/giga-helper/privacy/">iOS版のポリシー / iOS policy</a></p></article>`;
}

