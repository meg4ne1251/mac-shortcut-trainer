import type { Problem } from '../types';

export const codeProblems: Problem[] = [
  {
    id: 'p1',
    titleKey: 'problems.p1_title',
    descriptionKey: 'problems.p1_desc',
    type: 'code',
    difficulty: 'easy',
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
    initialContent: `The sky is blue
Clouds are white
Birds fly high`,
    goalContent: `The azure sky extends forever,
Drifting white clouds pass by,
Soaring birds reach for the sun.`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e'],
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
