import { Schema, model, connect } from 'mongoose';

//  Create an interface.
interface animalShelter {
  name: string;
  address: string;
  contactDetails?: string;
}

//  Create a Schema corresponding to the document interface.
const animalSchema = new Schema<animalShelter>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contactDetails: String
});

// 3. Create a Model.
const User = model<animalShelter>('User', animalSchema);

