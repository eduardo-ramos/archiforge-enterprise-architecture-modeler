import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { ArchiElementType } from '../types';
import { getArchiIcon } from './ArchiIcons';

interface CustomNodeData {
  type: ArchiElementType;
  name: string;
}

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({ data }) => {
  return (
    <div className="bg-white border-2 border-gray-400 rounded-md shadow-lg" style={{ width: 150, height: 75 }}>
      <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-gray-500" />
      <div className="flex flex-col h-full items-center justify-center p-2">
        <div className="w-8 h-8 text-blue-700">{getArchiIcon(data.type)}</div>
        <div className="text-center text-sm font-semibold mt-1 truncate w-full" title={data.name}>
          {data.name}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-gray-500" />
    </div>
  );
};

export default memo(CustomNode);
