# image-crop
React component to crop image. The component uses "croppie" library.
Supported shapes are "circle" and "square"

## How to use?
* `npm i croppie` into react project
* Add the following where it is intended to use
      `<ImageCropComponent 
      imageToCrop={image} allowRotation={true}
      croppedImageSize={50} croppedImageIsCricle={true} croppedImageFormat={"png"}></ImageCropComponent>`

Props: 
* imageToCrop : image to crop. `REQUIRED`
* cropType : Type of image to be cropped. Can be either `square or circle`. Default `square`
* allowRotation : whether image can be rotated or not. Default `false`
* croppedImageSize: Allowed size `viewport`, `original`, `{width: Xpx, height: Ypx}`. Default `viewport`
* croppedImageIsCricle: To force crop result to be circle
* croppedImageFormat: Format of the cropped image. Allowed formats `png`, `jpeg`, `webp`
