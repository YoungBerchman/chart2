import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

// Define the type for each item in the sales data
interface SalesData {
  month: string;
  sales: number;
}

// Example data for a simple API endpoint
const salesData: SalesData[] = [
  { month: "January", sales: 100 },
  { month: "February", sales: 200 },
  { month: "March", sales: 300 },
  { month: "April", sales: 250 },
  { month: "May", sales: 400 },
];

// Define the route with type annotations for req and res
app.get("/api/sales", (req: Request, res: Response) => {
  res.json(salesData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
