import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { rest } from "../../../utils/polygon";

export const stockRouter = createTRPCRouter({
  getAllTickers: publicProcedure.query(async () => {
    const stocksList = await rest.reference.tickers({
      market: "stocks",
      limit: 10,
    });

    return stocksList;
  }),
});
