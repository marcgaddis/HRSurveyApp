const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },

  questions: [
    {
      q_id: {
        type: String,
        required: true
      },
      question: {
        type: String,
        required: true
      },
      enabled: {
        type: Boolean,
        default: true
      },
      response_type: {
        type: String,
        required: true
      }
    }
  ],

  campaigns: [
    {
      q_ids: [
        {
          type: String,
          required: true
        }
      ],
      access_user: {
        type: String,
        required: false
      },
      access_pass: {
        type: String,
        required: false
      },
      max_questions: {
        type: Number,
        default: 3
      },
      random: {
        type: Boolean,
        default: false
      },
      responses: [
        {
          source_id: {
            type: Number,
            required: true
          },
          q_id: {
            type: String,
            required: true
          },
          response: {
            type: [String, Number],
            required: true
          }
        }
      ]
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
