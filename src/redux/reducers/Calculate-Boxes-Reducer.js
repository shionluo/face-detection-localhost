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
      const faces = data.outputs[0].data.regions.map(
        region => region.region_info.bounding_box
      );
      const image = document.getElementById("faceDetect");
      const width = Number(image.width);
      const height = Number(image.height);

      const facesLocation = faces.map(face => {
        let faceLocation = {
          leftCol: face.left_col * width,
          topRow: face.top_row * height,
          rightCol: width - face.right_col * width,
          bottomRow: height - face.bottom_row * height
        };
        return faceLocation;
      });
      return facesLocation;
    case RESET_BOXES:
      state = [];
      return state;
    default:
      return state;
  }
};
