import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface IData {
  [key: string]: string | number;
}

interface IActions {
  method: string;
  type: string;
  Icon: React.ElementType;
  buildLink?: (param?: string | number) => string;
  methods?: {
    [key: string]: (param?: number | string) => void;
  };
}

interface ITableProps {
  header: IData;
  body: IData[];
  actions: IActions[];
}

const Table: FC<ITableProps> = ({ header, body, actions }) => (
  <table>
    <thead>
      <tr>
        {Object.entries(header).map(([key, value]) => (
          <td key={key}>{value}</td>
        ))}
        <td>Actions</td>
      </tr>
    </thead>
    <tbody>
      {body.map(item => (
        <tr key={item.id}>
          {Object.entries(header).map(([key]) => (
            <td key={key}>{item[key]}</td>
          ))}
          <td>
            <div>
              {actions.map(action => {
                let content;

                if (action.type === 'link') {
                  content = (
                    <Link
                      key={action.method}
                      to={action.buildLink?.(item.id) as string}
                    >
                      <action.Icon />
                    </Link>
                  );
                } else if (action.type === 'method') {
                  content = (
                    <action.Icon
                      key={action.method}
                      onClick={() => action.methods?.onClick(item.id as number)}
                    />
                  );
                }

                return content;
              })}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
