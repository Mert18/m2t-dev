import mongoose from 'mongoose';
import moment from 'moment';

const dataSchema = mongoose.Schema({
    work: {
        type: Number,
        required: true,
    },
    happiness: {
        type: Number,
        required: true
    },
    leisure: {
        type: Number,
        required: true
    },
    game: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        default: moment().format("MMM Do YY")

    }
})

const Data = mongoose.model('Data', dataSchema);
export default Data;