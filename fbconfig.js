/* ===== Firebase 設定（單元三·價值思辨　三類手機互動）=====
 * 沿用單元一同一個 life-edu-intro 專案（同網域 js-1105.github.io，免重新授權）。
 * 三類互動用不同資料節點，互不覆蓋：
 *   ① 課前作業·五組精華（卡繆抉擇／飲食指南）→ rooms/<房號>/prologue/g1…g5
 *   ② 小組討論·考城隍兩種道德判斷       → rooms/<房號>/kaocheng/g1…g5
 *   ③ 倫理學問題雲                      → rooms/<房號>/clouds/ethics
 * 未設定時（仍是 PASTE_...），頁面自動以「單機 localStorage 代打模式」運作。
 */
window.FB_CONFIG = {
  apiKey: "AIzaSyCFuzUM6Xs7zcP71nT2O3E4XVexofGoz0w",
  authDomain: "life-edu-intro.firebaseapp.com",
  databaseURL: "https://life-edu-intro-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "life-edu-intro",
  storageBucket: "life-edu-intro.firebasestorage.app",
  messagingSenderId: "861046300947",
  appId: "1:861046300947:web:7b3466af9a3bc06cfb7ae6"
};

/* 每屆上課換一個房號即可「清空重來」（不同房號＝不同資料）。建議用日期。 */
window.FB_ROOM = "u3-2026-0715";
