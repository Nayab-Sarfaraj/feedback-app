import Feedback from "../models/feedback.model.js";

export const getFeedbacks = async (req, res) => {
  try {
    let { page } = req.query;
    // console.log(page);
    if (!page) page = 1;
    const toBeSkipped = Math.abs((page - 1) * 6);
    const totalFeedbacks = await Feedback.find().countDocuments();
    const feedbacks = await Feedback.find()
      .skip(toBeSkipped)
      .limit(6)
      .sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "Fetched the feedbacks",
      feedbacks,
      totalFeedbacks,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const submitFeedbacks = async (req, res, next) => {
  try {
    const { email, name, feedback } = req.body;
    if (!email)
      return res
        .status(401)
        .json({ success: false, message: "Email is required" });

    if (!name)
      return res
        .status(401)
        .json({ success: false, message: "Name is required" });

    if (!feedback)
      return res
        .status(401)
        .json({ success: false, message: "Feedback is required" });
    const newFeedback = new Feedback({ name, email, feedback });

    await newFeedback.save();
    return res.status(201).json({
      success: true,
      message: "Submitted feedback",
      feedback: newFeedback,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
