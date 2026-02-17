import type { Problem } from '../types';

export const codeProblems: Problem[] = [
  {
    id: 'p1',
    titleKey: 'problems.p1_title',
    descriptionKey: 'problems.p1_desc',
    type: 'code',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `const name = "Alice"
const age = 25
console.log(name)`,
    goalContent: `const name = "Alice";
const age = 25;
console.log(name);`,
    requiredKeys: ['ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p2',
    titleKey: 'problems.p2_title',
    descriptionKey: 'problems.p2_desc',
    type: 'code',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `function addd(a, b) {
  returnn a + b;
}`,
    goalContent: `function add(a, b) {
  return a + b;
}`,
    requiredKeys: ['ctrl_f', 'ctrl_d'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p3',
    titleKey: 'problems.p3_title',
    descriptionKey: 'problems.p3_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `function greet(name) {
  console.log("DEBUG");
  return \`Hello, \${name}!\`;
}`,
    goalContent: `function greet(name) {
  return \`Hello, \${name}!\`;
}`,
    requiredKeys: ['ctrl_n', 'ctrl_a', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p4',
    titleKey: 'problems.p4_title',
    descriptionKey: 'problems.p4_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `if  (x > 0)  {
  console.log("positive")
}`,
    goalContent: `if (x > 0) {
  console.log("positive");
}`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p5',
    titleKey: 'problems.p5_title',
    descriptionKey: 'problems.p5_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'shortcut',
    language: 'en',
    initialContent: `function  calculate(x, y)  {
  const result = x +  y;;
  console.log("debug");
  return result
}`,
    goalContent: `function calculate(x, y) {
  const result = x + y;
  return result;
}`,
    requiredKeys: ['ctrl_f', 'ctrl_b', 'ctrl_d', 'ctrl_k', 'ctrl_a', 'ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p6',
    titleKey: 'problems.p6_title',
    descriptionKey: 'problems.p6_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `import { useState, useEffect } from 'raect';
import Button from './components/Button';
import { api } from './utils/api';`,
    goalContent: `import { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { api } from './utils/api';`,
    requiredKeys: ['ctrl_f', 'ctrl_b', 'ctrl_e', 'ctrl_a'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p7',
    titleKey: 'problems.p7_title',
    descriptionKey: 'problems.p7_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `const UserCard = ({ name, age }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}`,
    goalContent: `const UserCard = ({ name, age, email }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_e', 'ctrl_a'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p8',
    titleKey: 'problems.p8_title',
    descriptionKey: 'problems.p8_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `async function fetchData() {
  const data = await api.get('/users');
  return data;
}`,
    goalContent: `async function fetchData() {
  try {
    const data = await api.get('/users');
    return data;
  } catch (error) {
    console.error(error);
  }
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p9',
    titleKey: 'problems.p9_title',
    descriptionKey: 'problems.p9_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `numbers = [1, 2, 3, 4, 5]
squared = []
for n in numbers:
    squared.append(n * n)`,
    goalContent: `numbers = [1, 2, 3, 4, 5]
squared = [n * n for n in numbers]`,
    requiredKeys: ['ctrl_k', 'ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p10',
    titleKey: 'problems.p10_title',
    descriptionKey: 'problems.p10_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `SELECT u.name, o.id
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.status = 'pending'`,
    goalContent: `SELECT u.name, o.id, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.status = 'completed'
ORDER BY o.created_at DESC`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_e', 'ctrl_a', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p11',
    titleKey: 'problems.p11_title',
    descriptionKey: 'problems.p11_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `.container {
  display: block;
  margin: 0 auto;
  padding: 20px;
}`,
    goalContent: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_k', 'ctrl_a', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p12',
    titleKey: 'problems.p12_title',
    descriptionKey: 'problems.p12_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `{
  "name": "my-app",
  "version": "1.0.0",
  "debug": true
}`,
    goalContent: `{
  "name": "my-awesome-app",
  "version": "1.0.1",
  "private": true,
  "scripts": {
    "start": "node index.js"
  }
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_f', 'ctrl_b', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p13',
    titleKey: 'problems.p13_title',
    descriptionKey: 'problems.p13_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `FROM node:14
COPY . .
RUN npm install
CMD ["node", "app.js"]`,
    goalContent: `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["node", "app.js"]`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p14',
    titleKey: 'problems.p14_title',
    descriptionKey: 'problems.p14_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `test('should add numbers', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});`,
    goalContent: `test('should add positive numbers', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
  expect(add(2, 3)).toBe(5);
});`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_f', 'ctrl_b', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p15',
    titleKey: 'problems.p15_title',
    descriptionKey: 'problems.p15_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `class User {
  constructor(name) {
    this.name = name;
  }
  
  save() {
    db.save(this);
  }
}`,
    goalContent: `class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  async save() {
    await db.save(this);
    this.log('saved');
  }
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
];

export const textProblems: Problem[] = [
  {
    id: 't1',
    titleKey: 'problems.t1_title',
    descriptionKey: 'problems.t1_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `This is a testt message.
Please check it carefully.`,
    goalContent: `This is a test message.
Please check it carefully.`,
    requiredKeys: ['ctrl_f', 'ctrl_d'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't2',
    titleKey: 'problems.t2_title',
    descriptionKey: 'problems.t2_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `The meeting is scheduled for Monday
Please confirm your attendance`,
    goalContent: `The meeting is scheduled for Monday.
Please confirm your attendance.`,
    requiredKeys: ['ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't3',
    titleKey: 'problems.t3_title',
    descriptionKey: 'problems.t3_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `Dear Team,
TODO: remove this line
We are pleased to announce the new policy.`,
    goalContent: `Dear Team,
We are pleased to announce the new policy.`,
    requiredKeys: ['ctrl_n', 'ctrl_a', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't4',
    titleKey: 'problems.t4_title',
    descriptionKey: 'problems.t4_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `The  quick  brown fox
jumps  over the  lazy dog`,
    goalContent: `The quick brown fox
jumps over the lazy dog.`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't5',
    titleKey: 'problems.t5_title',
    descriptionKey: 'problems.t5_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'shortcut',
    language: 'en',
    initialContent: `Subject:  Project Update
DRAFT - DO NOT SEND
Hi  everyone,
The deadline has been  extended to Friday
Best regards`,
    goalContent: `Subject: Project Update
Hi everyone,
The deadline has been extended to Friday.
Best regards.`,
    requiredKeys: ['ctrl_f', 'ctrl_b', 'ctrl_d', 'ctrl_k', 'ctrl_a', 'ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't6',
    titleKey: 'problems.t6_title',
    descriptionKey: 'problems.t6_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `Running List:
- item 1
* item 2
- item 3`,
    goalContent: `Shopping List:
- Apples
- Bananas
- Carrots`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_k', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't7',
    titleKey: 'problems.t7_title',
    descriptionKey: 'problems.t7_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `Date: 2023/10/01
Attendees: John, Mike
Decisions:
- None yet`,
    goalContent: `Date: 2023/12/01
Attendees: John, Mike, Sarah
Decisions:
- Approved budget
- Scheduled next meeting`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_e', 'ctrl_a'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't8',
    titleKey: 'problems.t8_title',
    descriptionKey: 'problems.t8_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `Hey boss,
I need day off tomorrow.
Thanks.`,
    goalContent: `Dear Manager,
I would like to request a day off tomorrow for personal reasons.
Thank you for your understanding.
Sincerely,`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_k', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't9',
    titleKey: 'problems.t9_title',
    descriptionKey: 'problems.t9_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `株式会社〇〇
田中様
お疲れ様です。佐藤です。
資料送ります。
よろしく。`,
    goalContent: `株式会社〇〇
営業部 田中様
いつも大変お世話になっております。佐藤です。
先日ご依頼のありました資料をお送りいたします。
ご確認のほど、よろしくお願い申し上げます。`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't10',
    titleKey: 'problems.t10_title',
    descriptionKey: 'problems.t10_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `// fix this later
// function to get data
// returns null`,
    goalContent: `/**
 * Fetches user data from the API.
 * @returns {Promise<UserData>} The user object
 */`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_k', 'ctrl_a', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't11',
    titleKey: 'problems.t11_title',
    descriptionKey: 'problems.t11_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `Name: yamada taro
Tel: 09012345678
Addr: tokyo-to minato-ku`,
    goalContent: `Name: Taro Yamada
Tel: 090-1234-5678
Address: Minato-ku, Tokyo`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_f', 'ctrl_b', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't12',
    titleKey: 'problems.t12_title',
    descriptionKey: 'problems.t12_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `Today was sunny.
But I stayed home.
So I was bored.`,
    goalContent: `Although today was sunny,
I decided to stay home.
Consequently, I felt quite bored.`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't13',
    titleKey: 'problems.t13_title',
    descriptionKey: 'problems.t13_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `Slide 1: Intro
- we are good company
- buy our product`,
    goalContent: `Slide 1: Introduction
- Market Leaders in Innovation
- Transforming the Industry
- call to Action: Partner with Us`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't14',
    titleKey: 'problems.t14_title',
    descriptionKey: 'problems.t14_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `1. boil water
2. put noodles
3. wait 3 mins
4. eat`,
    goalContent: `1. Boil 500ml of water.
2. Add noodles and spices.
3. Simmer for 3 minutes.
4. Serve hot and enjoy.`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_f', 'ctrl_b', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't15',
    titleKey: 'problems.t15_title',
    descriptionKey: 'problems.t15_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `The sky is blue
Clouds are white
Birds fly high`,
    goalContent: `The azure sky extends forever,
Drifting white clouds pass by,
Soaring birds reach for the sun.`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },

  // ===== New Japanese problems =====
  {
    id: 'j1',
    titleKey: 'problems.j1_title',
    descriptionKey: 'problems.j1_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'ja',
    initialContent: `こんにちはは。
今日はいい天気ですね。`,
    goalContent: `こんにちは。
今日はいい天気ですね。`,
    requiredKeys: ['ctrl_f', 'ctrl_d'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j2',
    titleKey: 'problems.j2_title',
    descriptionKey: 'problems.j2_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'ja',
    initialContent: `お疲れ様です
本日もよろしくお願いします`,
    goalContent: `お疲れ様です。
本日もよろしくお願いします。`,
    requiredKeys: ['ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j3',
    titleKey: 'problems.j3_title',
    descriptionKey: 'problems.j3_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'typing',
    language: 'ja',
    initialContent: `名前：山田
年齢：25`,
    goalContent: `名前：山田太郎
年齢：25歳`,
    requiredKeys: ['ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j4',
    titleKey: 'problems.j4_title',
    descriptionKey: 'problems.j4_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'ja',
    initialContent: `会議メモ
【削除予定】テスト行
次回は来週月曜日です。`,
    goalContent: `会議メモ
次回は来週月曜日です。`,
    requiredKeys: ['ctrl_n', 'ctrl_a', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j5',
    titleKey: 'problems.j5_title',
    descriptionKey: 'problems.j5_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'ja',
    initialContent: `件名：報告
内容：完了`,
    goalContent: `件名：週次進捗報告
内容：タスクAが完了しました。`,
    requiredKeys: ['ctrl_e', 'ctrl_a', 'ctrl_k', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j6',
    titleKey: 'problems.j6_title',
    descriptionKey: 'problems.j6_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'ja',
    initialContent: `明日の　　予定は
10時から　　会議です`,
    goalContent: `明日の予定は
10時から会議です。`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j7',
    titleKey: 'problems.j7_title',
    descriptionKey: 'problems.j7_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'ja',
    initialContent: `買うもの：
・りんご
・バナナ`,
    goalContent: `週末の買い物リスト：
・りんご 3個
・バナナ 1房
・牛乳 1本`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j8',
    titleKey: 'problems.j8_title',
    descriptionKey: 'problems.j8_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `すみません、休みます。`,
    goalContent: `お忙しいところ恐れ入りますが、
体調不良のため、本日お休みをいただけますでしょうか。
ご迷惑をおかけしますが、よろしくお願いいたします。`,
    requiredKeys: ['ctrl_a', 'ctrl_k', 'ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j9',
    titleKey: 'problems.j9_title',
    descriptionKey: 'problems.j9_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'shortcut',
    language: 'ja',
    initialContent: `件名：　　打合せ
日時：未定
※下書き※
参加者：田中、鈴木
備考：　　なし`,
    goalContent: `件名：打合せ
日時：2月20日 14:00
参加者：田中、鈴木
備考：なし`,
    requiredKeys: ['ctrl_f', 'ctrl_b', 'ctrl_d', 'ctrl_k', 'ctrl_a', 'ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j10',
    titleKey: 'problems.j10_title',
    descriptionKey: 'problems.j10_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'ja',
    initialContent: `日記
今日は散歩した。
楽しかった。`,
    goalContent: `2月17日 日記
今日は公園まで散歩した。
桜がきれいで、とても楽しかった。`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j11',
    titleKey: 'problems.j11_title',
    descriptionKey: 'problems.j11_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'ja',
    initialContent: `東京都港区六本木
1-2-33`,
    goalContent: `東京都港区六本木
1-2-3`,
    requiredKeys: ['ctrl_n', 'ctrl_e', 'ctrl_h'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j12',
    titleKey: 'problems.j12_title',
    descriptionKey: 'problems.j12_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `プロジェクト計画
期間：1ヶ月
目標：リリース`,
    goalContent: `プロジェクト計画書
期間：2024年4月〜6月（3ヶ月）
目標：ベータ版リリースおよびユーザーテスト完了`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j13',
    titleKey: 'problems.j13_title',
    descriptionKey: 'problems.j13_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'ja',
    initialContent: `レシピ：カレー
材料：肉、野菜
作り方：煮る`,
    goalContent: `レシピ：チキンカレー
材料：鶏もも肉、玉ねぎ、にんじん、じゃがいも
作り方：材料を炒めてから水を加え、30分煮込む。`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j14',
    titleKey: 'problems.j14_title',
    descriptionKey: 'problems.j14_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'typing',
    language: 'ja',
    initialContent: `メモ
牛乳を買う`,
    goalContent: `メモ
帰りにスーパーで牛乳を買う。`,
    requiredKeys: ['ctrl_n', 'ctrl_a', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j15',
    titleKey: 'problems.j15_title',
    descriptionKey: 'problems.j15_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `自己紹介
名前は田中です。
エンジニアです。`,
    goalContent: `自己紹介
はじめまして、田中太郎と申します。
Webエンジニアとして5年間の経験があります。
得意分野はフロントエンド開発です。`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j16',
    titleKey: 'problems.j16_title',
    descriptionKey: 'problems.j16_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'ja',
    initialContent: `エラーログ：
[DEBUG] テスト出力
[ERROR] 接続タイムアウト
[DEBUG] 変数確認`,
    goalContent: `エラーログ：
[ERROR] 接続タイムアウト`,
    requiredKeys: ['ctrl_n', 'ctrl_a', 'ctrl_k', 'ctrl_p'],
    cursorStart: { row: 0, col: 0 },
  },

  // ===== Mixed-language problems =====
  {
    id: 'm1',
    titleKey: 'problems.m1_title',
    descriptionKey: 'problems.m1_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'mixed',
    initialContent: `Name: Tanaka
Role: Developer`,
    goalContent: `Name: 田中太郎 (Tanaka Taro)
Role: Senior Developer`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_f', 'ctrl_b', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm2',
    titleKey: 'problems.m2_title',
    descriptionKey: 'problems.m2_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'mixed',
    initialContent: `TODO: fix bug
バグ修正`,
    goalContent: `TODO: fix login validation bug
ログインバリデーションのバグを修正する。
Priority: High / 優先度：高`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm3',
    titleKey: 'problems.m3_title',
    descriptionKey: 'problems.m3_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'mixed',
    initialContent: `// Get user
function getUser(id) {
  return db.find(id);
}`,
    goalContent: `// ユーザー情報を取得する
function getUserById(id: string) {
  return db.findById(id);
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm4',
    titleKey: 'problems.m4_title',
    descriptionKey: 'problems.m4_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'typing',
    language: 'mixed',
    initialContent: `Hello
ようこそ`,
    goalContent: `Hello, World!
ようこそ、世界へ！`,
    requiredKeys: ['ctrl_e', 'ctrl_n', 'ctrl_a'],
    cursorStart: { row: 0, col: 0 },
  },
];

/** All problems indexed by type */
export const problemsByType = {
  code: codeProblems,
  text: textProblems,
};

/** All problems combined (for backward compatibility) */
export const problems: Problem[] = [...codeProblems, ...textProblems];
