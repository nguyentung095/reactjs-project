import React, { Component} from 'react';

class FormLeft extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			trangthaiNut: false
		}
	}

	thayDoiTrangThai = () => {
		this.setState({
			trangthaiNut: !this.state.trangthaiNut
		});
	}

	//ham hien thi nut: nếu trangthai===true thì hien thị nút Đóng
	//ngược lại hiển thị nút Them mói
	hienThiNut = () => {
		if(this.state.trangthaiNut === true) {
			return <button className="btn btn-block btn-outline-secondary mb-3"
			onClick={() => this.thayDoiTrangThai()}>Đóng form</button>;
		}
		else {
			return <button className="btn btn-block btn-outline-info mb-3"
			onClick={() => this.thayDoiTrangThai()}>Thêm mới</button>;
		}
	}

	hienThiForm = () => {
		if(this.state.trangthaiNut === true) {
			return (
				<div className="card text-left">
					<div className="card border-primary mb-3">
						<div className="card-header">Thêm mới</div>
						<div className="card-body text-primary">
							<div className="form-group">
								<label htmlFor="name">User</label>
								<input type="text" name="name" className="form-control" placeholder="name" />
							</div>
							<div className="form-group">
								<input type="text" name="phone" className="form-control" placeholder="sdt" />
							</div>
							<div className="form-group">
								<select name="role" className="form-control">
									<option value={1}>Chọn quyền</option>
									<option value={1}>Quyền 1</option>
									<option value={2}>Quyền 2</option>
									<option value={3}>Quyền 3</option>
								</select>
							</div>
							<div className="form-group">
								<button className="btn btn-primary btn-block">Thêm mới</button>
							</div>	
						</div>
					</div>
				</div>
				)
		}
	}

	render() {
		return (
			<div className="col-md-3">
				
				
				{this.hienThiNut()}
				{this.hienThiForm()}
				
			</div>

			);
		}
	}

	export default FormLeft;
