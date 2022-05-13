import s from "./DiagramTab.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"
import Chart from "components/Chart/Chart";
import Table from "components/Table/Table";
import financeSelectors from "redux/finance/finance-selectors";
import { getSummary } from "redux/finance/finance-operation";

const DiagramTab = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSummary());
  }, [dispatch]);
  const categories = useSelector(financeSelectors.getCategories);
  console.log("categories", categories);
  const balans = useSelector(financeSelectors.getTotalBalance);
  console.log("balans", balans);
  const transactionsData = useSelector(financeSelectors.getTransactionsData);
  console.log("transactionsData", transactionsData);
  const filteredData = useSelector(financeSelectors.getFilteredData);
  console.log("filteredData", filteredData);

  const answerMonth = {
    categoriesSummary: [
      {
        name: "Education",
        type: "EXPENSE",
        total: -30,
      },
      {
        name: "Household products",
        type: "EXPENSE",
        total: -230,
      },
      {
        name: "Products",
        type: "EXPENSE",
        total: -120,
      },
      {
        name: "Entertainment",
        type: "EXPENSE",
        total: -210,
      },
      {
        name: "Car",
        type: "EXPENSE",
        total: -80,
      },
      {
        name: "Other expenses",
        type: "EXPENSE",
        total: -60,
      },
      {
        name: "Child care",
        type: "EXPENSE",
        total: -130,
      },
      {
        name: "Self care",
        type: "EXPENSE",
        total: -130,
      },
      {
        name: "Leisure",
        type: "EXPENSE",
        total: -610,
      },
    ],
    incomeSummary: 0,
    expenseSummary: -1600,
    periodTotal: -1600,
    year: 2022,
    month: 11,
  };

  const allCategories = [
    {
      id: "c9d9e447-1b83-4238-8712-edc77b18b739",
      name: "Main expenses",
      type: "EXPENSE",
      backgroundColor: "rgba(254, 208, 87, 1)",
    },
    {
      id: "27eb4b75-9a42-4991-a802-4aefe21ac3ce",
      name: "Products",
      type: "EXPENSE",
      backgroundColor: "rgba(255, 216, 208, 1)",
    },
    {
      id: "3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",
      name: "Car",
      type: "EXPENSE",
      backgroundColor: "rgba(253, 148, 152, 1)",
    },
    {
      id: "bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",
      name: "Self care",
      type: "EXPENSE",
      backgroundColor: "rgba(197, 186, 255, 1)",
    },
    {
      id: "76cc875a-3b43-4eae-8fdb-f76633821a34",
      name: "Child care",
      type: "EXPENSE",
      backgroundColor: "rgba(110, 120, 232, 1)",
    },
    {
      id: "128673b5-2f9a-46ae-a428-ec48cf1effa1",
      name: "Household products",
      type: "EXPENSE",
      backgroundColor: "rgba(110, 120, 232, 1)",
    },
    {
      id: "1272fcc4-d59f-462d-ad33-a85a075e5581",
      name: "Education",
      type: "EXPENSE",
      backgroundColor: "rgba(74, 86, 226, 1)",
    },
    {
      id: "c143130f-7d1e-4011-90a4-54766d4e308e",
      name: "Leisure",
      type: "EXPENSE",
      backgroundColor: "rgba(129, 225, 255, 1)",
    },
    {
      id: "719626f1-9d23-4e99-84f5-289024e437a8",
      name: "Other expenses",
      type: "EXPENSE",
      backgroundColor: "rgba(36, 204, 167, 1)",
    },
    {
      id: "3acd0ecd-5295-4d54-8e7c-d3908f4d0402",
      name: "Entertainment",
      type: "EXPENSE",
      backgroundColor: "rgba(0, 173, 132, 1)",
    },
    {
      id: "063f1132-ba5d-42b4-951d-44011ca46262",
      name: "Income",
      type: "INCOME",
    },
  ];

  return (
    <>
      <>
        <section className={s.section}>
          <h2 className={s.title}>Statistics</h2>
          <div className={s.wrapper}>
            <Chart />
            <Table data={answerMonth} allCategories={allCategories} />
          </div>
        </section>
      </>
    </>
  );
};
export default DiagramTab;
