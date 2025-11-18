// Placement test questions and helpers

export const LEVEL_WEIGHT = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
  C2: 6,
}

export const CATEGORY_LABELS = {
  grammar: 'Gramatyka',
  vocabulary: 'Słownictwo',
  collocations: 'Koloskacje',
  structure: 'Struktury',
  usage: 'Użycie języka',
}

function normalize(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[“”"']/g, '')
    .replace(/[.,!?;:()]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function normalizeAnswer(a) {
  return normalize(a)
}

export function getCorrectAnswerText(q) {
  if (q.type === 'mcq') {
    return q.options[q.answerIndex]
  }
  if (q.type === 'text') {
    // Prefer the first provided answer as canonical display
    return q.acceptableAnswers?.[0] || ''
  }
  return ''
}

export function evaluateAnswer(q, userAnswer) {
  if (q.type === 'mcq') {
    return Number(userAnswer) === Number(q.answerIndex)
  }
  if (q.type === 'text') {
    const ua = normalize(userAnswer)
    const accepted = (q.acceptableAnswers || []).map(normalize)
    if (accepted.includes(ua)) return true
    // Optional patterns (regex strings) for flexible acceptance
    if (q.acceptablePatterns && q.acceptablePatterns.length) {
      return q.acceptablePatterns.some((pattern) => {
        try {
          const re = new RegExp(pattern, 'i')
          return re.test((userAnswer || '').trim())
        } catch {
          return false
        }
      })
    }
    return false
  }
  return false
}

export const QUESTIONS = [
  // A1 (7)
  {
    id: 1,
    level: 'A1',
    category: 'grammar',
    type: 'mcq',
    question: 'Hello, how ___ you?',
    options: ['are', 'is', 'do', 'am'],
    answerIndex: 0,
  },
  {
    id: 2,
    level: 'A1',
    category: 'grammar',
    type: 'mcq',
    question: 'I ___ a student.',
    options: ['am', 'is', 'are', 'be'],
    answerIndex: 0,
  },
  {
    id: 3,
    level: 'A1',
    category: 'grammar',
    type: 'mcq',
    question: 'Wybierz poprawny przedimek: I have ___ apple.',
    options: ['a', 'an', 'the', '—'],
    answerIndex: 1,
  },
  {
    id: 4,
    level: 'A1',
    category: 'vocabulary',
    type: 'mcq',
    question: "What's the plural of “child”?",
    options: ['childs', 'children', 'childes', 'childer'],
    answerIndex: 1,
  },
  {
    id: 5,
    level: 'A1',
    category: 'vocabulary',
    type: 'mcq',
    question: 'Which is a weekday?',
    options: ['Saturday', 'May', 'blue', 'Paris'],
    answerIndex: 0,
  },
  {
    id: 6,
    level: 'A1',
    category: 'grammar',
    type: 'mcq',
    question: 'The cat is ___ the table.',
    options: ['in', 'on', 'at', 'under'],
    answerIndex: 3,
  },
  {
    id: 7,
    level: 'A1',
    category: 'vocabulary',
    type: 'text',
    question: 'Napisz po angielsku: „piętnaście”.',
    acceptableAnswers: ['fifteen'],
  },

  // A2 (7)
  {
    id: 8,
    level: 'A2',
    category: 'grammar',
    type: 'mcq',
    question: 'She ___ to music every evening.',
    options: ['listen', 'listens', 'is listen', 'listened'],
    answerIndex: 1,
  },
  {
    id: 9,
    level: 'A2',
    category: 'grammar',
    type: 'mcq',
    question: 'We have lived here ___ 2019.',
    options: ['since', 'for', 'from', 'by'],
    answerIndex: 0,
  },
  {
    id: 10,
    level: 'A2',
    category: 'grammar',
    type: 'mcq',
      question: 'Complete the sentence: "Yesterday I ______ to the supermarket."',
      options: ["go", "went", "gone", "going"],
    answerIndex: 0,
  },
  {
    id: 11,
    level: 'A2',
    category: 'vocabulary',
    type: 'mcq',
    question: "Which word is opposite of 'expensive'?",
    options: ['cheap', 'cheaply', 'low', 'poor'],
    answerIndex: 0,
  },
  {
    id: 12,
    level: 'A2',
    category: 'grammar',
    type: 'mcq',
    question: "Complete: There isn't ___ milk left.",
    options: ['some', 'any', 'much', 'a'],
    answerIndex: 1,
  },
  {
    id: 13,
    level: 'A2',
    category: 'grammar',
    type: 'text',
    question: "Write the comparative of 'happy'.",
    acceptableAnswers: ['happier'],
  },
  {
    id: 14,
    level: 'A2',
    category: 'grammar',
    type: 'mcq',
    question: '___ you ever been to London?',
    options: ['Did', 'Have', 'Are', 'Do'],
    answerIndex: 1,
  },

  // B1 (8)
  {
    id: 15,
    level: 'B1',
    category: 'grammar',
    type: 'mcq',
    question: "If it ___ tomorrow, we'll stay at home.",
    options: ['rains', 'will rain', 'rained', 'is raining'],
    answerIndex: 0,
  },
  {
    id: 16,
    level: 'B1',
    category: 'grammar',
    type: 'mcq',
    question: 'I wish I ___ more time.',
    options: ['have', 'had', 'would have', 'has'],
    answerIndex: 1,
  },
  {
    id: 17,
    level: 'B1',
    category: 'grammar',
    type: 'mcq',
    question: 'Reported speech: "I don’t like it," she said. She said she ___ it.',
    options: ["doesn't like", "didn't like", "hasn't liked", "wouldn't like"],
    answerIndex: 1,
  },
  {
    id: 18,
    level: 'B1',
    category: 'collocations',
    type: 'mcq',
    question: 'Please ___ the form.',
    options: ['fill up', 'fill in', 'fill on', 'fill'],
    answerIndex: 1,
  },
  {
    id: 19,
    level: 'B1',
    category: 'grammar',
    type: 'mcq',
    question: "I'm interested ___ learning Spanish.",
    options: ['for', 'in', 'on', 'about'],
    answerIndex: 1,
  },
  {
    id: 20,
    level: 'B1',
    category: 'grammar',
    type: 'text',
    question: "Past participle of 'write'?",
    acceptableAnswers: ['written'],
  },
  {
    id: 21,
    level: 'B1',
    category: 'grammar',
    type: 'mcq',
    question: "It's the first time I ___ sushi.",
    options: ['eat', 'ate', 'have eaten', 'had eaten'],
    answerIndex: 2,
  },
  {
    id: 22,
    level: 'B1',
    category: 'collocations',
    type: 'mcq',
    question: 'Choose the correct collocation: ___ a decision.',
    options: ['make', 'do', 'take', 'have'],
    answerIndex: 0,
  },

  // B2 (8)
  {
    id: 23,
    level: 'B2',
    category: 'grammar',
    type: 'mcq',
    question: 'The film was so ___ that we left halfway through.',
    options: ['bored', 'boring', 'bore', 'boringly'],
    answerIndex: 1,
  },
  {
    id: 24,
    level: 'B2',
    category: 'structure',
    type: 'mcq',
    question: 'Inversion: Rarely ___ seen such chaos.',
    options: ['I have', 'have I', 'I had', 'had I'],
    answerIndex: 1,
  },
  {
    id: 25,
    level: 'B2',
    category: 'usage',
    type: 'mcq',
    question: 'Word formation: His ___ to detail is impressive.',
    options: ['attentiveness', 'attention', 'attentive', 'attend'],
    answerIndex: 1,
  },
  {
    id: 26,
    level: 'B2',
    category: 'grammar',
    type: 'mcq',
    question: 'The book, ___ I bought yesterday, is fascinating.',
    options: ['which', 'that', 'what', 'where'],
    answerIndex: 0,
  },
  {
    id: 27,
    level: 'B2',
    category: 'grammar',
    type: 'mcq',
    question: 'If I ___ harder, I would have passed.',
    options: ['studied', 'had studied', 'study', 'have studied'],
    answerIndex: 1,
  },
  {
    id: 28,
    level: 'B2',
    category: 'usage',
    type: 'mcq',
    question: 'Choose the correct preposition: dependent ___ context.',
    options: ['on', 'of', 'at', 'for'],
    answerIndex: 0,
  },
  {
    id: 29,
    level: 'B2',
    category: 'usage',
    type: 'mcq',
    question: 'We need a more ___ approach.',
    options: ['holistically', 'holistic', 'holistics', 'holist'],
    answerIndex: 1,
  },
  {
    id: 30,
    level: 'B2',
    category: 'structure',
    type: 'mcq',
    question: 'Hardly had we arrived ___ it started to rain.',
    options: ['when', 'than', 'that', 'then'],
    answerIndex: 0,
  },

  // C1 (5)
  {
    id: 31,
    level: 'C1',
    category: 'usage',
    type: 'mcq',
    question: 'The committee agreed to ___ the decision pending further review.',
    options: ['defer', 'differ', 'defy', 'defend'],
    answerIndex: 0,
  },
  {
    id: 32,
    level: 'C1',
    category: 'structure',
    type: 'mcq',
    question: 'Choose the correctly punctuated sentence.',
    options: [
      'The CEO, however, declined to comment.',
      'The CEO however declined to comment.',
      'The CEO however, declined to comment.',
      'The CEO; however declined to comment.',
    ],
    answerIndex: 0,
  },
  {
    id: 33,
    level: 'C1',
    category: 'structure',
    type: 'mcq',
    question: 'Cleft sentence: It was ___ that prompted the change.',
    options: ['the budget constraints', 'constraints budget', 'the budget constraint', 'the constrained budget'],
    answerIndex: 0,
  },
  {
    id: 34,
    level: 'C1',
    category: 'vocabulary',
    type: 'mcq',
    question: 'He spoke with such ___.',
    options: ['eloquence', 'eloquent', 'eloquently', 'eloquency'],
    answerIndex: 0,
  },
  {
    id: 35,
    level: 'C1',
    category: 'vocabulary',
    type: 'text',
    question: 'Podaj formalny synonim słowa „begin/start”.',
    acceptableAnswers: ['commence'],
  },

  // C2 (5)
  {
    id: 36,
    level: 'C2',
    category: 'structure',
    type: 'mcq',
    question: 'No sooner ___ than the market reacted adversely.',
    options: [
      'had the announcement been made',
      'was the announcement made',
      'had been the announcement made',
      'has the announcement been made',
    ],
    answerIndex: 0,
  },
  {
    id: 37,
    level: 'C2',
    category: 'vocabulary',
    type: 'mcq',
    question: 'Her remarks were so recondite as to be almost ___.',
    options: ['impenetrable', 'penetrative', 'penetrated', 'penetrant'],
    answerIndex: 0,
  },
  {
    id: 38,
    level: 'C2',
    category: 'grammar',
    type: 'text',
    question: 'Error identification: Which word is incorrect in the sentence? "Were I be informed, I would have acted differently."',
    acceptableAnswers: ['be'],
  },
  {
    id: 39,
    level: 'C2',
    category: 'collocations',
    type: 'mcq',
    question: 'He was exonerated ___ any involvement.',
    options: ['of', 'from', 'off', 'for'],
    answerIndex: 0,
  },
  {
    id: 40,
    level: 'C2',
    category: 'structure',
    type: 'text',
    question: 'Rewrite using inversion: "Only after the data had been vetted, the report was released."',
    acceptableAnswers: [
      'only after the data had been vetted was the report released',
      'only after the data had been vetted, was the report released',
    ],
    acceptablePatterns: [
      '^\\s*only\\s+after\\s+the\\s+data\\s+had\\s+been\\s+vetted\\s*,?\\s+was\\s+the\\s+report\\s+released\\s*\\.?\\s*$',
    ],
  },
]

// Utility to map weighted score fraction to estimated CEFR
export function estimateLevelByWeight(fraction) {
  if (fraction < 0.2) return 'A1'
  if (fraction < 0.35) return 'A2'
  if (fraction < 0.5) return 'B1'
  if (fraction < 0.7) return 'B2'
  if (fraction < 0.85) return 'C1'
  return 'C2'
}
