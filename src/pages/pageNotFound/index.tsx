import React, { useEffect, useState } from "react";

interface Chip {
  id: number;
  label: string;
}
const PageNotFound: React.FC = () => {
  
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const [chips, setChips] = useState<Chip[]>([
    { id: 1, label: "Chip 1" },
    { id: 2, label: "Chip 2" },
    { id: 3, label: "Chip 3" },
  ]);

  const [droppedChips, setDroppedChips] = useState<Chip[]>([]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    chipId: number
  ) => {
    e.dataTransfer.setData("chipId", chipId.toString());
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    target: "chips" | "dropped"
  ) => {
    e.preventDefault();
    const chipId = e.dataTransfer.getData("chipId");
    const chip =
      chips.find((c) => c.id === parseInt(chipId)) ||
      droppedChips.find((c) => c.id === parseInt(chipId));

    if (chip) {
      if (target === "chips") {
        // Move chip back to the original chips container
        setChips((prev) => [...prev, chip]);
        setDroppedChips((prev) => prev.filter((c) => c.id !== chip.id));
      } else {
        // Move chip to the dropped chips container
        setDroppedChips((prev) => [...prev, chip]);
        setChips((prev) => prev.filter((c) => c.id !== chip.id));
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const data: any[] = [
    { name: "vick", age: 21, role: "developer" },
    { productused: "mouse", name: "ezhil", age: 25, role: "desinger" },
    { animalname: "elephant", name: "suriya", age: 20, role: "developer" },
  ];
  const rowKeys = data.map((row) => Object.keys(row)).flat();
  const columns = [...new Set(rowKeys)];
  // const columns = [
  //   ...new Set(rowKeys.flat().filter((item) => item == "name")),
  //   ...new Set(rowKeys.flat().filter((item) => item != "name")),
  // ];

  // step1 :odd to double

  const checkAtmCard = (value: string) => {
    const datas = value.split("");
    // step2 : double the odd
    const updated = datas.map((item: string, index) => {
      if (index % 2 === 0) {
        return Number(item) * 2;
      } else {
        return Number(item);
      }
    });

    const other = updated.map((item) => {
      if (item.toString().charAt(1)) {
        return item
          .toString()
          .split("")
          .reduce((initail, acc) => {
            console.log(initail, acc);
            return Number(initail) + Number(acc);
          }, 0);
      } else {
        return item;
      }
    });
    console.log(updated);
    const results = other.reduce((initail, acc) => {
      return Number(initail) + Number(acc);
    }, 0);

    return results;
  };
  console.log(checkAtmCard("6079227276000421"));

  const mapArray = new Map();
  const result = mapArray.set("name", "vick");
  // console.log(result.has("nadme"), "roho");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate random left and top values (between 0 and 100)
      setLeft(Math.random() * 90);
      setTop(Math.random() * 90);
    }, 1000); // Change every 1000ms (1 second)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty array ensures it runs once when the component mounts

  return (
    <div className="bg-blue-50 relative overflow-hidden h-screen">
      <p className="h2 text-center py-5 bg-blue-50 text-blue-900 font-semibold">
        Page Not Found 404 !!
      </p>
      {data && (
        <table className="bg-red w-4/5 mx-auto rounded-sm relative z-10">
          <thead className="">
            <tr className="w-full">
              {columns.map((item, index) => (
                <th key={index} className="capitalize tracking-[.5rem]">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {data.map((row, index) => (
              <tr key={index} className="w-full text-center  ">
                {columns.map((item, index) => (
                  <td key={index} className="bg-red-100 ">
                    {
                      <p
                        draggable
                        className="text-white bg-red-300 inline-block px-3 my-1 rounded-sm "
                      >
                        {row[item] || "-"}
                      </p>
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* <RippleButton children={"hello"} /> */}

      <div
        style={{
          right: `${top + Math.random() * 73}%`, 
          top: `${left + Math.random() * 33}%`,
        }}
        className={`w-10 h-10 bg-blue rounded-full absolute transition-all duration-1000 animate-ping`}
      ></div>
      <div
        style={{
          top: `${left - Math.random() * 10}%`,
          right: `${top - Math.random() * 10}%`,
        }}
        className={`w-10 h-10 bg-emerald-300 rounded-full absolute transition-all duration-1000 animate-ping`}
      ></div>
      <div
        style={{
          top: `${top + Math.random() * 10}%`,
          left: `${left + Math.random() * 10}%`,
        }}
        className={`w-10 h-10 bg-amber-300 rounded-full absolute transition-all duration-1000 animate-ping`}
      ></div>
      <div
        style={{
          bottom: `${left + Math.random() * 20}%`,
          left: `${top + Math.random() * 10}%`,
        }}
        className={`w-10 h-10 bg-red-300 rounded-full absolute transition-all duration-1000 animate-ping`}
      ></div>
      <div
        style={{
          bottom: `${top + Math.random() * 80}%`,
          right: `${left + Math.random() * 70}%`,
        }}
        className={`w-10 h-10 bg-purple-300 rounded-full absolute transition-all duration-700 animate-ping`}
      ></div>
      <div
        style={{
          right: `${left + Math.random() * 20}%`,
          bottom: `${top + Math.random() * 60}%`,
        }}
        className={`w-10 h-10 bg-green-300 rounded-full absolute transition-all duration-500 animate-pulse`}
      ></div>
      <div
        style={{
          right: `${left + Math.random() * 99}%`,
          bottom: `${top + Math.random() * 43}%`,
        }}
        className={`w-10 h-10 bg-pink-300 rounded absolute transition-all duration-500 animate-spin`}
      ></div>
      <div
        style={{
          right: `${left + Math.random() * 99}%`,
          bottom: `${top + Math.random() * 43}%`,
          width: 0,
          height: 0,
          borderTop: "50px solid #2c398f  ",
          // borderBottom: "50px solid transparent",
          borderRight: "25px solid transparent ",
          borderLeft: "25px solid transparent",
        }}
        className={`  rounded absolute transition-all duration-500 animate-spin `}
      ></div>

      <div className="flex justify-center items-start space-x-8 p-10">
        {/* Draggable Chips Container */}
        <div
          className="w-1/2 min-h-[300px] bg-blue-100 p-4 rounded-lg"
          onDrop={(e) => handleDrop(e, "chips")}
          onDragOver={handleDragOver}
        >
          <h2 className="text-xl mb-4 text-center">Chips</h2>
          <div className="space-y-4">
            {chips.map((chip) => (
              <div
                key={chip.id}
                className="chip bg-green-500 text-white py-2 px-4 rounded-full cursor-pointer"
                draggable
                onDragStart={(e) => handleDragStart(e, chip.id)}
              >
                {chip.label}
              </div>
            ))}
          </div>
        </div>

        {/* Dropped Chips Area */}
        <div
          className="w-1/2 min-h-[300px] bg-gray-200 p-4 rounded-lg"
          onDrop={(e) => handleDrop(e, "dropped")}
          onDragOver={handleDragOver}
        >
          <h2 className="text-xl mb-4 text-center">Dropped Chips</h2>
          <div className="space-y-4">
            {droppedChips.map((chip) => (
              <div
                key={chip.id}
                className="chip bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer"
                draggable
                onDragStart={(e) => handleDragStart(e, chip.id)}
              >
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
