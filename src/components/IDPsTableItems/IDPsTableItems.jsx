import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./IDPsTableItems.module.css";
import { fetchGetIdps, idpsCurrent } from "../../store/idpSlice";
import { Skeleton } from "@alfalab/core-components-skeleton";
import StatusTable from "../StatusTable/StatusTable";
import IDPsButtonsContainer from "../IDPsButtonsContainer/IDPsButtonsContainer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function IDPsTableItems({ isPersonalPage }) {
  const dispatch = useDispatch();
  const { idps, loading } = useSelector(idpsCurrent);

  useEffect(() => {
    dispatch(fetchGetIdps());
  }, [dispatch]);
  return (
    <>
      <IDPsButtonsContainer dataItem={idps} isPersonalPage={isPersonalPage} />
      <div className={style.idpsConrainer}>
        {idps.map((item) => (
          <Skeleton visible={loading} key={item.idp_id}>
            <Link
              className={style.link}
              key={item.idp_id}
              to={`/idp/${item.idp_id}`}
            >
              <ul className={style.columnTable} key={item.idp_id}>
                {/* ФИО(ФИ) юзера */}
                {isPersonalPage ? (
                  <li className={style.tableElement} style={{ width: "298px" }}>
                    <div
                      className={style.textContainer}
                      style={{ paddingLeft: "36px" }}
                    >
                      Иванов Иван Иванович
                    </div>
                  </li>
                ) : null}

                {/* Название плана */}
                <li
                  className={style.tableElement}
                  style={{ width: isPersonalPage ? "298px" : "425px" }}
                >
                  <div
                    className={style.textContainer}
                    style={{ paddingLeft: "64px" }}
                  >
                    {item.name}
                  </div>
                </li>

                {/* Дата */}
                <li
                  className={style.tableElement}
                  style={{ width: isPersonalPage ? "151px" : "240px" }}
                >
                  <div
                    className={style.textContainer}
                    // style={{ textAlign: "center", width: "100%" }}
                    style={{ paddingLeft: isPersonalPage ? '66px' : "126px" }}


                  >
                    {item.end_date_plan.slice(0, 10)}
                  </div>
                </li>

                {/* Статус выполнения */}
                <li
                  className={style.tableElement}
                  style={{ width: isPersonalPage ? "163px" : "247px",
                    
                
               }}
                >
                  <StatusTable
                    isPersonalPage={isPersonalPage}
                    title={item.status == "active" ? "В работе" : "Выполнен"}
                  />{" "}
                  {/* Еще есть статус Просрочен */}
                </li>
              </ul>
            </Link>
          </Skeleton>
        ))}
      </div>
    </>
  );
}
IDPsTableItems.propTypes = {
  isPersonalPage: PropTypes.bool,
};
