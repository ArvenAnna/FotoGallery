import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const isFileAPISupported = typeof File !== 'undefined'

class AvatarEditor extends React.Component {
    static propTypes = {
        rotate: PropTypes.number,
        image: PropTypes.oneOfType([
            PropTypes.string,
            ...(isFileAPISupported ? [PropTypes.instanceOf(File)] : [])
        ]),
        width: PropTypes.number,
        height: PropTypes.number,
        style: PropTypes.object,
        crossOrigin: PropTypes.oneOf(['', 'anonymous', 'use-credentials']),

        onLoadFailure: PropTypes.func,
        onLoadSuccess: PropTypes.func,
        onImageReady: PropTypes.func
    }

    static defaultProps = {
        rotate: 0,
        width: 200,
        height: 200,
        style: {},
        onLoadFailure () {},
        onLoadSuccess () {},
        onImageReady () {}
    }

    state = {
        image: {}
    }

    isVertical () {
        return this.props.rotate % 180 !== 0
    }

    isDataURL (str) {
        if (str === null) {
            return false
        }
        const regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i
        return !!str.match(regex)
    }

    loadImage (image) {
        if (isFileAPISupported && image instanceof File) {
            this.loadImageFile(image)
        } else if (typeof image === 'string') {
            this.loadImageURL(image)
        }
    }

    loadImageURL (imageURL) {
        const imageObj = new Image()
        imageObj.onload = this.handleImageReady.bind(this, imageObj)
        imageObj.onerror = this.props.onLoadFailure
        if (!this.isDataURL(imageURL) && this.props.crossOrigin) { imageObj.crossOrigin = this.props.crossOrigin }
        imageObj.src = imageURL
    }

    loadImageFile (imageFile) {
        const reader = new FileReader()
        reader.onload = e => this.loadImageURL(e.target.result)
        reader.readAsDataURL(imageFile)
    }

    componentDidMount () {
        if (this.props.image) {
            this.loadImage(this.props.image)
        }
    }

    componentDidUpdate () {
        const canvas = ReactDOM.findDOMNode(this.canvas)
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height)
        this.paintImage(context, this.state.image);
    }

    handleImageReady (image) {
        this.setState({ image }, this.props.onImageReady)
        this.props.onLoadSuccess(image)
    }

    componentWillReceiveProps (newProps) {
        if (
            (newProps.image && this.props.image !== newProps.image) ||
            this.props.width !== newProps.width ||
            this.props.height !== newProps.height
        ) {
            this.loadImage(newProps.image)
        }
    }

    paintImage (context, image) {
        if (image) {

            context.save()

            context.translate(context.canvas.width / 2, context.canvas.height / 2)
            context.rotate(this.props.rotate * Math.PI / 180)
            context.translate(
                -(context.canvas.width / 2),
                -(context.canvas.height / 2)
            )

            if (this.isVertical()) {
                context.translate(
                    (context.canvas.width - context.canvas.height) / 2,
                    (context.canvas.height - context.canvas.width) / 2
                )
            }

            context.scale(1, 1)

            context.globalCompositeOperation = 'destination-over';

            if(this.isVertical()) {
                context.drawImage(
                    image,
                    0, 0, this.props.height, this.props.width
                )
            }
            context.drawImage(
                image,
                0, 0, this.props.width, this.props.height
            )

            context.restore()
        }
    }

    setCanvas = (canvas) => {
        this.canvas = canvas
    }

    getImage () {
        const image = this.state.image;

        // create a canvas with the correct dimensions
        const canvas = document.createElement('canvas')

        if (this.isVertical()) {
            canvas.width = image.height;
            canvas.height = image.width;
        } else {
            canvas.width = image.width;
            canvas.height = image.height
        }

        // draw the full-size image at the correct position,
        // the image gets truncated to the size of the canvas.
        const context = canvas.getContext('2d')

        context.translate(canvas.width / 2, canvas.height / 2)
        context.rotate(this.props.rotate * Math.PI / 180)
        context.translate(-(canvas.width / 2), -(canvas.height / 2))

        if (this.isVertical()) {
            context.translate(
                (canvas.width - canvas.height) / 2,
                (canvas.height - canvas.width) / 2
            )
        }

        context.drawImage(image, 0, 0)

        return canvas
    }

    render () {
        if(!this.state.image) {
            return null;
        }

        const defaultStyle = {
            width: this.props.width,
            height: this.props.height,
            cursor: 'grab'
        }

        const attributes = {
            width: this.props.width,
            height: this.props.height,
            style: {
                ...defaultStyle,
                ...this.props.style
            }
        }

        return <canvas ref={this.setCanvas} {...attributes} />
    }
}

export default AvatarEditor
