import {readFile} from 'node:fs/promises';
const e=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function inline(s){return e(s).replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+|mailto:[^\s)]+)\)/g,'<a href="$2">$1</a>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');}
export function markdown(s){
 let out='',list=false;
 for(const line of s.split('\n')){
  if(line.startsWith('- ')){if(!list){out+='<ul>';list=true;}out+=`<li>${inline(line.slice(2))}</li>`;continue;}
  if(list){out+='</ul>';list=false;}
  if(line.startsWith('#### '))out+=`<h3>${inline(line.slice(5))}</h3>`;
  else if(line.trim())out+=`<p>${inline(line)}</p>`;
 }
 return out+(list?'</ul>':'');
}
const specific={
 'simple-pfc':[
 `食事・PFC・カロリー・体重・目標・写真など、利用者が入力した内容を記録機能のために端末内に保存します。保存した記録はアプリの編集・削除機能で管理できます。

**AIによる食事解析**

利用者がAI解析を実行した場合、選択した食事写真や入力した食事説明と解析用の指示を、Firebase AI Logicを通じてGoogleのGemini Developer APIへ送信し、栄養値の推定結果を取得します。AI解析は端末内だけで完結する処理ではありません。写真に含まれる人物や文字なども送信され得るため、不要な個人情報を含む画像や説明を送らないでください。

送信内容・応答の保存やサービス改善・モデル学習への利用は、Googleの適用規約とサービス・契約設定に従います。本ポリシーでは「送信後すぐ削除される」「学習には使われない」とは保証しません。端末内の記録を削除しても、Google側の処理・保存データの削除まで同時に行われることを意味しません。

[Firebase AI Logicのデータガバナンス](https://firebase.google.com/docs/ai-logic/data-governance)

[Gemini API追加利用規約](https://ai.google.dev/gemini-api/terms)

Firebase App CheckはAIサービスの不正利用防止・アプリの検証に用いられ、検証情報やトークンがGoogle・検証サービスへ送信される場合があります。`,
 `Records you enter, including meals, macros, calories, weight, goals and photos, are saved on your device for the recording features. You can manage saved records using the App’s editing and deletion features.

**AI meal analysis**

When you run AI analysis, the selected meal photo and/or entered meal description, together with analysis instructions, are sent through Firebase AI Logic to Google’s Gemini Developer API to obtain estimated nutrition values. This processing does not take place solely on your device. People or text appearing in an image may also be sent; avoid sending unnecessary personal information in images or descriptions.

Google’s applicable terms and service/contract settings govern retention of inputs and outputs and their use for service improvement or model training. This policy does not promise immediate deletion or exclusion from model training. Deleting an on-device record does not simultaneously delete any data processed or retained by Google.

[Firebase AI Logic data governance](https://firebase.google.com/docs/ai-logic/data-governance)

[Gemini API additional terms](https://ai.google.dev/gemini-api/terms)

Firebase App Check is used to verify the App and help prevent abuse of the AI service. Attestation material and tokens may be sent to Google and attestation providers.`],
 'kuropuru': ['家計記録、カテゴリ、支出予定などを端末内に保存します。iCloud同期を利用する場合、同期対象の記録はAppleのiCloud／CloudKitを通じて保存・同期されます。同期の利用はアプリと端末のiCloud設定に従います。レシート取り込み時に選択した画像を入力支援に利用します。CSVの取り込み・書き出しや共有を選ぶ場合、利用者が選んだ保存先・共有先でも情報が扱われます。','Budget records, categories and scheduled expenses are saved on your device. When you use iCloud synchronization, eligible records are stored and synchronized through Apple iCloud/CloudKit according to your app and device settings. Images selected for receipt import are used to assist input. CSV import, export and sharing may also involve storage locations or recipients you select.'],
 'giga-helper':['プロモーションコード、期限、使用状況などを端末内に保存します。iCloud同期を利用する場合、同期対象の内容はAppleのiCloud／CloudKitを通じて保存・同期されます。メール本文などからの取り込みでは、利用者が入力・選択した内容をコード認識に利用します。コードをコピー・共有した後は、利用者が選んだ共有先の取り扱いが適用されます。','Promotion codes, expiration dates and usage status are saved on your device. When you use iCloud synchronization, eligible content is stored and synchronized through Apple iCloud/CloudKit. Text or images you select for importing codes are used for recognition. After you copy or share a code, the handling of the recipient or service you select applies.'],
 'car-assignments':['登録したメンバーの名前・属性、ドライバー情報、同乗条件、車割履歴などを、車割の作成・管理のため端末内に保存します。メンバーの氏名など、入力する情報の内容にご注意ください。CSV取り込み・書き出し、結果のコピー・画像やテキストの共有を選ぶ場合、その情報は利用者が選んだ保存先や共有先でも扱われます。','Member names and attributes, driver information, grouping preferences and assignment history are saved on your device to create and manage car assignments. Take care with the personal information you enter, including member names. If you choose CSV import/export, copying results or image/text sharing, that information may also be handled by storage locations or recipients you select.'],
 'simple-study-log':['学習時間、学習記録、設定などを端末内に保存します。iCloud同期を利用する場合、同期対象の内容はAppleのiCloud／CloudKitを通じて保存・同期されます。CSVの取り込み・書き出しを選んだ場合、利用者が選んだファイル・保存先でも記録情報が扱われます。ウィジェットやライブアクティビティでは、端末上で学習の状態を表示します。','Study durations, session records and preferences are saved on your device. When you use iCloud synchronization, eligible content is stored and synchronized through Apple iCloud/CloudKit. CSV import/export may involve files or storage locations you select. Widgets and Live Activities display study status on your device.']
};
export async function privacyBody(a){
 const okn=a.id==='okn-viewer';
 const [ja,en]=await Promise.all(['ja','en'].map(lang=>readFile(new URL(`../data/privacy/${okn?'okn':'shared'}-${lang}.md`,import.meta.url),'utf8')));
 const extra=(lang,i)=>okn?'':`<h3>${lang==='ja'?'このアプリ固有の情報':'App-specific information'}</h3>${markdown(specific[a.id][i])}${['kuropuru','giga-helper','simple-study-log'].includes(a.id)?`<p><a href="https://www.apple.com/legal/privacy/">${lang==='ja'?'Appleのプライバシーポリシー':'Apple Privacy Policy'}</a></p>`:''}`;
 return `<a class="back" href="/apps/${a.id}/">← ${e(a.name)}</a><article class="document policy"><p class="eyebrow">PRIVACY POLICY</p><h1>${e(a.name)}<br>プライバシーポリシー</h1><nav class="language-links" aria-label="ポリシーの言語"><a href="#japanese">日本語</a><a href="#english" lang="en">English</a></nav><section id="japanese" lang="ja"><h2>日本語</h2>${extra('ja',0)}${markdown(ja)}</section><section id="english" lang="en"><h2>${e(a.name)} Privacy Policy</h2>${extra('en',1)}${markdown(en)}</section><p><a href="/apps/${a.id}/support/">サポート / Support</a></p></article>`;
}
