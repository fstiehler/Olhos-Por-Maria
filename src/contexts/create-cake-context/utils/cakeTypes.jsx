import formData from "../../../static/json/dataset.json";

const getCakeTypeByName = (cakeTypeName) =>
  formData.cakeTypes.find((cakeType) => cakeType.name === cakeTypeName);

export default getCakeTypeByName;
