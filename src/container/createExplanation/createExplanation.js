import React, { Component } from 'react';
import './create.css';

class CreateExplanation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
      file2: '',
      file3: '',
      imagePreviewUrl1: '',
      imagePreviewUrl2: '',
      imagePreviewUrl3: ''
    }
  }


  handleImageChange1(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl1: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  handleImageChange2(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file2 = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file2: file2,
        imagePreviewUrl2: reader.result
      });
    }
    reader.readAsDataURL(file2)
  }

  handleImageChange3(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file3 = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file3: file3,
        imagePreviewUrl3: reader.result
      });
    }
    reader.readAsDataURL(file3)
  }

  send() {

   
  
  }

  render() {
    const { imagePreviewUrl1, imagePreviewUrl2, imagePreviewUrl3 } = this.state;
    let $imagePreview1 = null;
    if (imagePreviewUrl1) {
      $imagePreview1 = (<img src={imagePreviewUrl1} />);
    } else {
      $imagePreview1 = (<div className="previewText">Lütfen 1. Resim Seçiniz</div>);
    }

    let $imagePreview2 = null;
    if (imagePreviewUrl2) {
      $imagePreview2 = (<img src={imagePreviewUrl2} />);
    } else {
      $imagePreview2 = (<div className="previewText">Lütfen 2. Resim Seçiniz</div>);
    }

    let $imagePreview3 = null;
    if (imagePreviewUrl3) {
      $imagePreview3 = (<img src={imagePreviewUrl3} />);
    } else {
      $imagePreview3 = (<div className="previewText">Lütfen 3. Resim Seçiniz</div>);
    }
    return (
      <div>

        <div class="form-group">
          <label for="comment">Açıklama:</label>
          <textarea name="name" maxlength="225" class="form-control" rows="5" id="comment"></textarea>
        </div>

        Select Photo 1<br />
        <input className="btn btn-outline-success fileInput" type="file" onChange={(e) => this.handleImageChange1(e)} />
        <div className="imgPreview">
          {$imagePreview1}
        </div>
        <hr />

        Select Photo 2<br />
        <input className="btn btn-outline-success fileInput" type="file" onChange={(e) => this.handleImageChange2(e)} />
        <div className="imgPreview">
          {$imagePreview2}
        </div>
        <hr />

        Select Photo 3<br />
        <input className="btn btn-outline-success fileInput" type="file" onChange={(e) => this.handleImageChange3(e)} />
        <div className="imgPreview">
          {$imagePreview3}
        </div>
        <hr />

        <input type="submit" value="gönder"/>
      </div>
    );
  }
}

export default CreateExplanation;
