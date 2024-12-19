import firestore from "@react-native-firebase/firestore";

export const GETDATA = async (name, setData) => {
  const usersCollection = await firestore().collection(name).get();
  return setData({ data: usersCollection.docs });
};
export const POSTDATA = () => {};
export const UPDATEDATA = () => {};
export const DELETEDATA = () => {};
