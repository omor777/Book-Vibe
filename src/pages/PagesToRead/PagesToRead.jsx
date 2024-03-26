import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getDataFromLocalStorage } from "../../utils/localStorage";

const PagesToRead = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const readList = getDataFromLocalStorage("read");
    setReadBooks(readList);
  }, []);

  const data = readBooks.reduce((acc, cur) => {
    const book = { name: cur.bookName, pages: cur.totalPages };
    acc.push(book);
    return acc;
  }, []);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //   },
  // ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <section className="container flex items-center justify-center my-28">
      <div className="overflow-x-auto bg-[#13131308] rounded-2xl p-4 lg:p-14 w-full flex items-center justify-center">
        <BarChart
          width={1200}
          height={450}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </section>
  );
};

export default PagesToRead;
