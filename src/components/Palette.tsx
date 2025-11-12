import React from 'react';
import { ArchiLayer, ArchiElementType } from '@/types';
import { getArchiIcon } from '@/components/ArchiIcons';

interface PaletteItem {
  type: ArchiElementType;
  name: string;
}

const paletteItems: { layer: ArchiLayer; items: PaletteItem[] }[] = [
  {
    layer: ArchiLayer.BUSINESS,
    items: [
      { type: ArchiElementType.BUSINESS_ACTOR, name: 'Business Actor' },
      { type: ArchiElementType.BUSINESS_ROLE, name: 'Business Role' },
      { type: ArchiElementType.BUSINESS_PROCESS, name: 'Business Process' },
      { type: ArchiElementType.BUSINESS_SERVICE, name: 'Business Service' },
    ],
  },
  {
    layer: ArchiLayer.APPLICATION,
    items: [
      { type: ArchiElementType.APPLICATION_COMPONENT, name: 'App Component' },
      { type: ArchiElementType.APPLICATION_SERVICE, name: 'App Service' },
      { type: ArchiElementType.APPLICATION_FUNCTION, name: 'App Function' },
    ],
  },
  {
    layer: ArchiLayer.TECHNOLOGY,
    items: [
        { type: ArchiElementType.NODE, name: 'Node' },
        { type: ArchiElementType.TECHNOLOGY_SERVICE, name: 'Tech Service' },
    ],
  },
  {
    layer: ArchiLayer.MOTIVATION,
    items: [
        { type: ArchiElementType.STAKEHOLDER, name: 'Stakeholder' },
        { type: ArchiElementType.DRIVER, name: 'Driver' },
        { type: ArchiElementType.GOAL, name: 'Goal' },
    ]
  }
];

const Palette: React.FC = () => {
  const onDragStart = (event: React.DragEvent, nodeType: ArchiElementType, nodeName: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/reactflow-name', nodeName);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="w-64 bg-gray-200 p-4 border-r border-gray-300 overflow-y-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Elements</h2>
      {paletteItems.map(({ layer, items }) => (
        <div key={layer} className="mb-4">
          <h3 className="font-bold text-gray-600 text-sm mb-2">{layer}</h3>
          <div className="grid grid-cols-2 gap-2">
            {items.map(({ type, name }) => (
              <div
                key={type}
                className="p-2 bg-white border border-gray-300 rounded-md cursor-grab flex flex-col items-center justify-center text-center hover:bg-blue-50 hover:border-blue-400 transition-colors"
                onDragStart={(event) => onDragStart(event, type, name)}
                draggable
              >
                <div className="w-8 h-8 text-blue-600">{getArchiIcon(type)}</div>
                <div className="text-xs mt-1 text-gray-700">{name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Palette;