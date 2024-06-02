import css from "./Descriptions.module.css";

const Descriptions = ({ title, description }) => {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      <p className={css.description}>{description}</p>
    </section>
  );
};

export default Descriptions;
