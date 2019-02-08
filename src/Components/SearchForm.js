import React, { Component} from 'react';

class SearchForm extends Component {
	//ham ketnoi duoc lay từ Content.js
	//Content.js có được hàm ketnoi từ app.js
	//lấy hàm thông qua props
	//áp dụng khi không cùng Component: tính chất kế thừa của các component
	constructor(props) {
		super(props);
		this.state= {
			tempValue: ""
		}
	}

	//hàm lưu giá trị nhập từ input vào biến state tempValue
	//
	isChange = (event) => {
		//console.log(event.target.value);
		this.setState({
			tempValue: event.target.value
		});
	}

	hienThiNut = () => {
		if(this.props.hienThiForm===true) { 
			return <button className="btn btn-block btn-outline-secondary"
						onClick={() => this.props.ketnoi()}>Đóng form</button>
		}
		else {
			return <button className="btn btn-block btn-outline-info"
						onClick={() => this.props.ketnoi()}>Thêm mới</button>
		}
	}
	render() {
		//console.log(this.props.getTextSearch("tung"));
		//console.log(this.state.tempValue);
		return (
			<div>
				<div className="col-md-12">
					<div className="btn-group">
						<input type="text" name="search" 
							   id="search" className="form-control" 
							   placeholder="enter your key"
							   onChange={(event) => this.isChange(event)} />
						<button className="btn btn-info" 
						onClick={(dl) => this.props.getTextSearch(this.state.tempValue)}>Search</button>
					</div>
					<div className="btn-group pl-1">
						{this.hienThiNut()}
						
					</div>
				</div>
				<div className="col-md-12">
					<hr />
				</div>
			</div>



			);
	}
}

export default SearchForm;
