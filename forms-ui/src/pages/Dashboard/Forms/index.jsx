import Field from "@components/Fields";

const Forms = () => {
  return (
    <div>
      Forms
      <Field
        multiple
        control="file"
        name="pictures"
        handleFile={(e) => console.log(e)}
        label="Plase select your profile picture"
      />
      <Field
        name="gender"
        control="radio"
        id="user_gender"
        optProps={{ size: 25 }}
        onChange={(e) => console.log(e)}
        label="Please choose your gender"
        options={[
          { label: "Male", value: "male", selected: true },
          { label: "Female", value: "female" },
          { label: "Other", value: "others", disabled: true },
        ]}
        error="Something went wrong..."
      />
      <Field
        name="dishes"
        id="user_dishes"
        control="checkbox"
        optProps={{ size: 25 }}
        onChange={(e) => console.log(e)}
        label="Please choose your Favourite Dishes"
        options={[
          { label: "Pizza", value: "pizza" },
          { label: "Burger", value: "burger" },
          { label: "Noodles", value: "Noodles" },
          { label: "Pasta", value: "pasta", disabled: true },
        ]}
      />
      <Field control="textarea" label="Message" name="message" />
    </div>
  );
};

export default Forms;
