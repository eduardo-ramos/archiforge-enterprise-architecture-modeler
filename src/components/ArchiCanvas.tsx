import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  Background,
  MiniMap,
  useReactFlow,
  Connection,
} from 'reactflow';

import { ArchiElementType } from '../types';
import { getValidRelationshipType } from '../lib/archimate';
import CustomNode from './CustomNode';

const initialNodes: Node[] = [
  { id: '1', type: 'custom', position: { x: 250, y: 5 }, data: { type: ArchiElementType.BUSINESS_PROCESS, name: 'Handle Claim' } },
  { id: '2', type: 'custom', position: { x: 250, y: 200 }, data: { type: ArchiElementType.APPLICATION_COMPONENT, name: 'Claims System' } },
  { id: '3', type: 'custom', position: { x: 50, y: 200 }, data: { type: ArchiElementType.BUSINESS_ACTOR, name: 'Claims Agent' } },
  { id: '4', type: 'custom', position: { x: 50, y: 5 }, data: { type: ArchiElementType.BUSINESS_ROLE, name: 'Processor' } },
];
const initialEdges: Edge[] = [];

const nodeTypes = { custom: CustomNode };

const CustomControls = () => {
    const { zoomIn, zoomOut, fitView } = useReactFlow();

    return (
        <div className="absolute bottom-4 right-4 z-10 bg-white shadow-lg rounded-md border border-gray-200 flex flex-col">
            <button onClick={() => zoomIn()} title="Zoom In" className="p-2 border-b border-gray-200 hover:bg-gray-100 transition-colors" aria-label="Zoom In">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
            <button onClick={() => zoomOut()} title="Zoom Out" className="p-2 border-b border-gray-200 hover:bg-gray-100 transition-colors" aria-label="Zoom Out">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
            </button>
            <button onClick={() => fitView()} title="Fit View" className="p-2 hover:bg-gray-100 transition-colors" aria-label="Fit View">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25-11.25v4.5m0-4.5h-4.5m4.5 0L15 9m4.5 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                </svg>
            </button>
        </div>
    );
};

const ArchiCanvas: React.FC = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const { project } = useReactFlow();

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect: OnConnect = useCallback(
    (connection: Connection) => {
      const sourceNode = nodes.find(n => n.id === connection.source);
      const targetNode = nodes.find(n => n.id === connection.target);

      if (sourceNode && targetNode) {
        const sourceType = sourceNode.data.type as ArchiElementType;
        const targetType = targetNode.data.type as ArchiElementType;
        
        const validRelationshipType = getValidRelationshipType(sourceType, targetType);

        if (validRelationshipType) {
          console.log(`Valid connection: ${sourceType} -> ${validRelationshipType} -> ${targetType}`);
          const newEdge: Edge = { 
              ...connection, 
              id: `edge-${+new Date()}`,
              type: 'smoothstep', 
              animated: true, 
              label: validRelationshipType
          };
          setEdges((eds) => addEdge(newEdge, eds));
        } else {
          // Impede a conexão se nenhuma relação válida for encontrada
          console.warn(`Connection not allowed between ${sourceType} and ${targetType}.`);
          // Opcionalmente, fornecer feedback ao usuário aqui (ex: uma notificação)
        }
      }
    },
    [nodes, setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      if (reactFlowWrapper.current) {
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow') as ArchiElementType;
        const name = event.dataTransfer.getData('application/reactflow-name');
        
        if (typeof type === 'undefined' || !type) {
          return;
        }

        const position = project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const newNode: Node = {
          id: `node-${+new Date()}`,
          type: 'custom',
          position,
          data: { type, name },
        };
        
        setNodes((nds) => nds.concat(newNode));
      }
    },
    [project, setNodes]
  );

  return (
    <div className="h-full w-full bg-gray-50 relative" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Background gap={12} size={1} />
        <CustomControls />
      </ReactFlow>
    </div>
  );
};

export default ArchiCanvas;