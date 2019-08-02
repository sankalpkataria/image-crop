import React from "react";
import croppie from "croppie";
import "../../../node_modules/croppie/croppie.css";
import './imageCrop.css';

class ImageCropComponent extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.croppedImageRef = React.createRef();
        this.crop = null;
        this.state = {
            result: null
        };
    }

    cropImage() {
        const cropResultObj = {
            type: "base64",
            size: this.props.croppedImageSize || "viewport",
            circle: this.props.croppedImageIsCricle,
            format: this.props.croppedImageFormat || "png"
        }
        this.crop.result(cropResultObj).then((result) => {
			this.setState({result});
        }).catch((err) => {
            console.error(err);
        });
    }

    rotateImage(deg) {
        this.crop.rotate(deg);
    }

    componentDidMount() {
        const node = this.imageRef.current;
        this.imageNode = this.croppedImageRef.current;
        this.crop = new croppie(node, {
            url: this.props.imageToCrop,
            viewport: {
                height: 200,
                width: 200,
                type: this.props.cropType || "square"
            },
            customClass: "img",
            enableOrientation: true,
            enableResize: true
        });
    }

    componentWillUnmount() {
        this.crop.destroy();
    }

    render() {
        return (
            <div className="crop">
                <div ref={this.imageRef}></div>
                <div className="btns">
                    <button className="crop-image-button" onClick={this.cropImage.bind(this)}>Crop</button>
                    {this.props.allowRotation ? 
                        <button className="rotate-image-button" onClick={this.rotateImage.bind(this, this.props.rotateBy || 90)}>Rotate</button> 
                        : null}
                </div>
                <div className="btns">
                    {this.state.result ? <img className="cropped-img" src={this.state.result} alt="cropped-img"></img> : null}
                </div>
            </div>
        );
    }
}

export default ImageCropComponent;