import React, { Component} from 'react';

class EditUser extends Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		//this.props.userEditObject.id là thông tin được 
    		//load len form nhờ lấy từ state của app là userEditObject
    		id: this.props.userEditObject.id,
    		name: this.props.userEditObject.name,
    		tel: this.props.userEditObject.tel,
    		permission: this.props.userEditObject.permission
    	}
    }


    //lấy thông tin về dien vao form
    //thiết lap lại lưu vào state
    //use: dùng sự kiện dùng sự kien onChange gắn hàm này 
    //vào thẻ input dưới form. Để khi nhập là tự động luu
    //thông tin vào hàm
    getUser = (event) => {
    	const name = event.target.name;
    	const value = event.target.value;
    	this.setState({[name]:value});

    }

    save = () => {
    	//khai báo biến object
    	var info = {};
    	//lấy state luu vào object info
    	info.id = this.state.id;
    	info.name = this.state.name;
    	info.tel =  this.state.tel;
    	info.permission = this.state.permission;
    	//thiet lap lai state khi nhấn nut submit form
    	

    	//lưu state vừa thiết lao vào doi tượng 
    	//vừa khoi tạo infoObject
    	


    	//gọi hàm từ App.js de
    	this.props.getInfoFromEditUser(info);
    	//ham thay doi trang thái khi click vao submit form
    	//de ẩn form
    	this.props.showFormEditUser();
    }

    render() {
    	//console.log(this.state.name);
    	//console.log(this.props.getInfoFromEditUser());
        return (
        <div className="col-md-12">	
            <form>
				<div className="card text-left">
					<div className="card border-primary mb-3">
						<div className="card-header text-center"><h3>Cập nhật</h3></div>
						<div className="card-body text-primary">
							<div className="form-group">
								
								<input defaultValue={this.props.userEditObject.name} 
									   onChange={(event) => this.getUser(event)} 
									   type="text" name="name" className="form-control" />
							</div>
							<div className="form-group">
								<input defaultValue={this.props.userEditObject.tel} 
									   onChange={(event) => this.getUser(event)} 
									   type="text" name="tel" className="form-control" />
							</div>
							<div className="form-group">
								<select defaultValue={this.props.userEditObject.permission} 
										onChange={(event) => this.getUser(event)} 
										name="permission" className="form-control">
									<option value={0}>Chọn quyền</option>
									<option value={1}>Quyền 1</option>
									<option value={2}>Quyền 2</option>
									<option value={3}>Quyền 3</option>
								</select>
							</div>
							<div className="form-group">
								<input onClick={() => this.save()}
									   type="reset" value="Cập nhật" className="btn btn-primary btn-block"
								 		/>
							</div>	
						</div>
					</div>
				</div>
				</form>
			</div>	
        );
    }
}

export default EditUser;
