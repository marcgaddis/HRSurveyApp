const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);

/*
  // designed for the survey management interface
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },

  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
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
      campaign_id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
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
  */
