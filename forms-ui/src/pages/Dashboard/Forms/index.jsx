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
          { label: "Male", value: "male", selected: false },
          { label: "Female", value: "female", selected: false },
          { label: "Other", value: "others", selected: false, disabled: true },
        ]}
      />
    </div>
  );
};

export default Forms;
