import axios from 'axios';

const FIREBASE_URL = "https://react-with-apis-axios-library-default-rtdb.firebaseio.com/";

export const getNotes = async () => {
  const response = await axios.get(`${FIREBASE_URL}`);
  return response.data.documents?.map(doc => ({
    id: doc.name.split('/').pop(),
    title: doc.fields.title.stringValue,
    content: doc.fields.content.stringValue
  })) || [];
};

export const addNote = async (title, content) => {
  const response = await axios.post(`${FIREBASE_URL}`, {
    fields: {
      title: { stringValue: title },
      content: { stringValue: content }
    }
  });
  return response.data;
};

export const editNote = async (id, title, content) => {
  await axios.patch(`${FIREBASE_URL}/${id}`, {
    fields: {
      title: { stringValue: title },
      content: { stringValue: content }
    }
  });
};

export const deleteNote = async (id) => {
  await axios.delete(`${FIREBASE_URL}/${id}`);
};
