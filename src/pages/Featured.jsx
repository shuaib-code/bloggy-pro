import { useQuery } from "@tanstack/react-query";
import api from "../config/axios.config";
import DataTable, { createTheme } from "react-data-table-component";

const Featured = () => {
  const top = useQuery({
    queryKey: ["featured"],
    queryFn: () => api.get("/blog?get=featured").then((r) => r.data),
  });
  const width = window.innerWidth;
  const columns = [
    {
      name: "No",
      width: "50px",
      selector: (row) => row.no,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Owner",
      selector: (row) => row.name,
    },
    {
      name: "Pic",
      selector: (row) => row.img,
      width: "60px",
      cell: (row) => (
        <img
          className="w-8 h-7 object-cover rounded-full"
          alt={row.name}
          src={row.img}
        />
      ),
    },
  ];
  const data = top?.data?.map((e, i) => ({
    no: i + 1,
    title:
      width < 512
        ? e.title.slice(0, 20) +
          (e.title.length > 15 ? "..." : e.title.slice(0, 20))
        : e.title,
    name: e.creator.userName,
    img: e.creator.img,
  }));
  const customStyles = {
    headCells: {
      style: {
        color: "#16B364",
        fontWeight: "700",
        fontSize: "16px",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        fontWeight: "500",
        backgroundColor: "transparent",
      },
    },
  };
  createTheme(
    "solarized",
    {
      text: {
        primary: "black",
      },
      background: {
        default: "transparent",
      },
      context: {
        background: "#fff",
        text: "#FFFFFF",
      },
      divider: {
        default: "#808080",
      },
      // action: {
      //   button: "rgba(0,0,0,.54)",
      //   hover: "rgba(0,0,0,.08)",
      //   disabled: "rgba(0,0,0,.12)",
      // },
    },
    "dark"
  );
  if (top.isLoading) {
    <div className="flex justify-center items-center mt-28">
      <p>Loading</p>
    </div>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mt-10 text-center">
        Top 10 featured blog
      </h1>
      <div className="rounded-xl">
        <DataTable
          className="shadow-xl border-2 border-primary my-10 w-full"
          columns={columns}
          data={data}
          customStyles={customStyles}
          theme="solarized"
        />
      </div>
    </div>
  );
};

export default Featured;
