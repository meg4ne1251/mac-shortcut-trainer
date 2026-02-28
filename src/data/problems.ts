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
  // ===== New code problems (p16–p55) =====
  {
    id: 'p16',
    titleKey: 'problems.p16_title',
    descriptionKey: 'problems.p16_desc',
    type: 'code',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `let x = 10
let y = 20
let z = 30
console.log(x + y + z)`,
    goalContent: `let x = 10;
let y = 20;
let z = 30;
console.log(x + y + z);`,
    requiredKeys: ['ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p17',
    titleKey: 'problems.p17_title',
    descriptionKey: 'problems.p17_desc',
    type: 'code',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `const grreeting = "Hello"
const nname = "World"
console.log(grreeting + nname)`,
    goalContent: `const greeting = "Hello"
const name = "World"
console.log(greeting + name)`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p18',
    titleKey: 'problems.p18_title',
    descriptionKey: 'problems.p18_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `function processData(input) {
  console.log("DEBUG: input =", input);
  const result = input.trim();
  console.log("DEBUG: result =", result);
  return result.toLowerCase();
}`,
    goalContent: `function processData(input) {
  const result = input.trim();
  return result.toLowerCase();
}`,
    requiredKeys: ['ctrl_n', 'ctrl_a', 'ctrl_k', 'ctrl_p'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p19',
    titleKey: 'problems.p19_title',
    descriptionKey: 'problems.p19_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `const colors = ["red", "blue"];
function getColor(index) {
  return colors[index];
}`,
    goalContent: `const colors = ["red", "blue", "green", "yellow"];
function getColor(index) {
  if (index < 0 || index >= colors.length) {
    return "unknown";
  }
  return colors[index];
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p20',
    titleKey: 'problems.p20_title',
    descriptionKey: 'problems.p20_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name;
  }
}`,
    goalContent: `class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  speak() {
    return \`\${this.name} is a \${this.type}\`;
  }
  toString() {
    return \`Animal(\${this.name})\`;
  }
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p21',
    titleKey: 'problems.p21_title',
    descriptionKey: 'problems.p21_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `const  data  =  {
  name:  "Alice",
  age:  25,
  city:  "Tokyo"
};`,
    goalContent: `const data = {
  name: "Alice",
  age: 25,
  city: "Tokyo"
};`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p22',
    titleKey: 'problems.p22_title',
    descriptionKey: 'problems.p22_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `app.get('/users', (req, res) => {
  const users = db.getAll();
  res.json(users);
});`,
    goalContent: `app.get('/users', async (req, res) => {
  try {
    const users = await db.getAll();
    const filtered = users.filter(u => u.active);
    res.json({ data: filtered, count: filtered.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p23',
    titleKey: 'problems.p23_title',
    descriptionKey: 'problems.p23_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `def calculate_area(width, height):
    # TODO: remove
    print("debug")
    # TODO: remove this too
    area = width * height
    print("debug2")
    return area`,
    goalContent: `def calculate_area(width, height):
    area = width * height
    return area`,
    requiredKeys: ['ctrl_n', 'ctrl_a', 'ctrl_k', 'ctrl_p'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p24',
    titleKey: 'problems.p24_title',
    descriptionKey: 'problems.p24_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `interface User {
  name: string;
  age: number;
}

function greet(user: User) {
  return "Hello " + user.name;
}`,
    goalContent: `interface User {
  name: string;
  age: number;
  email: string;
  role: 'admin' | 'user';
}

function greet(user: User): string {
  const title = user.role === 'admin' ? 'Admin' : 'User';
  return \`Hello \${title} \${user.name} (\${user.email})\`;
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p25',
    titleKey: 'problems.p25_title',
    descriptionKey: 'problems.p25_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `<div>
  <h1>Title</h1>
  <p>content</p>
</div>`,
    goalContent: `<section className="container">
  <h1 className="title">Welcome</h1>
  <p className="description">This is the main content area.</p>
  <button onClick={handleClick}>Get Started</button>
</section>`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p26',
    titleKey: 'problems.p26_title',
    descriptionKey: 'problems.p26_desc',
    type: 'code',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `console.log("hello world")
console.log("goodbye world")
console.log("test message")
console.log("final message")`,
    goalContent: `console.log("hello world");
console.log("goodbye world");
console.log("test message");
console.log("final message");`,
    requiredKeys: ['ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p27',
    titleKey: 'problems.p27_title',
    descriptionKey: 'problems.p27_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `const  arr  = [1,  2,  3,  4,  5];
const  sum  = arr.reduce((a,  b)  => a  + b,  0);
console.log(sum)`,
    goalContent: `const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p28',
    titleKey: 'problems.p28_title',
    descriptionKey: 'problems.p28_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `def fetch_data(url):
    response = requests.get(url)
    return response.json()`,
    goalContent: `def fetch_data(url, timeout=30, retries=3):
    for attempt in range(retries):
        try:
            response = requests.get(url, timeout=timeout)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            if attempt == retries - 1:
                raise e`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p29',
    titleKey: 'problems.p29_title',
    descriptionKey: 'problems.p29_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `.header {
  color: black;
  font-size: 16px;
}

.footer {
  color: gray;
}`,
    goalContent: `.header {
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.footer {
  color: #666;
  padding: 2rem 0;
  border-top: 1px solid #eee;
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p30',
    titleKey: 'problems.p30_title',
    descriptionKey: 'problems.p30_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `CREATE TABLE users (
  id INT,
  name VARCHAR(100)
);`,
    goalContent: `CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p31',
    titleKey: 'problems.p31_title',
    descriptionKey: 'problems.p31_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `function  validateEmail(email)  {
  console.log("checking...");
  const  regex  = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  console.log("regex ready");
  return  regex.test(email);
}`,
    goalContent: `function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n', 'ctrl_a', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p32',
    titleKey: 'problems.p32_title',
    descriptionKey: 'problems.p32_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello');
});

module.exports = router;`,
    goalContent: `const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const items = await Item.find({});
    res.json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json({ success: true, data: item });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p33',
    titleKey: 'problems.p33_title',
    descriptionKey: 'problems.p33_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `const [count, setCount] = useState(0);

return <div>{count}</div>;`,
    goalContent: `const [count, setCount] = useState(0);
const [loading, setLoading] = useState(false);

const increment = () => setCount(prev => prev + 1);
const decrement = () => setCount(prev => prev - 1);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p34',
    titleKey: 'problems.p34_title',
    descriptionKey: 'problems.p34_desc',
    type: 'code',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
let f = 6`,
    goalContent: `let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;`,
    requiredKeys: ['ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p35',
    titleKey: 'problems.p35_title',
    descriptionKey: 'problems.p35_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `function  multiply(a,  b)  {
  console.log("entered  multiply");
  const  result  =  a  *  b;
  console.log("result:",  result);
  return  result;
}`,
    goalContent: `function multiply(a, b) {
  const result = a * b;
  return result;
}`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n', 'ctrl_a', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p36',
    titleKey: 'problems.p36_title',
    descriptionKey: 'problems.p36_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `const schema = {
  type: "object",
  properties: {
    name: { type: "string" }
  }
};`,
    goalContent: `const schema = {
  type: "object",
  required: ["name", "email", "age"],
  properties: {
    name: { type: "string", minLength: 1, maxLength: 100 },
    email: { type: "string", format: "email" },
    age: { type: "integer", minimum: 0, maximum: 150 }
  },
  additionalProperties: false
};`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p37',
    titleKey: 'problems.p37_title',
    descriptionKey: 'problems.p37_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `name: my-app
services:
  web:
    image: nginx`,
    goalContent: `name: my-app
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    restart: unless-stopped`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p38',
    titleKey: 'problems.p38_title',
    descriptionKey: 'problems.p38_desc',
    type: 'code',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `const messagge = "Hello"
const useer = "Alice"
const resulltt = messagge + useer`,
    goalContent: `const message = "Hello"
const user = "Alice"
const result = message + user`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p39',
    titleKey: 'problems.p39_title',
    descriptionKey: 'problems.p39_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `describe('Calculator', () => {
  it('adds', () => {
    expect(add(1, 2)).toBe(3);
  });
});`,
    goalContent: `describe('Calculator', () => {
  it('adds two positive numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(10, 20)).toBe(30);
  });

  it('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(10, 20)).toBe(-10);
  });

  it('handles zero correctly', () => {
    expect(add(0, 0)).toBe(0);
    expect(subtract(0, 0)).toBe(0);
  });
});`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p40',
    titleKey: 'problems.p40_title',
    descriptionKey: 'problems.p40_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `def greet(name):
    print(f"Hello {name}")

greet("World")`,
    goalContent: `def greet(name, greeting="Hello", punctuation="!"):
    message = f"{greeting} {name}{punctuation}"
    print(message)
    return message

greet("World")
greet("Alice", greeting="Hi")
greet("Bob", punctuation=".")`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p41',
    titleKey: 'problems.p41_title',
    descriptionKey: 'problems.p41_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `<ul>
  <li>Item  1</li>
  <li>Item  2</li>
  <!-- remove this -->
  <li>Item  3</li>
  <!-- and this -->
  <li>Item  4</li>
</ul>`,
    goalContent: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n', 'ctrl_a', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p42',
    titleKey: 'problems.p42_title',
    descriptionKey: 'problems.p42_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `import React from 'react';

function App() {
  return <div>App</div>;
}

export default App;`,
    goalContent: `import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <div className={theme}>
      <Header onToggleTheme={toggleTheme} />
      <main>Content</main>
      <Footer />
    </div>
  );
}

export default App;`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p43',
    titleKey: 'problems.p43_title',
    descriptionKey: 'problems.p43_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `SELECT name FROM products;`,
    goalContent: `SELECT p.name, p.price, c.name AS category
FROM products p
INNER JOIN categories c ON p.category_id = c.id
WHERE p.price > 100
ORDER BY p.price DESC
LIMIT 10;`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p44',
    titleKey: 'problems.p44_title',
    descriptionKey: 'problems.p44_desc',
    type: 'code',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `// debugg line below
const value = 42;
// another debugg line
const name = "test";`,
    goalContent: `// debug line below
const value = 42;
// another debug line
const name = "test";`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p45',
    titleKey: 'problems.p45_title',
    descriptionKey: 'problems.p45_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `class Logger {
  log(msg) {
    console.log(msg);
  }
}`,
    goalContent: `class Logger {
  constructor(prefix = 'LOG') {
    this.prefix = prefix;
    this.history = [];
  }

  log(msg) {
    const entry = \`[\${this.prefix}] \${new Date().toISOString()}: \${msg}\`;
    this.history.push(entry);
    console.log(entry);
  }

  warn(msg) {
    this.log(\`WARNING: \${msg}\`);
  }

  getHistory() {
    return [...this.history];
  }
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p46',
    titleKey: 'problems.p46_title',
    descriptionKey: 'problems.p46_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `{
  "routes": [
    { "path": "/", "page": "home" }
  ]
}`,
    goalContent: `{
  "routes": [
    { "path": "/", "page": "home" },
    { "path": "/about", "page": "about" },
    { "path": "/contact", "page": "contact" },
    { "path": "/blog/:id", "page": "blogPost" }
  ]
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p47',
    titleKey: 'problems.p47_title',
    descriptionKey: 'problems.p47_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `const  config  = {
  debug:  true,
  // remove this comment
  port:  3000,
  // remove this too
  host:  "localhost",
  verbose:  true
};`,
    goalContent: `const config = {
  debug: true,
  port: 3000,
  host: "localhost",
  verbose: true
};`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n', 'ctrl_a', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p48',
    titleKey: 'problems.p48_title',
    descriptionKey: 'problems.p48_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `function sort(arr) {
  return arr.sort();
}`,
    goalContent: `function sort(arr, options = {}) {
  const { key, order = 'asc' } = options;

  return [...arr].sort((a, b) => {
    const valA = key ? a[key] : a;
    const valB = key ? b[key] : b;
    const result = valA < valB ? -1 : valA > valB ? 1 : 0;
    return order === 'desc' ? -result : result;
  });
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p49',
    titleKey: 'problems.p49_title',
    descriptionKey: 'problems.p49_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `# README

## About
This is a project.`,
    goalContent: `# My Awesome Project

## About
This is a full-stack web application built with React and Node.js.

## Getting Started
1. Clone the repository
2. Run \`npm install\`
3. Run \`npm start\`

## License
MIT`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p50',
    titleKey: 'problems.p50_title',
    descriptionKey: 'problems.p50_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `const useAuth = () => {
  const [user, setUser] = useState(null);
  return { user };
};`,
    goalContent: `const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const data = await api.login(email, password);
      setUser(data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    api.logout();
  };

  return { user, loading, error, login, logout };
};`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p51',
    titleKey: 'problems.p51_title',
    descriptionKey: 'problems.p51_desc',
    type: 'code',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `const items = ["apple", "banana", "cherry"]
const prices = [100, 200, 300]
const total = prices.reduce((a, b) => a + b, 0)
console.log(total)
console.log(items.length)`,
    goalContent: `const items = ["apple", "banana", "cherry"];
const prices = [100, 200, 300];
const total = prices.reduce((a, b) => a + b, 0);
console.log(total);
console.log(items.length);`,
    requiredKeys: ['ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p52',
    titleKey: 'problems.p52_title',
    descriptionKey: 'problems.p52_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `env:
  NODE_ENV: development`,
    goalContent: `env:
  NODE_ENV: production
  PORT: 3000
  DATABASE_URL: postgresql://localhost:5432/mydb
  REDIS_URL: redis://localhost:6379
  JWT_SECRET: your-secret-key
  LOG_LEVEL: info`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p53',
    titleKey: 'problems.p53_title',
    descriptionKey: 'problems.p53_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
}`,
    goalContent: `class Stack {
  constructor(maxSize = Infinity) {
    this.items = [];
    this.maxSize = maxSize;
  }

  push(item) {
    if (this.isFull()) {
      throw new Error('Stack overflow');
    }
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack underflow');
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  isFull() {
    return this.items.length >= this.maxSize;
  }

  size() {
    return this.items.length;
  }
}`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p54',
    titleKey: 'problems.p54_title',
    descriptionKey: 'problems.p54_desc',
    type: 'code',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `import  {  useState  }  from  'react';
import  {  useEffect  }  from  'react';
// TODO: remove
import  {  useRef  }  from  'react';
// TODO: remove this too
import  {  useMemo  }  from  'react';`,
    goalContent: `import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n', 'ctrl_a', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'p55',
    titleKey: 'problems.p55_title',
    descriptionKey: 'problems.p55_desc',
    type: 'code',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `const middleware = (req, res, next) => {
  next();
};`,
    goalContent: `const middleware = (req, res, next) => {
  const start = Date.now();
  const { method, url } = req;

  res.on('finish', () => {
    const duration = Date.now() - start;
    const { statusCode } = res;
    console.log(\`\${method} \${url} \${statusCode} - \${duration}ms\`);
  });

  next();
};`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
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

  // ===== New text problems (t16–t35) =====
  {
    id: 't16',
    titleKey: 'problems.t16_title',
    descriptionKey: 'problems.t16_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `Dear Applicant,
Thank you for applying.
We will review.
HR Team`,
    goalContent: `Dear Applicant,
Thank you for submitting your application to our company.
We will carefully review your resume and get back to you within two weeks.
Best regards,
The HR Team`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't17',
    titleKey: 'problems.t17_title',
    descriptionKey: 'problems.t17_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `Meeting Notes
Date: Jan 15
Topic: Budget
Action: None`,
    goalContent: `Meeting Notes - Q1 Planning
Date: January 15, 2026
Topic: Annual Budget Review and Allocation
Attendees: Marketing, Engineering, Finance
Action Items:
- Finance to prepare revised budget by Feb 1
- Engineering to submit resource requests
- Marketing to provide campaign cost estimates
Next Meeting: January 22, 2026`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't18',
    titleKey: 'problems.t18_title',
    descriptionKey: 'problems.t18_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `The  report  is  ready
Please  review  it  carefully
DRAFT VERSION - DO NOT SHARE
Send  feedback  by  Friday
Thank  you  for  your  time`,
    goalContent: `The report is ready.
Please review it carefully.
Send feedback by Friday.
Thank you for your time.`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n', 'ctrl_a', 'ctrl_k', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't19',
    titleKey: 'problems.t19_title',
    descriptionKey: 'problems.t19_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `Product: Widget
Price: $10
Stock: Yes
Rating: Good`,
    goalContent: `Product: Premium Widget Pro
Price: $29.99
In Stock: Yes (142 units available)
Customer Rating: 4.5/5 (238 reviews)
Category: Electronics > Accessories
Shipping: Free for orders over $50
Warranty: 2-year manufacturer warranty`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't20',
    titleKey: 'problems.t20_title',
    descriptionKey: 'problems.t20_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `Error: something went wrong
Fix: restart
Status: broken`,
    goalContent: `Error: Database connection timeout after 30 seconds
Root Cause: Connection pool exhaustion due to leaked connections
Fix: Restart the database service and clear the connection pool
Status: Resolved - monitoring for recurrence
Resolved By: DevOps Team on Feb 28, 2026`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't21',
    titleKey: 'problems.t21_title',
    descriptionKey: 'problems.t21_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `Helllo everyone.
Wee are happy to announce this newss.
Pleaase join us for the eventt.`,
    goalContent: `Hello everyone.
We are happy to announce this news.
Please join us for the event.`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't22',
    titleKey: 'problems.t22_title',
    descriptionKey: 'problems.t22_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `Weekly Report
Done: coding
Next: testing
Issues: none`,
    goalContent: `Weekly Status Report - Week of Feb 24, 2026
Completed This Week:
- Implemented user authentication module
- Fixed 12 bugs from QA report
- Conducted code review for payment feature
Planned for Next Week:
- Begin integration testing phase
- Write unit tests for new API endpoints
- Deploy staging environment
Blockers/Issues:
- Waiting for API documentation from vendor
- Need additional database access credentials`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't23',
    titleKey: 'problems.t23_title',
    descriptionKey: 'problems.t23_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `TODO:
- task 1
- task 2
- task 3`,
    goalContent: `Sprint Backlog:
- [HIGH] Implement user login page
- [HIGH] Set up database migrations
- [MED] Create API documentation
- [MED] Add input validation
- [LOW] Update README file
- [LOW] Improve error messages`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't24',
    titleKey: 'problems.t24_title',
    descriptionKey: 'problems.t24_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `Welcome to our store
We have great products
Visit us today
Thank you`,
    goalContent: `Welcome to our store.
We have great products.
Visit us today.
Thank you.`,
    requiredKeys: ['ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't25',
    titleKey: 'problems.t25_title',
    descriptionKey: 'problems.t25_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `Interview: John
Date: Monday
Result: Good
Notes: Hire`,
    goalContent: `Interview Summary
Candidate: John Williams
Position: Senior Software Engineer
Date: Monday, February 28, 2026
Interviewers: Sarah (Tech Lead), Mike (Engineering Manager)
Technical Assessment: Excellent problem-solving skills
Communication: Clear and concise explanations
Cultural Fit: Strong alignment with team values
Result: Strong Hire
Recommended Salary Range: $120k - $140k
Start Date: March 15, 2026`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't26',
    titleKey: 'problems.t26_title',
    descriptionKey: 'problems.t26_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `Step  1:  Open  the  app
[DELETE THIS LINE]
Step  2:  Click  settings
[AND THIS LINE]
Step  3:  Save  changes`,
    goalContent: `Step 1: Open the app.
Step 2: Click settings.
Step 3: Save changes.`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n', 'ctrl_a', 'ctrl_k', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't27',
    titleKey: 'problems.t27_title',
    descriptionKey: 'problems.t27_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `Event: Party
When: Saturday
Where: Office
Bring: Nothing`,
    goalContent: `Event: Annual Team Building Party
When: Saturday, March 7, 2026 from 6:00 PM to 10:00 PM
Where: Rooftop Terrace, Building A, 5th Floor
Dress Code: Smart Casual
Please Bring: A dish to share (sign up on the shared spreadsheet)
RSVP: Please confirm your attendance by March 3
Activities: Trivia night, karaoke, and award ceremony
Contact: events@company.com for questions`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't28',
    titleKey: 'problems.t28_title',
    descriptionKey: 'problems.t28_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `Server: web01
CPU: high
Memory: ok
Disk: ok`,
    goalContent: `Server: web01.production
CPU Usage: 87% (Warning: above threshold)
Memory: 62% (4.8GB / 8GB)
Disk: 45% (180GB / 400GB)
Uptime: 42 days, 7 hours
Last Deploy: Feb 27, 2026 14:30 UTC`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't29',
    titleKey: 'problems.t29_title',
    descriptionKey: 'problems.t29_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `The weeather is nice today.
I will go forr a walk.
The park is beautifull.
I love springg time.`,
    goalContent: `The weather is nice today.
I will go for a walk.
The park is beautiful.
I love spring time.`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't30',
    titleKey: 'problems.t30_title',
    descriptionKey: 'problems.t30_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `API: Users
Method: GET
URL: /api/users
Response: JSON`,
    goalContent: `API Documentation: Users Endpoint
Method: GET
URL: /api/v2/users
Headers:
  Authorization: Bearer <token>
  Content-Type: application/json
Query Parameters:
  page (integer, default: 1)
  limit (integer, default: 20)
  sort (string, default: "created_at")
Response: 200 OK
  { "data": [...], "total": 100, "page": 1 }
Error Responses:
  401 Unauthorized
  500 Internal Server Error`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't31',
    titleKey: 'problems.t31_title',
    descriptionKey: 'problems.t31_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `Feedback:
Good job.
Keep it up.`,
    goalContent: `Performance Review Feedback:
Strengths: Excellent technical skills and problem-solving ability.
Areas for Improvement: Could improve documentation habits.
Goals for Next Quarter:
- Lead the migration project
- Mentor two junior developers
- Complete AWS certification
Overall Rating: Exceeds Expectations`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't32',
    titleKey: 'problems.t32_title',
    descriptionKey: 'problems.t32_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'en',
    initialContent: `Chapter  1:  Introduction
PLACEHOLDER - REMOVE
The  story  begins  here.
PLACEHOLDER - ALSO REMOVE
Chapter  2:  The  Journey`,
    goalContent: `Chapter 1: Introduction
The story begins here.
Chapter 2: The Journey`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n', 'ctrl_a', 'ctrl_k'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't33',
    titleKey: 'problems.t33_title',
    descriptionKey: 'problems.t33_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'en',
    initialContent: `Release: v1.0
Changes: bug fixes
Date: TBD`,
    goalContent: `Release Notes: v2.0.0
Release Date: February 28, 2026
New Features:
- Dark mode support across all pages
- Real-time collaboration editing
- Export to PDF and Excel formats
Bug Fixes:
- Fixed login timeout issue on slow connections
- Resolved data sync conflict in multi-user editing
- Corrected timezone display for international users
Breaking Changes:
- API v1 endpoints deprecated (use /api/v2)
- Minimum Node.js version raised to 18
Migration Guide: See docs/migration-v2.md`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't34',
    titleKey: 'problems.t34_title',
    descriptionKey: 'problems.t34_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'en',
    initialContent: `Name: Alice Johnnson
Email: alice@example.comm
Phone: 555-12344
City: New Yorkk`,
    goalContent: `Name: Alice Johnson
Email: alice@example.com
Phone: 555-1234
City: New York`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 't35',
    titleKey: 'problems.t35_title',
    descriptionKey: 'problems.t35_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'en',
    initialContent: `Goal: Learn coding
Plan: Study daily
Duration: 3 months`,
    goalContent: `Goal: Become a full-stack web developer
Learning Plan:
  Month 1: HTML, CSS, and JavaScript fundamentals
  Month 2: React framework and API development
  Month 3: Backend with Node.js and databases
Daily Schedule: 2 hours of study + 1 hour of practice
Resources: Online courses, documentation, and coding challenges
Milestone Check: Build a portfolio project by end of each month`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },

  // ===== New Japanese problems (j17–j41) =====
  {
    id: 'j17',
    titleKey: 'problems.j17_title',
    descriptionKey: 'problems.j17_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'ja',
    initialContent: `ありがとうございまます。
またよろしくおお願いします。
お元気でで。`,
    goalContent: `ありがとうございます。
またよろしくお願いします。
お元気で。`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j18',
    titleKey: 'problems.j18_title',
    descriptionKey: 'problems.j18_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'ja',
    initialContent: `議事録
日時：未定
議題：検討中
結論：なし`,
    goalContent: `議事録
日時：2026年2月28日（金）14:00〜15:30
場所：第3会議室
議題：新製品の開発スケジュールについて
出席者：鈴木部長、田中、佐藤、山田
結論：3月末までにプロトタイプを完成させる
次回：2026年3月7日（金）14:00`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j19',
    titleKey: 'problems.j19_title',
    descriptionKey: 'problems.j19_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `お知らせ
休みます。
以上。`,
    goalContent: `社内連絡：年末年始休業のお知らせ
各位
年末年始の休業期間を下記のとおりお知らせいたします。
休業期間：12月29日（月）〜1月3日（土）
営業開始：1月5日（月）より通常営業
緊急連絡先：090-XXXX-XXXX（管理部 鈴木）
ご不便をおかけしますが、何卒よろしくお願いいたします。`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j20',
    titleKey: 'problems.j20_title',
    descriptionKey: 'problems.j20_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'ja',
    initialContent: `報告書
【下書き】確認用
売上：　　100万円
【削除予定】メモ
利益：　　20万円`,
    goalContent: `報告書
売上：100万円
利益：20万円`,
    requiredKeys: ['ctrl_n', 'ctrl_a', 'ctrl_k', 'ctrl_f', 'ctrl_d'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j21',
    titleKey: 'problems.j21_title',
    descriptionKey: 'problems.j21_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `面接記録
名前：山田
結果：合格`,
    goalContent: `面接記録
候補者名：山田太郎
応募職種：フロントエンドエンジニア
面接日：2026年2月28日
面接官：佐藤マネージャー、田中リーダー
技術評価：React、TypeScriptの実務経験が豊富。設計力も高い。
コミュニケーション：論理的で分かりやすい説明ができる。
総合評価：合格（即戦力として期待）
推奨年収：600万〜700万円
入社希望日：2026年4月1日`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j22',
    titleKey: 'problems.j22_title',
    descriptionKey: 'problems.j22_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'ja',
    initialContent: `今日の予定
朝ごはんを食べる
仕事に行く
帰宅する`,
    goalContent: `今日の予定
朝ごはんを食べる。
仕事に行く。
帰宅する。`,
    requiredKeys: ['ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j23',
    titleKey: 'problems.j23_title',
    descriptionKey: 'problems.j23_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'ja',
    initialContent: `商品情報
名前：ペン
価格：100円`,
    goalContent: `商品情報
商品名：多機能ボールペン（3色+シャープペン）
価格：550円（税込）
在庫：あり（残り42本）
カテゴリ：文房具 > 筆記具
おすすめポイント：握りやすいグリップで長時間の筆記でも疲れにくい。`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j24',
    titleKey: 'problems.j24_title',
    descriptionKey: 'problems.j24_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `週報
やったこと：作業
来週やること：作業
課題：なし`,
    goalContent: `週次報告書（2月24日〜2月28日）
担当者：田中太郎
今週の実績：
・ユーザー認証機能の実装完了
・QAチームから報告されたバグ8件の修正
・新規APIのコードレビュー実施
来週の予定：
・結合テストの開始
・本番環境へのデプロイ準備
・技術ドキュメントの整備
課題・リスク：
・外部APIの仕様書が未到着（ベンダーに催促済み）
・テスト環境のデータベース容量が不足気味`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j25',
    titleKey: 'problems.j25_title',
    descriptionKey: 'problems.j25_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'ja',
    initialContent: `お知らせ
※テスト※
新しい　　サービスを　　開始しました
※テスト2※
ご利用　　お待ちして　　おります`,
    goalContent: `お知らせ
新しいサービスを開始しました。
ご利用お待ちしております。`,
    requiredKeys: ['ctrl_n', 'ctrl_a', 'ctrl_k', 'ctrl_f', 'ctrl_d', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j26',
    titleKey: 'problems.j26_title',
    descriptionKey: 'problems.j26_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'typing',
    language: 'ja',
    initialContent: `連絡先
電話：090
住所：東京`,
    goalContent: `連絡先
電話：090-1234-5678
住所：東京都渋谷区神宮前1-2-3
メール：tanaka@example.co.jp`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j27',
    titleKey: 'problems.j27_title',
    descriptionKey: 'problems.j27_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `企画書
タイトル：新企画
目的：売上向上
予算：未定`,
    goalContent: `企画提案書
タイトル：オンライン学習プラットフォームの立ち上げ
目的：既存顧客のエンゲージメント向上と新規顧客獲得
ターゲット：20代〜30代のIT業界従事者
予算：初期投資500万円、月額運用費50万円
スケジュール：
・企画承認：3月末
・開発開始：4月
・ベータ版リリース：7月
・正式リリース：9月
期待効果：年間売上20%増加、顧客満足度15%向上`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j28',
    titleKey: 'problems.j28_title',
    descriptionKey: 'problems.j28_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'ja',
    initialContent: `旅行計画
行き先：京都
日数：2日`,
    goalContent: `旅行計画
行き先：京都・奈良
日程：3月20日（金）〜22日（日）2泊3日
1日目：京都駅着、清水寺、祇園散策
2日目：金閣寺、嵐山、竹林の小径
3日目：奈良公園、東大寺、帰路
予算：一人あたり約5万円（交通費・宿泊費込み）`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j29',
    titleKey: 'problems.j29_title',
    descriptionKey: 'problems.j29_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'ja',
    initialContent: `おはようございまます
いい天気ですすね
今日も頑張りまましょう
よろしくおお願いします`,
    goalContent: `おはようございます。
いい天気ですね。
今日も頑張りましょう。
よろしくお願いします。`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j30',
    titleKey: 'problems.j30_title',
    descriptionKey: 'problems.j30_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `障害報告
内容：エラー発生
影響：あり
対応：調査中`,
    goalContent: `障害報告書
発生日時：2026年2月28日 10:15
検知方法：監視アラート（Datadog）
障害内容：決済サービスにて502エラーが断続的に発生
影響範囲：全ユーザーの決済処理に影響（約500件/時間）
原因：ロードバランサーの設定変更に伴う接続先の不整合
対応内容：
・10:20 障害検知、調査開始
・10:35 原因特定、設定のロールバック実施
・10:45 サービス復旧確認
再発防止策：設定変更時のチェックリスト導入とステージング環境での事前検証を義務化`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j31',
    titleKey: 'problems.j31_title',
    descriptionKey: 'problems.j31_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'ja',
    initialContent: `本の感想
タイトル：良い本
感想：面白かった`,
    goalContent: `読書感想文
タイトル：「プログラマーの思考法」
著者：田中一郎
感想：ソフトウェア設計の本質について深く考えさせられた一冊。
特に「小さく作って素早く失敗する」という考え方が印象的だった。
日々の開発業務にすぐ活かせる実践的なアドバイスが多い。
おすすめ度：★★★★☆（5段階中4）`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j32',
    titleKey: 'problems.j32_title',
    descriptionKey: 'problems.j32_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'ja',
    initialContent: `手順書
1.　　アプリを　　開く
【テスト用】削除してください
2.　　設定を　　変更する
【テスト用】これも削除
3.　　保存　　する`,
    goalContent: `手順書
1. アプリを開く。
2. 設定を変更する。
3. 保存する。`,
    requiredKeys: ['ctrl_n', 'ctrl_a', 'ctrl_k', 'ctrl_f', 'ctrl_d', 'ctrl_e'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j33',
    titleKey: 'problems.j33_title',
    descriptionKey: 'problems.j33_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `リリースノート
バージョン：1.0
変更点：修正`,
    goalContent: `リリースノート v2.0.0
リリース日：2026年2月28日
新機能：
・ダークモード対応（全画面）
・リアルタイム共同編集機能
・PDF/CSVエクスポート機能
バグ修正：
・ログイン時のタイムアウトエラーを修正
・マルチユーザー編集時のデータ競合を解消
・国際対応のタイムゾーン表示を修正
破壊的変更：
・API v1のエンドポイントは非推奨（/api/v2をご利用ください）
・Node.jsの最低バージョンが18に変更`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j34',
    titleKey: 'problems.j34_title',
    descriptionKey: 'problems.j34_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'typing',
    language: 'ja',
    initialContent: `メニュー
・ラーメン
・カレー`,
    goalContent: `本日のメニュー
・醤油ラーメン 800円
・チキンカレー 750円
・日替わり定食 900円
・サラダセット 350円`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j35',
    titleKey: 'problems.j35_title',
    descriptionKey: 'problems.j35_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'ja',
    initialContent: `健康メモ
体重：70kg
運動：なし`,
    goalContent: `健康管理メモ（2月28日）
体重：68.5kg（先月比 -1.5kg）
血圧：125/82
運動：ジョギング30分、ストレッチ15分
食事：朝食（パン、サラダ）、昼食（定食）、夕食（魚、野菜）
睡眠：7時間（23:00〜6:00）
目標：3月末までに66kgを目指す`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j36',
    titleKey: 'problems.j36_title',
    descriptionKey: 'problems.j36_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `お客様へ
ご注文ありがとうございます。
発送します。`,
    goalContent: `お客様各位
この度はご注文いただき、誠にありがとうございます。
ご注文内容：多機能ボールペン×3本
合計金額：1,650円（税込・送料無料）
お届け予定日：3月3日（火）
配送業者：ヤマト運輸（追跡番号：1234-5678-9012）
ご不明な点がございましたら、お気軽にお問い合わせください。
カスタマーサポート：support@example.co.jp`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j37',
    titleKey: 'problems.j37_title',
    descriptionKey: 'problems.j37_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'shortcut',
    language: 'ja',
    initialContent: `タスクリスト
【完了】テスト用タスク
・資料作成
【完了】これも削除
・プレゼン準備
【完了】最後の削除対象
・レビュー対応`,
    goalContent: `タスクリスト
・資料作成
・プレゼン準備
・レビュー対応`,
    requiredKeys: ['ctrl_n', 'ctrl_a', 'ctrl_k', 'ctrl_p'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j38',
    titleKey: 'problems.j38_title',
    descriptionKey: 'problems.j38_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'ja',
    initialContent: `山田太郎
東京都港区
電話：090-1234-56788
メール：yamada@example.comm`,
    goalContent: `山田太郎
東京都港区
電話：090-1234-5678
メール：yamada@example.com`,
    requiredKeys: ['ctrl_n', 'ctrl_e', 'ctrl_h'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j39',
    titleKey: 'problems.j39_title',
    descriptionKey: 'problems.j39_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'ja',
    initialContent: `引き継ぎ
担当：田中
内容：業務`,
    goalContent: `業務引き継ぎ書
前任者：田中太郎
後任者：山田花子
引き継ぎ日：2026年3月15日
担当業務：
・顧客管理システムの運用保守（毎日の監視・月次レポート作成）
・社内ヘルプデスク対応（問い合わせは平均1日5件程度）
・サーバーバックアップの確認（毎朝9:00にチェック）
注意事項：
・毎月第1月曜日にシステムメンテナンスあり
・緊急時は鈴木部長（内線1234）に連絡
関連資料：共有ドライブの「引き継ぎ」フォルダを参照`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j40',
    titleKey: 'problems.j40_title',
    descriptionKey: 'problems.j40_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'ja',
    initialContent: `映画感想
映画名：良い映画
感想：楽しかった`,
    goalContent: `映画レビュー
作品名：「未来への一歩」
監督：佐藤誠一
ジャンル：SF・ヒューマンドラマ
評価：★★★★★（5段階中5）
感想：近未来の東京を舞台に、AIと人間の共存を描いた傑作。
映像美と音楽が素晴らしく、ラストシーンは涙なしには見られない。
今年見た映画の中で間違いなくベスト。`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'j41',
    titleKey: 'problems.j41_title',
    descriptionKey: 'problems.j41_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'ja',
    initialContent: `お知らせ
明日は休みです
会議はありません
ゆっくり休んでください`,
    goalContent: `お知らせ
明日は休みです。
会議はありません。
ゆっくり休んでください。`,
    requiredKeys: ['ctrl_e', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },

  // ===== New mixed-language problems (m5–m14) =====
  {
    id: 'm5',
    titleKey: 'problems.m5_title',
    descriptionKey: 'problems.m5_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'mixed',
    initialContent: `Project: App
Status: OK
Lead: Tanaka`,
    goalContent: `Project: モバイルアプリ開発 (Mobile App Development)
Status: In Progress / 進行中
Lead: 田中太郎 (Taro Tanaka)
Deadline: 2026年3月31日 (March 31, 2026)
Team Size: 5名 (5 members)`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm6',
    titleKey: 'problems.m6_title',
    descriptionKey: 'problems.m6_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'mixed',
    initialContent: `Error Log
Time: 10:00
Message: fail`,
    goalContent: `Error Log / エラーログ
Time / 時刻: 2026-02-28 10:15:30 JST
Error Message: Connection timeout after 30 seconds
エラーメッセージ：接続タイムアウト（30秒）
Severity / 重要度: Critical / 緊急
Affected Service: Payment API / 決済APIサービス
Action Required: Restart the connection pool
対応内容：コネクションプールの再起動が必要`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm7',
    titleKey: 'problems.m7_title',
    descriptionKey: 'problems.m7_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'mixed',
    initialContent: `Menu
Coffee: 300
Tea: 250`,
    goalContent: `Menu / メニュー
Coffee / コーヒー: ¥350
Green Tea / 抹茶ラテ: ¥400
Cake Set / ケーキセット: ¥800
Today's Special / 本日のおすすめ: Tiramisu / ティラミス ¥550`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm8',
    titleKey: 'problems.m8_title',
    descriptionKey: 'problems.m8_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'mixed',
    initialContent: `// Config
const lang = "ja";
// settings`,
    goalContent: `// 設定ファイル (Configuration)
const lang = "ja"; // 日本語 (Japanese)
const timezone = "Asia/Tokyo"; // タイムゾーン
const dateFormat = "YYYY年MM月DD日"; // 日付フォーマット
const currency = "JPY"; // 通貨 (Currency)
// デフォルト設定 (Default Settings)
const defaults = {
  theme: "dark", // テーマ
  fontSize: 14, // フォントサイズ
};`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm9',
    titleKey: 'problems.m9_title',
    descriptionKey: 'problems.m9_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'typing',
    language: 'mixed',
    initialContent: `Welcome!
ようこそ！
Let's start.`,
    goalContent: `Welcome to our service!
私たちのサービスへようこそ！
Let's get started together.
一緒に始めましょう。`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm10',
    titleKey: 'problems.m10_title',
    descriptionKey: 'problems.m10_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'mixed',
    initialContent: `Name: Sato
Skill: coding`,
    goalContent: `Name / 名前: 佐藤花子 (Hanako Sato)
Skills / スキル:
- React / TypeScript (3 years / 3年)
- Python / Django (2 years / 2年)
- AWS (1 year / 1年)
Certification / 資格: AWS Solutions Architect`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm11',
    titleKey: 'problems.m11_title',
    descriptionKey: 'problems.m11_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'mixed',
    initialContent: `Meeting
Topic: plan
Time: TBD`,
    goalContent: `Meeting Agenda / 会議アジェンダ
Topic / 議題: Q2 Product Roadmap / 第2四半期プロダクトロードマップ
Date / 日時: March 5, 2026 / 2026年3月5日 14:00-15:30
Location / 場所: Conference Room A / A会議室
Attendees / 参加者:
- Tanaka (PM / プロダクトマネージャー)
- Suzuki (Tech Lead / テックリード)
- Yamada (Designer / デザイナー)
Pre-read / 事前資料: docs/q2-roadmap.pdf`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm12',
    titleKey: 'problems.m12_title',
    descriptionKey: 'problems.m12_desc',
    type: 'text',
    difficulty: 'medium',
    category: 'typing',
    language: 'mixed',
    initialContent: `Address:
Tokyo, Japan`,
    goalContent: `Address / 住所:
〒150-0001
東京都渋谷区神宮前1-2-3
Jinguumae 1-2-3, Shibuya-ku
Tokyo 150-0001, Japan
Phone / 電話: +81-3-1234-5678`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm13',
    titleKey: 'problems.m13_title',
    descriptionKey: 'problems.m13_desc',
    type: 'text',
    difficulty: 'easy',
    category: 'shortcut',
    language: 'mixed',
    initialContent: `Thank  you  /  ありがとう
See  you  /  またね
Good  bye  /  さようなら`,
    goalContent: `Thank you / ありがとう
See you / またね
Good bye / さようなら`,
    requiredKeys: ['ctrl_f', 'ctrl_d', 'ctrl_n'],
    cursorStart: { row: 0, col: 0 },
  },
  {
    id: 'm14',
    titleKey: 'problems.m14_title',
    descriptionKey: 'problems.m14_desc',
    type: 'text',
    difficulty: 'hard',
    category: 'typing',
    language: 'mixed',
    initialContent: `FAQ
Q: How to use?
A: Click button.`,
    goalContent: `FAQ / よくある質問
Q1: How do I create an account? / アカウントの作成方法は？
A1: Click "Sign Up" and enter your email. / 「新規登録」をクリックしてメールアドレスを入力してください。
Q2: How do I reset my password? / パスワードのリセット方法は？
A2: Go to Settings > Security > Reset Password. / 設定 > セキュリティ > パスワードリセットへ進んでください。
Q3: Is there a mobile app? / モバイルアプリはありますか？
A3: Yes, available on iOS and Android. / はい、iOSとAndroidで利用可能です。`,
    requiredKeys: ['ctrl_n', 'ctrl_p', 'ctrl_a', 'ctrl_e', 'ctrl_k', 'ctrl_f', 'ctrl_b'],
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
