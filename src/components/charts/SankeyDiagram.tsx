import React from 'react';

interface SankeyDiagramProps {
  data: {
    nodes: Array<{
      id: string;
      name: string;
      category?: string;
    }>;
    links: Array<{
      source: string;
      target: string;
      value: number;
      color?: string;
    }>;
  };
  width?: number;
  height?: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  title?: string;
  nodeWidth?: number;
  nodePadding?: number;
}

const SankeyDiagram: React.FC<SankeyDiagramProps> = ({
  data,
  width = 900,
  height = 500,
  margin = { top: 20, right: 20, bottom: 20, left: 20 },
  title,
  nodeWidth = 15,
  nodePadding = 10
}) => {
  // In a real implementation, this would use D3.js or a specialized Sankey library
  // For now, we'll create a placeholder component
  
  return (
    <div className="sankey-diagram-container" style={{ width, height }}>
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="diagram-placeholder" style={{ 
        width: width - margin.left - margin.right, 
        height: height - margin.top - margin.bottom,
        marginLeft: margin.left,
        marginTop: margin.top,
        backgroundColor: '#f5f5f7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        position: 'relative'
      }}>
        <div className="diagram-info">
          <p>Sankey Diagram: {title || 'Untitled'}</p>
          <p>Nodes: {data.nodes.length}</p>
          <p>Links: {data.links.length}</p>
          <p>Total Flow: {data.links.reduce((sum, link) => sum + link.value, 0).toFixed(1)}</p>
        </div>
        
        {/* Left side nodes (sources) */}
        <div style={{ position: 'absolute', left: 20, top: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          {data.nodes.filter(node => !data.links.some(link => link.target === node.id)).map((node, i) => (
            <div key={i} style={{ padding: '5px', fontSize: '12px', color: '#1D1D1F' }}>
              {node.name}
            </div>
          ))}
        </div>
        
        {/* Right side nodes (targets) */}
        <div style={{ position: 'absolute', right: 20, top: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          {data.nodes.filter(node => !data.links.some(link => link.source === node.id)).map((node, i) => (
            <div key={i} style={{ padding: '5px', fontSize: '12px', color: '#1D1D1F' }}>
              {node.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SankeyDiagram;
