import React, { Component} from 'react';

class FormLeft extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			name: "",
			tel: "",
			permission: ""
		}
	}
	//khi dien thong tin vào form
	//hàm isChange se lay thông tin nhap vào form
	//và lưu vào state
	isChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		//console.log(name +" : "+value);
		this.setState({
			[name]: value
		})
		//dong91 goi
		//khai báo biến item là kiểu đối tượng
		/*var item = {};
		item.id = this.state.id;
		item.name = this.state.name;
		item.tel = this.state.tel;
		item.permission = this.state.permission;
		console.log(item);*/
	}

	kiemTraTrangThai = () => {
		if(this.props.hienThiForm === true) {
			return (
				
					<form>
					<div className="card text-left">
						<div className="card border-primary mb-3">
							<div className="card-header">Thêm mới</div>
							<div className="card-body text-primary">
								<div className="form-group">
									
									<input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control" placeholder="name" />
								</div>
								<div className="form-group">
									<input onChange={(event) => this.isChange(event)} type="text" name="tel" className="form-control" placeholder="sdt" />
								</div>
								<div className="form-group">
									<select onChange={(event) => this.isChange(event)} name="permission" className="form-control">
										<option value={0}>Chọn quyền</option>
										<option value={1}>Quyền 1</option>
										<option value={2}>Quyền 2</option>
										<option value={3}>Quyền 3</option>
									</select>
								</div>
								<div className="form-group">
									<input type="reset" value="Thêm mới" className="btn btn-primary btn-block"
									 		onClick={(name, tel, permission) => this.props.getNewUserData(this.state.name, this.state.tel, this.state.permission)}/>
								</div>	
							</div>
						</div>
					</div>
					</form>
				
				)
		}
	}



	render() {
		//.log(this.props.hienThiForm);
		//console.log(this.state);
		//console.log(this.props.getNewUserData());
		return (
			<div className="col-md-3">											
				{this.kiemTraTrangThai()}
			</div>

			);
		}
	}

	export default FormLeft;
