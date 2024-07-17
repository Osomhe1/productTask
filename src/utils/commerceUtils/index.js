// convert array of blobs into a file tosend to the server
export const convertBlobArrayToFileArray = async (blobUrls, namefile) => {
  const fileArray = [];
  for (let i = 0; i < blobUrls.length; i++) {
    const blobUrl = blobUrls[i];
    const blobResponse = await fetch(blobUrl);
    const blob = await blobResponse.blob();
    const filename = `sub_image_${i + 1}_${namefile}_${Date.now()}.jpg`; // Add 1 to index to start from 1
    const file = new File([blob], filename, { type: blob.type });
    fileArray.push(file);
  }
  return fileArray;
};

// function-to-send-item-based-on-category-id
// ----------------id-----------points
// Automobile 1
// Phones & Devices  2
// Homes & Property  3
// Electronics 4
// Beauty & Cosmetics 5
// Furniture 6
// Kids & Toys 7
// Clothings 8
// Food & Bevarages 9
// Recreation 10
// Fitness & Health 11
// Others 12

export const setCategoryid = (payload) => {
  let categoryId;
  switch (payload) {
    case "Automobile":
    case "automobile":
      categoryId = 1;
      break;
    case "Phones & Devices":
    case "phones":
      categoryId = 2;
      break;
    case "Homes & Property":
    case "homes":
      categoryId = 3;
      break;
    case "Electronics":
    case "electronics":
      categoryId = 4;
      break;
    case "Beauty & Cosmetics":
    case "beauty":
      categoryId = 5;
      break;
    case "Furniture":
    case "furniture":
      categoryId = 6;
      break;
    case "Kids & Toys":
    case "kids":
      categoryId = 7;
      break;
    case "Clothings":
    case "clothings":
      categoryId = 8;
      break;
    case "Food & Beverages":
    case "foods":
      categoryId = 9;
      break;
    case "Recreation":
    case "recreation":
      categoryId = 10;
      break;
    case "Fitness & Health":
    case "fitness":
      categoryId = 11;
      break;
    case "Others":
    case "others":
      categoryId = 12;
      break;
    default:
      categoryId = 12;
  }

  return categoryId;
};

export const getCategoryName = (categoryId) => {
  let categoryName;
  switch (categoryId) {
    case 1:
      categoryName = "Automobile";
      break;
    case 2:
      categoryName = "Phones & Devices";
      break;
    case 3:
      categoryName = "Homes & Property";
      break;
    case 4:
      categoryName = "Electronics";
      break;
    case 5:
      categoryName = "Beauty & Cosmetics";
      break;
    case 6:
      categoryName = "Furniture";
      break;
    case 7:
      categoryName = "Kids & Toys";
      break;
    case 8:
      categoryName = "Clothings";
      break;
    case 9:
      categoryName = "Food & Beverages";
      break;
    case 10:
      categoryName = "Recreation";
      break;
    case 11:
      categoryName = "Fitness & Health";
      break;
    case 12:
      categoryName = "Others";
      break;
    default:
      categoryName = "Unknown"; // Default to "Unknown" if categoryId doesn't match any case
  }

  return categoryName;
};

// formatprice-with-commas
export const FormatwithComma = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};

// capitalize-string
export const Capitalizestring = (string) => {
  if (!string) {
    return string;
  }
  return string[0].toUpperCase() + string.slice(1);
};
