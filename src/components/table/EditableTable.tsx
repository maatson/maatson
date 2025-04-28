// EditableTable.tsx
import { ChangeEvent, useState } from "react";
import { CrossIcon, DeleteIcon, EditIcon, TickIcon } from "../icons/Icons";
import GroupField from "../groupField/GroupField";
import React from "react";

export type ColumnConfig<T> = {
  key: keyof T;
  label: string;
  type?: "text" | "number" | "select" | "date";
  options?: string[];
  editable?: boolean;
};

type EditableTableProps<T> = {
  columns: ColumnConfig<T>[];
  data: T[];
  onChange: (updated: T[]) => void;
  isDisableDelete: boolean;
  onRowChange?: (row: T) => T;
  isOnlyView?: boolean;
};

const EditableTable = <T extends Record<string, any>>({
  columns,
  data,
  onChange,
  isDisableDelete,
  onRowChange,
  isOnlyView,
}: EditableTableProps<T>) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [tempRow, setTempRow] = useState<T | null>(null);

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setTempRow({ ...data[index] });
  };

  const handleSave = () => {
    if (tempRow) {
      const updated = [...data];
      updated[editIndex!] = tempRow;
      onChange(updated);
      setEditIndex(null);
      setTempRow(null);
    }
  };

  const handleCancel = () => {
    setEditIndex(null);
    setTempRow(null);
  };

  const handleDelete = (index: number) => {
    if (data.length <= 1) return;
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleChange = (key: keyof T, value: any) => {
    if (!tempRow) return;

    let updatedRow = { ...tempRow, [key]: value };
    // for update each row by data
    if (onRowChange) {
      updatedRow = onRowChange(updatedRow);
    }
    setTempRow(updatedRow);
  };

  return (
    <div className="overflow-auto custom-scrollbar">
      <table className="border w-full text-sm ">
        <thead className="bg-grey-200 font-semibold">
          <tr>
            <td className=" px-2 py-3 text-center border-b">S.No</td>

            {columns.map((col) => (
              <td key={String(col.key)} className="border-b px-2 py-3">
                {col.label}
              </td>
            ))}
            {!isOnlyView && <td className=" px-2 py-3 text-center border-b">Action</td>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            const isEditing = editIndex === index;
            return (
              <tr key={index}>
                <td className=" px-2 py-2 text-center">
                  {(index + 1).toFixed().padStart(2, "0")}
                </td>
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className=" border-b border-grey-ab-50 px-2 py-2 min-w-[120px] "
                  >
                    {isEditing && col.editable ? (
                      col.type === "select" ? (
                        <GroupField
                          label={""}
                          type={"select"}
                          placeholder={""}
                          name={col.label}
                          value={tempRow?.[col.key] || ""}
                          onChange={(
                            e: ChangeEvent<
                              | HTMLInputElement
                              | HTMLSelectElement
                              | HTMLTextAreaElement
                            >
                          ) => handleChange(col.key, e.target.value)}
                          error={false}
                          errorMessage={""}
                          options={col.options?.map((opt) => ({
                            label: opt,
                            value: opt,
                          }))}
                          parentStyle="w-[180px] min-w-[150px]"
                          size="s"
                        />
                      ) : (
                        // <input
                        //   type={col.type || "text"}
                        //   value={tempRow?.[col.key]}
                        //   onChange={(e) => handleChange(col.key, e.target.value)}
                        //   className="w-full border px-1 py-0.5"
                        // />
                        <GroupField
                          label={""}
                          type={col.type || "text"}
                          placeholder={""}
                          name={""}
                          value={tempRow?.[col.key] || ""}
                          onChange={(
                            e: ChangeEvent<
                              | HTMLInputElement
                              | HTMLSelectElement
                              | HTMLTextAreaElement
                            >
                          ) => handleChange(col.key, e.target.value)}
                          error={false}
                          errorMessage={""}
                          size="s"
                          parentStyle="w-[180px] "

                        />
                      )
                    ) : (
                      <div className="w-[180px] break-all ">
                        {editIndex === index && tempRow
                          ? tempRow[col.key]
                          : <p>{row[col.key]}</p>}
                      </div>
                    )}
                  </td>
                ))}
                {!isOnlyView && (
                  <td className="border-b border-grey-ab-50 px-2 py-2 text-center min-w-[30px]">
                    {isEditing ? (
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={handleCancel}
                          className="p-1 bg-error rounded"
                        >
                          <CrossIcon color="#fff" size={16} />
                        </button>
                        <button
                          onClick={handleSave}
                          className="p-1 bg-success rounded"
                        >
                          <TickIcon color="#fff" size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleEdit(index)}
                          className="p-1 bg-blue rounded"
                        >
                          <EditIcon color="#fff" size={16} />
                        </button>
                        {!isDisableDelete && (
                          <button
                            onClick={() => handleDelete(index)}
                            className="p-1 bg-error rounded disabled:bg-error-800 disabled:cursor-not-allowed"
                            disabled={data.length === 1}
                          >
                            <DeleteIcon color="#fff" size={16} />
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default React.memo(EditableTable) as typeof EditableTable;
