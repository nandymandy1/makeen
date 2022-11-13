import Checkbox from "@components/Fields/Checkbox";
import FileUploader from "@components/Fields/FileUploader";
import Radio from "@components/Fields/Radio";

const Forms = () => {
  return (
    <div>
      Forms
      <FileUploader
        multiple
        name="pictures"
        handleFile={(e) => console.log(e)}
        label="Plase select your profile picture"
      />
      <Radio
        name="gender"
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
      <Checkbox
        name="dishes"
        id="user_dishes"
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
    </div>
  );
};

export default Forms;
