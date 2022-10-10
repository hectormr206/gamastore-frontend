import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';

// material-ui
import { Chip, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// third-party
import { useTable } from 'react-table';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

// project import
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { DraggableRow } from 'components/third-party/ReactTable';
import LinearWithLabel from 'components/@extended/Progress/LinearWithLabel';

// ==============================|| REACT TABLE ||============================== //

const ReactTable = ({ columns, data }) => {
  const [records, setRecords] = useState(data);

  const getRowId = useCallback((row) => row.id, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    data: records,
    columns,
    getRowId
  });

  const moveRow = (dragIndex, hoverIndex) => {
    const dragRecord = records[dragIndex];
    setRecords(
      update(records, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRecord]
        ]
      })
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup, i) => (
            <TableRow key={i} {...headerGroup.getHeaderGroupProps()}>
              <TableCell />
              {headerGroup.headers.map((column, index) => (
                <TableCell key={index} {...column.getHeaderProps([{ className: column.className }])}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(
            (row, i) =>
              prepareRow(row) || (
                <DraggableRow index={i} moveRow={moveRow} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => (
                    <TableCell key={index} {...cell.getCellProps([{ className: cell.column.className }])}>
                      {cell.render('Cell')}
                    </TableCell>
                  ))}
                </DraggableRow>
              )
          )}
        </TableBody>
      </Table>
    </DndProvider>
  );
};

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};

// ==============================|| REACT TABLE - ROW DRAG & DROP ||============================== //

const RowDragDrop = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        className: 'cell-center'
      },
      {
        Header: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Age',
        accessor: 'age',
        className: 'cell-right'
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        className: 'cell-right'
      },
      {
        Header: 'Status',
        accessor: 'status',
        // eslint-disable-next-line
        Cell: ({ value }) => {
          switch (value) {
            case 'Complicated':
              return <Chip color="error" label="Complicated" size="small" variant="light" />;
            case 'Relationship':
              return <Chip color="success" label="Relationship" size="small" variant="light" />;
            case 'Single':
            default:
              return <Chip color="info" label="Single" size="small" variant="light" />;
          }
        }
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        // eslint-disable-next-line
        Cell: ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />
      }
    ],
    []
  );

  return (
    <MainCard content={false} title="Row Drag & Drop">
      <ScrollX>
        <ReactTable columns={columns} data={data} />
      </ScrollX>
    </MainCard>
  );
};

RowDragDrop.propTypes = {
  data: PropTypes.array
};

export default RowDragDrop;
