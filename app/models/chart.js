const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ChartSchema = new mongoose.Schema(
  {
    csv: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    },
    subCaption: {
      type: String,
      required: true
    },
    xAxisName: {
      type: String,
      required: true
    },
    yAxisName: {
      type: String,
      required: true
    },
    numberSuffix: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
ChartSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Chart', ChartSchema)
