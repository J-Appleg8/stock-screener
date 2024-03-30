import type { NextPage } from "next";
import { api } from "../utils/api";

const StockTable: NextPage = () => {
  const { data, isLoading } = api.stocks.getAllTickers.useQuery();

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  console.log(data);

  return <div className="flex px-20 py-10">Hi</div>;
};

export default StockTable;
