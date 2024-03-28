/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label bg-white py-3 px-5 rounded-md font-medium font-work-sans">{`Pages: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="container flex items-center justify-center h-[90vh]">
      <div className=" bg-[#13131308] rounded-2xl p-4 lg:p-10 w-full  h-[700px]">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar
              dataKey="pages"
              fill="#23BE0A"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default PagesToRead;
