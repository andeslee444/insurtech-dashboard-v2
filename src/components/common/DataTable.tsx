import React, { useState } from 'react';
import { colors } from './ChartContainer';

interface Column {
  key: string;
  header: string;
  align?: 'left' | 'right' | 'center';
  format?: (value: any) => string | React.ReactNode;
  cellStyle?: React.CSSProperties;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
  className?: string;
}

const DataTable: React.FC<DataTableProps> = ({ columns, data, className = '' }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className={`data-table-container ${className}`}>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'separate', 
        borderSpacing: '0', 
        fontSize: '14px' 
      }}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} style={{ 
                padding: '12px 16px', 
                textAlign: column.align || 'left', 
                borderBottom: `1px solid ${colors.border}`,
                color: colors.textSecondary,
                fontWeight: 500
              }}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              style={{ 
                backgroundColor: hoverIndex === rowIndex ? 'rgba(58, 58, 60, 0.5)' : 'transparent',
                transition: 'background-color 0.15s ease'
              }}
              onMouseEnter={() => setHoverIndex(rowIndex)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {columns.map((column) => (
                <td 
                  key={column.key} 
                  style={{ 
                    padding: '12px 16px', 
                    textAlign: column.align || 'left', 
                    borderBottom: `1px solid ${colors.border}`,
                    ...(column.cellStyle || {})
                  }}
                >
                  {column.format ? column.format(row[column.key]) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable; 