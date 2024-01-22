import style from "./CreateTask.module.css";
import { useState } from "react";
import { Calendar } from "@alfalab/core-components-calendar";
import { Input } from "@alfalab/core-components-input";
import { Textarea } from "@alfalab/core-components-textarea";
import { Attach } from "@alfalab/core-components-attach";
import { Button } from "@alfalab/core-components-button";
import { UniversalDateInput } from "@alfalab/core-components-universal-date-input";
import { Skeleton } from "@alfalab/core-components-skeleton";
import plus from "../../images/AddPlus.svg";
import edit from "../../images/Edit.svg";

export default function CreateTask() {
  //Значение инпутов
  const [value, setValue] = useState("");
  //Состояние кнопки добавления комментария
  const [commentState, setCommentStates] = useState({
    chief: false,
    mentor: false,
    coworker: false,
  });
  // Показывает инпут в зависимости от того от кого комментарий нужно оставить
  function handleCommentChoice(position) {
    setCommentStates((prevState) => ({
      ...prevState,
      [position]: !prevState[position],
    }));
  }

  return (
    <section className={style.container}>
      <h2 className={style.title}>Новая задача</h2>
      <Skeleton style={{marginBottom:'20px'}} visible={false}>
        <Input
          style={{ width: "522px" }}
          className={style.input}
          label="Название задачи"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        </Skeleton>
        <Skeleton style={{marginBottom:'20px'}}>
        <Textarea
          style={{ width: "522px" }}
          label="Описание задачи"
          block={true}
          className={style.input}
          type="text"
          minRows={3}
        />
      </Skeleton>
      {/* Текст с инпутом для комментария руководителя */}
      <div className={style.button__container}>
        <img
          onClick={() => handleCommentChoice("chief")}
          className={style.button_add}
          src={plus}
          alt="add icon"
        />
        <p
          onClick={() => handleCommentChoice("chief")}
          className={style.text__comment}
        >
          Комментарий руководителя
        </p>
      </div>
      {commentState.chief && (
        <Textarea minRows={3} style={{ width: "522px" }} className={style.input} />
      )}

      {/* Текст с инпутом для комментария ментора */}

      <div className={style.button__container}>
        <img
          onClick={() => handleCommentChoice("mentor")}
          className={style.button_add}
          src={plus}
          alt="add icon"
        />
        <p
          onClick={() => handleCommentChoice("mentor")}
          className={style.text__comment}
        >
          Комментарий ментора
        </p>
      </div>
      {commentState.mentor && (
        <Textarea minRows={3} style={{ width: "522px" }} className={style.input} />
      )}
      {/* Текст с инпутом для комментария сотрудника */}

      <div className={style.button__container}>
        <img
          onClick={() => handleCommentChoice("coworker")}
          className={style.button_add}
          src={plus}
          alt="add icon"
        />
        <p
          onClick={() => handleCommentChoice("coworker")}
          className={style.text__comment}
        >
          Комментарий сотрудника
        </p>
      </div>
      {commentState.coworker && (
        <Textarea minRows={3} style={{ width: "522px" }} className={style.input} />
      )}

      {/* Контейнер с данными ментора */}
      <div className={style.mentor__container}>
        <div className={style.text__container}>
          <h3 className={style.text}>Ментор</h3>
          <p className={style.subtitle}>Яна Лапкина</p>
        </div>
        <img className={style.edit__button} src={edit} alt="edit icon" />
      </div>

      {/* Календарь */}
      <p className={style.text}>Выполнить до</p>
      <UniversalDateInput
        Calendar={Calendar}
        block={true}
        view="date"
        label="Дата"
        size="m"
        clear={true}
      />

      {/* Прикрепление файла */}
      <Attach />
      <Button>Создать</Button>
    </section>
  );
}
