import { CALCULATE_BOXES, RESET_BOXES } from "../constants/constant";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const initialBoxes = [];

export const calculateBoxesReducer = (
  state = initialBoxes,
  { type, payload }
) => {
  switch (type) {
    case CALCULATE_BOXES:
      const data = payload;
      if (data && data.outputs) {
        return data.outputs[0].data.regions.map(face => {
          const clarifaiFace = face.region_info.bounding_box;
          const image = document.getElementById("faceDetect");
          const width = Number(image.width);
          const height = Number(image.height);
          return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - clarifaiFace.right_col * width,
            bottomRow: height - clarifaiFace.bottom_row * height
          };
        });
      }
      return state;
    case RESET_BOXES:
      state = [];
      return state;
    default:
      return state;
  }
};
