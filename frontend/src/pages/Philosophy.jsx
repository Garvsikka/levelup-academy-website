const initialNodes = [
  { 
    id: 'root', 
    type: 'custom', 
    data: { label: 'THE ICONIC LEVELUP PHILOSOPHY', subtext: 'Core Mission' }, 
    position: { x: 250, y: 200 } 
  },
  { 
    id: '1', 
    type: 'custom', 
    data: { 
      label: 'ROOTED IN VALUES & CHARACTER', 
      subtext: 'Every class begins with Gayatri Mantra. Education without values is incomplete.' 
    }, 
    position: { x: 0, y: 0 } 
  },
  { 
    id: '2', 
    type: 'custom', 
    data: { 
      label: '100X YOUR FAMILY WEALTH', 
      subtext: 'Academic success is the passport to financial success and family goals.' 
    }, 
    position: { x: 500, y: 0 } 
  },
  { 
    id: '3', 
    type: 'custom', 
    data: { 
      label: 'HONOR YOUR SCHOOL TEACHERS', 
      subtext: 'The foundation of education. We complement schools, never replace them.' 
    }, 
    position: { x: 600, y: 200 } 
  },
  { 
    id: '4', 
    type: 'custom', 
    data: { 
      label: 'REPETITION IS THE MOTHER OF LEARNING', 
      subtext: '10 mins formula test every class. Mastery comes from repetition, not blind practice.' 
    }, 
    position: { x: 500, y: 450 } 
  },
  { 
    id: '5', 
    type: 'custom', 
    data: { 
      label: 'GAMIFICATION & CINEMATIC TEACHING', 
      subtext: 'Educational games where problems unlock levels (e.g., ChatGPT/Self-driving car logic).' 
    }, 
    position: { x: 0, y: 450 } 
  },
  { 
    id: '6', 
    type: 'custom', 
    data: { 
      label: 'PERSONALITY DEVELOPMENT', 
      subtext: 'Communication skills and confidence are built into the LevelUp curriculum.' 
    }, 
    position: { x: -100, y: 200 } 
  },
];

const initialEdges = [
  { id: 'e-root-1', source: 'root', target: '1', animated: true },
  { id: 'e-root-2', source: 'root', target: '2', animated: true },
  { id: 'e-root-3', source: 'root', target: '3', animated: true },
  { id: 'e-root-4', source: 'root', target: '4', animated: true },
  { id: 'e-root-5', source: 'root', target: '5', animated: true },
  { id: 'e-root-6', source: 'root', target: '6', animated: true },
];