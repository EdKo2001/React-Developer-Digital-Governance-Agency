type Row = { [key: string]: string };

interface TableProps {
  headerData: string[];
  bodyData: Row[];
}

const Table: React.FC<TableProps> = ({ headerData, bodyData }) => {
  return (
    <table className="table w-full text-left">
      <thead className="h-[51px] text-xs font-semibold text-[#ACACAC]">
        <tr>
          {headerData.map((header: string, idx: number) => (
            <th key={idx} className="w-[16%] p-[13px]">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-sm">
        {bodyData.map((row: Row, idx: number) => (
          <tr
            key={idx}
            className={`h-[51px] ${idx % 2 === 0 ? "bg-white" : ""}`}
          >
            {headerData.map((column: string, columnIdx: number) => (
              <td key={columnIdx} className="p-[13px]">
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
