import Image from "next/image";

type Row = { [key: string]: string };

interface TableProps {
  type?: "strip" | "seperate";
  headerData: string[];
  bodyData: Row[];
}

const Table: React.FC<TableProps> = ({
  headerData,
  bodyData,
  type = "strip",
}) => {
  return (
    <table className="table w-full text-left">
      <thead className="h-[51px] text-xs font-semibold text-[#ACACAC]">
        <tr>
          {headerData.map((header: string, idx: number) => (
            <th
              key={idx}
              className={`${
                header === "Avatar"
                  ? "w-[6%]"
                  : header === "Actions"
                  ? "w-[8%]"
                  : "w-[16%]"
              } p-[13px]`}
            >
              {header !== "Avatar" && header !== "Actions" ? header : ""}
            </th>
          ))}
        </tr>
      </thead>
      {bodyData.length === 0 ? (
        "No Post type"
      ) : (
        <tbody className="text-sm">
          {bodyData.map((row: Row, idx: number) => (
            <tr
              key={idx}
              className={`h-[51px] ${
                type === "seperate"
                  ? "rounded-lg  border-b-[10px] border-[#F8F8F8] bg-white"
                  : idx % 2 === 0
                  ? "bg-white"
                  : ""
              }`}
            >
              {headerData.map((column: string, columnIdx: number) => (
                <td key={columnIdx} className="p-[13px]">
                  {column === "Avatar" ? (
                    <Image
                      src="/images/student.png"
                      alt="student image"
                      width={65}
                      height={55}
                      className="rounded-lg"
                    />
                  ) : column === "Actions" ? (
                    <div className="flex items-center gap-[33px]">
                      <button type="button">
                        <Image
                          src="/images/edit.svg"
                          alt="edit"
                          width={19}
                          height={19}
                        />
                      </button>
                      <button type="button">
                        <Image
                          src="/images/trash.svg"
                          alt="remove"
                          width={16}
                          height={18}
                        />
                      </button>
                    </div>
                  ) : (
                    row[column] ?? row[column.toLowerCase().replace(/ /g, "_")]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

export default Table;
