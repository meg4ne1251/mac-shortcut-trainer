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
];

/** All problems indexed by type */
export const problemsByType = {
  code: codeProblems,
  text: textProblems,
};

/** All problems combined (for backward compatibility) */
export const problems: Problem[] = [...codeProblems, ...textProblems];
