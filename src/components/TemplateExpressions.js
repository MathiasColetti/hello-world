const TemplateExpressions = () => {
  let name = "Mathias";
  let people = {
    age: 31,
    name: "Mathias",
  };
  return (
    <div>
      <h1>Ola {people.name}, tudo bem?</h1>
      <p>Como é fazer {people.age} anos?</p>
    </div>
  );
};
export default TemplateExpressions;
