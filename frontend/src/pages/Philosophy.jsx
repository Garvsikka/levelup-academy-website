import React from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { 
    id: 'root', 
    type: 'default', 
    data: { label: 'THE ICONIC LEVELUP PHILOSOPHY' }, 
    position: { x: 250, y: 250 },
    style: { background: '#000', color: '#FFD700', border: '2px solid #FFD700', fontWeight: 'bold' }
  },
  { 
    id: '1', 
    data: { label: 'ROOTED IN VALUES: Gayatri Mantra & Character' }, 
    position: { x: 0, y: 50 } 
  },
  { 
    id: '2', 
    data: { label: '100X YOUR FAMILY WEALTH: Academic Passport' }, 
    position: { x: 500, y: 50 } 
  },
  { 
    id: '3', 
    data: { label: 'HONOR YOUR SCHOOL TEACHERS: Foundation' }, 
    position: { x: 650, y: 250 } 
  },
  { 
    id: '4', 
    data: { label: 'REPETITION: 10 Min Formula Tests' }, 
    position: { x: 500, y: 450 } 
  },
  { 
    id: '5', 
    data: { label: 'GAMIFICATION: Cinematic AI Teaching' }, 
    position: { x: 0, y: 450 } 
  },
  { 
    id: '6', 
    data: { label: 'PERSONALITY: Confidence & Communication' }, 
    position: { x: -150, y: 250 } 
  }
];

const initialEdges = [
  { id: 'e-root-1', source: 'root', target: '1', animated: true, style: { stroke: '#FFD700' } },
  { id: 'e-root-2', source: 'root', target: '2', animated: true, style: { stroke: '#FFD700' } },
  { id: 'e-root-3', source: 'root', target: '3', animated: true, style: { stroke: '#FFD700' } },
  { id: 'e-root-4', source: 'root', target: '4', animated: true, style: { stroke: '#FFD700' } },
  { id: 'e-root-5', source: 'root', target: '5', animated: true, style: { stroke: '#FFD700' } },
  { id: 'e-root-6', source: 'root', target: '6', animated: true, style: { stroke: '#FFD700' } },
];

// CRITICAL: This "export default" was what Vercel was crying about.
export default function Philosophy() {
  return (
    <div className="pt-24 h-screen bg-black w-full">
      <div className="h-full w-full">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          fitView
          style={{ background: '#000' }}
        >
          <Background color="#222" gap={20} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}