import React, { Component} from 'react';

class TableRight extends Component {

	//if(data2.length!=0){this.props.data=this.props.data2;}
	
	mapping = () => this.props.data.map((value, key) => {
		return (
			<tr>
				<td>{value.id}</td>
				<td>{value.name}</td>
				<td>{value['tel']}</td>
				<td>{value['permission']}</td>
				<td>
					<div className="btn-group">
						<div className="btn btn-primary" 
							onClick={(user) => this.props.editUser(value)}>
							<i className="fa fa-edit" />Edit</div>
						<div className="btn btn-warning"
							onClick={(idUser) => this.props.deleteUser(value.id)}>Delete</div>
					</div>
				</td>
			</tr>
			)
	})

	render() {
		//console.log(this.props.data2);
		//console.log(this.props.showFormEditUser());
		return (
			<div className="col-md-9">
			<table className="table table-inverse table-hover">
			<thead className="thead-inverse">
			<tr>
			<th>STT</th>
			<th>Tên</th>
			<th>Điện thoại</th>
			<th>Quyền</th>
			<th>Thao tác</th>
			</tr>
			</thead>
			<tbody>
			
			{this.mapping()}

			</tbody>
			</table>
			</div>

			);
	}
}

export default TableRight;
