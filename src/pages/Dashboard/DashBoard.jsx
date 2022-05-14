import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch,useSelector } from "react-redux";
import Media from "react-media";
import Navigation from "components/Navigation";
import Balance from "components/Balance";
import Currency from "components/Currency";
import HomeTab from "components/HomeTab";
import DiagramTab from "components/DiagramTab";
import s from "./DashBoard.module.scss";
import Header from "components/Header";
import Container from "components/Container/Container";
import {
  allTransactions,
  totalBalance,
  getCategories,
} from "redux/finance/finance-operation";
import { refresh } from "redux/session/auth-operation";

import  globalSelectors  from 'redux/global/global-selectors';
import ButtonAddTransactions from "components/ButtonAddTransactions";
import ModalAddTransaction from "components/ModalAddTransaction";


const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
    dispatch(allTransactions());
    dispatch(totalBalance());
    dispatch(getCategories());
  }, [dispatch]);

///
  const showModal = useSelector(globalSelectors.getIsModalAddTransaction)
////
  return (
    <>
      <Header />
      <main className={s.main}>
        <Media
          queries={{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px)",
          }}
        >
          {(matches) => (
            <Container>
              <div className={s.Dashboard}>
                {matches.small && (
                  <>
                    <Navigation />
                    <Routes>
                      <Route
                        path="*"
                        element={
                          <>
                            <Balance />
                            <HomeTab />
                          </>
                        }
                      />
                      <Route path="/currency" element={<Currency />} />
                      <Route path="/diagram" element={<DiagramTab />} />
                    </Routes>
                  </>
                )}
                {matches.medium && (
                  <>
                    <div className={s.Dashboard__left}>
                      <div className={s.Dashboard__nav}>
                        <Navigation />
                        <Balance />
                      </div>
                      <Currency />
                    </div>
                    <div className={s.Dashboard__rigth}>
                      <Routes>
                        <Route path="*" element={<HomeTab />} />
                        <Route path="/diagram" element={<DiagramTab />} />
                      </Routes>
                    </div>
                  </>
                )}
              </div>
            </Container>
          )}
        </Media>
                <ButtonAddTransactions />
   {showModal && <ModalAddTransaction />}
      </main>
    </>
  );
};
export default Dashboard;
