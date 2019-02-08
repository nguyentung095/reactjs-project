import React, { Component} from 'react';
import SearchForm from './SearchForm.js';
import TableRight from './TableRight.js';
import FormLeft from './FormLeft.js';
import EditUser from './EditUser.js';
class Content extends Component {

	showEditUser = () => {
		if(this.props.editUserStt === true) {
			return <EditUser showFormEditUser={() => this.props.showFormEditUser()}
					userEditObject={this.props.userEditObject}
					getInfoFromEditUser={(info) => this.props.getInfoFromEditUser(info)}
						/>
		}
	}

	render() {
		//console.log(this.props.userEditObject.name);
		return (
			<div className="container">
			<div className="row">
				{this.showEditUser()}
			</div>
			<div className="row">
				<SearchForm hienThiForm={this.props.hienThiForm} 
							ketnoi={() => this.props.ketnoi()}
							getTextSearch={(dl) => this.props.getTextSearch(dl)}
							/>
			</div>
			<div className="row">
				<TableRight data={this.props.data} 
							data2={this.props.data2}
							editUser={(user) => this.props.editUser(user)}
							deleteUser={(idUser) => this.props.deleteUser(idUser)}
							/>
				<FormLeft hienThiForm={this.props.hienThiForm}
							getNewUserData={(name, tel, permission) => this.props.getNewUserData(name, tel, permission)}
						  />
			</div>
			</div>
			)

	}
}

export default Content;
