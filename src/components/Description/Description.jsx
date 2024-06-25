import css from "./Description.module.css";

const Description = () => {
  return (
    <div className="">
      <h1 className={css["reviews-title"]}>Sip Happens Café</h1>
      <p className={css["reviews-descr"]}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
