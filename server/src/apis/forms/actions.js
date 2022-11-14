import { Form } from "../../models";

const CREATE_FORM = async (req, res) => {
  try {
    const form = await Form.create({
      ...req.body,
      author: req.user._id.toString(),
    });

    return res.status(201).json({
      form,
      success: true,
      message: "Form created successfully.",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

const DELETE_FORM = async (req, res) => {
  try {
  } catch (err) {}
};

const UPDATE_FORM = async (req, res) => {
  try {
    const updatedForm = await Form.findOneAndUpdate(
      {
        _id: req.params.id,
        author: req.user._id.toString(),
      },
      {
        formContents: req.body.formContents,
      },
      {
        new: true,
      }
    );

    if (!updatedForm) {
      return res.status(404).json({
        message: "Form not found.",
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      form: updatedForm,
      message: "Form updated successfully.",
    });
  } catch (err) {
    console.log("UPDATE_ERR", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

const GET_FORM = async (req, res) => {
  try {
    const form = await Form.findOne({
      _id: req.params.id,
      author: req.user._id.toString(),
    });

    if (!form) {
      return res.status(404).json({
        message: "Form not found.",
        success: false,
      });
    }

    return res.status(201).json({
      form,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

const GET_FORMS = async (req, res) => {
  try {
    const forms = await Form.find({ author: req.user._id.toString() });
    return res.status(200).json(forms);
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export { CREATE_FORM, DELETE_FORM, UPDATE_FORM, GET_FORM, GET_FORMS };
