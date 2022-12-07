import React from "react";
// either use Formik, Stepper or Yup

export default function QuestionsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <section>
      <h1>Hello {firstName}{lastName}</h1>
    </section>
  );
}
